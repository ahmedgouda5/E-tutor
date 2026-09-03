"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Search,
  AlertTriangle,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";

const atRisk = [
  {
    id: 1,
    name: "John Smith",
    avatar: "JS",
    course: "Web Development Masterclass",
    issue: "Not logged in for 14 days",
    severity: "high",
    recommendedAction: "Send engagement reminder",
    lastActive: "14 days ago",
    progress: 22,
    history: [
      { label: "Last login", value: "14 days ago" },
      { label: "Progress", value: "22% (2/9 lessons)" },
      { label: "Last lesson", value: "Intro to HTML, 14 days ago" },
    ],
  },
  {
    id: 2,
    name: "Emma Wilson",
    avatar: "EW",
    course: "JavaScript Fundamentals",
    issue: "Scored below 40% on last quiz",
    severity: "high",
    recommendedAction: "Review quiz and schedule 1-on-1",
    lastActive: "3 days ago",
    progress: 35,
    history: [
      { label: "Last quiz score", value: "38% (6/16)" },
      { label: "Attempts", value: "2 of 3 used" },
      { label: "Last lesson", value: "Arrays in JS, 3 days ago" },
    ],
  },
  {
    id: 3,
    name: "Liam Chen",
    avatar: "LC",
    course: "React Advanced Patterns",
    issue: "3 assignments overdue",
    severity: "medium",
    recommendedAction: "Check assignment status and offer extension",
    lastActive: "6 hours ago",
    progress: 60,
    history: [
      { label: "Overdue assignments", value: "3" },
      { label: "Latest", value: "Hooks Deep Dive, due 2d ago" },
      { label: "Last active", value: "6 hours ago" },
    ],
  },
  {
    id: 4,
    name: "Sophia Rodriguez",
    avatar: "SR",
    course: "Web Development Masterclass",
    issue: "Failed mid-term exam",
    severity: "high",
    recommendedAction: "Offer retake and review weak areas",
    lastActive: "1 week ago",
    progress: 45,
    history: [
      { label: "Exam score", value: "34% (below 50% pass)" },
      { label: "Attempt", value: "1 of 2 used" },
      { label: "Last lesson", value: "CSS Positioning, 1 week ago" },
    ],
  },
  {
    id: 5,
    name: "Jack Martin",
    avatar: "JM",
    course: "JavaScript Fundamentals",
    issue: "Low engagement - completed 1 lesson in 2 weeks",
    severity: "medium",
    recommendedAction: "Personalized nudge with recommended content",
    lastActive: "2 weeks ago",
    progress: 15,
    history: [
      { label: "Completion", value: "15% (2/13)" },
      { label: "Watch time", value: "38 min in 14 days" },
      { label: "Last activity", value: "2 weeks ago" },
    ],
  },
];

const severityStyles: Record<string, string> = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-warning/10 text-warning",
};

export default function AtRiskStudents() {
  const [search, setSearch] = React.useState("");
  const [severity, setSeverity] = React.useState<string>("all");

  const filtered = atRisk.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesSeverity = severity === "all" || s.severity === severity;
    return matchesSearch && matchesSeverity;
  });

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle className="flex items-center gap-2">
            At-Risk Students
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </PageTitle>
          <PageDescription>
            Intervene early. Students below are showing signs of disengagement.
          </PageDescription>
        </div>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total At-Risk" value="32" icon={<AlertTriangle className="h-4 w-4" />} trend={{ value: "+4", positive: false }} hint="this week" />
        <StatCard label="High Severity" value="12" icon={<AlertTriangle className="h-4 w-4" />} />
        <StatCard label="Not Logged In >7d" value="18" icon={<AlertTriangle className="h-4 w-4" />} />
        <StatCard label="Failed Assessments" value="9" icon={<AlertTriangle className="h-4 w-4" />} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search at-risk students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex rounded-lg border bg-background p-0.5">
          {["all", "high", "medium"].map((s) => (
            <button
              key={s}
              onClick={() => setSeverity(s)}
              className={`rounded-md px-4 py-1.5 text-xs font-medium capitalize transition-colors ${
                severity === s
                  ? "bg-brand text-brand-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s === "all" ? "All" : s === "high" ? "High" : "Medium"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((student) => (
          <Card key={student.id} className="transition-all hover:border-brand/30 hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                    {student.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-sm">{student.name}</CardTitle>
                      <Badge className={severityStyles[student.severity]}>
                        {student.severity} priority
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">
                      {student.course}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg bg-warning/5 p-3">
                <p className="flex items-center gap-2 text-xs font-medium text-warning">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  {student.issue}
                </p>
              </div>

              <div className="grid gap-1.5">
                {student.history.map((h, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{h.label}</span>
                    <span className="font-medium">{h.value}</span>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
                  <span>Course progress</span>
                  <span>{student.progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      student.progress < 30
                        ? "bg-destructive"
                        : student.progress < 50
                          ? "bg-warning"
                          : "bg-success"
                    }`}
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-lg border bg-muted/30 p-3">
                <p className="text-[11px] text-muted-foreground">
                  <span className="font-medium text-foreground">Recommended: </span>
                  {student.recommendedAction}
                </p>
              </div>

              <div className="flex gap-2 pt-1">
                <Button size="sm" className="flex-1">
                  <MessageSquare className="mr-1 h-3 w-3" />
                  Contact
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Mark Resolved
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.main>
  );
}