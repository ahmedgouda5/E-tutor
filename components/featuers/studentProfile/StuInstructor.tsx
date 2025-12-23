import { TopInstructorData } from "@/lib/data";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AlertDialogMessage } from "./StuUi/Message";

const StuInstructor = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <section className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {TopInstructorData.map((instructor) => (
            <div
              key={instructor.id}
              className="border  rounded-xl flex flex-col items-center hover:shadow-orange-300 hover:shadow-lg transition-all duration-300 overflow-hidden shadow-sm bg-white"
            >
              <Image
                priority
                src={instructor.instrucorImage}
                alt={instructor.name}
                width={200}
                height={200}
                className="w-full h-[200px] object-cover"
              />

              <div className="text-center px-3 py-2 h-[80px]">
                <h3 className="text-lg font-semibold">{instructor.name}</h3>
                <p className="text-gray-500 text-sm">{instructor.title}</p>
              </div>

              <div className="border-y w-full flex flex-col md:flex-row justify-between px-2 gap-2 py-2 text-sm text-gray-700 items-center">
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-orange-600 fill-orange-600" />{" "}
                  {instructor.rating}
                </span>
                <span>{instructor.students} students</span>
              </div>
              <AlertDialogMessage instructorId={instructor.id} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StuInstructor;
