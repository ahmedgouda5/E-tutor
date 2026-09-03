"use client";

import * as React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Play, Star, Clock, ChevronRight, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EmptyState } from "@/components/shared/empty-state";

const myCourses = [
  {
    id: 1,
    title: "Web Development Masterclass",
    category: "Development",
    image: "/courses/course-1.png",
    instructor: "Ahmed Hassan",
    progress: 68,
    rating: 4.8,
    lessonsCompleted: "14 of 22",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    category: "Development",
    image: "/courses/course-2.png",
    instructor: "Devon Lane",
    progress: 45,
    rating: 4.9,
    lessonsCompleted: "12 of 27",
  },
  {
    id: 3,
    title: "React & Modern Frontend",
    category: "Development",
    image: "/courses/course-3.png",
    instructor: "Jane Cooper",
    progress: 80,
    rating: 4.7,
    lessonsCompleted: "18 of 22",
  },
];

const completedCourses = [
  {
    id: 4,
    title: "HTML & CSS Fundamentals",
    category: "Development",
    image: "/courses/course-9.png",
    instructor: "Albert Flores",
    progress: 100,
    rating: 4.9,
    lessonsCompleted: "16 of 16",
    certificate: true,
  },
];

export default function StudentCourses() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>My Courses</PageTitle>
          <PageDescription>
            Track your enrolled courses and learning progress
          </PageDescription>
        </div>
        <Link href="/ELearn/courses">
          <Badge variant="brand" className="cursor-pointer gap-1 text-xs px-3 py-1.5">
            Explore Courses <ChevronRight className="h-3 w-3" />
          </Badge>
        </Link>
      </PageHeader>

      <Tabs defaultValue="in-progress" className="w-full">
        <TabsList>
          <TabsTrigger value="in-progress">In Progress ({myCourses.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedCourses.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress" className="mt-4 space-y-4">
          {myCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all hover:border-brand/30 hover:shadow-md">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-48 shrink-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={300}
                      height={200}
                      className="h-32 w-full object-cover sm:h-full"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                        <Play className="h-4 w-4 fill-black" />
                      </span>
                    </button>
                  </div>
                  <div className="flex-1 space-y-3 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Badge variant="brand" className="text-[10px]">{course.category}</Badge>
                        <h3 className="mt-2 font-semibold">{course.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {course.instructor} · {course.lessonsCompleted} lessons completed
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        {course.rating}
                      </span>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold">{course.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-brand transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        Last watched: Chapter {Math.min(5, Math.ceil(course.progress / 10))}
                      </span>
                      <Link href={`/ELearn/courses/${course.id}/gift/watch`} passHref>
                        <Badge className="cursor-pointer bg-brand text-brand-foreground hover:bg-brand/90">
                          Continue
                        </Badge>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <div className="space-y-4">
            {completedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative sm:w-48 shrink-0">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="h-32 w-full object-cover sm:h-full"
                      />
                    </div>
                    <div className="flex-1 space-y-3 p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <Badge variant="success">Completed</Badge>
                        {course.certificate && (
                          <Badge variant="brand" className="gap-1">
                            <GraduationCap className="h-3 w-3" />
                            Certificate Earned
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-xs text-muted-foreground">{course.instructor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.main>
  );
}