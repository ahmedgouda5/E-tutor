// components/course-form.tsx
"use client";

import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const categories = [
  { value: "development", label: "Development" },
  { value: "business", label: "Business" },
  { value: "design", label: "Design" },
];

const subCategories = [
  { value: "web-dev", label: "Web Development" },
  { value: "mobile-dev", label: "Mobile Development" },
  { value: "game-dev", label: "Game Development" },
];

const languages = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
  { value: "es", label: "Spanish" },
];

const levels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const durationTypes = [
  { value: "Day", label: "Day" },
  { value: "Week", label: "Week" },
  { value: "Month", label: "Month" },
];

export function CourseForm() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    category: "",
    subCategory: "",
    topic: "",
    language: "",
    subtitleLanguage: "",
    level: "",
    duration: "",
    durationType: "Day",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  return (
    <div className="w-full max-w-full  overflow-x-hidden">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Basic Information</h2>
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="text-orange-500 border-orange-200 hover:bg-orange-50"
          >
            Save
          </Button>
          <Button
            type="button"
            className="bg-orange-500 hover:bg-orange-600"
          >
            Save & Preview
          </Button>
        </div>
      </div>

      <form className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <div className="relative">
            <Input
              id="title"
              name="title"
              placeholder="You course title"
              value={formData.title}
              onChange={handleInputChange}
              maxLength={80}
              className="pr-16"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              {formData.title.length}/80
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="space-y-2">
          <Label htmlFor="subtitle">Subtitle</Label>
          <div className="relative">
            <Input
              id="subtitle"
              name="subtitle"
              placeholder="You course subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              maxLength={120}
              className="pr-16"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              {formData.subtitle.length}/120
            </span>
          </div>
        </div>

        {/* Category & Sub-category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="category">Course Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleSelectChange("category", value)}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subCategory">Course Sub-category</Label>
            <Select
              value={formData.subCategory}
              onValueChange={(value) => handleSelectChange("subCategory", value)}
            >
              <SelectTrigger id="subCategory">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                {subCategories.map((subCat) => (
                  <SelectItem key={subCat.value} value={subCat.value}>
                    {subCat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Topic */}
        <div className="space-y-2">
          <Label htmlFor="topic">Course Topic</Label>
          <Input
            id="topic"
            name="topic"
            placeholder="What is primarily taught in your course?"
            value={formData.topic}
            onChange={handleInputChange}
          />
        </div>

        {/* Language, Subtitle Language, Level, Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <Label htmlFor="language">Course Language</Label>
            <Select
              value={formData.language}
              onValueChange={(value) => handleSelectChange("language", value)}
            >
              <SelectTrigger id="language">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subtitleLanguage">Subtitle Language (Optional)</Label>
            <Select
              value={formData.subtitleLanguage}
              onValueChange={(value) =>
                handleSelectChange("subtitleLanguage", value)
              }
            >
              <SelectTrigger id="subtitleLanguage">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="level">Course Level</Label>
            <Select
              value={formData.level}
              onValueChange={(value) => handleSelectChange("level", value)}
            >
              <SelectTrigger id="level">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Durations</Label>
            <div className="flex gap-2">
              <Input
                id="duration"
                name="duration"
                type="number"
                placeholder="Course durations"
                value={formData.duration}
                onChange={handleInputChange}
                className="flex-1"
              />
              <Select
                value={formData.durationType}
                onValueChange={(value) =>
                  handleSelectChange("durationType", value)
                }
              >
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {durationTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
            Save & Next
          </Button>
        </div>
      </form>
    </div>
  );
}