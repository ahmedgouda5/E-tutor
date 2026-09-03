"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Plus, CheckCircle2, Clock, BarChart3, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { SectionHeader } from "@/components/shared/page-header";

const quizzes = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals Quiz",
    course: "Web Development Masterclass",
    questions: 15,
    attempts: 3,
    avgScore: "82%",
    passingRate: "78%",
    status: "published",
  },
  {
    id: 2,
    title: "JavaScript Arrays & Objects Quiz",
    course: "JavaScript Fundamentals",
    questions: 20,
    attempts: 2,
    avgScore: "74%",
    passingRate: "65%",
    status: "published",
  },
  {
    id: 3,
    title: "React Hooks Mini-Quiz",
    course: "React Advanced Patterns",
    questions: 10,
    attempts: 3,
    avgScore: "88%",
    passingRate: "90%",
    status: "published",
  },
  {
    id: 4,
    title: "CSS Grid Advanced Quiz",
    course: "Web Development Masterclass",
    questions: 12,
    attempts: 2,
    avgScore: "-",
    passingRate: "-",
    status: "draft",
  },
];

export default function QuizzesPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Quizzes</PageTitle>
          <PageDescription>
            Create and manage quiz assessments
          </PageDescription>
        </div>
        <Button>
          <Plus className="mr-1 h-4 w-4" />
          Create Quiz
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Quizzes" value="18" icon={<BarChart3 className="h-4 w-4" />} />
        <StatCard label="Published" value="15" icon={<CheckCircle2 className="h-4 w-4" />} />
        <StatCard label="Drafts" value="3" icon={<Clock className="h-4 w-4" />} />
        <StatCard label="Avg. Score" value="79%" icon={<BarChart3 className="h-4 w-4" />} />
      </div>

      <section>
        <SectionHeader title="All Quizzes" description="Manage quiz content and settings" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="transition-all hover:shadow-md">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <HelpCircle className="h-4 w-4 text-brand" />
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      quiz.status === "published"
                        ? "border-0 bg-success/10 text-success"
                        : "border-0 bg-warning/10 text-warning"
                    }
                  >
                    {quiz.status === "published" ? "Published" : "Draft"}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">{quiz.title}</h4>
                  <p className="text-xs text-muted-foreground">{quiz.course}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t pt-3 text-center">
                  <div>
                    <p className="text-sm font-semibold">{quiz.questions}</p>
                    <p className="text-[10px] text-muted-foreground">Questions</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{quiz.attempts}</p>
                    <p className="text-[10px] text-muted-foreground">Attempts</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{quiz.avgScore}</p>
                    <p className="text-[10px] text-muted-foreground">Avg Score</p>
                  </div>
                </div>
                <Button size="sm" variant={quiz.status === "published" ? "outline" : "default"} className="w-full">
                  {quiz.status === "published" ? "View Results" : "Edit Draft"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.main>
  );
}