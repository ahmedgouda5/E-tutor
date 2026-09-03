"use client";

import * as React from "react";
import {
  Bell,
  Check,
  CheckCheck,
  GraduationCap,
  MessageSquare,
  Users2,
  ClipboardCheck,
  Award,
  Wallet,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState } from "@/components/shared/empty-state";

type NotificationItem = {
  id: number;
  type: "assignment" | "grade" | "message" | "community" | "certificate" | "payment";
  title: string;
  description: string;
  time: string;
  read: boolean;
  action?: string;
};

const notifications: NotificationItem[] = [
  {
    id: 1,
    type: "assignment",
    title: "Assignment due today",
    description: "Responsive Portfolio assignment is due at 11:59 PM",
    time: "2h ago",
    read: false,
    action: "View assignment",
  },
  {
    id: 2,
    type: "grade",
    title: "Quiz result available",
    description: "Your score on JavaScript Arrays & Objects quiz: 82%",
    time: "5h ago",
    read: false,
    action: "View result",
  },
  {
    id: 3,
    type: "message",
    title: "New message from Ahmed Hassan",
    description: "Great work on the last project! I left some feedback.",
    time: "1d ago",
    read: true,
    action: "View message",
  },
  {
    id: 4,
    type: "community",
    title: "New reply on your post",
    description: "Fatima Nour replied to your question about CSS Grid",
    time: "2d ago",
    read: true,
    action: "View thread",
  },
  {
    id: 5,
    type: "certificate",
    title: "Certificate earned!",
    description: "You earned the HTML & CSS Fundamentals certificate",
    time: "3d ago",
    read: true,
    action: "View certificate",
  },
  {
    id: 6,
    type: "payment",
    title: "Payment processed",
    description: "Successfully enrolled in React Advanced Patterns",
    time: "1w ago",
    read: true,
  },
];

const typeStyles: Record<string, { icon: typeof Bell; bg: string }> = {
  assignment: { icon: ClipboardCheck, bg: "bg-warning/10 text-warning" },
  grade: { icon: GraduationCap, bg: "bg-brand/10 text-brand" },
  message: { icon: MessageSquare, bg: "bg-info/10 text-info" },
  community: { icon: Users2, bg: "bg-success/10 text-success" },
  certificate: { icon: Award, bg: "bg-success/10 text-success" },
  payment: { icon: Wallet, bg: "bg-brand/10 text-brand" },
};

interface NotificationCenterProps {
  open: boolean;
  onClose: () => void;
}

export function NotificationCenter({ open, onClose }: NotificationCenterProps) {
  const [activeTab, setActiveTab] = React.useState("all");
  const [items, setItems] = React.useState(notifications);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  const filtered = activeTab === "all"
    ? items
    : activeTab === "unread"
      ? items.filter((n) => !n.read)
      : items.filter((n) => {
          const hasAction = !!n.action;
          return activeTab === "action" ? hasAction : !hasAction;
        });

  const unreadCount = items.filter((n) => !n.read).length;

  const markAllRead = () => {
    setItems(items.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: number) => {
    setItems(items.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md animate-slide-left bg-card shadow-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10">
                <Bell className="h-4 w-4 text-brand" />
              </div>
              <div>
                <h2 className="text-sm font-semibold">Notifications</h2>
                <p className="text-xs text-muted-foreground">
                  {unreadCount} unread
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={markAllRead}
                className="rounded-md p-2 text-xs text-brand hover:bg-accent"
                title="Mark all as read"
              >
                <CheckCheck className="h-4 w-4" />
              </button>
              <button
                onClick={onClose}
                className="rounded-md p-2 hover:bg-accent"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b px-5 py-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                <TabsTrigger value="unread" className="flex-1">
                  Unread {unreadCount > 0 && (
                    <span className="ml-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground">
                      {unreadCount}
                    </span>
                  )}
                </TabsTrigger>
                <TabsTrigger value="action" className="flex-1">Actionable</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {filtered.length === 0 ? (
              <EmptyState
                icon={<Bell className="h-6 w-6" />}
                title="No notifications"
                description="You're all caught up!"
              />
            ) : (
              <div className="divide-y">
                {filtered.map((notification) => {
                  const style = typeStyles[notification.type];
                  const Icon = style.icon;
                  return (
                    <button
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className={cn(
                        "flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-accent/50",
                        !notification.read && "bg-brand/[0.03]"
                      )}
                    >
                      <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", style.bg)}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className={cn("text-sm", !notification.read ? "font-semibold" : "font-medium")}>
                            {notification.title}
                          </p>
                          {!notification.read && (
                            <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-brand" />
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {notification.description}
                        </p>
                        <div className="mt-1.5 flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground">
                            {notification.time}
                          </span>
                          {notification.action && (
                            <span className="text-xs font-medium text-brand">
                              {notification.action}
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}