"use client";
import StaicsTwo from "@/components/dashboard/StaicsTwo";
import Statics from "@/components/dashboard/statics";
import Stats from "@/components/dashboard/stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
export default function DashboardHome() {
  return (
    <motion.main initial={{ opacity: 0 ,scale: 0.5}} animate={{ opacity: 1 ,scale: 1}} transition={{ duration: 0.7 }} className="space-y-8">
      {/* KPIs */}
      <section>
        <Stats />
      </section>
      {/* Profile Completion */}
      <section className="w-full rounded-xl bg-[#111033] p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src="/instructors/instructorfive.png"
              alt="Instructor"
              className="rounded-full shrink-0"
              width={48}
              height={48}
              loading="lazy"
            />

            <div className="min-w-0">
              <h1 className="truncate text-sm sm:text-base font-semibold text-white">
                John Doe
              </h1>
              <p className="truncate text-xs sm:text-sm text-gray-400">
                vako.shvili@gmail.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 w-full lg:max-w-md">
            <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
              1/4 steps
            </span>

            <div className="relative h-2 w-full rounded-full bg-gray-700 overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-green-600 transition-all"
                style={{ width: "25%" }}
              />
            </div>

            <span className="text-xs sm:text-sm text-white whitespace-nowrap">
              25% Completed
            </span>
          </div>

          <div className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-green-600 text-white hover:bg-green-700">
              Complete profile
            </Button>
          </div>
        </div>
      </section>
      {/* Main analytics */}
      <section>
        <Statics />
      </section>
      {/* secondary analytics */}
      <section>
        <StaicsTwo />
      </section>
    </motion.main>
  );
}