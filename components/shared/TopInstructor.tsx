"use client";
import React from "react";
import Heading from "@/components/shared/heading";
import { TopInstructorData } from "@/lib/data";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const TopInstructor = ({ className }: { className?: string }) => {
  const { t, i18n } = useTranslation();
  return (
    <main className={`my-7 border shadow-lg p-2 rounded-xl ${className || ""}`}>
      <Heading heading={t("Top Instructor In the Month")} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {TopInstructorData.slice(5, 9).map((instructor) => (
          <div
            key={instructor.id}
            className="border rounded-xl flex flex-col items-center hover:shadow-orange-300 hover:shadow-lg transition-all duration-300 overflow-hidden shadow-sm bg-white"
          >
            <Image
              priority
              src={instructor.instrucorImage}
              alt={instructor.name}
              width={200}
              height={200}
              className="w-full h-[200px] object-cover"
            />

            <div className="text-center px-3 py-2 h-[100px]">
              <h3 className="text-lg font-semibold">{instructor.name}</h3>
              <p className="text-gray-500 text-sm">{instructor.title}</p>
            </div>

            <div className="border-t w-full flex flex-col justify-between px-2 gap-2 py-2 text-sm text-gray-700 items-center">
              <span className="flex items-center gap-1">
                <Star size={16} className="text-orange-600 fill-orange-600" />{" "}
                {instructor.rating}
              </span>
              <span>{instructor.students} students</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-7 flex items-center gap-2 justify-center">
        <h3>{t(
          "Thousands of students waiting for a instructor. Start teaching & earning now!."
        )}</h3>
        <Link
          className="text-orange-500 inline-flex items-center gap-1 font-medium"
          href="#"
          prefetch
        >
          {t("Become Instructor")}
          {i18n.language === "en" ? (
            <ArrowRight className="w-4 h-4 translate-y-0.5" />
          ) : (
            <ArrowLeft className="w-4 h-4 translate-y-0.5" />
          )}
        </Link>
      </div>
    </main>
  );
};

export default React.memo(TopInstructor);
