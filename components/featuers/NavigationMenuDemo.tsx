"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../app/i18n/client";

function NavigationMenuDemo() {
  const { i18n } = useTranslation();

  // تغيير الاتجاه بعد تغيير اللغة
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // اللغات المتاحة
  const languages = [
    { title: "English", code: "en" },
    { title: "العربية", code: "ar" },
    { title: "Français", code: "fr" },
  ];

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="text-white">
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-gray-900 text-white">
            Language
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-gray-900 text-white">
            <ul className="grid w-[200px] gap-2 p-2">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => changeLang(lang.code)}
                      className="text-left w-full block px-3 py-2 rounded-md transition-colors hover:bg-gray-300 hover:bg-opacity-15"
                    >
                      {lang.title}
                    </button>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-gray-900 text-white">
            Currency
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-900 text-white">
            <ul className="grid w-[200px] gap-2 p-2">
              {["USD ($)", "EUR (€)", "EGP (جنيه)"].map((currency) => (
                <li key={currency}>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="block px-3 py-2 rounded-md transition-colors hover:bg-gray-300 hover:bg-opacity-15"
                    >
                      {currency}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default React.memo(NavigationMenuDemo);
