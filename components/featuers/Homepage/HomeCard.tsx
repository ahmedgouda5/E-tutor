"use client";

import { useRouter } from "next/navigation";
import { BookOpen, Video, TrendingUp, Upload, BarChart3, Users, ArrowRight, GraduationCap, PlayCircle, ClipboardCheck, Megaphone } from "lucide-react";
import { motion } from "motion/react";

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface CardProps {
  title: string;
  role: string;
  description: string;
  features: Feature[];
  buttonText: string;
  route: string;
  accent: string;
  badge?: string;
}

function Card({ title, role, description, features, buttonText, route, accent, badge }: CardProps) {
  const router = useRouter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative flex max-w-md w-full flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {badge && (
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-brand/10 px-3 py-1 text-[10px] font-semibold text-brand">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-xs font-medium text-brand mt-1">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accent}`}>
              {feature.icon}
            </span>
            <span className="text-sm text-foreground">{feature.text}</span>
          </motion.li>
        ))}
      </ul>

      <button
        onClick={() => router.push(route)}
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-semibold text-brand-foreground transition-all duration-200 hover:bg-brand/90 active:scale-[0.98]"
      >
        {buttonText}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </motion.article>
  );
}

export default function HomeCard() {
  const instructorFeatures: Feature[] = [
    { icon: <BookOpen size={16} className="text-brand" />, text: "Create and manage courses" },
    { icon: <Upload size={16} className="text-brand" />, text: "Build curriculum with videos & quizzes" },
    { icon: <BarChart3 size={16} className="text-brand" />, text: "Track student progress and analytics" },
    { icon: <ClipboardCheck size={16} className="text-brand" />, text: "Grade assignments and exams" },
  ];

  const studentFeatures: Feature[] = [
    { icon: <GraduationCap size={16} className="text-brand" />, text: "Enroll in premium courses" },
    { icon: <PlayCircle size={16} className="text-brand" />, text: "Learn with videos and interactive lessons" },
    { icon: <TrendingUp size={16} className="text-brand" />, text: "Track your progress and achievements" },
    { icon: <Users size={16} className="text-brand" />, text: "Join study groups and community" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-12">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            Premium Learning Platform
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Welcome to <span className="text-brand">E-Tutor</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Are you a Student or Instructor?
          </p>
        </motion.header>

        <section className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-md flex-1"
          >
            <Card
              title="Student"
              role="Learner & Community Member"
              description="Start your learning journey by enrolling in courses, watching lessons, engaging in community, and monitoring your progress."
              features={studentFeatures}
              buttonText="Explore E-Learning"
              route="/ELearn"
              accent="bg-brand/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md flex-1"
          >
            <Card
              title="Instructor"
              role="Teacher & Content Creator"
              description="Empower learners by creating engaging courses, managing content, and tracking student progress in real-time."
              features={instructorFeatures}
              buttonText="Enter Teacher Studio"
              route="/Dashboard/Auth/Signin"
              accent="bg-brand/10"
            />
          </motion.div>
        </section>
      </div>
    </main>
  );
}