"use client";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavabrAuth = () => {
  const pathname = usePathname();

  return (
    <div className="px-4 md:px-20 lg:px-40 py-2 flex flex-wrap gap-3 justify-between items-center">

      <Link prefetch href="/">
        <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <span className="text-orange-500">
            <GraduationCap size={25} />
          </span>
          E-tutor
        </h1>
      </Link>

      {pathname === "/Auth/signin" ? (
        <ul className="flex items-center gap-2 flex-wrap">
          <li>
            <Button className="text-gray-400 bg-white hover:bg-gray-100 text-sm md:text-base px-3 py-1">
              Don&apos;t have an account?
            </Button>
          </li>
          <li>
            <Button className="bg-orange-100 text-orange-500 hover:bg-orange-200 text-sm md:text-base px-3 py-1">
              <Link prefetch href="/Auth/signup">Create Account</Link>
            </Button>
          </li>
        </ul>
      ) : (
        <ul className="flex items-center gap-2 flex-wrap">
          <li>
            <Button className="text-gray-400 bg-white hover:bg-gray-100 text-sm md:text-base px-3 py-1">
              I Have an account
            </Button>
          </li>
          <li>
            <Button className="bg-orange-100 text-orange-500 hover:bg-orange-200 text-sm md:text-base px-3 py-1">
              <Link prefetch href="/Auth/signin">Sign In</Link>
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavabrAuth;
