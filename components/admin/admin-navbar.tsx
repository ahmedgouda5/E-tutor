"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Bell,
  Search,
  Command,
  Settings,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RemoveFromLocalStorage } from "@/lib/utils";
import { CommandPalette } from "@/components/shared/command-palette";
import { NotificationCenter } from "@/components/shared/notification-center";

const ROUTE_TITLES: Record<string, string> = {
  "/admin": "Overview",
  "/admin/users": "All Users",
  "/admin/users/instructors": "Instructors",
  "/admin/users/verification": "Verification Queue",
  "/admin/users/suspended": "Suspended Users",
  "/admin/courses": "All Courses",
  "/admin/categories": "Categories",
  "/admin/courses/moderation": "Course Moderation",
  "/admin/finance": "Revenue",
  "/admin/finance/payouts": "Payouts",
  "/admin/finance/coupons": "Coupons",
  "/admin/analytics": "Analytics",
  "/admin/reports": "Reports",
  "/admin/marketing": "Marketing",
  "/admin/settings": "Settings",
};

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDark, setIsDark] = React.useState(false);
  const [commandOpen, setCommandOpen] = React.useState(false);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem("etutor-theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("etutor-theme", next ? "dark" : "light");
  };

  const handleLogout = () => {
    RemoveFromLocalStorage("isAuth");
    router.push("/");
  };

  const getTitle = () => {
    if (!pathname) return "Overview";
    const match = Object.keys(ROUTE_TITLES)
      .sort((a, b) => b.length - a.length)
      .find((route) => pathname.startsWith(route));
    return match ? ROUTE_TITLES[match] : "Admin";
  };

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b bg-card/60 px-4 backdrop-blur-sm sm:px-6">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-base font-semibold">{getTitle()}</h1>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Platform administration & oversight
          </p>
        </div>
      </div>

      <div className="hidden items-center md:flex">
        <button
          onClick={() => setCommandOpen(true)}
          className="flex w-[200px] items-center gap-2 rounded-lg border bg-secondary/50 px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent lg:w-[260px]"
        >
          <Search className="h-4 w-4 shrink-0" />
          <span className="flex-1">Search admin...</span>
          <kbd className="pointer-events-none flex items-center gap-0.5 rounded border bg-background px-1.5 py-0.5 font-mono text-[10px]">
            <Command className="h-2.5 w-2.5" /> K
          </kbd>
        </button>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setNotificationsOpen(true)}
          className="relative rounded-full"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
          </span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/instructors/instructorfive.png" alt="Profile" />
                <AvatarFallback className="bg-brand/10 text-brand text-xs">AD</AvatarFallback>
              </Avatar>
              <div className="hidden text-left sm:block">
                <p className="text-xs font-medium leading-tight">Admin</p>
                <p className="text-[10px] text-muted-foreground">Super Admin</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">Platform Admin</span>
                <span className="text-xs text-muted-foreground">admin@etutor.com</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/admin/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-destructive focus:text-destructive"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <NotificationCenter open={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
    </header>
  );
}