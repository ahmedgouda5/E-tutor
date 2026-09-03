"use client";

import { motion } from "motion/react";
import { Ban, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/shared/stat-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  { label: "Suspended Accounts", value: "18", icon: <Ban className="h-4 w-4" />, hint: "under review" },
  { label: "Auto-Suspended", value: "11", icon: <Ban className="h-4 w-4" />, hint: "by fraud detection" },
  { label: "Manual Suspensions", value: "7", icon: <Ban className="h-4 w-4" />, hint: "by moderators" },
];

const suspended = [
  { name: "Fatima Nour", reason: "Multiple reported violations", date: "1d ago", severity: "high" },
  { name: "Unknown User_882", reason: "Suspicious login activity", date: "3d ago", severity: "auto" },
  { name: "Osama Kamel", reason: "Spam content posted", date: "5d ago", severity: "medium" },
];

export default function AdminSuspended() {
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
          <CardTitle className="text-base">Suspended Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {suspended.map((user, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border p-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-destructive/10 text-destructive text-xs">
                  {user.name.replace(/[^a-zA-Z ]/g, "").split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.reason} · {user.date}</p>
              </div>
              <Badge className={user.severity === "high" ? "border-0 bg-destructive/10 text-destructive" : user.severity === "auto" ? "border-0 bg-info/10 text-info" : "border-0 bg-warning/10 text-warning"}>
                {user.severity}
              </Badge>
              <Button variant="outline" size="sm">
                <UserCheck className="mr-1.5 h-3.5 w-3.5" /> Review
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}