import { AllCourses } from "@/lib/data";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Image from "next/image";

type StuProfileProps = {
  title: string;
};

const StuProfile = ({ title }: StuProfileProps) => {
  return (
    <>
      <nav>
        <h1 className="font-bold text-2xl">{title}</h1>
      </nav>

      <main className="py-5">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#FFEEE8] p-2 rounded-2xl flex items-center flex-col md:flex-row gap-x-2"
            >
              <div className="bg-white p-2 rounded-full">
                <Play className="text-red-500" />
              </div>
              <div>
                <h4>999</h4>
                <h5>Enrolled Courses</h5>
              </div>
            </div>
          ))}
        </section>

        {/* Courses */}
        <section className="py-10">
          <div className="flex items-center justify-between mb-4">
            <h3>let&apos;s start learning, kevin</h3>
            <div className="flex gap-2">
              <ArrowLeft className="bg-[#FFEEE8] p-2 rounded-full w-8 h-8 text-orange-600 cursor-pointer" />
              <ArrowRight className="bg-[#FFEEE8] p-2 rounded-full w-8 h-8 text-orange-600 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {AllCourses.slice(0, 4).map((course) => (
              <div key={course.id} className="border rounded-lg overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="w-full object-cover"
                />

                <div className="p-2 h-[100px]">
                  <h3 className="text-sm font-medium">{course.title}</h3>
                  <p className="text-xs text-gray-500">{course.category}</p>
                </div>

                <div className="flex items-center justify-between gap-2 border-t p-2 ">
                  <button className="text-white bg-orange-600 px-3 py-1 rounded text-sm">
                    Watch 
                  </button>
                  <h3 className="text-green-500 text-xs text-nowrap">
                    40% completed
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
       
      </main>
    </>
  );
};

export default StuProfile;
