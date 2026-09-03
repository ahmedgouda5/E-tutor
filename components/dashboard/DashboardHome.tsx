"use client";

import * as React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Wallet,
  TrendingUp,
  Clock,
  Star,
  AlertCircle,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/shared/stat-card";
import { SectionHeader } from "@/components/shared/page-header";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const quickStats = [
  {
    label: "Active Courses",
    value: "4",
    icon: <BookOpen className="h-4 w-4" />,
    trend: { value: "2 new", positive: true },
  },
  {
    label: "Total Students",
    value: "1,284",
    icon: <Users className="h-4 w-4" />,
    trend: { value: "+12%", positive: true },
    hint: "this month",
  },
  {
    label: "Monthly Revenue",
    value: "$4,820",
    icon: <Wallet className="h-4 w-4" />,
    trend: { value: "+8%", positive: true },
    hint: "vs last month",
  },
  {
    label: "Avg. Completion",
    value: "68%",
    icon: <TrendingUp className="h-4 w-4" />,
    trend: { value: "+5%", positive: true },
    hint: "30-day trend",
  },
];

const chartData = [
  { day: "Mon", students: 120, revenue: 480 },
  { day: "Tue", students: 145, revenue: 560 },
  { day: "Wed", students: 132, revenue: 520 },
  { day: "Thu", students: 168, revenue: 690 },
  { day: "Fri", students: 190, revenue: 720 },
  { day: "Sat", students: 155, revenue: 640 },
  { day: "Sun", students: 178, revenue: 710 },
];

const pendingGrading = [
  {
    id: 1,
    student: "Sarah Ahmed",
    avatar: "SA",
    course: "Web Development Masterclass",
    assignment: "Final Project - Build a Portfolio",
    submitted: "2 hours ago",
    urgent: true,
  },
  {
    id: 2,
    student: "Mohamed Ali",
    avatar: "MA",
    course: "JavaScript Fundamentals",
    assignment: "Quiz - Arrays & Objects",
    submitted: "5 hours ago",
    urgent: true,
  },
  {
    id: 3,
    student: "Fatima Nour",
    avatar: "FN",
    course: "React Advanced Patterns",
    assignment: "Assignment - Hook Development",
    submitted: "Yesterday",
    urgent: false,
  },
];

const atRiskStudents = [
  {
    name: "John Smith",
    issue: "Not logged in for 14 days",
    avatar: "JS",
    action: "Send reminder",
    level: "high",
  },
  {
    name: "Emma Wilson",
    issue: "Scored below 40% on last quiz",
    avatar: "EW",
    action: "Review quiz",
    level: "high",
  },
  {
    name: "Liam Chen",
    issue: "3 assignments overdue",
    avatar: "LC",
    action: "Check progress",
    level: "medium",
  },
];

const upcomingSchedule = [
  { time: "Today, 3:00 PM", course: "Live Q&A - React Patterns", type: "Live Class", color: "bg-brand" },
  { time: "Thu, 10:00 AM", course: "Mid-term Exam - JS Basics", type: "Exam", color: "bg-warning" },
  { time: "Fri, 2:00 PM", course: "Assignment Due - CSS Grid", type: "Due", color: "bg-success" },
];

const recentReviews = [
  {
    name: "Omar Hassan",
    rating: 5,
    course: "Web Development Masterclass",
    text: "Excellent course! The project-based approach really helped me understand the concepts.",
    time: "2 days ago",
  },
  {
    name: "Nour Smith",
    rating: 4,
    course: "JavaScript Fundamentals",
    text: "Great content, would love more examples on async/await.",
    time: "5 days ago",
  },
];

export default function DashboardHome() {
  const [activeTab, setActiveTab] = React.useState("students");

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Welcome banner */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1A1D3D] via-[#2B2F5A] to-brand/80 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-32 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
        
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <div>
              <h1 className="text-xl font-semibold text-white sm:text-2xl">
                Good morning, Ahmed
              </h1>
              <p className="mt-1 text-sm text-white/60">
                Here's what needs your attention today.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/15 border-0">
                <AlertCircle className="h-3 w-3 mr-1" />
                3 students at risk
              </Badge>
              <Badge className="bg-warning/20 text-white backdrop-blur-sm border-0">
                <Clock className="h-3 w-3 mr-1" />
                4 assignments need grading
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-white text-slate-900 hover:bg-white/90">
              <BookOpen className="h-3.5 w-3.5 mr-1" />
              Manage Content
            </Button>
          </div>
        </div>
      </section>

      {/* KPI cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} className="animate-slide-up" />
        ))}
      </section>

      {/* Main two-column area */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left: chart + enrollment */}
        <section className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-sm font-semibold">Enrollment & Revenue</CardTitle>
                <CardDescription className="text-xs">
                  Last 7 days overview
                </CardDescription>
              </div>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                <TabsList className="h-8">
                  <TabsTrigger value="students" className="text-xs">
                    Students
                  </TabsTrigger>
                  <TabsTrigger value="revenue" className="text-xs">
                    Revenue
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="h-64 pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="day"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    stroke="#94A3B8"
                    dy={8}
                  />
                  <YAxis
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    stroke="#94A3B8"
                    width={36}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #E2E8F0",
                      fontSize: 12,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey={activeTab === "students" ? "students" : "revenue"}
                    stroke="#4F46E5"
                    strokeWidth={2}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pending grading */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-sm font-semibold">Pending Grading</CardTitle>
                <CardDescription className="text-xs">
                  4 submissions requiring attention
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                View all <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingGrading.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 rounded-lg border p-3 transition-colors hover:bg-accent/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                    {item.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate">{item.student}</p>
                      {item.urgent && (
                        <Badge variant="warning" className="px-1.5 py-0 text-[10px]">
                          Urgent
                        </Badge>
                      )}
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {item.course} · {item.assignment}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-[10px] text-muted-foreground">{item.submitted}</span>
                    <Button size="xs" variant="outline" className="text-[10px] h-6">
                      Grade
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Right sidebar */}
        <section className="space-y-6">
          {/* At-risk students */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                  At-Risk Students
                </CardTitle>
                <Badge variant="destructive" className="text-[10px]">3 need help</Badge>
              </div>
              <CardDescription className="text-xs">
                Students who may be falling behind
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {atRiskStudents.map((student) => (
                <div
                  key={student.name}
                  className="rounded-lg border p-3 space-y-2 transition-colors hover:border-brand/30"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning/10 text-[10px] font-semibold text-warning">
                      {student.avatar}
                    </div>
                    <p className="text-xs font-medium">{student.name}</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{student.issue}</p>
                  <Button size="xs" variant="outline" className="w-full h-7 text-[10px]">
                    {student.action}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold">Upcoming Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingSchedule.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-1.5 h-2 w-2 rounded-full ${item.color}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium">{item.course}</p>
                    <p className="text-[10px] text-muted-foreground">{item.time}</p>
                  </div>
                  <Badge variant="outline" className="text-[10px] shrink-0">
                    {item.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent reviews */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold">Recent Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReviews.map((review, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium">{review.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          className={`h-3 w-3 ${
                            s < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="line-clamp-2 text-[11px] text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </motion.main>
  );
}