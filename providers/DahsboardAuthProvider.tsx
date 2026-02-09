"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const DashboardAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth") === "true";

    const isAuthRoute =
      pathname === "/Dashboard/Auth/Signup" ||
      pathname === "/Dashboard/Auth/Signin";

    if (isAuth && isAuthRoute) {
      router.replace("/Dashboard");
    }

    if (!isAuth && pathname.startsWith("/Dashboard") && !isAuthRoute) {
      router.replace("/Dashboard/Auth/Signin");
    }
  }, [pathname, router]);

  return <>{children}</>;
};

export default DashboardAuthProvider;
