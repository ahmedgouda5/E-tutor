"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  hint?: string;
  className?: string;
}

export function StatCard({ label, value, icon, trend, hint, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
      className={cn(
        "group relative rounded-xl border bg-card p-5 transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {label}
          </p>
          <p className="text-2xl font-semibold tracking-tight">{value}</p>
        </div>
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
            {icon}
          </div>
        )}
      </div>
      {(trend || hint) && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          {trend && (
            <span
              className={cn(
                "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-medium",
                trend.positive
                  ? "bg-success/10 text-success"
                  : "bg-destructive/10 text-destructive"
              )}
            >
              {trend.positive ? "↑" : "↓"} {trend.value}
            </span>
          )}
          {hint && <span className="text-muted-foreground">{hint}</span>}
        </div>
      )}
    </motion.div>
  );
}