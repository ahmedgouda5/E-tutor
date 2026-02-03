"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  Wallet,
  Building2,
  TrendingUp,
  Plus,
} from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";


const stats = [
  {
    title: "Total Revenue",
    amount: "$13,804.00",
    icon: Wallet,
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  },
  {
    title: "Current Balance",
    amount: "$16,593.00",
    icon: Building2,
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    title: "Total Withdrawals",
    amount: "$13,184.00",
    icon: CreditCard,
    color:
      "bg-rose-100 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400",
  },
  {
    title: "Today Revenue",
    amount: "$162.00",
    icon: TrendingUp,
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
  },
];

const chartData = [
  { date: "Aug 7", value: 30 },
  { date: "Aug 14", value: 85 },
  { date: "Aug 21", value: 45 },
  { date: "Aug 28", value: 60 },
  { date: "Sep 4", value: 70 },
  { date: "Sep 11", value: 55 },
  { date: "Sep 18", value: 75 },
];

const transactions = [
  {
    date: "31 Aug, 2021",
    merchant: "Macdonalds",
    name: "American Express",
    status: "Pending",
    amount: null,
  },
  {
    date: "31 Aug, 2021",
    merchant: "Visa",
    name: "American Express",
    status: "Closed",
    amount: "$2300",
  },
  {
    date: "31 Aug, 2021",
    merchant: "Amazon",
    name: "American Express",
    status: "Blocked",
    amount: null,
  },
  {
    date: "31 Aug, 2021",
    merchant: "Macdonalds",
    name: "American Express",
    status: "Completed",
    amount: "$573",
  },
];

const getStatusColor = (status: string) => {
  const colors = {
    Pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Closed:
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
    Blocked:
      "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
    Completed:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  };
  return colors[status as keyof typeof colors];
};


export function EarningDashboard() {
  return (
    <div className="container max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 sm:gap-4 lg:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card
              key={i}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-xl sm:text-2xl font-bold">
                      {stat.amount}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        <Card className="xl:col-span-2 border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="h-[220px] sm:h-[260px] lg:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis
                    dataKey="date"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip />
                  <Line
                    type="natural"
                    dataKey="value"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="text-2xl sm:text-3xl font-bold">
                $16,593.00
              </div>
              <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600">
                Withdraw Money
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Current Balance
            </p>
          </CardContent>
        </Card>

        {/* ================= CARD ================= */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Cards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-4 sm:p-6 text-white">
              <p className="text-xl font-bold">VISA</p>
              <p className="tracking-widest text-sm sm:text-base mt-4">
                4555 •••• •••• ••••
              </p>
              <div className="flex justify-between mt-6 text-sm">
                <div>
                  <p className="opacity-70">Holder</p>
                  <p>Value-Bhat</p>
                </div>
                <div>
                  <p className="opacity-70">Expiry</p>
                  <p>04/28</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full border-dashed h-11"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add new card
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Withdraw History</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody className="divide-y">
                {transactions.map((tx, i) => (
                  <tr key={i}>
                    <td className="py-3 flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          i % 2 === 0
                            ? "bg-orange-100 dark:bg-orange-900/20"
                            : "bg-blue-100 dark:bg-blue-900/20"
                        }`}
                      >
                        {i % 2 === 0 ? (
                          <ArrowUpRight className="w-4 h-4 text-orange-600" />
                        ) : (
                          <ArrowDownLeft className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <span className="text-muted-foreground">
                        {tx.date}
                      </span>
                    </td>

                    <td className="font-medium">{tx.merchant}</td>

                    <td className="hidden md:table-cell text-muted-foreground">
                      {tx.name}
                    </td>

                    <td className="hidden sm:table-cell">
                      <Badge
                        className={`${getStatusColor(
                          tx.status
                        )} border-0`}
                      >
                        {tx.status}
                      </Badge>
                    </td>

                    <td className="text-right font-semibold whitespace-nowrap">
                      {tx.amount ?? "--"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
