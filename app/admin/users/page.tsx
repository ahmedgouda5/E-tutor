"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Search,
  Users,
  UserCheck,
  Ban,
  MoreHorizontal,
  Mail,
  ShieldCheck,
  Star,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/shared/stat-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const stats = [
  { label: "Total Users", value: "24,581", icon: <Users className="h-4 w-4" />, hint: "across all time" },
  { label: "Students", value: "22,689", icon: <Users className="h-4 w-4" />, hint: "92% of platform" },
  { label: "Instructors", value: "1,892", icon: <UserCheck className="h-4 w-4" />, hint: "verified" },
  { label: "Suspended", value: "18", icon: <Ban className="h-4 w-4" />, hint: "under review" },
];

type UserStatus = "active" | "suspended" | "pending";

const users = [
  { name: "Ahmed Gouda", email: "ahmed.gouda@etutor.com", role: "Instructor", joined: "Mar 2024", status: "active" as UserStatus, rating: 4.9 },
  { name: "Sarah Chen", email: "sarah.chen@etutor.com", role: "Instructor", joined: "Jan 2024", status: "active" as UserStatus, rating: 4.8 },
  { name: "John Doe", email: "john.doe@student.com", role: "Student", joined: "Jun 2025", status: "active" as UserStatus, rating: 0 },
  { name: "Fatima Nour", email: "fatima@student.com", role: "Student", joined: "Aug 2025", status: "suspended" as UserStatus, rating: 0 },
  { name: "Mona Ali", email: "mona.ali@etutor.com", role: "Instructor", joined: "Feb 2024", status: "pending" as UserStatus, rating: 4.7 },
  { name: "Omar Hassan", email: "omar@student.com", role: "Student", joined: "May 2025", status: "active" as UserStatus, rating: 0 },
];

const statusStyles: Record<UserStatus, { label: string; className: string }> = {
  active: { label: "Active", className: "border-0 bg-success/10 text-success" },
  suspended: { label: "Suspended", className: "border-0 bg-destructive/10 text-destructive" },
  pending: { label: "Pending", className: "border-0 bg-warning/10 text-warning" },
};

export default function AdminUsers() {
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");

  const filtered = users.filter((user) => {
    const matchesQuery =
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} className="animate-slide-up" />
        ))}
      </section>

      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-base">All Users</CardTitle>
            <CardDescription className="text-xs">Manage platform users and their roles</CardDescription>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-8 sm:w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {/* Status filter chips */}
          <div className="mb-4 flex flex-wrap gap-2">
            {["all", "active", "suspended", "pending"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  statusFilter === status
                    ? "bg-brand text-brand-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-accent"
                }`}
              >
                {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-xs text-muted-foreground">
                  <th className="pb-3 pr-4 font-medium">User</th>
                  <th className="pb-3 pr-4 font-medium">Role</th>
                  <th className="pb-3 pr-4 font-medium">Joined</th>
                  <th className="pb-3 pr-4 font-medium">Status</th>
                  <th className="pb-3 pr-4 text-right font-medium">Rating</th>
                  <th className="pb-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.email} className="border-b last:border-0 hover:bg-accent/30">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/instructors/instructor.png`} alt={user.name} />
                          <AvatarFallback className="bg-brand/10 text-brand text-xs">
                            {user.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Mail className="h-3 w-3" /> {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      {user.role === "Instructor" ? (
                        <Badge className="border-0 bg-brand/10 text-brand">{user.role}</Badge>
                      ) : (
                        <span className="text-muted-foreground">{user.role}</span>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground">{user.joined}</td>
                    <td className="py-3 pr-4">
                      <Badge className={statusStyles[user.status].className}>
                        {statusStyles[user.status].label}
                      </Badge>
                    </td>
                    <td className="py-3 pr-4 text-right">
                      {user.rating > 0 ? (
                        <span className="inline-flex items-center gap-1 font-medium">
                          <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                          {user.rating}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="py-3 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-44">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                          {user.status === "suspended" ? (
                            <DropdownMenuItem className="text-success focus:text-success">
                              <UserCheck className="mr-2 h-4 w-4" />
                              Reactivate
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center">
              <Users className="mx-auto mb-3 h-8 w-8 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">No users match your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}