"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Search, Send, Paperclip } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/components/shared/empty-state";

const conversations = [
  { id: 1, name: "Ahmed Hassan", avatar: "AH", role: "Instructor", message: "Great work on the project!", time: "2m ago", unread: 2, online: true },
  { id: 2, name: "Sarah Ahmed", avatar: "SA", role: "Student", message: "Did you join the study group?", time: "1h ago", unread: 0, online: true },
  { id: 3, name: "Devon Lane", avatar: "DL", role: "Instructor", message: "Here's the feedback on quiz 3", time: "3h ago", unread: 0, online: false },
];

const messages = [
  { id: 1, from: "them", text: "Hey John, great job on the last assignment! I left some feedback for you on the responsive nav component.", time: "2:30 PM" },
  { id: 2, from: "me", text: "Thank you Ahmed! I'll review it right away.", time: "2:32 PM" },
  { id: 3, from: "them", text: "Also, don't forget the course survey this week. Your feedback helps improve the curriculum.", time: "2:35 PM" },
];

export default function StudentMessages() {
  const [activeChat, setActiveChat] = React.useState(1);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Messages</PageTitle>
          <PageDescription>
            Communicate with instructors and peers
          </PageDescription>
        </div>
      </PageHeader>

      {conversations.length > 0 ? (
        <div className="grid h-[480px] overflow-hidden rounded-xl border bg-card lg:grid-cols-[300px_1fr]">
          <div className="flex flex-col border-r">
            <div className="border-b p-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="bg-secondary/50 pl-9" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setActiveChat(conv.id)}
                  className={cn(
                    "flex w-full items-start gap-3 p-3 text-left transition-colors hover:bg-accent/50",
                    activeChat === conv.id && "bg-accent"
                  )}
                >
                  <div className="relative shrink-0">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="text-xs">{conv.avatar}</AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-success" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium">{conv.name}</p>
                      <span className="text-[10px] text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">{conv.message}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground">
                      {conv.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b p-3">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">AH</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Ahmed Hassan</p>
                  <p className="text-[10px] text-success">Online · Instructor</p>
                </div>
              </div>
              <Badge variant="brand" className="text-[10px]">
                Instructor
              </Badge>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn("flex", msg.from === "me" ? "justify-end" : "justify-start")}
                >
                  <div className={cn("max-w-[70%]", msg.from === "me" ? "text-right" : "text-left")}>
                    <div
                      className={cn(
                        "inline-block rounded-2xl px-3 py-2 text-sm",
                        msg.from === "me"
                          ? "bg-brand text-brand-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      )}
                    >
                      {msg.text}
                    </div>
                    <p className="mt-1 text-[10px] text-muted-foreground">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-3">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon-sm" className="shrink-0">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input placeholder="Type a message..." className="flex-1" />
                <Button size="icon" className="h-9 w-9 shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          title="No messages yet"
          description="Start a conversation with your instructor or peers"
          action={<Button size="sm" variant="outline">Start a conversation</Button>}
        />
      )}
    </motion.main>
  );
}