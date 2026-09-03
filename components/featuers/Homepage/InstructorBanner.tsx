"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n/client";

const InstructorBanner = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  const InstructorBannerData = [
    {
      id: 1,
      title: "Apply to become an instructor",
      bgColor: "#EEF2FF",
      textColor: "#6366F1",
    },
    {
      id: 2,
      title: "Build & edit your profile",
      bgColor: "#E0E7FF",
      textColor: "#4F46E5",
    },
    {
      id: 3,
      title: "Create your new course",
      bgColor: "#EEF2FF",
      textColor: "#6366F1",
    },
    {
      id: 4,
      title: "Start teaching & earning",
      bgColor: "#E0E7FF",
      textColor: "#4F46E5",
    },
  ];

  return (
    <div
      className={`flex flex-col lg:flex-row justify-between gap-8 my-10 ${
        className || ""
      }`}
    >
      {/* LEFT BANNER */}
      <div className="flex items-center justify-between bg-linear-to-r from-[#6366F1] to-[#818CF8] px-10 py-8 rounded-xl text-white w-full lg:w-[48%]">
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-3xl font-bold">{t("Become an Instructor")}</h2>
          <p className="text-sm leading-relaxed opacity-90">
            {t(
              "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love."
            )}
          </p>
          <Button className="bg-white text-[#6366F1] hover:bg-gray-100 flex items-center gap-2 w-fit">
            {t("Start Teaching")} <ArrowRight size={18} />
          </Button>
        </div>

        <Image
          src="/instructors/instructorfive.png"
          alt="instructor-banner"
          width={220}
          height={220}
          className=" lg:block"
        />
      </div>

      <div className="w-full lg:w-[48%]">
        <h1 className="text-3xl font-bold mb-6 text-foreground">
          {t("Your teaching & earning steps")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {InstructorBannerData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-5 rounded-lg shadow-sm border border-border bg-card"
            >
              <div
                className="rounded-full w-12 h-12 flex items-center justify-center text-md font-semibold shrink-0"
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
              >
                {item.id}
              </div>

              <h3
                style={{ color: item.textColor }}
                className="text-md  font-semibold"
              >
                {t(item.title)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(InstructorBanner);
