"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const FormSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
    reset();
  };

  return (
    <div className="flex items-center justify-center p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl flex flex-col gap-6"
      >
        <h1 className="text-3xl font-semibold text-center mb-2">
          Sign in to your account
        </h1>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className="p-3 border rounded-lg w-full"
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
            className="p-3 border rounded-lg w-full"
          />

          <button
            type="button"
            className="absolute right-3 top-3 text-gray-600"
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
          className="bg-orange-500 text-white p-3 rounded-lg w-full mt-1 hover:bg-orange-600 transition"
        >
          Sign In →
        </button>
      </form>
    </div>
  );
};

export default React.memo(SignInForm);
