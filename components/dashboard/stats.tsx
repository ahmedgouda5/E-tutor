import {
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
  CreditCard,
} from "lucide-react";

const stats = [
  {
    label: "Enrolled Courses",
    value: "957",
    icon: BookOpen,
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    label: "Active Courses",
    value: "19",
    icon: GraduationCap,
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    label: "Course Instructors",
    value: "241",
    icon: Users,
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    label: "Completed Courses",
    value: "951",
    icon: Trophy,
    bg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    label: "Total Revenue",
    value: "$951,234",
    icon: CreditCard,
    bg: "bg-gray-50",
    iconColor: "text-gray-500",
  },
  {
    label: "Course Sold",
    value: "56,789",
    icon: Trophy,
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

const Stats = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="rounded-xl bg-white p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg ${stat.bg}`}
                >
                  <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
