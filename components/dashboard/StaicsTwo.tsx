"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data
const courseData = [
  { day: "Sun", enrollments: 120, completions: 45 },
  { day: "Mon", enrollments: 250, completions: 180 },
  { day: "Tue", enrollments: 380, completions: 520 },
  { day: "Wed", enrollments: 180, completions: 220 },
  { day: "Thu", enrollments: 280, completions: 160 },
  { day: "Fri", enrollments: 580, completions: 850 },
  { day: "Sat", enrollments: 420, completions: 120 },
];

const ratingDistribution = [
  { stars: 5, percentage: 56, count: 1680 },
  { stars: 4, percentage: 37, count: 1110 },
  { stars: 3, percentage: 8, count: 240 },
  { stars: 2, percentage: 1, count: 30 },
  { stars: 1, percentage: 1, count: 30 },
];

export default function StaicsTwo() {
  const [ratingPeriod, setRatingPeriod] = useState("week");
  const [overviewPeriod, setOverviewPeriod] = useState("week");

  const totalRatings = ratingDistribution.reduce(
    (sum, item) => sum + item.count,
    0
  );
  const averageRating = (
    ratingDistribution.reduce(
      (sum, item) => sum + item.stars * item.count,
      0
    ) / totalRatings
  ).toFixed(1);

  return (
    <div className="grid gap-6 md:grid-cols-2 ">
      {/* Overall Course Rating Card */}
      <Card className="w-full overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-base font-semibold">
            Overall Course Rating
          </CardTitle>
          <Select value={ratingPeriod} onValueChange={setRatingPeriod}>
            <SelectTrigger className="w-[130px] h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This week</SelectItem>
              <SelectItem value="month">This month</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="bg-orange-50 rounded-lg p-6 min-w-[140px]">
              <div className="text-5xl font-bold text-gray-900">
                {averageRating}
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(parseFloat(averageRating))
                        ? "fill-orange-400 text-orange-400"
                        : i < parseFloat(averageRating)
                        ? "fill-orange-200 text-orange-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-1">Overall Rating</div>
            </div>

            {/* Mini trend chart */}
            <div className="flex-1 h-20 min-w-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={courseData}>
                  <Line
                    type="monotone"
                    dataKey="enrollments"
                    stroke="#fb923c"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-3">
            {ratingDistribution.map((rating) => (
              <div
                key={rating.stars}
                className="flex items-center gap-3 text-sm"
              >
                <div className="flex items-center gap-1 w-16">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < rating.stars
                          ? "fill-orange-400 text-orange-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-orange-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <div className="w-12 text-right font-medium text-gray-700">
                  {rating.percentage}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Course Overview Card */}
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-base font-semibold">
            Course Overview
          </CardTitle>
          <Select value={overviewPeriod} onValueChange={setOverviewPeriod}>
            <SelectTrigger className="w-[130px] h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This week</SelectItem>
              <SelectItem value="month">This month</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="h-[280px] sm:h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={courseData}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="day"
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  axisLine={{ stroke: "#e5e7eb" }}
                  tickFormatter={(value) => {
                    if (value >= 1000) return `${value / 1000}k`;
                    return value.toString();
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="enrollments"
                  stroke="#6366f1"
                  strokeWidth={3}
                  dot={false}
                  name="Enrollments"
                />
                <Line
                  type="monotone"
                  dataKey="completions"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={false}
                  name="Completions"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}