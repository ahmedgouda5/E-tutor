// app/courses/create/advance-info/page.tsx
"use client";

import Image from "next/image";
import { Upload, Play, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdvanceInformations } from "@/lib/Dashboard";

export default function AdvanceInformations() {
  const {
    thumbnailPreview,
    description,
    learningObjectives,
    targetAudience,
    handleThumbnailUpload,
    addLearningObjective,
    removeLearningObjective,
    updateLearningObjective,
    addTargetAudience,
    removeTargetAudience,
    updateTargetAudience,
    handleSave,
    handleSaveAndPreview,
    setDescription,
  } = useAdvanceInformations();

  return (
    <div className="min-h-screen bg-gray-50 p-3">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Advance Informations
          </h1>
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
            >
              Save
            </button>
            <button
              onClick={handleSaveAndPreview}
              className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
            >
              Save & Preview
            </button>
          </div>
        </div>

        <div className="space-y-8 rounded-lg bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Course Thumbnail
              </label>
              <div className="relative">
                {thumbnailPreview ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-dashed border-gray-300">
                    <Image
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                    <div className="text-center">
                      <div className="mx-auto mb-2 h-16 w-16 text-gray-400">
                        <svg
                          className="h-full w-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-3">
                  <p className="mb-1 text-xs text-gray-500">
                    Upload your course Thumbnail here.{" "}
                    <span className="font-medium">Important guidelines</span>:
                    1200x800 pixels or 12:8 Ratio. Supported format:{" "}
                    <span className="font-medium">.jpg, .jpeg, or .png</span>
                  </p>
                  <label className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50">
                    <Upload className="h-4 w-4" />
                    Upload Image
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png"
                      onChange={handleThumbnailUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Course Trailer
              </label>
              <div className="relative">
                <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                  <Play className="h-16 w-16 text-gray-400" />
                </div>
                <div className="mt-3">
                  <p className="mb-3 text-xs text-gray-500">
                    Students who watch a well-made promo video are 5X more
                    likely to enroll in your course. We&apos;ve seen that
                    statistic go up to 10X for exceptionally awesome videos.
                  </p>
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50">
                    <Upload className="h-4 w-4" />
                    Upload Video
                    <input type="file" accept="video/*" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Course Descriptions
            </label>
            <div className="rounded-lg border border-gray-300">
              <div className="flex gap-1 border-b border-gray-300 bg-gray-50 p-2">
                <button className="rounded p-1 hover:bg-gray-200">
                  <strong className="text-sm">B</strong>
                </button>
                <button className="rounded p-1 hover:bg-gray-200">
                  <em className="text-sm">I</em>
                </button>
                <button className="rounded p-1 hover:bg-gray-200">
                  <span className="text-sm underline">U</span>
                </button>
                <button className="rounded p-1 hover:bg-gray-200">
                  <span className="text-sm">S</span>
                </button>
                <button className="rounded p-1 hover:bg-gray-200">
                  <span className="text-sm">🔗</span>
                </button>
                <button className="rounded p-1 hover:bg-gray-200">
                  <span className="text-sm">≡</span>
                </button>
              </div>
              <textarea
                id="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your course descriptions..."
                className="w-full resize-none border-0 p-4 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                What you will teach in this course (4/8)
              </label>
              <button
                onClick={addLearningObjective}
                className="flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600"
              >
                <Plus className="h-4 w-4" />
                Add More
              </button>
            </div>
            <div className="space-y-3">
              {learningObjectives.map((objective, index) => (
                <div key={objective.id} className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">0{index + 1}</span>
                  <input
                    type="text"
                    value={objective.text}
                    onChange={(e) =>
                      updateLearningObjective(objective.id, e.target.value)
                    }
                    placeholder="What you will teach in this course..."
                    className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                  <span className="text-xs text-gray-400">
                    {objective.text.length}/70
                  </span>
                  {learningObjectives.length > 1 && (
                    <button
                      onClick={() => removeLearningObjective(objective.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Target Audience (4/8)
              </label>
              <button
                onClick={addTargetAudience}
                className="flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600"
              >
                <Plus className="h-4 w-4" />
                Add More
              </button>
            </div>
            <div className="space-y-3">
              {targetAudience.map((audience, index) => (
                <div key={audience.id} className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">0{index + 1}</span>
                  <input
                    type="text"
                    value={audience.text}
                    onChange={(e) =>
                      updateTargetAudience(audience.id, e.target.value)
                    }
                    placeholder="Who this course is for..."
                    className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                  <span className="text-xs text-gray-400">
                    {audience.text.length}/70
                  </span>
                  {targetAudience.length > 1 && (
                    <button
                      onClick={() => removeTargetAudience(audience.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Save & Publish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

