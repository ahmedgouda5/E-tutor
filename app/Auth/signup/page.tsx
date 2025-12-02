"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

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

const SignUp = () => {
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
    console.log(data);
    reset();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-[#EBEBFF] hidden md:flex items-center justify-center">
        <Image src="/Auth/Saly-1.svg" alt="illustration" width={500} height={500} priority />
      </div>

      <div className="flex items-center justify-center p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-xl flex flex-col gap-6"
        >
          <h1 className="text-3xl font-semibold text-center mb-2">
            Create your account
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                {...register("firstName")}
                placeholder="First name..."
                className="p-3 border rounded-lg w-full"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            <div>
              <input
                {...register("lastName")}
                placeholder="Last name..."
                className="p-3 border rounded-lg w-full"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <input
              {...register("username")}
              placeholder="Username..."
              className="p-3 border rounded-lg w-full"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              className="p-3 border rounded-lg w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="p-3 border rounded-lg w-full"
            />

            <button
              type="button"
              className="absolute right-3 top-3 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="relative">
            <input
              {...register("confirmPassword")}
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className="p-3 border rounded-lg w-full"
            />

            <button
              type="button"
              className="absolute right-3 top-3 text-gray-600"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm">
              I agree with{" "}
              <span className="text-blue-500 underline cursor-pointer">
                Terms & Conditions
              </span>
            </span>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded-lg w-full mt-1 hover:bg-orange-600 transition"
          >
            Create Account →
          </button>

          <div className="flex justify-center items-center gap-4 mt-5">
            <button className="px-5 py-2 border rounded-lg flex items-center gap-2">
              <Image src="/Auth/Google.png" width={20} height={20} alt="google" priority={false} />
              Google
            </button>

            <button className="px-5 py-2 border rounded-lg flex items-center gap-2">
              <Image src="/Auth/Facebook.png" width={20} height={20} alt="fb" priority={false} />
              Facebook
            </button>

            <button className="px-5 py-2 border rounded-lg flex items-center gap-2">
              <Image src="/Auth/Apple.png" width={20} height={20} alt="apple" priority={false} />
              Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(SignUp); 
