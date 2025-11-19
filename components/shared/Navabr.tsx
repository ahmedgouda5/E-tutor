"use client";

import { Navabar } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const { Bell, Heart, ShoppingCart, Menu, X } = await import("lucide-react");
import { Button } from "../ui/button";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const InputGroupDemo = dynamic(() => import("../featuers/InputGroupDemo"), {
    ssr: false,
});

const NavigationMenuDemo = dynamic(() => import("../featuers/NavigationMenuDemo"), {
    ssr: false,
})

const Navabr = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="md:border-b pb-3  ">
            <section className="hidden md:flex justify-between items-center bg-gray-900 px-4 py-2">
                <ul className="flex gap-6 items-center">
                    {Navabar.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                prefetch
                                className={`transition-colors duration-200 ${pathname === href
                                    ? "text-orange-500 font-semibold"
                                    : "text-white hover:text-orange-400"
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <NavigationMenuDemo />
            </section>
            <section className="flex justify-between items-center  px-4 py-3">
                <div className="flex items-center gap-5">
                    <h1 className="logo flex items-center gap-2">
                        <Image src="/GraduationCap.webp" alt="E-tutor logo" width={40} height={40} priority fetchPriority="high" />
                        <span className="text-2xl font-semibold">E-tutor</span>
                    </h1>

                    <div className="hidden md:block">
                        <InputGroupDemo />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Icons */}
                    <ul className="hidden md:flex gap-4 items-center">
                        <li><Bell /></li>
                        <li><Heart /></li>
                        <li><ShoppingCart /></li>
                    </ul>

                    <ul className="hidden md:flex items-center gap-2">
                        <li>
                            <Button className="bg-orange-100 text-orange-500 hover:bg-orange-200">
                                Create Account
                            </Button>
                        </li>
                        <li>
                            <Button className="text-white bg-orange-500 hover:bg-orange-600">
                                Sign in
                            </Button>
                        </li>
                    </ul>

                    <button
                        className="md:hidden "
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </section>



            {open && (
                <div className=" overflow-x-hidden absolute w-[95%] md:hidden px-4 mx-3 py-3 rounded-2xl bg-gray-800 border-t border-gray-700 animate-fadeIn">
                    <ul className="flex flex-col gap-3 mb-3">
                        {Navabar.map(({ label, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    prefetch
                                    onClick={() => setOpen(false)}
                                    className={`block py-2 ${pathname === href
                                        ? "text-orange-400 font-semibold"
                                        : "text-gray-200 hover:text-orange-400"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t border-gray-700 pt-3">
                        <NavigationMenuDemo />
                    </div>

                    <ul className="flex gap-4  items-center text-white mt-4">
                        <li><Bell /></li>
                        <li><Heart /></li>
                        <li><ShoppingCart /></li>
                    </ul>
                    <div className="mt-4 flex flex-col gap-2">
                        <Button className="bg-orange-100 text-orange-500 hover:bg-orange-200 w-full">
                            Create Account
                        </Button>
                        <Button className="text-white bg-orange-500 hover:bg-orange-600 w-full">
                            Sign in
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default React.memo(Navabr); 
