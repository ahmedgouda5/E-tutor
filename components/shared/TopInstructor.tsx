"use client";
import React from "react";
import Heading from "@/components/shared/heading";
import { TopInstructorData } from "@/lib/data";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const TopInstructor = ({ className }: { className?: string }) => {
  const { t, i18n } = useTranslation();
  return (
    <main className={`my-7 border shadow-lg p-2 rounded-xl ${className || ""}`}>
      <Heading heading={t("Top Instructor In the Month")} />

      <motion.div initial={{ y: 50 ,opacity: 0}} whileInView={{ y: 0 ,opacity: 1}} transition={{ duration: 1 ,delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {TopInstructorData.slice(0, 4).map((instructor) => (
          <div
            key={instructor.id}
            className="border rounded-xl flex flex-col items-center hover:shadow-purple-300 hover:shadow-lg transition-all duration-300 overflow-hidden shadow-sm bg-card"
          >
            <Image
              loading="lazy"
              src={instructor.instructorImage}
              alt={instructor.name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />

            <div className="text-center px-3 py-2 h-[100px]">
              <h3 className="text-lg font-semibold">{instructor.name}</h3>
              <p className="text-muted-foreground text-sm">{instructor.title}</p>
            </div>

            <div className="border-t w-full flex flex-col justify-between px-2 gap-2 py-2 text-sm text-foreground items-center">
              <span className="flex items-center gap-1">
                <Star size={16} className="text-[#6366F1] fill-[#6366F1]" />{" "}
                {instructor.rating}
              </span>
              <span>{instructor.students} students</span>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="text-center my-7 flex items-center gap-2 md:flex-row flex-col justify-center">
        <h3>
          {t(
            "Thousands of students waiting for a instructor. Start teaching & earning now!."
          )}
        </h3>
        <Link
          className="text-[#6366F1] inline-flex items-center gap-1 font-medium"
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
