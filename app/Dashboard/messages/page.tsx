"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Search, Send, MoreVertical, Paperclip, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/components/shared/empty-state";

const conversations = [
  { id: 1, name: "Sarah Ahmed", avatar: "SA", message: "I finished the assignments!", time: "2m ago", unread: 2, online: true },
  { id: 2, name: "Mohamed Ali", avatar: "MA", message: "Can we schedule a review?", time: "1h ago", unread: 0, online: false },
  { id: 3, name: "Fatima Nour", avatar: "FN", message: "Thank you for the feedback!", time: "3h ago", unread: 0, online: true },
  { id: 4, name: "John Smith", avatar: "JS", message: "I'm struggling with lesson 5", time: "1d ago", unread: 1, online: false },
];

const messages = [
  { id: 1, from: "them", text: "Hi Ahmed, I have a question about the final project.", time: "2:30 PM" },
  { id: 2, from: "me", text: "Of course Sarah! What do you need help with?", time: "2:31 PM" },
  { id: 3, from: "them", text: "I'm not sure about the responsive navbar. Should it use flex or grid?", time: "2:33 PM" },
  { id: 4, from: "me", text: "I'd recommend flexbox for the navbar - it's more flexible for the items at different breakpoints. Check lesson 4.2 for the details!", time: "2:35 PM" },
  { id: 5, from: "them", text: "Perfect! That makes sense. I'll rewatch that lesson. Thank you!", time: "2:36 PM" },
];

export default function MessagesPage() {
  const [activeChat, setActiveChat] = React.useState(1);
  const [input, setInput] = React.useState("");

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
            Communicate with your students
          </PageDescription>
        </div>
      </PageHeader>

      <div className="grid h-[520px] overflow-hidden rounded-xl border bg-card lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col border-r">
          <div className="border-b p-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="bg-secondary/50 pl-9" />
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
                    <AvatarFallback className="bg-brand/10 text-brand text-xs">
                      {conv.avatar}
                    </AvatarFallback>
                  </Avatar>
                  {conv.online && (
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-success" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <p className="truncate text-sm font-medium">{conv.name}</p>
                    <span className="text-[10px] text-muted-foreground shrink-0">{conv.time}</span>
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
                <AvatarFallback className="bg-brand/10 text-brand text-xs">SA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Sarah Ahmed</p>
                <p className="text-[10px] text-success">Online</p>
              </div>
            </div>
            <Button variant="ghost" size="icon-sm">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div
                key={msg.id}
                className={cn(
                  "flex",
                  msg.from === "me" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[75%] space-y-1",
                    msg.from === "me" ? "text-right" : "text-left"
                  )}
                >
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
                  <p className="text-[10px] text-muted-foreground">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-3">
            <div className="flex items-end gap-2">
              <Button variant="ghost" size="icon-sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon-sm">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button size="icon" className="h-9 w-9">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}