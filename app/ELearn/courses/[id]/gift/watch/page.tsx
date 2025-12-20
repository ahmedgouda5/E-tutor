"use client";
import WCourseNav from "@/components/featuers/CourseDetails/WCourseNav";
import { AllCourses, COURSE_DATA } from "@/lib/data";
import { Star, Play, CheckCircle, ChevronDown, ChevronUp, Clock, ThumbsUp, MessageCircle } from "lucide-react";
import Image from "next/image";
import React, { use, useCallback, memo } from "react";

// ---------- TYPES ----------
interface Lecture {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

interface Section {
  id: number;
  title: string;
  duration: string;
  lectures: Lecture[];
}




const CourseSection = memo(function CourseSection({ section, isOpen, onToggle }: { section: Section; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition"
      >
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-sm">{section.title}</h3>
          <p className="text-xs text-gray-500 mt-1">
            {section.lectures.length} lectures • {section.duration}
          </p>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="bg-gray-50">
          {section.lectures.map((lecture: Lecture) => (
            <div
              key={lecture.id}
              className="px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer border-t border-gray-200"
            >
              <div className="shrink-0">
                {lecture.completed ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Play className="w-4 h-4 text-gray-400" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm truncate">{lecture.title}</p>
              </div>

              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {lecture.duration}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const CourseSidebar = memo(function CourseSidebar({ sections }: { sections: Section[] }) {
  "use client";

  const [openSections, setOpenSections] = React.useState<number[]>([1]);

  const toggleSection = useCallback((id: number) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }, []);

  return (
    <div>
      {sections.map((sec: Section) => (
        <CourseSection
          key={sec.id}
          section={sec}
          isOpen={openSections.includes(sec.id)}
          onToggle={() => toggleSection(sec.id)}
        />
      ))}
    </div>
  );
});

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);


  const course=AllCourses.find((course)=>course.id===Number(id))

  return (
    <div className="min-h-screen bg-gray-50">
      <nav>
        <WCourseNav id={id}/>
      </nav>
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className="flex-1 bg-black">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={COURSE_DATA.currentVideo.url}
              title={COURSE_DATA.currentVideo.title}
              allowFullScreen
            />
          </div>

          <div className="bg-white p-6">
            <h1 className="text-2xl font-bold mb-2">{course?.title}</h1>
            <p className="text-gray-600 mb-4">{COURSE_DATA.title}</p>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex gap-6">
                <button className="pb-3 border-b-2 border-orange-500 text-orange-500 font-semibold">Overview</button>
                <button className="pb-3 text-gray-600 hover:text-gray-900">Q&A</button>
                <button className="pb-3 text-gray-600 hover:text-gray-900">Notes</button>
                <button className="pb-3 text-gray-600 hover:text-gray-900">Resources</button>
              </div>
            </div>

            {/* Instructor */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Instructor</h2>

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
                  <h3 className="font-bold text-lg">{course?.instructorName}</h3>
                  <p className="text-gray-600 text-sm mb-2">{course?.instructorTitle}</p>

                  <p className="text-gray-700 mb-3">{course?.instructorBio}</p>

                  <div className="flex gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                      {course?.instructorRating} Rating
                    </span>

                    <span>{course?.instructorStudents?.toLocaleString() ?? 0} Students</span>
                    <span>{course?.instructorCourses} Courses</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Student Comments</h2>

              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                rows={3}
                placeholder="Add a comment..."
              />

              <button className="mt-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                Post Comment
              </button>

              <div className="space-y-4 mt-4">
                {COURSE_DATA.comments.map((c) => (
                  <div key={c.id} className="flex gap-4 pb-4 border-b border-gray-200">
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
                        <span className="font-semibold text-sm">{c.user}</span>
                        <span className="text-xs text-gray-500">{c.date}</span>
                      </div>

                      <p className="text-gray-700 text-sm mb-2">{c.comment}</p>

                      <div className="flex items-center gap-4 text-xs">
                        <button className="flex items-center gap-1 text-gray-600 hover:text-orange-500">
                          <ThumbsUp className="w-3 h-3" /> {c.likes}
                        </button>

                        <button className="flex items-center gap-1 text-gray-600 hover:text-orange-500">
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

        {/* SIDEBAR */}
        <div className="lg:w-96 bg-white border-l border-gray-200 lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
          <div className="p-4 border-b bg-gray-50">
            <h2 className="font-bold text-lg">Course Content</h2>
            <p className="text-sm text-gray-600">
              {COURSE_DATA.sections.length} sections •{" "}
              {COURSE_DATA.sections.reduce((acc, s) => acc + s.lectures.length, 0)} lectures
            </p>
          </div>

          <CourseSidebar sections={COURSE_DATA.sections} />
        </div>
      </div>
    </div>
  );
}
