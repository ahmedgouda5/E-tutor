import { AllCourses } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Courses = () => {
  return <>
    <section className="grid grid-cols-1 md:grid-cols-2  gap-3">
      {AllCourses.slice(0, 4).map((course, i) => (
        <Link href={`/ELearn/courses/${course.id}`} key={i}>
          <div className="border rounded-xl overflow-hidden shadow-sm h-[330px]">
            <Image
              src={course.image}
              alt={course.title}
              priority
              className="w-full h-40 object-cover"
              width={400}
              height={160}
            />

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-orange-600">
                  {course.category}
                </span>
                <span className="text-xs font-bold text-red-500">
                  {course.price}
                </span>
              </div>

              <h3 className="font-semibold text-sm leading-5 mb-3">
                {course.title}
              </h3>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>⭐ {course.rating}</span>
                <span>{course.students} students</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  </>;
};

export default Courses;
