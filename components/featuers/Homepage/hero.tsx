"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col-reverse md:flex-row items-center gap-10 pt-24 md:pt-0 ">
      
      {/* Text Section */}
      <section className="flex flex-col gap-4 text-center md:text-left ">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight ">
          {t("Learn with expert anytime anywhere")}
        </h2>

        <p className="text-gray-500 text-sm md:text-base font-mono">
          {t(
            "Our mision is to help people to find the best course online and learn with expert anytime, anywhere."
          )}
        </p>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit mx-auto md:mx-0">
          <Link href="/Auth/signup">{t("Create Account")}</Link>
        </Button>
      </section>

      <section className="hidden md:flex mt-2">
       <div className="bg-orange-400 overflow-hidden border-2 border-orange-600" style={{borderRadius:"51% 49% 46% 54% / 37% 32% 68% 63%"}}>
         <Image
          src="/Hero.png"
          alt="E-tutor hero section"
          width={500}
          height={400}
          priority
        />
       </div>
      </section>
    </main>
  );
};

export default React.memo(Hero);
