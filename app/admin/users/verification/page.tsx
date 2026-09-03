"use client";

import { motion } from "motion/react";
import { UserCheck, Mail, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/shared/stat-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stats = [
  { label: "Pending Verification", value: "12", icon: <UserCheck className="h-4 w-4" />, hint: "awaiting review" },
  { label: "Approved This Week", value: "24", icon: <CheckCircle2 className="h-4 w-4" />, hint: "7 days" },
  { label: "Rejected", value: "3", icon: <XCircle className="h-4 w-4" />, hint: "this week" },
];

const queue = [
  { name: "Mona Ali", email: "mona.ali@etutor.com", submitted: "2h ago", documents: "ID + Portfolio", level: "ID Verified" },
  { name: "Liam Chen", email: "liam@etutor.com", submitted: "5h ago", documents: "ID Uploaded", level: "Pending ID" },
  { name: "Nadia Haddad", email: "nadia@etutor.com", submitted: "1d ago", documents: "ID + Diploma", level: "ID Verified" },
];

export default function AdminVerification() {
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
          <CardTitle className="text-base">Verification Queue</CardTitle>
          <CardDescription className="text-xs">Review instructor identity and credential documents</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {queue.map((user) => (
            <div key={user.email} className="flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/instructors/instructor.png" />
                  <AvatarFallback className="bg-brand/10 text-brand text-xs">
                    {user.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Mail className="h-3 w-3" /> {user.email} · {user.submitted}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px]">{user.documents}</Badge>
                <Badge className="border-0 bg-info/10 text-info text-[10px]">{user.level}</Badge>
              </div>
              <div className="flex gap-2 sm:ml-2">
                <Button size="sm" variant="outline">
                  <XCircle className="mr-1.5 h-3.5 w-3.5" /> Reject
                </Button>
                <Button size="sm">
                  <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" /> Approve
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}