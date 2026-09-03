"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Search, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";

const gradebookRows = [
  { student: "Sarah Ahmed", course: "Web Development", quiz1: 92, quiz2: 88, assignment: 95, midterm: 90, final: 0, avg: "91.25" },
  { student: "Mohamed Ali", course: "JavaScript", quiz1: 78, quiz2: 82, assignment: 75, midterm: 80, final: 0, avg: "78.75" },
  { student: "Fatima Nour", course: "React", quiz1: 95, quiz2: 90, assignment: 88, midterm: 92, final: 0, avg: "91.25" },
  { student: "John Smith", course: "Web Development", quiz1: 55, quiz2: 48, assignment: 60, midterm: 50, final: 0, avg: "53.25" },
  { student: "Emma Wilson", course: "JavaScript", quiz1: 40, quiz2: 38, assignment: 45, midterm: 35, final: 0, avg: "39.50" },
  { student: "Liam Chen", course: "React", quiz1: 85, quiz2: 88, assignment: 80, midterm: 82, final: 0, avg: "83.75" },
  { student: "Olivia Brown", course: "Web Development", quiz1: 98, quiz2: 96, assignment: 100, midterm: 94, final: 0, avg: "97.00" },
  { student: "Noah Davis", course: "JavaScript", quiz1: 72, quiz2: 68, assignment: 70, midterm: 75, final: 0, avg: "71.25" },
];

const gradeColor = (grade: number): string => {
  if (grade >= 90) return "text-success";
  if (grade >= 70) return "text-info";
  if (grade >= 50) return "text-warning";
  return "text-destructive";
};

export default function GradebookPage() {
  const [search, setSearch] = React.useState("");

  const filtered = gradebookRows.filter((r) =>
    r.student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Gradebook</PageTitle>
          <PageDescription>
            Track student performance across all assessments
          </PageDescription>
        </div>
        <Button variant="outline">
          <Download className="mr-1 h-4 w-4" />
          Export
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Class Average" value="75.8%" trend={{ value: "+3%", positive: true }} hint="this term" />
        <StatCard label="Assignments" value="4" />
        <StatCard label="Quizzes" value="6" />
        <StatCard label="Exams" value="2" />
      </div>

      <Card className="overflow-hidden">
        <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <select
            className="h-9 rounded-md border border-input bg-background px-3 text-sm"
            defaultValue="all-courses"
          >
            <option value="all-courses">All Courses</option>
            <option value="web-dev">Web Development</option>
            <option value="js">JavaScript</option>
            <option value="react">React</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-xs font-medium text-muted-foreground">
                <th className="px-4 py-3 font-medium">Student</th>
                <th className="px-4 py-3 font-medium">Course</th>
                <th className="px-4 py-3 font-medium text-center">Quiz 1</th>
                <th className="px-4 py-3 font-medium text-center">Quiz 2</th>
                <th className="px-4 py-3 font-medium text-center">Assignment</th>
                <th className="px-4 py-3 font-medium text-center">Midterm</th>
                <th className="px-4 py-3 font-medium text-center">Final</th>
                <th className="px-4 py-3 font-medium text-center">Average</th>
                <th className="px-4 py-3 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => {
                const avg = parseFloat(row.avg);
                const status =
                  avg >= 90 ? "Excellent" : avg >= 70 ? "Good" : avg >= 50 ? "At Risk" : "Failing";
                return (
                  <tr
                    key={row.student}
                    className="border-b transition-colors hover:bg-accent/40 last:border-0"
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium">{row.student}</p>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.course}</td>
                    {[row.quiz1, row.quiz2, row.assignment, row.midterm, row.final].map(
                      (grade, i) => (
                        <td
                          key={i}
                          className={`px-4 py-3 text-center font-medium ${
                            grade === 0 ? "text-muted-foreground/40" : gradeColor(grade)
                          }`}
                        >
                          {grade === 0 ? "—" : grade}
                        </td>
                      )
                    )}
                    <td className="px-4 py-3 text-center font-semibold">
                      <span className={gradeColor(avg)}>{row.avg}</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge
                        variant="outline"
                        className={`border-0 ${
                          avg >= 90
                            ? "bg-success/10 text-success"
                            : avg >= 70
                              ? "bg-brand/10 text-brand"
                              : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {status}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.main>
  );
}