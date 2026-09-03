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
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Wallet,
  ShieldCheck,
  Landmark,
  Megaphone,
  LineChart,
  Settings,
  LogOut,
  UserCheck,
  Ban,
  Receipt,
  BadgePercent,
  AlertTriangle,
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

const ADMIN_NAV: SidebarItem[] = [
  { title: "Overview", url: "/admin", icon: LayoutDashboard },
  {
    title: "Users",
    url: "",
    icon: Users,
    items: [
      { title: "All Users", url: "/admin/users", icon: Users },
      { title: "Instructors", url: "/admin/users/instructors", icon: UserCheck },
      { title: "Verification Queue", url: "/admin/users/verification", icon: ShieldCheck },
      { title: "Suspended", url: "/admin/users/suspended", icon: Ban },
    ],
  },
  {
    title: "Catalog",
    url: "",
    icon: BookOpen,
    items: [
      { title: "All Courses", url: "/admin/courses", icon: BookOpen },
      { title: "Categories", url: "/admin/categories", icon: BadgePercent },
      { title: "Review & Moderation", url: "/admin/courses/moderation", icon: ShieldCheck },
    ],
  },
  {
    title: "Finance",
    url: "",
    icon: Landmark,
    items: [
      { title: "Revenue", url: "/admin/finance", icon: Wallet },
      { title: "Payouts", url: "/admin/finance/payouts", icon: Receipt },
      { title: "Coupons", url: "/admin/finance/coupons", icon: BadgePercent },
    ],
  },
  {
    title: "Engagement",
    url: "",
    icon: LineChart,
    items: [
      { title: "Analytics", url: "/admin/analytics", icon: LineChart },
      { title: "Reports", url: "/admin/reports", icon: AlertTriangle },
      { title: "Marketing", url: "/admin/marketing", icon: Megaphone },
    ],
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    RemoveFromLocalStorage("isAuth");
    router.push("/");
  };

  const isActive = (url: string) => {
    if (!url) return false;
    if (url === "/admin") return pathname === "/admin";
    return pathname?.startsWith(url);
  };

  const isChildActive = (items?: SidebarItem[]) => {
    return items?.some((item) => isActive(item.url)) ?? false;
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b px-5 py-4">
        <Link href="/admin" className="flex items-center gap-2.5">
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
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Admin Console
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-3 py-3">
        {ADMIN_NAV.map((item) => {
          const isGroupActive = item.items ? isChildActive(item.items) : isActive(item.url);
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
                        {item.badge && (
                          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-[10px] font-semibold text-brand-foreground">
                            {item.badge}
                          </span>
                        )}
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
                        <Link href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-[10px] font-semibold text-brand-foreground">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>

                  {hasChildren && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l border-sidebar-border pl-4">
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