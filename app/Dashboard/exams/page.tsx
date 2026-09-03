"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Plus, FileText, Users, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";

const exams = [
  {
    id: 1,
    title: "Mid-Term Examination",
    course: "Web Development Masterclass",
    date: "Thu, Sep 15, 2026",
    duration: "90 min",
    questions: 50,
    students: 200,
    avgScore: "76%",
    passingRate: "84%",
    status: "scheduled",
  },
  {
    id: 2,
    title: "Final Examination",
    course: "JavaScript Fundamentals",
    date: "Wed, Sep 22, 2026",
    duration: "120 min",
    questions: 75,
    students: 150,
    avgScore: "-",
    passingRate: "-",
    status: "draft",
  },
  {
    id: 3,
    title: "React Comprehensive Exam",
    course: "React Advanced Patterns",
    date: "Completed",
    duration: "90 min",
    questions: 60,
    students: 120,
    avgScore: "81%",
    passingRate: "89%",
    status: "completed",
  },
];

export default function ExamsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Exams</PageTitle>
          <PageDescription>
            Schedule and manage course examinations
          </PageDescription>
        </div>
        <Button>
          <Plus className="mr-1 h-4 w-4" />
          Create Exam
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Exams" value="6" icon={<FileText className="h-4 w-4" />} />
        <StatCard label="Scheduled" value="3" icon={<Clock className="h-4 w-4" />} />
        <StatCard label="Students Tested" value="470" icon={<Users className="h-4 w-4" />} />
        <StatCard label="Avg. Pass Rate" value="86%" icon={<BarChart3 className="h-4 w-4" />} trend={{ value: "+4%", positive: true }} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {exams.map((exam) => (
          <Card key={exam.id} className="transition-all hover:shadow-md">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">{exam.title}</h4>
                  <p className="text-sm text-muted-foreground">{exam.course}</p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    exam.status === "scheduled"
                      ? "border-0 bg-warning/10 text-warning"
                      : exam.status === "completed"
                        ? "border-0 bg-success/10 text-success"
                        : "border-0 bg-muted text-muted-foreground"
                  }
                >
                  {exam.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                <div className="rounded-lg bg-muted/50 p-2">
                  <p className="text-muted-foreground">Date</p>
                  <p className="mt-0.5 font-medium">{exam.date.split(", ")[1] ? exam.date.split(", ").slice(1).join(", ") : exam.date}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-2">
                  <p className="text-muted-foreground">Duration</p>
                  <p className="mt-0.5 font-medium">{exam.duration}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-2">
                  <p className="text-muted-foreground">Questions</p>
                  <p className="mt-0.5 font-medium">{exam.questions}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-2">
                  <p className="text-muted-foreground">Students</p>
                  <p className="mt-0.5 font-medium">{exam.students}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <div className="flex gap-4 text-xs">
                  <span className="text-muted-foreground">
                    Avg Score: <span className="font-semibold text-foreground">{exam.avgScore}</span>
                  </span>
                  <span className="text-muted-foreground">
                    Pass Rate: <span className="font-semibold text-foreground">{exam.passingRate}</span>
                  </span>
                </div>
                <Button size="sm" variant="outline">
                  {exam.status === "scheduled" ? "Manage" : exam.status === "completed" ? "Review" : "Edit"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.main>
  );
}