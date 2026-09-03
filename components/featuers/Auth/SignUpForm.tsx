"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AuthStore } from "@/store/AuthStore";
import { AddToLocalStorage } from "@/lib/utils";

const FormSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string().min(6, "Minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const { formData, setFormData } = AuthStore();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setFormData(data);
    AddToLocalStorage("isAuth", "true");
    toast.loading("Creating account...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Account created successfully");
      router.push("/");
    }, 1000);
    reset();
  };

  return (
    <div className="flex items-center justify-center p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl flex flex-col gap-6"
      >
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EEF2FF] rounded-full mb-4">
            <UserPlus className="text-[#6366F1]" size={32} />
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-center mb-2">
          Create your account
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register("firstName")}
              placeholder="First name..."
              className="p-3 border rounded-lg w-full bg-background text-foreground"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("lastName")}
              placeholder="Last name..."
              className="p-3 border rounded-lg w-full bg-background text-foreground"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <input
            {...register("username")}
            placeholder="Username..."
            className="p-3 border rounded-lg w-full bg-background text-foreground"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className="p-3 border rounded-lg w-full bg-background text-foreground"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            className="p-3 border rounded-lg w-full bg-background text-foreground"
          />

          <button
            type="button"
            className="absolute right-3 top-3 text-muted-foreground"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="relative">
          <input
            {...register("confirmPassword")}
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            className="p-3 border rounded-lg w-full bg-background text-foreground"
          />

          <button
            type="button"
            className="absolute right-3 top-3 text-muted-foreground"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm">
            I agree with{" "}
            <span className="text-[#6366F1] underline cursor-pointer">
              Terms & Conditions
            </span>
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#6366F1] text-white p-3 rounded-lg w-full mt-1 hover:bg-[#4F46E5] transition"
        >
          Create Account →
        </button>
      </form>
    </div>
  );
};

export default React.memo(SignUpForm);
