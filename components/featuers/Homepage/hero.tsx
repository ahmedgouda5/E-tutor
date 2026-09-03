"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, PlayCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <main className="relative flex flex-col items-center gap-10 overflow-hidden pt-10 md:pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-[#6366F1]/5 blur-3xl" />
      </div>

      {/* Text Section */}
      <section className="relative flex max-w-xl flex-col gap-4 text-center lg:text-left">
        <Badge
          variant="brand"
          className="mx-auto w-fit gap-1.5 border-0 lg:mx-0"
        >
          <Sparkles className="h-3 w-3" />
          {t("New: AI course recommendations")}
        </Badge>

        <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          {t("Learn with expert anytime anywhere")}
        </h2>

        <p className="mx-auto max-w-lg text-base text-muted-foreground lg:mx-0 lg:text-lg">
          {t(
            "Our mision is to help people to find the best course online and learn with expert anytime, anywhere."
          )}
        </p>

        <div className="mt-2 flex items-center justify-center gap-3 lg:justify-start">
          <Button size="lg" asChild>
            <Link href="/Auth/signup" className="gap-2">
              {t("Start Learning")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/ELearn/courses" className="gap-2">
              <PlayCircle className="h-4 w-4" />
              Explore Courses
            </Link>
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground lg:justify-start">
          <span className="flex items-center gap-1">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[#6366F1] text-[#6366F1]" />
              ))}
            </span>
            4.8 average rating
          </span>
          <span>•</span>
          <span>50K+ learners</span>
          <span>•</span>
          <span>500+ courses</span>
        </div>
      </section>

      <section className="relative hidden flex-1 md:block">
        <div className="relative mx-auto max-w-lg">
          <div className="overflow-hidden rounded-2xl border shadow-xl">
            <Image
              src="/Hero.png"
              alt="E-tutor hero section"
              width={600}
              height={600}
              className="object-cover"
              priority
            />
          </div>
          <div className="glass-light absolute -right-4 -top-4 hidden rounded-xl border p-3 shadow-lg sm:block">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF]">
                <PlayCircle className="h-4 w-4 text-[#6366F1]" />
              </div>
              <div>
                <p className="text-xs font-semibold">Lesson 4.2 · CSS Grid</p>
                <p className="text-[10px] text-muted-foreground">Continue where you left off</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default React.memo(Hero);