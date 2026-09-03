"use client";

import * as React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Flame,
  Clock,
  Calendar,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Award,
  ChevronRight,
  MessageSquare,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StatCard } from "@/components/shared/stat-card";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";

const continueLearning = [
  {
    id: 1,
    title: "Complete Website Responsive Design",
    course: "Web Development Masterclass",
    image: "/courses/course-1.png",
    progress: 68,
    nextLesson: "Chapter 5 · CSS Grid Mastery",
    duration: "25 min",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    course: "Frontend Engineering",
    image: "/courses/course-2.png",
    progress: 45,
    nextLesson: "Chapter 3 · Arrays & Methods",
    duration: "32 min",
  },
  {
    id: 3,
    title: "React & Modern Frontend",
    course: "Advanced Frontend",
    image: "/courses/course-3.png",
    progress: 80,
    nextLesson: "Chapter 7 · Custom Hooks",
    duration: "18 min",
  },
];

const upcomingDeadlines = [
  { title: "Assignment: Responsive Portfolio", course: "Web Development", due: "Today, 11:59 PM", type: "assignment", urgent: true },
  { title: "Quiz: JavaScript Arrays & Objects", course: "JavaScript", due: "Friday, 9:00 AM", type: "quiz", urgent: false },
  { title: "Mid-term: Frontend Fundamentals", course: "Frontend", due: "Tue, Sep 15", type: "exam", urgent: false },
];

const recommendations = [
  { id: 1, title: "CSS Grid Mastery", category: "Design", image: "/courses/course-9.png", rating: 4.8, students: "12K" },
  { id: 2, title: "Advanced React Patterns", category: "Development", image: "/courses/course-8.png", rating: 4.9, students: "8.5K" },
  { id: 3, title: "JavaScript Performance", category: "Development", image: "/courses/course-6.png", rating: 4.7, students: "15K" },
];

const achievements = [
  { icon: <Flame className="h-4 w-4" />, label: "3-day streak", color: "bg-warning/10 text-warning" },
  { icon: <Award className="h-4 w-4" />, label: "Completed JS Basics", color: "bg-success/10 text-success" },
  { icon: <Target className="h-4 w-4" />, label: "10 lessons this week", color: "bg-brand/10 text-brand" },
];

export default function StudentDashboard() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Welcome banner */}
      <section className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-brand/10 via-background to-cyan-500/5 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold sm:text-2xl">Ready to learn, John?</h1>
              <Badge variant="success" className="gap-1">
                <Flame className="h-3 w-3" />
                3-day streak
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              You have 2 lessons and 1 assignment due today. Let's keep making progress.
            </p>
          </div>
          <Button className="gap-2">
            <Play className="h-4 w-4" />
            Continue Learning
          </Button>
        </div>
      </section>

      {/* Quick stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Courses Enrolled" value="4" icon={<BookOpen className="h-4 w-4" />} trend={{ value: "+1", positive: true }} hint="this month" />
        <StatCard label="Completed Lessons" value="24" icon={<CheckCircle2 className="h-4 w-4" />} />
        <StatCard label="Hours Learned" value="18.5" icon={<Clock className="h-4 w-4" />} trend={{ value: "+3h", positive: true }} hint="this week" />
        <StatCard label="Certificates" value="1" icon={<Award className="h-4 w-4" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Continue Learning */}
        <section className="space-y-4 lg:col-span-2">
          <PageHeader>
            <div>
              <PageTitle className="text-base">Continue Learning</PageTitle>
              <PageDescription className="text-xs">
                Pick up where you left off
              </PageDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/ELearn/student/courses">
                View all <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </PageHeader>

          <div className="space-y-3">
            {continueLearning.map((item) => (
              <Card key={item.id} className="transition-all hover:border-brand/30 hover:shadow-md">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="line-clamp-1 text-sm font-medium">{item.title}</h4>
                      <Badge variant="outline" className="shrink-0 text-[10px]">
                        {item.progress}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.nextLesson}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-brand"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground shrink-0">
                        <Clock className="h-3 w-3" />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  <Button size="icon" className="h-9 w-9 shrink-0 rounded-full">
                    <Play className="h-3.5 w-3.5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Right column */}
        <section className="space-y-6">
          {/* Upcoming deadlines */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <Calendar className="h-4 w-4 text-brand" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingDeadlines.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      item.urgent ? "bg-destructive" : "bg-warning"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <p className="line-clamp-1 text-xs font-medium">{item.title}</p>
                      {item.urgent && (
                        <Badge variant="destructive" className="shrink-0 text-[9px] px-1 py-0">
                          Due today
                        </Badge>
                      )}
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      {item.course} · {item.due}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">This Week's Milestones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-lg border p-2.5"
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${achievement.color}`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium">{achievement.label}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {i === 0 ? "Keep it up!" : i === 1 ? "Great work!" : "Almost there!"}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Recommended courses */}
      <section>
        <PageHeader>
          <div>
            <PageTitle className="text-base">Recommended for You</PageTitle>
            <PageDescription className="text-xs">
              Based on your learning history
            </PageDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/ELearn/courses">
              Explore all <ChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </PageHeader>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all hover:border-brand/30 hover:shadow-md">
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="h-32 w-full object-cover"
                />
                <div className="absolute left-3 top-3">
                  <Badge className="bg-background/80 text-foreground backdrop-blur-sm">{course.category}</Badge>
                </div>
              </div>
              <CardContent className="p-4 space-y-2">
                <h4 className="line-clamp-1 text-sm font-medium">{course.title}</h4>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>⭐ {course.rating}</span>
                  <span>{course.students} students</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.main>
  );
}