"use client";
import Heading from "@/components/shared/heading";
import { categories } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import "../../../app/i18n/client";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t, i18n } = useTranslation();
  return (
    <main>
      <Heading heading={t("Browse top category")} />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {categories.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <div
              key={i}
              className="p-5 rounded-xl flex flex-col md:flex-row  items-center gap-4"
              style={{ backgroundColor: cat.bgColor }}
            >
              <Icon
                className="w-8 h-8  bg-white p-1 "
                style={{ color: cat.bgColor }}
              />

              <div className="flex flex-col items-center md:justify-center  md:items-start">
                <h3 className="font-semibold ">{cat.name}</h3>
                <p className="text-sm text-gray-600">{cat.courses}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center my-7 flex items-center gap-2 justify-center ">
       <h3>{t("We have more category & subcategory")}</h3>
        <Link
          className="text-orange-500 inline-flex items-center gap-1 font-medium"
          href="/ELearn/courses"
          prefetch
        >
          {t("Browse All")}
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

export default Category;
