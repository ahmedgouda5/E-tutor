import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <>
      <nav className="px-4 md:px-28 pt-3  bg-[#FFEEE8] ">
        <section className="bg-white p-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/Instructors/Inst1.png"
              alt="E-tutor logo"
              className="rounded-full"
              width={80}
              height={80}
              priority
              fetchPriority="high"
            />
            <div className="flex flex-col gap-3">
                <h1>John Doe</h1>
                <p className="text-gray-400 text-sm">Software Engineer</p>
            </div>
          </div>
         <Button className="bg-[#FFEEE8] text-orange-600 hover:bg-[#FFEEE8]">Become an instructor</Button>
        </section>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default layout;
