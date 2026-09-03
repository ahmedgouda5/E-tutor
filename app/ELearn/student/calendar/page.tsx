"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Video, ClipboardCheck, GraduationCap, Calendar as CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { cn } from "@/lib/utils";

const events = [
  { day: 2, title: "Live Q&A - React Patterns", type: "class" as const, time: "3:00 PM" },
  { day: 3, title: "Quiz Due - Arrays & Objects", type: "assignment" as const, time: "9:00 AM" },
  { day: 5, title: "Mid-term Exam - JS Basics", type: "exam" as const, time: "10:00 AM" },
  { day: 8, title: "Live Workshop - CSS Grid", type: "class" as const, time: "2:00 PM" },
  { day: 10, title: "Assignment Due - Portfolio", type: "assignment" as const, time: "5:00 PM" },
  { day: 12, title: "Guest Lecture - Design Systems", type: "class" as const, time: "11:00 AM" },
  { day: 15, title: "Final Exam - Web Dev", type: "exam" as const, time: "9:30 AM" },
];

const typeColors: Record<string, { bg: string; dot: string; label: string }> = {
  class: { bg: "bg-brand/10 text-brand", dot: "bg-brand", label: "Live Class" },
  exam: { bg: "bg-warning/10 text-warning", dot: "bg-warning", label: "Exam" },
  assignment: { bg: "bg-success/10 text-success", dot: "bg-success", label: "Assignment" },
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function StudentCalendar() {
  const [currentMonth, setCurrentMonth] = React.useState("September 2026");
  const weekendOffset = 1;
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Learning Calendar</PageTitle>
          <PageDescription>
            Classes, exams, and assignment deadlines
          </PageDescription>
        </div>
      </PageHeader>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <button className="rounded-md border p-1.5 hover:bg-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <h2 className="text-lg font-semibold">{currentMonth}</h2>
            <button className="rounded-md border p-1.5 hover:bg-accent">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex gap-2">
            <span className="hidden text-sm text-muted-foreground sm:inline">Today</span>
            <button className="text-sm font-medium text-brand hover:underline">
              Go to today
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 border-b">
          {weekDays.map((d) => (
            <div key={d} className="border-r py-2 text-center text-xs font-medium text-muted-foreground last:border-r-0">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {Array.from({ length: weekendOffset }).map((_, i) => (
            <div key={`empty-${i}`} className="h-24 border-r border-b bg-muted/20" />
          ))}
          {days.map((day) => {
            const dayEvents = events.filter((e) => e.day === day);
            return (
              <div key={day} className={cn("h-24 border-r border-b p-1.5 transition-colors hover:bg-accent/40 last:border-r-0")}>
                <div className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium">
                  {day}
                </div>
                <div className="mt-1 space-y-1">
                  {dayEvents.slice(0, 2).map((event, i) => (
                    <div
                      key={i}
                      className={cn("truncate rounded-md px-1.5 py-0.5 text-[9px] font-medium", typeColors[event.type].bg)}
                    >
                      {event.time} · {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border bg-card p-5">
        <h3 className="mb-4 flex items-center gap-2 font-semibold">
          <CalendarIcon className="h-4 w-4 text-brand" />
          This Week's Schedule
        </h3>
        <div className="space-y-3">
          {events.slice(0, 5).map((event, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent/40">
              <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", typeColors[event.type].bg)}>
                {event.type === "class" ? (
                  <Video className="h-4 w-4" />
                ) : event.type === "exam" ? (
                  <GraduationCap className="h-4 w-4" />
                ) : (
                  <ClipboardCheck className="h-4 w-4" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground">
                  Sept {event.day} · {event.time}
                </p>
              </div>
              <Badge variant="outline" className={cn("border-0 shrink-0", typeColors[event.type].bg)}>
                {typeColors[event.type].label}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}