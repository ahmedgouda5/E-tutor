"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Plus, Search, Users, Star, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { AllCourses } from "@/lib/data";

export default function MyCoursesPage() {
  const [search, setSearch] = React.useState("");
  const [status, setStatus] = React.useState("all");

  const filtered = AllCourses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

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
            Manage your published courses and content
          </PageDescription>
        </div>
        <Button asChild>
          <Link href="/Dashboard/Newcourse">
            <Plus className="mr-1 h-4 w-4" />
            Create New Course
          </Link>
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Courses" value="10" />
        <StatCard label="Published" value="8" trend={{ value: "2 drafts", positive: false }} />
        <StatCard label="Total Students" value="1,284" trend={{ value: "+12%", positive: true }} />
        <StatCard label="Avg. Rating" value="4.7" trend={{ value: "+0.2", positive: true }} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex rounded-lg border bg-background p-0.5">
          {["all", "published", "draft"].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-md px-4 py-1.5 text-xs font-medium capitalize transition-colors ${
                status === s
                  ? "bg-brand text-brand-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <Link href={`/Dashboard/Mycourses/${course.id}`} className="block">
              <Card className="overflow-hidden transition-all hover:border-brand/30 hover:shadow-md">
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={180}
                    className="h-36 w-full object-cover"
                  />
                  <div className="absolute left-3 top-3">
                    <Badge variant="brand" className="backdrop-blur-sm bg-brand/80">
                      Published
                    </Badge>
                  </div>
                  <button
                    className="absolute right-3 top-3 rounded-full bg-background/80 p-1.5 backdrop-blur-sm hover:bg-background"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <MoreHorizontal className="h-3.5 w-3.5" />
                  </button>
                </div>
                <CardContent className="p-4 space-y-3">
                  <span className="text-[10px] font-semibold text-brand uppercase tracking-wider">
                    {course.category}
                  </span>
                  <h3 className="line-clamp-2 text-sm font-medium">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      128 students
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      4.7
                    </span>
                    <span className="flex items-center gap-1">
                      {course.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-3 text-xs">
                    <div className="flex-1 pr-3">
                      <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
                        <span>Completion rate</span>
                        <span>68%</span>
                      </div>
                      <div className="h-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[68%] rounded-full bg-success" />
                      </div>
                    </div>
                    <Button variant="outline" size="xs" className="shrink-0">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}