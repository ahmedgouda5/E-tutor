"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  BookOpen,
  CirclePlus,
  Users,
  ClipboardCheck,
  FileText,
  Gauge,
  Calendar,
  MessagesSquare,
  Users2,
  LineChart,
  Wallet,
  Star,
  Settings,
  LogOut,
  BarChart3,
  Landmark,
  Megaphone,
  Award,
  Bell,
  BookMarked,
  Library,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { RemoveFromLocalStorage } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface SidebarItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  items?: SidebarItem[];
}

const TEACHER_NAV: SidebarItem[] = [
  {
    title: "Overview",
    url: "/Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Content",
    url: "",
    icon: BookOpen,
    items: [
      { title: "Course Builder", url: "/Dashboard/Newcourse", icon: CirclePlus },
      { title: "My Courses", url: "/Dashboard/Mycourses", icon: BookOpen },
    ],
  },
  {
    title: "Students",
    url: "",
    icon: Users,
    items: [
      { title: "Roster", url: "/Dashboard/students", icon: Users },
      { title: "At-Risk", url: "/Dashboard/students/at-risk", icon: Users2 },
      { title: "Gradebook", url: "/Dashboard/gradebook", icon: ClipboardCheck },
    ],
  },
  {
    title: "Assessments",
    url: "",
    icon: FileText,
    items: [
      { title: "Assignments", url: "/Dashboard/assignments", icon: ClipboardCheck },
      { title: "Quizzes", url: "/Dashboard/quizzes", icon: Gauge },
      { title: "Exams", url: "/Dashboard/exams", icon: FileText },
    ],
  },
  {
    title: "Engagement",
    url: "",
    icon: LineChart,
    items: [
      { title: "Analytics", url: "/Dashboard/analytics", icon: LineChart },
      { title: "Earnings", url: "/Dashboard/Earning", icon: Wallet },
      { title: "Reviews", url: "/Dashboard/reviews", icon: Star },
    ],
  },
  {
    title: "Organize",
    url: "",
    icon: Calendar,
    items: [
      { title: "Calendar", url: "/Dashboard/calendar", icon: Calendar },
      { title: "Messages", url: "/Dashboard/messages", icon: MessagesSquare },
      { title: "Community", url: "/Dashboard/community", icon: Users2 },
    ],
  },
  {
    title: "Settings",
    url: "/Dashboard/Settings",
    icon: Settings,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    RemoveFromLocalStorage("isAuth");
    router.push("/");
  };

  const isActive = (url: string) => {
    if (!url) return false;
    if (url === "/Dashboard") return pathname === "/Dashboard";
    return pathname?.startsWith(url);
  };

  const isChildActive = (items?: SidebarItem[]) => {
    return items?.some((item) => isActive(item.url)) ?? false;
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b px-5 py-4">
        <Link href="/Dashboard" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
            <Image
              src="/GraduationCap.webp"
              className="h-5 w-5 object-contain"
              width={20}
              height={20}
              alt="E-Tutor"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-tight">E-Tutor</span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              Teacher Studio
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-3 py-3">
        {TEACHER_NAV.map((item) => {
          const isGroupActive = item.items
            ? isChildActive(item.items)
            : isActive(item.url);
          const hasChildren = item.items && item.items.length > 0;

          return (
            <SidebarGroup key={item.title} className="mb-1">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    {hasChildren ? (
                      <SidebarMenuButton
                        data-active={isGroupActive}
                        className={cn(
                          "group/menu-button transition-colors",
                          isGroupActive &&
                            "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="flex-1">{item.title}</span>
                        <ChevronIcon open={isGroupActive} />
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        data-active={isActive(item.url)}
                        className={cn(
                          "transition-colors",
                          isActive(item.url) &&
                            "bg-sidebar-primary text-sidebar-primary-foreground font-medium hover:bg-sidebar-primary/90 hover:text-sidebar-primary-foreground"
                        )}
                      >
                        {item.title === "Logout" ? (
                          <button onClick={handleLogout} className="w-full">
                            <item.icon className="h-4 w-4" />
                            <span className="flex-1">{item.title}</span>
                          </button>
                        ) : item.title === "Overview" || item.title === "Settings" ? (
                          <Link href={item.url}>
                            <item.icon className="h-4 w-4" />
                            <span className="flex-1">{item.title}</span>
                          </Link>
                        ) : (
                          <Link href={item.url}>
                            <item.icon className="h-4 w-4" />
                            <span className="flex-1">{item.title}</span>
                          </Link>
                        )}
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>

                  {hasChildren && (
                    <div
                      className={cn(
                        "ml-4 mt-1 space-y-0.5 pl-4",
                        "border-l border-sidebar-border"
                      )}
                    >
                      {item.items?.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton
                            asChild
                            data-active={isActive(child.url)}
                            className={cn(
                              "py-1.5 text-[13px] transition-colors",
                              isActive(child.url) &&
                                "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            )}
                          >
                            <Link href={child.url}>
                              <span className="text-muted-foreground/60">{child.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      <div className="mt-auto border-t p-3">
        <SidebarMenu>
          <SidebarMenuButton
            asChild
            onClick={handleLogout}
            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <button className="w-full">
              <LogOut className="h-4 w-4" />
              <span className="flex-1">Sign out</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenu>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={cn(
        "h-3 w-3 shrink-0 text-muted-foreground transition-transform duration-200",
        open && "rotate-90"
      )}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}