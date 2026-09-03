"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Compass,
  Calendar,
  GraduationCap,
  MessagesSquare,
  Users2,
  Settings,
  Bell,
  Flame,
  Search,
  Command,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const navItems = [
  { label: "Dashboard", href: "/ELearn/student", icon: LayoutDashboard },
  { label: "My Courses", href: "/ELearn/student/courses", icon: BookOpen },
  { label: "Explore", href: "/ELearn/courses", icon: Compass },
  { label: "Calendar", href: "/ELearn/student/calendar", icon: Calendar },
  { label: "Certificates", href: "/ELearn/student/certificates", icon: GraduationCap },
  { label: "Community", href: "/ELearn/student/community", icon: Users2 },
  { label: "Messages", href: "/ELearn/student/messages", icon: MessagesSquare },
  { label: "Settings", href: "/ELearn/student/settings", icon: Settings },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-[240px] shrink-0 flex-col border-r bg-sidebar md:flex">
        <div className="border-b px-5 py-4">
          <Link href="/ELearn" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
              <Image
                src="/GraduationCap.webp"
                width={20}
                height={20}
                alt="E-Tutor"
                className="h-5 w-5 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">E-Tutor</span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                My Learning Space
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand text-brand-foreground hover:bg-brand/90"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
                {item.label === "Messages" && (
                  <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-[10px] font-semibold text-brand-foreground">
                    3
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-3">
          <Link
            href="/ELearn/student/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/instructors/instructorfive.png" />
              <AvatarFallback className="bg-brand/10 text-brand text-xs">JD</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium">John Doe</p>
              <p className="truncate text-[10px] text-muted-foreground">Student</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
          <Link href="/ELearn" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-white">
              <Image
                src="/GraduationCap.webp"
                width={16}
                height={16}
                alt="E-Tutor"
                className="h-4 w-4 object-contain"
              />
            </div>
            <span className="text-sm font-semibold">E-Tutor</span>
          </Link>
          <div className="flex items-center gap-2">
            <button className="relative rounded-full p-2 text-muted-foreground">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-muted-foreground"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        {mobileOpen && (
          <nav className="z-30 border-b bg-background px-4 py-3 md:hidden">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
                      isActive
                        ? "bg-brand text-brand-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}