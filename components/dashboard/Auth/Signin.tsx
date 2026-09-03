"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn, Mail, Lock, User } from "lucide-react";
import { instructorLoginSchema } from "@/lib/validations/Dashboard";
import { z } from "zod";
import Link from "next/link";
import { AddToLocalStorage } from "@/lib/utils";

type InstructorLoginFormData = z.infer<typeof instructorLoginSchema>;

export default function InstructorLogin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InstructorLoginFormData>({
    resolver: zodResolver(instructorLoginSchema),
  });

  const onSubmit = async (data: InstructorLoginFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      AddToLocalStorage("isAuth", "true");

      router.push("/Dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EEF2FF] rounded-full mb-4">
            <User className="text-[#6366F1]" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Instructor Login
          </h1>
          <p className="text-gray-600">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="text-gray-400" size={20} />
              </div>
              <input
                {...register("email")}
                type="email"
                id="email"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all ${
                  errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
                placeholder="instructor@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {String(errors.email.message)}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="text-gray-400" size={20} />
              </div>
              <input
                {...register("password")}
                type="password"
                id="password"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all ${
                  errors.password
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#6366F1] border-gray-300 rounded focus:ring-[#6366F1]"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link
              href="#"
              className="text-sm text-[#6366F1] hover:text-[#4F46E5] font-medium"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#6366F1] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#4F46E5] focus:ring-4 focus:ring-[#C7D2FE] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <LogIn size={20} />
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/Dashboard/Auth/Signup"
              className="text-[#6366F1] hover:text-[#4F46E5] font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
