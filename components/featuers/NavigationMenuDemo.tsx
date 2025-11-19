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
import React from "react";

 function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-white">
        {/* 🌐 اللغة */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-gray-900 text-white">
            Language
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-900 text-white">
            <ul className="grid w-[200px] gap-2 p-2">
              {["English", "العربية", "Français"].map((lang) => (
                <li key={lang}>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="block px-3 py-2 rounded-md transition-colors hover:bg-gray-300 hover:bg-opacity-15"
                    >
                      {lang}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* 💰 العملة */}
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