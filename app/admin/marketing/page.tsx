"use client";

import { motion } from "motion/react";
import { Megaphone, Mail, Users, Plus, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/stat-card";

const stats = [
  { label: "Active Campaigns", value: "4", icon: <Megaphone className="h-4 w-4" />, hint: "running now" },
  { label: "Email Subscribers", value: "38,200", icon: <Mail className="h-4 w-4" />, hint: "opted-in users" },
  { label: "Avg. Open Rate", value: "42%", icon: <TrendingUp className="h-4 w-4" />, hint: "all campaigns" },
];

const campaigns = [
  { name: "Summer Enrollment Drive", audience: "All users", type: "Email", conversions: 1284, sent: 24000, status: "Active" },
  { name: "React Course Launch", audience: "Developers", type: "Email + Push", conversions: 842, sent: 12000, status: "Active" },
  { name: "New Year Discount", audience: "Abandoned carts", type: "Email", conversions: 396, sent: 5800, status: "Completed" },
  { name: "Instructor Onboarding", audience: "New instructors", type: "Newsletter", conversions: 158, sent: 900, status: "Scheduled" },
];

export default function AdminMarketing() {
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
            <CardTitle className="text-base">Email Campaigns</CardTitle>
            <CardDescription className="text-xs">Manage outreach and promotional campaigns</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-1.5 h-4 w-4" /> New Campaign
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {campaigns.map((campaign) => (
            <div key={campaign.name} className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center">
              <Users className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{campaign.name}</p>
                <p className="text-xs text-muted-foreground">
                  {campaign.type} · {campaign.audience}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>
                  <strong className="text-foreground">{campaign.conversions.toLocaleString()}</strong> conversions
                </span>
                <span>
                  of <strong className="text-foreground">{campaign.sent.toLocaleString()}</strong> sent
                </span>
              </div>
              <Badge className={
                campaign.status === "Active"
                  ? "border-0 bg-success/10 text-success"
                  : campaign.status === "Scheduled"
                    ? "border-0 bg-info/10 text-info"
                    : "border-0 bg-muted text-muted-foreground"
              }>
                {campaign.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}