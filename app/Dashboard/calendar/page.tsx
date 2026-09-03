"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Video, ClipboardCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { cn } from "@/lib/utils";

interface CalendarEvent {
  day: number;
  title: string;
  type: "class" | "exam" | "assignment";
  time: string;
}

const events: CalendarEvent[] = [
  { day: 2, title: "Live Q&A - React Patterns", type: "class", time: "3:00 PM" },
  { day: 3, title: "Quiz Due - Arrays & Objects", type: "assignment", time: "9:00 AM" },
  { day: 5, title: "Mid-term Exam - JS Basics", type: "exam", time: "10:00 AM" },
  { day: 8, title: "Live Workshop - CSS Grid", type: "class", time: "2:00 PM" },
  { day: 10, title: "Assignment Due - Portfolio", type: "assignment", time: "5:00 PM" },
  { day: 12, title: "Guest Lecture - Design Systems", type: "class", time: "11:00 AM" },
  { day: 15, title: "Final Exam - Web Dev", type: "exam", time: "9:30 AM" },
  { day: 18, title: "Project Review Session", type: "class", time: "4:00 PM" },
];

const eventTypeStyles: Record<string, { badge: string; dot: string }> = {
  class: { badge: "bg-brand/10 text-brand", dot: "bg-brand" },
  exam: { badge: "bg-warning/10 text-warning", dot: "bg-warning" },
  assignment: { badge: "bg-success/10 text-success", dot: "bg-success" },
};

const DIALOG_TYPE_LABELS = { class: "Live Class", exam: "Exam", assignment: "Assignment" };

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = React.useState("September 2026");
  const [currentWeekStart, setCurrentWeekStart] = React.useState(1);
  const [view, setView] = React.useState<"month" | "week" | "day">("month");

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekendOffset = 1; // Sept 1 2026 is a Tuesday

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Calendar</PageTitle>
          <PageDescription>
            Manage your classes, exams, and assignment deadlines
          </PageDescription>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-lg border bg-background p-0.5">
            {(["month", "week", "day"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors",
                  view === v
                    ? "bg-brand text-brand-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {v}
              </button>
            ))}
          </div>
          <Button>
            <Plus className="mr-1 h-4 w-4" />
            Add Event
          </Button>
        </div>
      </PageHeader>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon-sm" onClick={() => setCurrentMonth("")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">{currentMonth}</h2>
            <Button variant="outline" size="icon-sm" onClick={() => setCurrentMonth("October 2026")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline">Today</span>
            <Button variant="ghost" size="sm" className="text-xs">
              Go to Today
            </Button>
          </div>
        </div>

        <div className="border-b">
          <div className="grid grid-cols-7 text-center">
            {weekDays.map((day) => (
              <div key={day} className="border-r py-2 text-xs font-medium text-muted-foreground last:border-r-0">
                {day}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-7">
          {Array.from({ length: weekendOffset }).map((_, i) => (
            <div key={`empty-${i}`} className="h-24 border-r border-b bg-muted/20" />
          ))}
          {days.map((day) => {
            const dayEvents = events.filter((e) => e.day === day);
            return (
              <div
                key={day}
                className={cn(
                  "h-24 border-r border-b p-1.5 transition-colors hover:bg-accent/40 last:border-r-0",
                  day === new Date().getDate() &&
                    "bg-brand/5"
                )}
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium">
                  {day}
                </div>
                <div className="mt-1 space-y-1">
                  {dayEvents.slice(0, 2).map((event, i) => (
                    <div
                      key={i}
                      className={cn(
                        "truncate rounded-md px-1.5 py-0.5 text-[9px] font-medium leading-tight",
                        eventTypeStyles[event.type].badge
                      )}
                    >
                      {event.time} · {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <p className="px-1 text-[9px] text-muted-foreground">
                      +{dayEvents.length - 2} more
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-5 lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold">Upcoming Events</h3>
          <div className="space-y-3">
            {events.slice(0, 5).map((event, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent/40">
                <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", eventTypeStyles[event.type].badge)}>
                  {event.type === "class" ? (
                    <Video className="h-4 w-4" />
                  ) : event.type === "exam" ? (
                    <GraduationCap className="h-4 w-4" />
                  ) : (
                    <ClipboardCheck className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">
                    Sept {event.day}, 2026 · {event.time}
                  </p>
                </div>
                <Badge variant="outline" className={cn("border-0", eventTypeStyles[event.type].badge)}>
                  {DIALOG_TYPE_LABELS[event.type]}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <h3 className="mb-4 text-sm font-semibold flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-brand" />
            This Week's Summary
          </h3>
          <div className="space-y-3">
            <div className="rounded-lg bg-brand/5 p-3">
              <p className="text-xs font-medium text-brand">2 Live Classes</p>
              <p className="text-[11px] text-muted-foreground">Wed & Sun, 3PM</p>
            </div>
            <div className="rounded-lg bg-warning/5 p-3">
              <p className="text-xs font-medium text-warning">1 Mid-term Exam</p>
              <p className="text-[11px] text-muted-foreground">Thu, 10AM · 60 min</p>
            </div>
            <div className="rounded-lg bg-success/5 p-3">
              <p className="text-xs font-medium text-success">2 Assignments Due</p>
              <p className="text-[11px] text-muted-foreground">1 graded · 1 pending</p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}