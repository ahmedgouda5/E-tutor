import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <>
      <nav className="px-3 sm:px-6 md:px-16 lg:px-28 pt-2 sm:pt-3 bg-[#FFEEE8]">
        <section className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <Image
              src="/Instructors/Inst1.png"
              alt="E-tutor logo"
              className="rounded-full shrink-0"
              width={50}
              height={50}
              loading="lazy"
            />
            <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
                <h1 className="text-sm sm:text-base md:text-lg font-semibold truncate">John Doe</h1>
                <p className="text-gray-400 text-xs sm:text-sm truncate">Software Engineer</p>
            </div>
          </div>
         <Button className="bg-[#FFEEE8] text-orange-600 hover:bg-[#FFEEE8] shrink-0 text-xs sm:text-sm md:text-base px-2 sm:px-4">
           <span className="hidden sm:inline">Become an instructor</span>
           <span className="sm:hidden">Instructor</span>
         </Button>
        </section>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default layout;
