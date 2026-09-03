"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, UserRound } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AuthStore } from "@/store/AuthStore";
import { AddToLocalStorage } from "@/lib/utils";

const FormSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setFormData } = AuthStore();
  const router = useRouter();

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
    setFormData({ email: data.email });
    AddToLocalStorage("isAuth", "true");
    toast.success("Signed in successfully");
    reset();
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl flex flex-col gap-6"
      >
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EEF2FF] rounded-full mb-4">
            <UserRound className="text-[#6366F1]" size={32} />
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-center mb-2">
          Sign in to your account
        </h1>
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
            placeholder="Enter your password"
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

        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm">Remember me</span>
        </div>

        <button
          type="submit"
          className="bg-[#6366F1] text-white p-3 rounded-lg w-full mt-1 hover:bg-[#4F46E5] transition"
        >
          Sign In →
        </button>
      </form>
    </div>
  );
};

export default React.memo(SignInForm);
