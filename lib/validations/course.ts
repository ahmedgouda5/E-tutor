// lib/validations/course.ts
import { z } from "zod";

export const courseSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(80, "Title must be 80 characters or less"),
  subtitle: z
    .string()
    .min(1, "Subtitle is required")
    .max(120, "Subtitle must be 120 characters or less"),
  category: z.string().min(1, "Please select a category"),
  subCategory: z.string().min(1, "Please select a sub-category"),
  topic: z.string().min(1, "Course topic is required"),
  language: z.string().min(1, "Please select a language"),
  subtitleLanguage: z.string().optional(),
  level: z.string().min(1, "Please select a course level"),
  duration: z.coerce.number().min(1, "Duration must be at least 1"),
  durationType: z.enum(["Day", "Week", "Month"]),
});

export type CourseFormData = z.infer<typeof courseSchema>;
