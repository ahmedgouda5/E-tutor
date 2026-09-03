"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Wallet,
  Building2,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const stats = [
  { label: "Total Revenue", value: "$13,804", icon: <Wallet className="h-4 w-4" />, trend: { value: "+12%", positive: true }, hint: "all time" },
  { label: "Current Balance", value: "$16,593", icon: <Building2 className="h-4 w-4" />, trend: { value: "Available", positive: true } },
  { label: "Pending Balance", value: "$2,341", icon: <TrendingUp className="h-4 w-4" />, hint: "clears in 3 days" },
  { label: "Today's Revenue", value: "$162", icon: <ArrowUpRight className="h-4 w-4" />, trend: { value: "+8%", positive: true }, hint: "vs yesterday" },
];

const chartData = [
  { date: "Aug 1", value: 30 }, { date: "Aug 5", value: 55 }, { date: "Aug 9", value: 40 },
  { date: "Aug 13", value: 75 }, { date: "Aug 17", value: 60 }, { date: "Aug 21", value: 85 },
  { date: "Aug 25", value: 65 }, { date: "Aug 29", value: 95 }, { date: "Sep 1", value: 80 },
];

const transactions = [
  { date: "Sep 2, 2026", type: "Sale", description: "Machine Learning A–Z", value: "+$49", status: "Completed", isDeposit: true },
  { date: "Sep 1, 2026", type: "Sale", description: "Complete Web Dev Bootcamp", value: "+$57", status: "Completed", isDeposit: true },
  { date: "Aug 30, 2026", type: "Withdrawal", description: "Bank transfer to Amex ****4555", value: "-$2,300", status: "Processing", isDeposit: false },
  { date: "Aug 28, 2026", type: "Sale", description: "Learn Python Masterclass", value: "+$65", status: "Completed", isDeposit: true },
  { date: "Aug 25, 2026", type: "Refund", description: "Digital Marketing Course", value: "-$42", status: "Completed", isDeposit: false },
];

const topCourses = [
  { name: "Complete Web Dev Bootcamp", revenue: "$3,245", students: 210, percent: 24 },
  { name: "Machine Learning A–Z", revenue: "$2,890", students: 178, percent: 21 },
  { name: "Learn Python Masterclass", revenue: "$2,450", students: 165, percent: 18 },
];

export default function EarningPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Earnings</PageTitle>
          <PageDescription>
            Track your course revenue and payouts
          </PageDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-1 h-4 w-4" />
            Export
          </Button>
          <Button>
            <CreditCard className="mr-1 h-4 w-4" />
            Withdraw
          </Button>
        </div>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Revenue chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold">Revenue Overview</CardTitle>
            <CardDescription className="text-xs">Last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  dy={8}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 8,
                    border: "1px solid #E2E8F0",
                    fontSize: 12,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                  formatter={(value) => [`$${Number(value) * 0.2}`, "Revenue"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4F46E5"
                  strokeWidth={2.5}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top courses */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold">Top Performing Courses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCourses.map((course) => (
              <div key={course.name} className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="line-clamp-1 text-xs font-medium">{course.name}</p>
                  <span className="shrink-0 text-xs font-semibold">{course.revenue}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>{course.students} students</span>
                  <span>{course.percent}% of revenue</span>
                </div>
                <div className="h-1 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand"
                    style={{ width: `${course.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold">Transaction History</CardTitle>
          <CardDescription className="text-xs">All your financial activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-xs font-medium text-muted-foreground">
                  <th className="pb-3 pr-4 font-medium">Date</th>
                  <th className="pb-3 pr-4 font-medium">Description</th>
                  <th className="pb-3 pr-4 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-accent/40">
                    <td className="py-3 pr-4 text-xs text-muted-foreground whitespace-nowrap">
                      {tx.date}
                    </td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                            tx.isDeposit
                              ? "bg-success/10 text-success"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {tx.isDeposit ? (
                            <ArrowDownLeft className="h-3.5 w-3.5" />
                          ) : (
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-medium">{tx.description}</p>
                          <p className="text-[10px] text-muted-foreground">{tx.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className={`py-3 pr-4 text-xs font-semibold ${tx.isDeposit ? "text-success" : "text-destructive"}`}>
                      {tx.value}
                    </td>
                    <td className="py-3">
                      <Badge
                        variant="outline"
                        className={`border-0 ${
                          tx.status === "Completed"
                            ? "bg-success/10 text-success"
                            : "bg-warning/10 text-warning"
                        }`}
                      >
                        {tx.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.main>
  );
}