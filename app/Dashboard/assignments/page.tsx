"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { SectionHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";

const assignments = [
  {
    id: 1,
    title: "Build a Responsive Portfolio",
    course: "Web Development Masterclass",
    due: "Today, 5:00 PM",
    submitted: 145,
    total: 200,
    status: "due-soon",
  },
  {
    id: 2,
    title: "JavaScript Array Methods Exercise",
    course: "JavaScript Fundamentals",
    due: "Fri, 11:59 PM",
    submitted: 89,
    total: 150,
    status: "open",
  },
  {
    id: 3,
    title: "React Custom Hooks Challenge",
    course: "React Advanced Patterns",
    due: "Mon, 11:59 PM",
    submitted: 42,
    total: 120,
    status: "open",
  },
  {
    id: 4,
    title: "CSS Grid Layout Project",
    course: "Web Development Masterclass",
    due: "Last Tue",
    submitted: 178,
    total: 200,
    status: "closed",
  },
];

const statusStyles: Record<string, { label: string; className: string }> = {
  "due-soon": { label: "Due Soon", className: "bg-warning/10 text-warning" },
  open: { label: "Open", className: "bg-success/10 text-success" },
  closed: { label: "Closed", className: "bg-muted text-muted-foreground" },
};

export default function AssignmentsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Assignments</PageTitle>
          <PageDescription>
            Create and manage student assignments
          </PageDescription>
        </div>
        <Button>
          <Plus className="mr-1 h-4 w-4" />
          New Assignment
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Assignments" value="24" icon={<Clock className="h-4 w-4" />} />
        <StatCard label="Needs Grading" value="34" icon={<CheckCircle2 className="h-4 w-4" />} trend={{ value: "12 urgent", positive: false }} />
        <StatCard label="Due This Week" value="5" icon={<AlertCircle className="h-4 w-4" />} />
        <StatCard label="Completed" value="18" icon={<CheckCircle2 className="h-4 w-4" />} />
      </div>

      <div className="space-y-6">
        <section>
          <SectionHeader title="All Assignments" description="Manage assignment deadlines and submissions" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="transition-all hover:shadow-md">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium">{assignment.title}</h4>
                    <Badge className={statusStyles[assignment.status].className}>
                      {statusStyles[assignment.status].label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Due: {assignment.due}</span>
                    <span>
                      {assignment.submitted}/{assignment.total} submissions
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        assignment.status === "closed"
                          ? "bg-muted-foreground/40"
                          : (assignment.submitted / assignment.total) * 100 > 80
                            ? "bg-success"
                            : "bg-brand"
                      }`}
                      style={{
                        width: `${(assignment.submitted / assignment.total) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <Button size="sm" variant="outline" className="text-xs">
                      View Submissions
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  );
}