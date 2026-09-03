"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Users,
  BookOpen,
  Clock,
  MousePointerClick,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/shared/stat-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const stats = [
  { label: "Daily Active Users", value: "8,412", icon: <Users className="h-4 w-4" />, trend: { value: "+6.2%", positive: true }, hint: "vs yesterday" },
  { label: "Active Courses Watched", value: "4,218", icon: <BookOpen className="h-4 w-4" />, trend: { value: "+4.1%", positive: true }, hint: "today" },
  { label: "Avg. Session Time", value: "24m", icon: <Clock className="h-4 w-4" />, trend: { value: "+1.5m", positive: true }, hint: "per user" },
  { label: "Course Completion Rate", value: "68%", icon: <GraduationCap className="h-4 w-4" />, trend: { value: "+3.4%", positive: true }, hint: "all courses" },
];

const engagement = [
  { week: "W1", views: 3200, enrollments: 500 },
  { week: "W2", views: 3600, enrollments: 540 },
  { week: "W3", views: 4100, enrollments: 610 },
  { week: "W4", views: 4400, enrollments: 660 },
  { week: "W5", views: 4800, enrollments: 720 },
];

const topCourses = [
  { title: "Web Development Masterclass", views: 12400, completion: 72 },
  { title: "JavaScript Fundamentals", views: 9800, completion: 78 },
  { title: "React Advanced Patterns", views: 8600, completion: 65 },
  { title: "Python for Data Science", views: 7200, completion: 61 },
];

export default function AdminAnalytics() {
  const [metricTab, setMetricTab] = React.useState("views");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} className="animate-slide-up" />
        ))}
      </section>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-sm font-semibold">Content Engagement</CardTitle>
            <CardDescription className="text-xs">Views and enrollments over the last 5 weeks</CardDescription>
          </div>
          <Tabs value={metricTab} onValueChange={setMetricTab} className="w-auto">
            <TabsList className="h-8">
              <TabsTrigger value="views" className="text-xs">Views</TabsTrigger>
              <TabsTrigger value="enrollments" className="text-xs">Enrollments</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={engagement} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
              <XAxis dataKey="week" fontSize={11} tickLine={false} axisLine={false} stroke="#94A3B8" dy={8} />
              <YAxis fontSize={11} tickLine={false} axisLine={false} stroke="#94A3B8" width={40} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 12 }} />
              <Bar
                dataKey={metricTab}
                fill="#4F46E5"
                radius={[4, 4, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Top Performing Courses</CardTitle>
          <CardDescription className="text-xs">By views and completion rate</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {topCourses.map((course) => (
            <div key={course.title} className="flex items-center gap-3 rounded-lg border p-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                <MousePointerClick className="h-4 w-4 text-brand" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{course.title}</p>
                <p className="text-xs text-muted-foreground">{course.views.toLocaleString()} views</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-success" style={{ width: `${course.completion}%` }} />
                </div>
                <span className="text-xs font-medium text-success">{course.completion}%</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}