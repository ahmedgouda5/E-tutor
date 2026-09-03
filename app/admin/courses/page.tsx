"use client";

import * as React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  BookOpen,
  ShieldCheck,
  Star,
  Users,
  AlertCircle,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/shared/stat-card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const stats = [
  { label: "Total Courses", value: "312", icon: <BookOpen className="h-4 w-4" />, hint: "published" },
  { label: "In Review", value: "24", icon: <ShieldCheck className="h-4 w-4" />, hint: "pending moderation" },
  { label: "Total Enrollments", value: "48,902", icon: <Users className="h-4 w-4" />, hint: "all courses" },
  { label: "Flagged Courses", value: "7", icon: <AlertCircle className="h-4 w-4" />, hint: "need review" },
];

const courses: {
  id: number;
  title: string;
  image: string;
  instructor: string;
  students: number;
  rating: number;
  revenue: string;
  status: CourseStatus;
}[] = [
  { id: 1, title: "Web Development Masterclass", image: "/courses/course-1.png", instructor: "Ahmed Gouda", students: 4210, rating: 4.9, revenue: "$21,400", status: "published" },
  { id: 2, title: "JavaScript Fundamentals", image: "/courses/course-2.png", instructor: "Sarah Chen", students: 3890, rating: 4.8, revenue: "$18,200", status: "published" },
  { id: 3, title: "React Advanced Patterns", image: "/courses/course-3.png", instructor: "Ahmed Gouda", students: 3540, rating: 4.7, revenue: "$16,900", status: "review" },
  { id: 4, title: "UX/UI Design Principles", image: "/courses/course-4.png", instructor: "Mona Ali", students: 2980, rating: 4.6, revenue: "$14,300", status: "published" },
  { id: 5, title: "Python for Data Science", image: "/courses/course-5.png", instructor: "Omar Hassan", students: 2620, rating: 4.8, revenue: "$12,800", status: "flagged" },
  { id: 6, title: "Mobile App Development", image: "/courses/course-6.png", instructor: "Sarah Chen", students: 2310, rating: 4.5, revenue: "$11,100", status: "draft" },
];

type CourseStatus = "published" | "review" | "flagged" | "draft";

const statusStyles: Record<CourseStatus, { label: string; className: string }> = {
  published: { label: "Published", className: "border-0 bg-success/10 text-success" },
  review: { label: "In Review", className: "border-0 bg-warning/10 text-warning" },
  flagged: { label: "Flagged", className: "border-0 bg-destructive/10 text-destructive" },
  draft: { label: "Draft", className: "border-0 bg-muted text-muted-foreground" },
};

export default function AdminCourses() {
  const [query, setQuery] = React.useState("");

  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

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
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-base">Course Catalog</CardTitle>
            <CardDescription className="text-xs">Review and manage all courses on the platform</CardDescription>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-8 sm:w-64"
            />
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <Card key={course.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative">
                  <div className="relative h-36 w-full">
                    <Image src={course.image} alt={course.title} fill className="object-cover" />
                  </div>
                  <div className="absolute left-3 top-3">
                    <Badge className={statusStyles[course.status].className}>
                      {statusStyles[course.status].label}
                    </Badge>
                  </div>
                  <div className="absolute right-2 top-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7 bg-background/80 backdrop-blur-sm hover:bg-background">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Course</DropdownMenuItem>
                        <DropdownMenuItem>Moderate</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="line-clamp-1 text-sm font-semibold">{course.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">by {course.instructor}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {course.students.toLocaleString()}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                      {course.rating}
                    </span>
                    <span className="ml-auto font-medium text-foreground">{course.revenue}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center">
              <BookOpen className="mx-auto mb-3 h-8 w-8 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">No courses match your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}