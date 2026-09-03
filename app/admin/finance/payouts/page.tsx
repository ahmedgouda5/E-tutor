"use client";

import { motion } from "motion/react";
import { Receipt, DollarSign, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { StatCard } from "@/components/shared/stat-card";

const stats = [
  { label: "Pending Payouts", value: "$62,300", icon: <Receipt className="h-4 w-4" />, hint: "this cycle" },
  { label: "Paid This Month", value: "$58,720", icon: <DollarSign className="h-4 w-4" />, hint: "processed" },
  { label: "Next Payout", value: "Monday", icon: <Clock className="h-4 w-4" />, hint: "weekly schedule" },
];

const payouts = [
  { instructor: "Ahmed Gouda", amount: "$18,420", status: "Queued", id: "PYT-2201" },
  { instructor: "Sarah Chen", amount: "$16,210", status: "Queued", id: "PYT-2202" },
  { instructor: "Mona Ali", amount: "$14,980", status: "Processing", id: "PYT-2203" },
  { instructor: "Omar Hassan", amount: "$12,350", status: "Paid", id: "PYT-2199" },
];

export default function AdminPayouts() {
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
            <CardTitle className="text-base">Instructor Payouts</CardTitle>
            <CardDescription className="text-xs">Manage weekly payout runs</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-3.5 w-3.5" /> Export
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {payouts.map((payout) => (
            <div key={payout.id} className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="text-sm font-medium">{payout.instructor}</p>
                <p className="text-xs text-muted-foreground">{payout.id}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">{payout.amount}</span>
                <Badge className={
                  payout.status === "Paid"
                    ? "border-0 bg-success/10 text-success"
                    : payout.status === "Processing"
                      ? "border-0 bg-warning/10 text-warning"
                      : "border-0 bg-muted text-muted-foreground"
                }>
                  {payout.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex items-center justify-between rounded-lg border bg-muted/40 p-4">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-success" />
          Your next payout run is scheduled for Monday at 9:00 AM.
        </p>
        <Button size="sm">Run Payout Now</Button>
      </div>
    </motion.div>
  );
}