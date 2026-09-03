"use client";

import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Users,
  BookOpen,
  Wallet,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
  Ban,
  UserCheck,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/shared/stat-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    label: "Total Users",
    value: "24,581",
    icon: <Users className="h-4 w-4" />,
    trend: { value: "+2.1%", positive: true },
    hint: "this week",
  },
  {
    label: "Active Courses",
    value: "312",
    icon: <BookOpen className="h-4 w-4" />,
    trend: { value: "+14", positive: true },
    hint: "this month",
  },
  {
    label: "Platform Revenue",
    value: "$248,400",
    icon: <Wallet className="h-4 w-4" />,
    trend: { value: "+9.4%", positive: true },
    hint: "vs last month",
  },
  {
    label: "Instructor Count",
    value: "1,892",
    icon: <UserCheck className="h-4 w-4" />,
    trend: { value: "+3.2%", positive: true },
    hint: "this quarter",
  },
];

const chartData = [
  { day: "Jan", users: 21000, revenue: 194000 },
  { day: "Feb", users: 21800, revenue: 208000 },
  { day: "Mar", users: 22500, revenue: 221000 },
  { day: "Apr", users: 23100, revenue: 230000 },
  { day: "May", users: 23800, revenue: 239000 },
  { day: "Jun", users: 24500, revenue: 248400 },
];

const pendingActions = [
  {
    id: 1,
    title: "Course Moderation Queue",
    desc: "24 courses awaiting review",
    icon: <ShieldCheck className="h-4 w-4" />,
    tone: "info",
    url: "/admin/courses/moderation",
  },
  {
    id: 2,
    title: "Instructor Verification",
    desc: "12 instructors pending approval",
    icon: <UserCheck className="h-4 w-4" />,
    tone: "success",
    url: "/admin/users/verification",
  },
  {
    id: 3,
    title: "Reported Content",
    desc: "5 reports need attention",
    icon: <AlertTriangle className="h-4 w-4" />,
    tone: "warning",
    url: "/admin/reports",
  },
  {
    id: 4,
    title: "Suspended Accounts",
    desc: "3 accounts under review",
    icon: <Ban className="h-4 w-4" />,
    tone: "destructive",
    url: "/admin/users/suspended",
  },
];

const topInstructors = [
  { name: "Ahmed Gouda", students: 4210, revenue: 18420, avatar: "AG" },
  { name: "Sarah Chen", students: 3890, revenue: 16210, avatar: "SC" },
  { name: "Mona Ali", students: 3540, revenue: 14980, avatar: "MA" },
  { name: "Omar Hassan", students: 2980, revenue: 12350, avatar: "OH" },
];

const recentReports = [
  { name: "Course 'Investment Basics' flagged", reporter: "Review by Sarah", time: "2h ago", severity: "high" },
  { name: "Inappropriate message report", reporter: "From Óscar", time: "4h ago", severity: "medium" },
  { name: "Duplicate course detected", reporter: "Auto-detected", time: "1d ago", severity: "low" },
];

export default function AdminOverview() {
  const [activeTab, setActiveTab] = React.useState("users");

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Overview banner */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#3B2A63] via-[#2B2F5A] to-brand/80 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-32 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <div>
              <h1 className="text-xl font-semibold text-white sm:text-2xl">
                Platform Overview
              </h1>
              <p className="mt-1 text-sm text-white/60">
                Monitor platform health, users, and revenue at a glance.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="border-0 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15">
                <ShieldCheck className="h-3 w-3 mr-1" />
                24 courses in review
              </Badge>
              <Badge className="border-0 bg-warning/20 text-white backdrop-blur-sm">
                <AlertTriangle className="h-3 w-3 mr-1" />
                5 reported items
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-white text-slate-900 hover:bg-white/90">
              View Reports
            </Button>
          </div>
        </div>
      </section>

      {/* KPI cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <StatCard key={stat.label} {...stat} className="animate-slide-up" />
        ))}
      </section>

      {/* Main two-column area */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left: chart */}
        <section className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-sm font-semibold">Platform Growth</CardTitle>
                <CardDescription className="text-xs">Users and revenue over the last 6 months</CardDescription>
              </div>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                <TabsList className="h-8">
                  <TabsTrigger value="users" className="text-xs">Users</TabsTrigger>
                  <TabsTrigger value="revenue" className="text-xs">Revenue</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="h-64 pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                  <defs>
                    <linearGradient id="adminColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" fontSize={11} tickLine={false} axisLine={false} stroke="#94A3B8" dy={8} />
                  <YAxis fontSize={11} tickLine={false} axisLine={false} stroke="#94A3B8" width={44} />
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 12 }}
                  />
                  <Area
                    type="monotone"
                    dataKey={activeTab === "users" ? "users" : "revenue"}
                    stroke="#4F46E5"
                    strokeWidth={2}
                    fill="url(#adminColor)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top instructors */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-sm font-semibold">Top Instructors</CardTitle>
                <CardDescription className="text-xs">By revenue this month</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                View all <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {topInstructors.map((instructor) => (
                <div
                  key={instructor.name}
                  className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                    {instructor.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{instructor.name}</p>
                    <p className="text-xs text-muted-foreground">{instructor.students} students</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-success">
                    <DollarSign className="h-3 w-3" />
                    ${instructor.revenue.toLocaleString()}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Right sidebar */}
        <section className="space-y-6">
          {/* Pending actions */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold">Actions Needed</CardTitle>
              <CardDescription className="text-xs">Items requiring moderator attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingActions.map((action) => (
                <Link
                  key={action.id}
                  href={action.url}
                  className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:border-brand/30 hover:bg-accent/50"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${toneClasses(action.tone)}`}>
                    {action.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium">{action.title}</p>
                    <p className="text-[11px] text-muted-foreground">{action.desc}</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Recent reports */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-warning" />
                Recent Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentReports.map((report, i) => (
                <div key={i} className="rounded-lg border p-3 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium">{report.name}</p>
                    <Badge variant={severityVariant(report.severity)} className="text-[10px]">
                      {report.severity}
                    </Badge>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {report.reporter} · {report.time}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System health */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Uptime", value: "99.98%", tone: "text-success" },
                { label: "API Latency", value: "42ms", tone: "text-success" },
                { label: "Storage Used", value: "68%", tone: "text-warning" },
                { label: "Daily Active Users", value: "8,412", tone: "text-brand" },
              ].map((metric) => (
                <div key={metric.label} className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{metric.label}</span>
                  <span className={`text-xs font-semibold ${metric.tone}`}>{metric.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </motion.main>
  );
}

function toneClasses(tone: string) {
  switch (tone) {
    case "info":
      return "bg-info/10 text-info";
    case "success":
      return "bg-success/10 text-success";
    case "warning":
      return "bg-warning/10 text-warning";
    case "destructive":
      return "bg-destructive/10 text-destructive";
    default:
      return "bg-brand/10 text-brand";
  }
}

function severityVariant(severity: string) {
  return severity === "high"
    ? "destructive"
    : severity === "medium"
      ? "warning"
      : "info";
}