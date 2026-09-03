"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Star, ThumbsUp, MessageSquare, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";

const reviews = [
  {
    id: 1,
    name: "Omar Hassan",
    avatar: "OH",
    course: "Web Development Masterclass",
    rating: 5,
    text: "Excellent course! The project-based approach really helped me understand the concepts. The instructor explanations are clear and the projects are practical and industry-relevant.",
    date: "2 days ago",
    helpful: 24,
  },
  {
    id: 2,
    name: "Nour Smith",
    avatar: "NS",
    course: "JavaScript Fundamentals",
    rating: 4,
    text: "Great content overall. Would love more examples on async/await and more challenge exercises. But the fundamentals coverage is really solid.",
    date: "5 days ago",
    helpful: 12,
  },
  {
    id: 3,
    name: "Alex Johnson",
    avatar: "AJ",
    course: "React Advanced Patterns",
    rating: 5,
    text: "This is exactly what I needed to take my React skills to the next level. The custom hooks section alone is worth the price.",
    date: "1 week ago",
    helpful: 8,
  },
  {
    id: 4,
    name: "Maya Patel",
    avatar: "MP",
    course: "Web Development Masterclass",
    rating: 3,
    text: "Good course but some sections feel rushed, especially the backend part. The frontend parts are excellent though.",
    date: "1 week ago",
    helpful: 5,
  },
];

export default function ReviewsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Reviews</PageTitle>
          <PageDescription>
            Manage course reviews and feedback
          </PageDescription>
        </div>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Average Rating" value="4.7 / 5" icon={<Star className="h-4 w-4" />} trend={{ value: "+0.2", positive: true }} hint="this month" />
        <StatCard label="Total Reviews" value="245" icon={<Star className="h-4 w-4" />} />
        <StatCard label="5-Star Reviews" value="198" icon={<Star className="h-4 w-4" />} />
        <StatCard label="Pending Response" value="8" />
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="transition-all hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-brand/10 text-brand text-xs">{review.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.course}</p>
                  </div>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {review.date}
                </Badge>
              </div>

              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {review.text}
              </p>

              <div className="mt-4 flex items-center justify-between border-t pt-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    {review.helpful} helpful
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    Reply as Instructor
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                    <Flag className="mr-1 h-3.5 w-3.5" />
                    Flag
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.main>
  );
}