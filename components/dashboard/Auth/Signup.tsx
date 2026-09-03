"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus, Mail, Lock, User, Phone } from "lucide-react";
import { instructorSignupSchema } from "@/lib/validations/Dashboard";
import { z } from "zod";
import Link from "next/link";
import { AddToLocalStorage } from "@/lib/utils";

type InstructorSignupFormData = z.infer<typeof instructorSignupSchema>;

export default function InstructorSignup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InstructorSignupFormData>({
    resolver: zodResolver(instructorSignupSchema),
  });

  const onSubmit = async (data: InstructorSignupFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      AddToLocalStorage("isAuth", "true");

      router.push("/Dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EEF2FF] rounded-full mb-4">
            <UserPlus className="text-[#6366F1]" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Instructor Account
          </h1>
          <p className="text-gray-600">
            Join our platform and start teaching today
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={20} />
                </div>
                <input
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all ${
                    errors.firstName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="John"
                />
              </div>
              {errors.firstName && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={20} />
                </div>
                <input
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all ${
                    errors.lastName
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Doe"
                />
              </div>
              {errors.lastName && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

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
                  errors.email
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="instructor@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="text-gray-400" size={20} />
              </div>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all ${
                  errors.phone
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="1234567890"
              />
            </div>
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-gray-400" size={20} />
                </div>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  id="confirmPassword"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all ${
                    errors.confirmPassword
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 mt-1 text-[#6366F1] border-gray-300 rounded focus:ring-[#6366F1]"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{" "}
              <Link href="#" className="text-[#6366F1] hover:text-[#4F46E5] font-medium">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#6366F1] hover:text-[#4F46E5] font-medium">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#6366F1] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#4F46E5] focus:ring-4 focus:ring-[#C7D2FE] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                <UserPlus size={20} />
                Create Account
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/Dashboard/Auth/Signin"
              className="text-[#6366F1] hover:text-[#4F46E5] font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}