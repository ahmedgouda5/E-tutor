"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Wallet,
  TrendingUp,
  Users,
  DollarSign,
  Download,
  Receipt,
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

const stats = [
  { label: "Platform Revenue", value: "$248,400", icon: <Wallet className="h-4 w-4" />, trend: { value: "+9.4%", positive: true }, hint: "this month" },
  { label: "Commission Earned", value: "$49,680", icon: <DollarSign className="h-4 w-4" />, trend: { value: "+8.1%", positive: true }, hint: "20% take rate" },
  { label: "Payouts Pending", value: "$62,300", icon: <Receipt className="h-4 w-4" />, hint: "next cycle" },
  { label: "Active Subscribers", value: "4,218", icon: <Users className="h-4 w-4" />, trend: { value: "+3.5%", positive: true }, hint: "this month" },
];

const revenueData = [
  { month: "Jan", revenue: 194000 },
  { month: "Feb", revenue: 208000 },
  { month: "Mar", revenue: 221000 },
  { month: "Apr", revenue: 230000 },
  { month: "May", revenue: 239000 },
  { month: "Jun", revenue: 248400 },
];

const pendingPayouts = [
  { instructor: "Ahmed Gouda", amount: "$18,420", status: "Queued", date: "Mon, 14:00" },
  { instructor: "Sarah Chen", amount: "$16,210", status: "Queued", date: "Mon, 14:00" },
  { instructor: "Mona Ali", amount: "$14,980", status: "Processing", date: "Today" },
  { instructor: "Omar Hassan", amount: "$12,350", status: "Queued", date: "Mon, 14:00" },
];

const recentTransactions = [
  { id: "TXN-88241", desc: "Course purchase - Web Dev Masterclass", amount: "+$49.00", status: "Completed" },
  { id: "TXN-88242", desc: "Course purchase - JS Fundamentals", amount: "+$39.00", status: "Completed" },
  { id: "TXN-88243", desc: "Payout to Sarah Chen", amount: "-$16,210", status: "Processing" },
  { id: "TXN-88244", desc: "Course purchase - React Advanced", amount: "+$59.00", status: "Completed" },
];

export default function AdminFinance() {
  const [activeTab, setActiveTab] = React.useState("revenue");

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
            <CardTitle className="text-sm font-semibold">Revenue Overview</CardTitle>
            <CardDescription className="text-xs">Historical platform revenue</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="h-8">
                <TabsTrigger value="revenue" className="text-xs">Revenue</TabsTrigger>
                <TabsTrigger value="commission" className="text-xs">Commission</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Download className="mr-2 h-3.5 w-3.5" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="financeColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" fontSize={11} tickLine={false} axisLine={false} stroke="#94A3B8" dy={8} />
              <YAxis fontSize={11} tickLine={false} axisLine={false} stroke="#94A3B8" width={44} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 12 }}
                formatter={(value) => [`$${Number(value).toLocaleString()}`, activeTab === "revenue" ? "Revenue" : "Commission"]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#4F46E5"
                strokeWidth={2}
                fill="url(#financeColor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pending payouts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div>
              <CardTitle className="text-sm font-semibold">Pending Payouts</CardTitle>
              <CardDescription className="text-xs">Instructor payouts in the next cycle</CardDescription>
            </div>
            <Badge variant="outline" className="text-[10px]">4 pending</Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingPayouts.map((payout, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">{payout.instructor}</p>
                  <p className="text-xs text-muted-foreground">{payout.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold">{payout.amount}</span>
                  <Badge className={payout.status === "Processing" ? "border-0 bg-warning/10 text-warning" : "border-0 bg-success/10 text-success"}>
                    {payout.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent transactions */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold">Recent Transactions</CardTitle>
            <CardDescription className="text-xs">Latest financial activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentTransactions.map((tx, i) => (
              <div key={i} className="flex items-start justify-between gap-3 rounded-lg border p-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{tx.desc}</p>
                  <p className="text-xs text-muted-foreground">{tx.id}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-sm font-semibold ${tx.amount.startsWith("+") ? "text-success" : "text-destructive"}`}>
                    {tx.amount}
                  </span>
                  <Badge className={tx.status === "Completed" ? "border-0 bg-success/10 text-success" : "border-0 bg-warning/10 text-warning"}>
                    {tx.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}