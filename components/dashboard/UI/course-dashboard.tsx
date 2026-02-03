"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import {
  Users,
  MessageSquare,
  GraduationCap,
  Globe,
  Clock,
  Trophy,
  Star,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AllCourses, ICourse } from "@/lib/data";

// Mock data
const revenueData = [
  { month: "Jun'20", revenue: 8000 },
  { month: "Jul'20", revenue: 12000 },
  { month: "Aug'20", revenue: 9000 },
  { month: "Sep'20", revenue: 15000 },
  { month: "Oct'20", revenue: 11000 },
  { month: "Nov'20", revenue: 17000 },
  { month: "Dec'20", revenue: 13000 },
];

const overviewData = [
  { month: "Jan", views: 300, enrollments: 200 },
  { month: "Feb", views: 400, enrollments: 280 },
  { month: "Mar", views: 350, enrollments: 250 },
  { month: "Apr", views: 500, enrollments: 400 },
  { month: "May", views: 450, enrollments: 380 },
  { month: "Jun", views: 600, enrollments: 500 },
  { month: "Jul", views: 550, enrollments: 480 },
  { month: "Aug", views: 700, enrollments: 600 },
  { month: "Sep", views: 650, enrollments: 580 },
  { month: "Oct", views: 800, enrollments: 700 },
  { month: "Nov", views: 750, enrollments: 680 },
  { month: "Dec", views: 900, enrollments: 800 },
];

const ratingDistribution = [
  { stars: 5, percentage: 87, count: 7342 },
  { stars: 4, percentage: 9, count: 759 },
  { stars: 3, percentage: 3, count: 253 },
  { stars: 2, percentage: 1, count: 84 },
  { stars: 1, percentage: 0, count: 6 },
];

export default function CourseDashboard() {
  const { id } = useParams();

  const course = id ? AllCourses.find((course: ICourse) => course.id === Number(id)) : undefined;
  if (!course) {
    return <div>Course not found</div>;
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 p-3 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="relative w-full lg:w-48 h-32 lg:h-auto rounded-lg overflow-hidden shrink-0">
                <Image
                  src={course.image}
                  alt="Course thumbnail"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">
                    CREATED ON JAN 15, 2021 · LAST UPDATE JAN 15, 2021
                  </p>
                  <h1 className="text-2xl font-bold text-slate-900 mb-3">
                    {course.category}
                  </h1>
                  <p className="text-slate-600 text-sm">
                    {course.title}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/api/placeholder/40/40" />
                    <AvatarFallback>JG</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/api/placeholder/40/40" />
                    <AvatarFallback>KW</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium text-slate-900">{course.instructorName}</p>
                  </div>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="flex flex-col items-end justify-between">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-500 text-sm">
                   {course.rating}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="text-right">
                    <p className="text-3xl font-bold text-slate-900">{course.price}</p>
                    <p className="text-sm text-slate-500">
                      Regular price:{" "}
                      <span className="line-through">$100</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Visualize Money
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          <StatCard
            icon={<Users className="h-5 w-5" />}
            label="Lesson total"
            value="1,957"
            iconColor="text-orange-500"
            bgColor="bg-orange-50"
          />
          <StatCard
            icon={<MessageSquare className="h-5 w-5" />}
            label="Total Students"
            value="51,429"
            iconColor="text-blue-500"
            bgColor="bg-blue-50"
          />
          <StatCard
            icon={<GraduationCap className="h-5 w-5" />}
            label="Students enrolled"
            value="9,419,418"
            iconColor="text-pink-500"
            bgColor="bg-pink-50"
          />
          <StatCard
            icon={<Users className="h-5 w-5" />}
            label="Beginner"
            value="Course level"
            iconColor="text-green-500"
            bgColor="bg-green-50"
          />
          <StatCard
            icon={<Globe className="h-5 w-5" />}
            label="Course Language"
            value="Mandarin"
            iconColor="text-purple-500"
            bgColor="bg-purple-50"
          />
          <StatCard
            icon={<GraduationCap className="h-5 w-5" />}
            label="About File"
            value="142"
            subtitle="144.3 GB"
            iconColor="text-amber-500"
            bgColor="bg-amber-50"
          />
          <StatCard
            icon={<Clock className="h-5 w-5" />}
            label="Hours"
            value="19:37:51"
            iconColor="text-indigo-500"
            bgColor="bg-indigo-50"
          />
          <StatCard
            icon={<Trophy className="h-5 w-5" />}
            label="Students review"
            value="76,395,187"
            iconColor="text-slate-500"
            bgColor="bg-slate-50"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Revenue</CardTitle>
                <Select defaultValue="week">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This week</SelectItem>
                    <SelectItem value="month">This month</SelectItem>
                    <SelectItem value="year">This year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-md text-sm">
                  <TrendingUp className="h-4 w-4" />
                  $1,769
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={2}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Course Overview Chart */}
          <Card className="border-none shadow-lg ">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Course Overview</CardTitle>
                <div className="flex items-center gap-4 text-sm">
                  <Select defaultValue="week">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">This week</SelectItem>
                      <SelectItem value="month">This month</SelectItem>
                      <SelectItem value="year">This year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={overviewData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="enrollments"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Rating Section */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Overall Course Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Rating Score */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg">
                <div className="text-6xl font-bold text-slate-900 mb-2">
                  4.8
                </div>
                <div className="flex text-orange-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600">Course Rating</p>
              </div>

              {/* Rating Distribution */}
              <div className="flex-1 space-y-3">
                {ratingDistribution.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-4">
                    <div className="flex text-orange-400 w-24">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rating.stars ? "fill-current" : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full transition-all"
                          style={{ width: `${rating.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-slate-900 w-12 text-right">
                      {rating.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtitle?: string;
  iconColor: string;
  bgColor: string;
}

function StatCard({
  icon,
  label,
  value,
  subtitle,
  iconColor,
  bgColor,
}: StatCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg ${bgColor}`}>
            <div className={iconColor}>{icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-slate-500 mb-1">{label}</p>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            {subtitle && (
              <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
