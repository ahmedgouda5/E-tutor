"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Search,
  MessageSquare,
  Eye,
  Pin,
  Users2,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LikeButton } from "@/components/shared/like-button";

const communityPosts = [
  {
    id: 1,
    author: "Sarah Ahmed",
    avatar: "SA",
    role: "Student",
    course: "Web Development Masterclass",
    time: "2h ago",
    title: "Question about responsive design approach",
    excerpt: "When building a responsive portfolio, should I start with desktop or mobile first? I keep getting conflicting advice...",
    category: "Web Dev",
    likes: 24,
    comments: 12,
    views: 340,
  },
  {
    id: 2,
    author: "Ahmed Hassan",
    avatar: "AH",
    role: "Instructor",
    course: "React Advanced Patterns",
    time: "5h ago",
    title: "New module: Custom Hooks Deep Dive",
    excerpt: "I've just published the new module covering useCallback, useMemo, and custom hook patterns. Check it out!",
    category: "Announcement",
    likes: 56,
    comments: 18,
    views: 720,
  },
  {
    id: 3,
    author: "Fatima Nour",
    avatar: "FN",
    role: "Student",
    course: "JavaScript Fundamentals",
    time: "1d ago",
    title: "Forming a study group for the mid-term",
    excerpt: "Anyone interested in forming a study group for the upcoming JS Fundamentals mid-term? Planning 2 sessions per week.",
    category: "Study Group",
    likes: 14,
    comments: 8,
    views: 210,
  },
];

export default function StudentCommunity() {
  const [activeTab, setActiveTab] = React.useState("feed");

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Learning Community</PageTitle>
          <PageDescription>
            Connect with peers and instructors
          </PageDescription>
        </div>
        <Button>
          <MessageSquare className="mr-1 h-4 w-4" />
          New Post
        </Button>
      </PageHeader>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="feed" className="gap-1">
            <Users2 className="h-3.5 w-3.5" />
            My Feed
          </TabsTrigger>
          <TabsTrigger value="my-courses" className="gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            Course Discussions
          </TabsTrigger>
          <TabsTrigger value="groups" className="gap-1">
            <Users2 className="h-3.5 w-3.5" />
            Study Groups
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          {communityPosts.map((post) => (
            <Card key={post.id} className="transition-all hover:border-brand/30 hover:shadow-md">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-brand/10 text-brand text-xs">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-medium">{post.author}</p>
                        <Badge
                          variant="outline"
                          className={`text-[9px] px-1.5 ${
                            post.role === "Instructor"
                              ? "bg-brand/10 text-brand border-0"
                              : "bg-muted text-muted-foreground border-0"
                          }`}
                        >
                          {post.role}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {post.course} · {post.time}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <Pin className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <h4 className="mt-3 cursor-pointer font-semibold transition-colors hover:text-brand">
                  {post.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <LikeButton count={post.likes} size="sm" label={`Like ${post.title}`} />
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" /> {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" /> {post.views}
                  </span>
                </div>

                <div className="mt-4 border-t pt-3">
                  <Button variant="outline" size="xs">
                    View Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="hidden space-y-6 lg:block">
          <Card>
            <CardContent className="p-4">
              <h4 className="mb-3 text-sm font-semibold">Trending Topics</h4>
              <div className="flex flex-wrap gap-2">
                {["#react-hooks", "#css-grid", "#js-fundamentals", "#career", "#projects", "#job-interview"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="mb-3 text-sm font-semibold">Active Study Groups</h4>
              <div className="space-y-3">
                {["JS Mid-term Prep", "Portfolio Reviews", "React Study Circle"].map((group) => (
                  <div key={group} className="flex items-center gap-2 text-xs">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10">
                      <Users2 className="h-3.5 w-3.5 text-brand" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium">{group}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {group.length * 3} members
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.main>
  );
}