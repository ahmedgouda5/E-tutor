"use client";

import { motion } from "motion/react";
import { FolderOpen, Plus, BookOpen, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/stat-card";

const stats = [
  { label: "Categories", value: "12", icon: <FolderOpen className="h-4 w-4" />, hint: "top-level" },
  { label: "Subcategories", value: "48", icon: <FolderOpen className="h-4 w-4" />, hint: "nested topics" },
  { label: "Total Courses", value: "312", icon: <BookOpen className="h-4 w-4" />, hint: "categorized" },
];

const categories = [
  { name: "Development", courses: 84, icon: "💻", color: "bg-brand/10 text-brand" },
  { name: "Design", courses: 56, icon: "🎨", color: "bg-info/10 text-info" },
  { name: "Business", courses: 42, icon: "📊", color: "bg-success/10 text-success" },
  { name: "Marketing", courses: 38, icon: "📣", color: "bg-warning/10 text-warning" },
  { name: "Data Science", courses: 31, icon: "📈", color: "bg-brand/10 text-brand" },
  { name: "Personal Development", courses: 25, icon: "🌱", color: "bg-success/10 text-success" },
];

export default function AdminCategories() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} className="animate-slide-up" />
        ))}
      </section>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">Course Categories</CardTitle>
            <CardDescription className="text-xs">Organize educational content by topic</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-1.5 h-4 w-4" /> Add Category
          </Button>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent/50">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${cat.color}`}>
                {cat.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{cat.name}</p>
                <p className="text-xs text-muted-foreground">{cat.courses} courses</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}