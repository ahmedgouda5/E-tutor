"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  TrendingUp,
  Users,
  Clock,
  GraduationCap,
  PlayCircle,
  BarChart3,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const completionData = [
  { name: "Web Dev", value: 75 },
  { name: "JavaScript", value: 68 },
  { name: "React", value: 82 },
  { name: "Python", value: 55 },
  { name: "CSS", value: 45 },
];

const engagementData = [
  { name: "Mon", watch: 145, participation: 82 },
  { name: "Tue", watch: 168, participation: 95 },
  { name: "Wed", watch: 132, participation: 74 },
  { name: "Thu", watch: 190, participation: 108 },
  { name: "Fri", watch: 175, participation: 88 },
  { name: "Sat", watch: 120, participation: 62 },
  { name: "Sun", watch: 158, participation: 91 },
];

const distributionData = [
  { name: "Excellent", value: 28, color: "#059669" },
  { name: "Good", value: 35, color: "#4F46E5" },
  { name: "Average", value: 22, color: "#F59E0B" },
  { name: "Failing", value: 15, color: "#DC2626" },
];

const coursePerformance = [
  { name: "Web Development Masterclass", students: 200, completion: 75, avgScore: 84, engagement: "High" },
  { name: "JavaScript Fundamentals", students: 150, completion: 68, avgScore: 72, engagement: "Medium" },
  { name: "React Advanced Patterns", students: 120, completion: 82, avgScore: 88, engagement: "High" },
  { name: "Python for Beginners", students: 180, completion: 55, avgScore: 68, engagement: "Low" },
];

export default function AnalyticsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Analytics</PageTitle>
          <PageDescription>
            Course performance and student engagement insights
          </PageDescription>
        </div>
        <Button variant="outline">
          <Filter className="mr-1 h-4 w-4" />
          Date Range: Last 30 Days
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Watch Time" value="1,245h" icon={<Clock className="h-4 w-4" />} trend={{ value: "+15%", positive: true }} />
        <StatCard label="Avg. Completion" value="68%" icon={<GraduationCap className="h-4 w-4" />} trend={{ value: "+5%", positive: true }} />
        <StatCard label="Total Enrollments" value="1,284" icon={<Users className="h-4 w-4" />} trend={{ value: "+12%", positive: true }} />
        <StatCard label="Engagement Rate" value="79%" icon={<TrendingUp className="h-4 w-4" />} trend={{ value: "+3%", positive: true }} />
      </div>

      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="courses">Course Performance</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="scores">Score Distribution</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-4 space-y-6">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold">Completion Rate by Course</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={completionData} layout="vertical" margin={{ left: 0, right: 20 }}>
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={80}
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #E2E8F0",
                      fontSize: 12,
                    }}
                    formatter={(value) => [`${value}%`, "Completion"]}
                  />
                  <Bar dataKey="value" fill="#4F46E5" radius={[0, 6, 6, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold">Course Performance Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-xs font-medium text-muted-foreground">
                      <th className="py-3 pr-4 font-medium">Course</th>
                      <th className="py-3 pr-4 font-medium">Students</th>
                      <th className="py-3 pr-4 font-medium">Completion</th>
                      <th className="py-3 pr-4 font-medium">Avg. Score</th>
                      <th className="py-3 font-medium">Engagement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursePerformance.map((course) => (
                      <tr key={course.name} className="border-b last:border-0 hover:bg-accent/40">
                        <td className="py-3 pr-4 font-medium">{course.name}</td>
                        <td className="py-3 pr-4">{course.students}</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-16 rounded-full bg-muted overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  course.completion >= 70
                                    ? "bg-success"
                                    : course.completion >= 55
                                      ? "bg-warning"
                                      : "bg-destructive"
                                }`}
                                style={{ width: `${course.completion}%` }}
                              />
                            </div>
                            <span>{course.completion}%</span>
                          </div>
                        </td>
                        <td className="py-3 pr-4 font-medium">{course.avgScore}%</td>
                        <td className="py-3">
                          <Badge
                            variant="outline"
                            className={
                              course.engagement === "High"
                                ? "border-0 bg-success/10 text-success"
                                : course.engagement === "Medium"
                                  ? "border-0 bg-warning/10 text-warning"
                                  : "border-0 bg-destructive/10 text-destructive"
                            }
                          >
                            {course.engagement}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="mt-4">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold">Student Engagement Trend</CardTitle>
              <CardDescription className="text-xs">
                Daily watch time vs. discussion participation
              </CardDescription>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementData}>
                  <XAxis
                    dataKey="name"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    dy={8}
                  />
                  <YAxis
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    width={30}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #E2E8F0",
                      fontSize: 12,
                    }}
                  />
                  <Legend fontSize={11} />
                  <Bar dataKey="watch" name="Watch Time" fill="#4F46E5" radius={[4, 4, 0, 0]} barSize={18} />
                  <Bar dataKey="participation" name="Participation" fill="#06B6D4" radius={[4, 4, 0, 0]} barSize={18} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scores" className="mt-4">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-semibold">Student Score Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex h-64 items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {distributionData.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: 8,
                      border: "1px solid #E2E8F0",
                      fontSize: 12,
                    }}
                    formatter={(value) => [`${value}%`, "Students"]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.main>
  );
}