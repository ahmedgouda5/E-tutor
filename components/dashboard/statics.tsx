"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MessageSquare, Star, ShoppingCart, DollarSign } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Types
interface Activity {
  id: string;
  user: string;
  action: string;
  course: string;
  time: string;
  type: "comment" | "rating" | "purchase";
}

interface RevenueData {
  date: string;
  revenue: number;
}

interface ProfileData {
  month: string;
  earnings: number;
}

// Mock Data
const activities: Activity[] = [
  {
    id: "1",
    user: "Kevin",
    action: "comments on your lecture",
    course: "2021 ui/ux design with figma",
    time: "Just now",
    type: "comment",
  },
  {
    id: "2",
    user: "John",
    action: "give a 5 star rating on your course",
    course: "2021 ui/ux design with figma",
    time: "5 mins ago",
    type: "rating",
  },
  {
    id: "3",
    user: "Sraboni",
    action: "purchase your course",
    course: "2021 ui/ux design with figma",
    time: "6 mins ago",
    type: "purchase",
  },
];

const revenueData: RevenueData[] = [
  { date: "Aug 01", revenue: 45000 },
  { date: "Aug 03", revenue: 42000 },
  { date: "Aug 05", revenue: 38000 },
  { date: "Aug 07", revenue: 51749 },
  { date: "Aug 09", revenue: 48000 },
  { date: "Aug 11", revenue: 44000 },
  { date: "Aug 13", revenue: 46000 },
  { date: "Aug 15", revenue: 43000 },
  { date: "Aug 17", revenue: 47000 },
  { date: "Aug 19", revenue: 45000 },
  { date: "Aug 21", revenue: 49000 },
  { date: "Aug 23", revenue: 46000 },
  { date: "Aug 25", revenue: 50000 },
  { date: "Aug 27", revenue: 48000 },
  { date: "Aug 29", revenue: 52000 },
  { date: "Aug 31", revenue: 54000 },
];

const profileData: ProfileData[] = [
  { month: "1", earnings: 6200 },
  { month: "2", earnings: 5800 },
  { month: "3", earnings: 7100 },
  { month: "4", earnings: 8100 },
  { month: "5", earnings: 8500 },
  { month: "6", earnings: 7800 },
  { month: "7", earnings: 6900 },
  { month: "8", earnings: 8200 },
  { month: "9", earnings: 7600 },
  { month: "10", earnings: 8400 },
  { month: "11", earnings: 7200 },
  { month: "12", earnings: 8900 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: RevenueData;
  }>;
}

interface CustomBarTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: ProfileData;
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white px-3 py-2 rounded shadow-lg min-w-[120px] text-center">
        <p className="font-bold text-lg">{payload[0].value.toLocaleString()}</p>
        <p className="text-xs text-gray-400">{payload[0].payload.date}</p>
      </div>
    );
  }
  return null;
};

const CustomBarTooltip = ({ active, payload }: CustomBarTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-gray-900 px-3 py-2 rounded shadow-lg border border-gray-100">
        <p className="font-semibold">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const Statics = () => {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "comment":
        return <MessageSquare className="h-5 w-5 text-white" />;
      case "rating":
        return <Star className="h-5 w-5 text-white" />;
      case "purchase":
        return <ShoppingCart className="h-5 w-5 text-white" />;
      default:
        return <DollarSign className="h-5 w-5 text-white" />;
    }
  };

  return (
    <div className="w-full bg-transparent ">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <Card className="lg:col-span-1 bg-white border-none shadow-none h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 px-3">
              <CardTitle className="text-lg font-semibold">
                    Recent Activity
                </CardTitle>
             
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto">
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-orange-500 flex items-center justify-center">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{activity.user}</span>{" "}
                        <span className="text-gray-600">{activity.action}</span>{" "}
                        <span className="text-blue-600">
                          {activity.course}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">    
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-none flex flex-col h-[420px]">
            <CardHeader className="flex flex-row items-center justify-between pb-6 px-3">
              <CardTitle className="text-lg font-semibold">Revenue</CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#6366f1"
                    strokeWidth={3}
                    fillOpacity={0.1}
                    fill="#6366f1"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Profile View */}
          <Card className="bg-white border-none shadow-none flex flex-col h-[420px]">
            <CardHeader className="flex flex-row items-center justify-between pb-6 px-3">
              <CardTitle className="text-lg font-semibold">
                Profile View
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={profileData}>
                  <Tooltip content={<CustomBarTooltip />} />
                  <Bar
                    dataKey="earnings"
                    fill="#22c55e"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>

              <div className="text-center">
                <p className="text-2xl font-bold">$7,443</p>
                <p className="text-sm text-gray-500">USD Dollar you earned.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Statics;
