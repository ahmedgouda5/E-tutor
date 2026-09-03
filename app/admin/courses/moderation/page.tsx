"use client";

import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, XCircle, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/stat-card";

const stats = [
  { label: "In Review", value: "24", icon: <ShieldCheck className="h-4 w-4" />, hint: "pending courses" },
  { label: "Approved Today", value: "6", icon: <CheckCircle2 className="h-4 w-4" />, hint: "published" },
  { label: "Rejected Today", value: "2", icon: <XCircle className="h-4 w-4" />, hint: "for revision" },
];

const queue = [
  { id: 1, title: "React Advanced Patterns", instructor: "Ahmed Gouda", submitted: "3h ago", issues: 0 },
  { id: 2, title: "Freelancing Masterclass", instructor: "Mona Ali", submitted: "1d ago", issues: 1 },
  { id: 3, title: "Video Editing Essentials", instructor: "Liam Chen", submitted: "2d ago", issues: 2 },
];

export default function AdminModeration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} className="animate-slide-up" />
        ))}
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Course Moderation Queue</CardTitle>
          <CardDescription className="text-xs">Review course submissions before publishing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {queue.map((course) => (
            <div key={course.id} className="flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{course.title}</p>
                  {course.issues > 0 && (
                    <Badge variant="warning" className="text-[10px]">
                      {course.issues} issues
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  by {course.instructor} · submitted {course.submitted}
                </p>
              </div>
              <div className="flex gap-2 sm:ml-2">
                <Button variant="outline" size="sm">
                  <Eye className="mr-1.5 h-3.5 w-3.5" /> Review
                </Button>
                <Button size="sm">
                  <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" /> Approve
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}