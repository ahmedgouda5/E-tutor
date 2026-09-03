"use client";

import { Navabar } from "@/lib/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
const { Bell, Heart, ShoppingCart, Menu, X, Search, Command, Sun, Moon } = await import("lucide-react");
import { Button } from "../ui/button";
import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AuthStore } from "@/store/AuthStore";
import { useTranslation } from "react-i18next";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { CommandPalette } from "../shared/command-palette";
import { NotificationCenter } from "../shared/notification-center";
import { cn } from "@/lib/utils";

const NavigationMenuDemo = dynamic(
  () => import("../featuers/NavigationMenuDemo"),
  {
    ssr: false,
  }
);

const Navabr = () => {
  const router = useRouter();
  const [commandOpen, setCommandOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const HandleStudentProfile = useCallback(() => {
    router.push("/ELearn/student/");
  }, [router]);
  const { t } = useTranslation();
  const { formData } = AuthStore();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("etutor-theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const stored = localStorage.getItem("etutor-theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <>
      <nav className="relative border-b">
        {/* Top bar */}
        <section className="hidden bg-[#1D2026] px-4 py-2 md:flex md:items-center md:justify-between">
          <ul className="flex items-center gap-6">
            {Navabar.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  prefetch={true}
                  className={`text-xs font-medium transition-colors duration-200 ${
                    pathname === href
                      ? "text-brand-foreground font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
          <NavigationMenuDemo />
        </section>

        {/* Main bar */}
        <section className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/GraduationCap.webp"
                alt="E-tutor logo"
                width={36}
                height={36}
                priority
                className="rounded-lg"
              />
              <span className="hidden text-xl font-semibold tracking-tight sm:inline">E-tutor</span>
            </Link>
          </div>

          {/* Search trigger */}
          <button
            onClick={() => setCommandOpen(true)}
            className="hidden items-center gap-2 rounded-lg border bg-background px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent md:flex md:w-64 lg:w-80"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="flex-1 text-left">Search anything...</span>
            <kbd className="flex items-center gap-0.5 rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
              <Command className="h-2.5 w-2.5" /> K
            </kbd>
          </button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-muted-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <ul className="hidden items-center gap-1 md:flex">
              <li className="relative">
                <button
                  onClick={() => setNotificationsOpen(true)}
                  className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent"
                >
                  <Bell />
                  <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
                  </span>
                </button>
              </li>
              <li>
                <Link href="/ELearn/Faviorites" className="flex rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent">
                  <Heart />
                </Link>
              </li>
              <li>
                <Link href="/ELearn/cart" className="flex rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent">
                  <ShoppingCart />
                </Link>
              </li>
            </ul>

            <ul className="hidden items-center gap-2 md:flex">
              <li>
                {formData.firstName ? (
                  <Button variant="ghost" size="sm" className="font-medium">
                    {formData.firstName} {formData.lastName}
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/Auth/signup">{t("Create Account")}</Link>
                  </Button>
                )}
              </li>
              <li>
                {formData.firstName ? (
                  <AnimatedTooltip
                    onClick={HandleStudentProfile}
                    items={[
                      {
                        id: 1,
                        name: "John Doe",
                        designation: "Software Engineer",
                        image:
                          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
                      },
                    ]}
                  />
                ) : (
                  <Button asChild>
                    <Link href="/Auth/signin" className="px-4">{t("Sign in")}</Link>
                  </Button>
                )}
              </li>
            </ul>

            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </section>

        {/* Mobile menu */}
        {open && (
          <div className="absolute z-40 mx-3 w-[calc(100%-24px)] rounded-2xl border bg-card p-4 shadow-xl md:hidden">
            <button
              onClick={() => { setCommandOpen(true); setOpen(false); }}
              className="mb-3 flex w-full items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm text-muted-foreground"
            >
              <Search className="h-4 w-4" />
              Search anything...
            </button>
            <ul className="flex flex-col gap-1">
              {Navabar.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    prefetch={true}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm transition-colors",
                      pathname === href
                        ? "bg-brand text-brand-foreground font-semibold"
                        : "text-foreground hover:bg-accent"
                    )}
                  >
                    {t(label)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 border-t pt-3">
              <NavigationMenuDemo />
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <Button variant="outline" className="justify-between" onClick={() => { setNotificationsOpen(true); setOpen(false); }}>
                Notifications <Bell />
              </Button>
              <Button variant="secondary" className="justify-between" asChild>
                <Link href="/ELearn/Faviorites">Favorites <Heart /></Link>
              </Button>
              <Button variant="secondary" className="justify-between" asChild>
                <Link href="/ELearn/cart">Cart <ShoppingCart /></Link>
              </Button>
            </div>

            <div className="mt-3 flex flex-col gap-2 border-t pt-3">
              <Button variant="outline" asChild>
                <Link href="/Auth/signup">{t("Create Account")}</Link>
              </Button>
              <Button asChild>
                {formData.firstName ? (
                  <Link href="/ELearn/student">{t("My Dashboard")}</Link>
                ) : (
                  <Link href="/Auth/signin">{t("Sign in")}</Link>
                )}
              </Button>
            </div>
          </div>
        )}
      </nav>

      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <NotificationCenter open={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
    </>
  );
};

export default React.memo(Navabr);