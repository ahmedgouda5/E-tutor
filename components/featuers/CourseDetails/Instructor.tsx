import { ICourse } from "@/lib/data";
import Image from "next/image";
// import { FaStar } from "react-icons/fa";

export default function Instructor({ course }: { course: ICourse }) {
  return (
    <div className="w-full  dark:bg-neutral-900 rounded-2xl p-6  border border-gray-100 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row gap-6">
        
        {/* Image */}
        <div className="shrink-0">
          <Image
            src={course.instrucorImage}
            alt={course.instructorName}
            width={120}
            height={120}
            className="rounded-xl object-cover shadow-sm"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {course.instructorName}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {course.title || "Course Instructor"}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300 mt-2">
            <span>👨‍🎓 {course.students} Students</span>
            <span>📘 {course.price || 1} Price</span>
            <span className="flex items-center gap-1">
              
              {course.rating} <span>⭐</span>
            </span>
          </div>

          {/* Bio */}
        </div>
      </div>
    </div>
  );
}
