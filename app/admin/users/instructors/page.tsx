"use client";

import { motion } from "motion/react";
import { Users, UserCheck, Star, MoreHorizontal, Mail, ShieldCheck, Ban } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/shared/stat-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stats = [
  { label: "Total Instructors", value: "1,892", icon: <Users className="h-4 w-4" />, hint: "all time" },
  { label: "Verified", value: "1,745", icon: <UserCheck className="h-4 w-4" />, hint: "92% rate" },
  { label: "Avg. Rating", value: "4.6", icon: <Star className="h-4 w-4" />, hint: "across courses" },
];

const instructors = [
  { name: "Ahmed Gouda", email: "ahmed@etutor.com", courses: 12, students: 4210, rating: 4.9, status: "verified" },
  { name: "Sarah Chen", email: "sarah@etutor.com", courses: 8, students: 3890, rating: 4.8, status: "verified" },
  { name: "Mona Ali", email: "mona@etutor.com", courses: 6, students: 2980, rating: 4.7, status: "pending" },
  { name: "Omar Hassan", email: "omar@etutor.com", courses: 5, students: 2620, rating: 4.6, status: "verified" },
];

export default function AdminInstructors() {
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
        <CardHeader>
          <CardTitle className="text-base">All Instructors</CardTitle>
          <CardDescription className="text-xs">Manage verified and pending instructors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {instructors.map((instructor) => (
            <div key={instructor.email} className="flex items-center gap-3 rounded-lg border p-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/instructors/instructor.png" />
                <AvatarFallback className="bg-brand/10 text-brand text-xs">
                  {instructor.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{instructor.name}</p>
                <p className="text-xs text-muted-foreground">
                  {instructor.courses} courses · {instructor.students.toLocaleString()} students
                </p>
              </div>
              <div className="hidden items-center gap-1 sm:flex">
                <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                <span className="text-sm font-medium">{instructor.rating}</span>
              </div>
              <Badge className={instructor.status === "verified" ? "border-0 bg-success/10 text-success" : "border-0 bg-warning/10 text-warning"}>
                {instructor.status}
              </Badge>
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