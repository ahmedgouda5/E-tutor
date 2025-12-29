"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const TrustedCompanies = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  const companies = [
    { id: 1, logo: "/sponsers/netflix.png", name: "Netflix" },
    { id: 2, logo: "/sponsers/youtube.png", name: "YouTube" },
    { id: 3, logo: "/sponsers/google.png", name: "Google" },
    { id: 4, logo: "/sponsers/lenovo.png", name: "Lenovo" },
    { id: 5, logo: "/sponsers/slack.png", name: "Slack" },
    { id: 6, logo: "/sponsers/verizon.png", name: "Verizon" },
    { id: 7, logo: "/sponsers/lexmark.png", name: "Lexmark" },
    { id: 8, logo: "/sponsers/microsoft.png", name: "Microsoft" },
  ];

  return (
    <section className={`my-16 max-w-7xl mx-auto ${className || ""}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {t("6.3k trusted companies")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t(
              "Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            )}
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {companies.map((c) => (
            <div
              key={c.id}
              className="bg-white border rounded-xl shadow-sm p-6 flex items-center justify-center"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={60}
                priority
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TrustedCompanies);
