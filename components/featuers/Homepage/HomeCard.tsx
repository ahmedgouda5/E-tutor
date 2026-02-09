"use client";

import { useRouter } from "next/navigation";
import {
  BookOpen,
  Users,
  BarChart3,
  Upload,
  Video,
  TrendingUp,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface CardProps {
  title: string;
  description: string;
  features: Feature[];
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  route: string;
}

function Card({
  title,
  description,
  features,
  buttonText,
  buttonVariant,
  route,
}: CardProps) {
  const router = useRouter();
  const buttonStyles =
    buttonVariant === "primary"
      ? "bg-orange-600 text-white hover:bg-orange-700"
      : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300";

  return (
    <article className="bg-white rounded-2xl shadow-lg  p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-200 border border-transparent max-w-md w-full">
     <nav className="h-[200px]">
       <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600 my-6 leading-relaxed">{description}</p>
     </nav>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-orange-600 mt-1 shrink-0">
              {feature.icon}
            </span>
            <span className="text-gray-700">{feature.text}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => router.push(route)}
        className={`w-full py-3 px-6 flex rounded-lg font-semibold transition-all duration-200 ${buttonStyles}`}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default function HomeCard() {
  const instructorFeatures: Feature[] = [
    {
      icon: <BookOpen size={20} />,
      text: "Create and manage courses",
    },
    {
      icon: <Upload size={20} />,
      text: "Upload lessons and assignments",
    },
    {
      icon: <BarChart3 size={20} />,
      text: "Track students progress",
    },
  ];

  const studentFeatures: Feature[] = [
    {
      icon: <Users size={20} />,
      text: "Enroll in courses",
    },
    {
      icon: <Video size={20} />,
      text: "Watch lessons",
    },
    {
      icon: <TrendingUp size={20} />,
      text: "Track your learning progress",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Learning Platform
          </h1>
          <p className="text-xl text-gray-600">
            Choose your role to get started
          </p>
        </header>

        <section className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch">
          <Card
            title="Instructor"
            description="Empower learners by creating engaging courses, managing content, and tracking student progress in real-time."
            features={instructorFeatures}
            buttonText="Go to Dashboard"
            buttonVariant="primary"
            route="/Dashboard/Auth/Signin"
          />

          <Card
            title="Student"
            description="Start your learning journey by enrolling in courses, watching lessons, and monitoring your progress."
            features={studentFeatures}
            buttonText="Go to ELearn"
            buttonVariant="secondary"
            route="/ELearn"
          />
        </section>
      </div>
    </main>
  );
}