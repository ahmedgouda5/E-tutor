"use client";
import CourseSidebar from "@/components/featuers/CourseDetails/CoursesideBar";
import WCourseNav from "@/components/featuers/CourseDetails/WCourseNav";
import { AllCourses, COURSE_DATA } from "@/lib/data";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import Image from "next/image";
import React, { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const course = AllCourses.find((course) => course.id === Number(id));

  return (
    <div className="min-h-screen">
      <nav>
        <WCourseNav id={id} />
      </nav>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-black">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={COURSE_DATA.currentVideo.url}
              title={COURSE_DATA.currentVideo.title}
              allowFullScreen
            />
          </div>

          <div className="bg-card p-6">
            <h1 className="text-2xl font-bold mb-2 text-foreground">{course?.title}</h1>
            <p className="text-muted-foreground mb-4">{COURSE_DATA.title}</p>

            <div className="border-b border-border mb-6">
              <div className="flex gap-6">
                <button className="pb-3 border-b-2 border-[#6366F1] text-[#6366F1] font-semibold">
                  Overview
                </button>
                <button className="pb-3 text-muted-foreground hover:text-foreground">
                  Q&A
                </button>
                <button className="pb-3 text-muted-foreground hover:text-foreground">
                  Notes
                </button>
                <button className="pb-3 text-muted-foreground hover:text-foreground">
                  Resources
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-foreground">Instructor</h2>

              <div className="flex items-start gap-4">
                <Image
                  src={course?.instrucorImage ?? "/placeholder-instructor.jpg"}
                  alt={course?.instructorName ?? "Instructor"}
                  width={80}
                  height={80}
                  className="rounded-full"
                  priority
                />

                <div>
                  <h3 className="font-bold text-lg text-foreground">
                    {course?.instructorName}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {course?.instructorTitle}
                  </p>

                  <p className="text-muted-foreground mb-3">{course?.instructorBio}</p>

                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#6366F1] fill-[#6366F1]" />
                      {course?.instructorRating} Rating
                    </span>

                    <span>
                      {course?.instructorStudents?.toLocaleString() ?? 0}{" "}
                      Students
                    </span>
                    <span>{course?.instructorCourses} Courses</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground">Student Comments</h2>

              <textarea
                className="w-full px-4 py-3 border border-input rounded-lg bg-background"
                rows={3}
                placeholder="Add a comment..."
              />

              <button className="mt-2 px-6 py-2 bg-[#6366F1] text-white rounded-lg hover:bg-[#4F46E5]">
                Post Comment
              </button>

              <div className="space-y-4 mt-4">
                {COURSE_DATA.comments.map((c) => (
                  <div
                    key={c.id}
                    className="flex gap-4 pb-4 border-b border-border"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={c.avatar}
                        alt={c.user}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-foreground">{c.user}</span>
                        <span className="text-xs text-muted-foreground">{c.date}</span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-2">{c.comment}</p>

                      <div className="flex items-center gap-4 text-xs">
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-[#6366F1]">
                          <ThumbsUp className="w-3 h-3" /> {c.likes}
                        </button>

                        <button className="flex items-center gap-1 text-muted-foreground hover:text-[#6366F1]">
                          <MessageCircle className="w-3 h-3" /> Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-96 bg-card border-l border-border lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
          <div className="p-4 border-b bg-muted">
            <h2 className="font-bold text-lg text-foreground">Course Content</h2>
            <p className="text-sm text-muted-foreground">
              {COURSE_DATA.sections.length} sections •{" "}
              {COURSE_DATA.sections.reduce(
                (acc, s) => acc + s.lectures.length,
                0
              )}{" "}
              lectures
            </p>
          </div>

          <CourseSidebar sections={COURSE_DATA.sections} />
        </div>
      </div>
    </div>
  );
}
