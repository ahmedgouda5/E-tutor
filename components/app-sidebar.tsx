"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { SearchForm } from "@/components/search-form";
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
  BookCheck,
  CirclePlus,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RemoveFromLocalStorage } from "@/lib/utils";

interface SidebarItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  items?: SidebarItem[];
}

const data: SidebarItem[] = [
  { title: "Dashboard", url: "/Dashboard", icon: LayoutDashboard },
  { title: "Create New Course", url: "/Dashboard/Newcourse", icon: CirclePlus },
  { title: "My Courses", url: "/Dashboard/Mycourses", icon: BookCheck },
  { title: "Earning", url: "/Dashboard/Earning", icon: CreditCard },
  { title: "Settings", url: "/Dashboard/Settings", icon: Settings },
  { title: "Logout", url: "/", icon: LogOut },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();

  const handleLogout = () => {
    RemoveFromLocalStorage("isAuth");
    router.push("/");
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
        <SearchForm />
      </SidebarHeader>

      <SidebarContent>
        {data.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    {item.title === "Logout" ? (
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-left"
                      >
                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                        {item.title}
                      </button>
                    ) : (
                      <Link href={item.url} className="flex items-center">
                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                        {item.title}
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}

const Logo = () => (
  <div className="flex items-center gap-2">
    <Image
      src="/GraduationCap.webp"
      className="h-7 w-7 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm"
      width={28}
      height={28}
      alt="Logo"
      priority
    />
    <span className="font-medium text-black dark:text-white">E-Tutor</span>
  </div>
);
