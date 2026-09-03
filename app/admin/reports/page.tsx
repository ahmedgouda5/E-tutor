"use client";

import { motion } from "motion/react";
import { AlertTriangle, Ban, ShieldCheck, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/stat-card";

const stats = [
  { label: "Open Reports", value: "5", icon: <AlertTriangle className="h-4 w-4" />, hint: "needing review" },
  { label: "Resolved This Week", value: "12", icon: <ShieldCheck className="h-4 w-4" />, hint: "action taken" },
  { label: "Auto-Moderated", value: "38", icon: <Ban className="h-4 w-4" />, hint: "by AI flags" },
];

const reports = [
  { type: "Course", target: "Investment Basics", reporter: "Review by Sarah", severity: "high", time: "2h ago" },
  { type: "Message", target: "Inappropriate message", reporter: "From Óscar", severity: "medium", time: "4h ago" },
  { type: "User", target: "Spam account", reporter: "Community report", severity: "medium", time: "1d ago" },
  { type: "Course", target: "Duplicate of 'JS Basics'", reporter: "Auto-detected", severity: "low", time: "1d ago" },
];

const severityStyles: Record<string, string> = {
  high: "border-0 bg-destructive/10 text-destructive",
  medium: "border-0 bg-warning/10 text-warning",
  low: "border-0 bg-info/10 text-info",
};

export default function AdminReports() {
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
          <CardTitle className="text-base">Content Reports</CardTitle>
          <CardDescription className="text-xs">Investigate flagged content and user reports</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {reports.map((report, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center">
              <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{report.target}</p>
                <p className="text-xs text-muted-foreground">
                  {report.type} · {report.reporter} · {report.time}
                </p>
              </div>
              <Badge className={severityStyles[report.severity]}>{report.severity}</Badge>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Review</Button>
                <Button variant="ghost" size="sm" className="text-destructive">Dismiss</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}