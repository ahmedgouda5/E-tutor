"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Search,
  Pin,
  MessageSquare,
  Eye,
  Shield,
  Flag,
  UserX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { LikeButton } from "@/components/shared/like-button";

const posts = [
  {
    id: 1,
    author: "Sarah Ahmed",
    avatar: "SA",
    role: "Student",
    title: "Question about responsive design approach",
    excerpt: "When building a responsive portfolio, should I start with desktop or mobile? I'm seeing conflicting advice...",
    category: "Web Development",
    likes: 24,
    comments: 12,
    views: 340,
    time: "2h ago",
    pinned: true,
    type: "question",
  },
  {
    id: 2,
    author: "Ahmed Gouda",
    avatar: "AG",
    role: "Instructor",
    title: "New course content: React Hooks Deep Dive",
    excerpt: "I've just added a new module covering custom hooks, useMemo, and useCallback. Check out the new content in...",
    category: "Announcements",
    likes: 56,
    comments: 18,
    views: 720,
    time: "5h ago",
    pinned: false,
    type: "announcement",
  },
  {
    id: 3,
    author: "Mohamed Ali",
    avatar: "MA",
    role: "Student",
    title: "Study group for JS Fundamentals mid-term",
    excerpt: "Anyone interested in forming a study group for the upcoming mid-term? I'm thinking of scheduling a session...",
    category: "Study Groups",
    likes: 14,
    comments: 8,
    views: 210,
    time: "1d ago",
    pinned: false,
    type: "discussion",
  },
];

export default function CommunityPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Community</PageTitle>
          <PageDescription>
            Manage your course community zones and discussions
          </PageDescription>
        </div>
        <Button>
          <Shield className="mr-1 h-4 w-4" />
          Moderation Queue
        </Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Posts" value="1,245" icon={<MessageSquare className="h-4 w-4" />} trend={{ value: "+18%", positive: true }} hint="this week" />
        <StatCard label="Comments" value="8,432" icon={<MessageSquare className="h-4 w-4" />} />
        <StatCard label="Active Members" value="890" icon={<Shield className="h-4 w-4" />} />
        <StatCard label="Pending Moderation" value="12" trend={{ value: "3 urgent", positive: false }} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search community..." className="pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">All</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">Questions</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">Announcements</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">Study Groups</Badge>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="transition-all hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-brand/10 text-brand text-xs">{post.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">
                      {post.author}
                      <span className="ml-2 text-xs text-muted-foreground">
                        · {post.role} · {post.time}
                      </span>
                    </p>
                    <Badge variant="outline" className="mt-1 h-5 text-[10px] px-2">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                {post.pinned && (
                  <Badge variant="brand" className="gap-1">
                    <Pin className="h-3 w-3" />
                    Pinned
                  </Badge>
                )}
              </div>

              <h4 className="mt-3 font-semibold hover:text-brand transition-colors cursor-pointer">
                {post.title}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>

              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                <LikeButton count={post.likes} size="sm" label={`Like ${post.title}`} />
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3.5 w-3.5" /> {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> {post.views}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t pt-3">
                <div className="flex gap-2">
                  <Button size="xs" variant="outline" className="text-[10px]">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    Reply
                  </Button>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
                    <Flag className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon-xs" className="text-muted-foreground">
                    <UserX className="h-3.5 w-3.5" />
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