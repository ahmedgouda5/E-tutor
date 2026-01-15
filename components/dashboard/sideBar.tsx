"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex flex-col md:flex-row w-full max-w-7xl flex-1 md:h-screen bg-neutral-50 md:overflow-hidden border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10  ">
          <div className="flex flex-1 flex-col  h-full">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2 ">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "/ELearn/instructor/profile",
                icon: (
                  <Image
                    src="/instructors/instructorfive.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                    priority
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}
export const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-2 ">
        <Image
          src="/GraduationCap.webp"
          className="h-7 w-7 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white"
          width={50}
          height={50}
          alt="Avatar"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium whitespace-pre text-black dark:text-white"
        >
          E-Tutor
        </motion.span>
      </div>
    </>
  );
};
export const LogoIcon = () => {
  return (
    <Image
      src="/GraduationCap.webp"
      className="h-7 w-7 shrink-0 rounded-full"
      width={50}
      height={50}
      alt="Avatar"
    />
  );
};

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col bg-neutral-50 dark:bg-neutral-900">
      <div className="flex items-center justify-between border-b px-6 py-4 dark:border-neutral-800">
        <h1 className="text-xl font-semibold">Dashboard</h1>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium">Ahmed Gouda</p>
            <p className="text-xs text-neutral-500">Frontend Developer</p>
          </div>

          <Image
            src="/instructors/instructorfive.png"
            width={40}
            height={40}
            className="rounded-full border"
            alt="User"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 ">{children}</div>
    </div>
  );
};
