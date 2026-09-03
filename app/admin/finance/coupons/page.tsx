"use client";

import { motion } from "motion/react";
import { BadgePercent, Plus, Copy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/stat-card";

const stats = [
  { label: "Active Coupons", value: "14", icon: <BadgePercent className="h-4 w-4" />, hint: "running campaigns" },
  { label: "Redeemed", value: "3,420", icon: <BadgePercent className="h-4 w-4" />, hint: "total usage" },
  { label: "Revenue Impact", value: "$42k", icon: <BadgePercent className="h-4 w-4" />, hint: "discounted" },
];

const coupons = [
  { code: "SUMMER25", discount: "25%", course: "All courses", uses: 1284, status: "active" },
  { code: "NEWYEAR2026", discount: "20%", course: "Development", uses: 840, status: "active" },
  { code: "STUDENT50", discount: "$50 off", course: "Design bundle", uses: 396, status: "expired" },
  { code: "WELCOME10", discount: "10%", course: "First purchase", uses: 900, status: "active" },
];

export default function AdminCoupons() {
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
            <CardTitle className="text-base">Promo Coupons</CardTitle>
            <CardDescription className="text-xs">Create and manage discount codes</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-1.5 h-4 w-4" /> New Coupon
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {coupons.map((coupon) => (
            <div key={coupon.code} className="flex items-center gap-3 rounded-lg border p-3">
              <Badge className="border-0 bg-brand/10 text-brand font-mono">{coupon.code}</Badge>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{coupon.discount}</p>
                <p className="text-xs text-muted-foreground">{coupon.course} · {coupon.uses.toLocaleString()} uses</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4" />
              </Button>
              <Badge className={coupon.status === "active" ? "border-0 bg-success/10 text-success" : "border-0 bg-muted text-muted-foreground"}>
                {coupon.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}