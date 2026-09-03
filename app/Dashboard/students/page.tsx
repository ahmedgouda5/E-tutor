"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Users,
  Search,
  Filter,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";

const students = [
  { id: 1, name: "Sarah Ahmed", email: "sarah@example.com", course: "Web Development Masterclass", progress: 75, lastActive: "2h ago", status: "active", avg: "82%" },
  { id: 2, name: "Mohamed Ali", email: "mohamed@example.com", course: "JavaScript Fundamentals", progress: 45, lastActive: "5h ago", status: "active", avg: "74%" },
  { id: 3, name: "Fatima Nour", email: "fatima@example.com", course: "React Advanced Patterns", progress: 90, lastActive: "1d ago", status: "active", avg: "91%" },
  { id: 4, name: "John Smith", email: "john@example.com", course: "Web Development Masterclass", progress: 22, lastActive: "14d ago", status: "at-risk", avg: "58%" },
  { id: 5, name: "Emma Wilson", email: "emma@example.com", course: "JavaScript Fundamentals", progress: 35, lastActive: "3d ago", status: "at-risk", avg: "41%" },
  { id: 6, name: "Liam Chen", email: "liam@example.com", course: "React Advanced Patterns", progress: 60, lastActive: "6h ago", status: "active", avg: "78%" },
  { id: 7, name: "Olivia Brown", email: "olivia@example.com", course: "Web Development Masterclass", progress: 100, lastActive: "1d ago", status: "completed", avg: "95%" },
  { id: 8, name: "Noah Davis", email: "noah@example.com", course: "JavaScript Fundamentals", progress: 55, lastActive: "10h ago", status: "active", avg: "69%" },
];

const statusColors: Record<string, string> = {
  active: "bg-success/10 text-success",
  "at-risk": "bg-destructive/10 text-destructive",
  completed: "bg-brand/10 text-brand",
};

export default function StudentsPage() {
  const [search, setSearch] = React.useState("");
  const [status, setStatus] = React.useState<string>("all");

  const filtered = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "all" || s.status === status;
    return matchesSearch && matchesStatus;
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
          <PageTitle>Students</PageTitle>
          <PageDescription>
            Manage your enrolled students across all courses
          </PageDescription>
        </div>
        <Button>
          <Users className="mr-1 h-4 w-4" />
          Add Student
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Students" value="1,284" icon={<Users className="h-4 w-4" />} trend={{ value: "+12%", positive: true }} />
        <StatCard label="Active" value="1,102" icon={<Users className="h-4 w-4" />} />
        <StatCard label="At Risk" value="32" icon={<Users className="h-4 w-4" />} trend={{ value: "6 new", positive: false }} hint="this week" />
        <StatCard label="Completed" value="150" icon={<Users className="h-4 w-4" />} trend={{ value: "+8%", positive: true }} />
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
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg border bg-background p-0.5">
              {["all", "active", "at-risk", "completed"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                    status === s
                      ? "bg-brand text-brand-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s === "at-risk" ? "At Risk" : s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left text-xs font-medium text-muted-foreground">
                <th className="px-4 py-3 font-medium">Student</th>
                <th className="px-4 py-3 font-medium">Course</th>
                <th className="px-4 py-3 font-medium">Progress</th>
                <th className="px-4 py-3 font-medium">Avg. Score</th>
                <th className="px-4 py-3 font-medium">Last Active</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr
                  key={student.id}
                  className="border-b transition-colors hover:bg-accent/40 last:border-0"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-brand/10 text-brand text-xs">
                          {student.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <span className="line-clamp-1 max-w-[180px]">{student.course}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 rounded-full bg-muted overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            student.progress < 40
                              ? "bg-destructive"
                              : student.progress < 70
                                ? "bg-warning"
                                : "bg-success"
                          }`}
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{student.avg}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {student.lastActive}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="outline" className={`border-0 ${statusColors[student.status]}`}>
                      {student.status === "at-risk" ? "At Risk" : student.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end">
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t p-4">
          <p className="text-xs text-muted-foreground">
            Showing {filtered.length} of {students.length} students
          </p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon-xs">
              <ChevronLeft className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="icon-xs" className="bg-brand text-brand-foreground border-brand">
              1
            </Button>
            <Button variant="outline" size="icon-xs">
              2
            </Button>
            <Button variant="outline" size="icon-xs">
              3
            </Button>
            <Button variant="outline" size="icon-xs">
              <ChevronRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.main>
  );
}