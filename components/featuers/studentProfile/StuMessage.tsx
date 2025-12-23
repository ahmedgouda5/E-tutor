"use client";
import { TopInstructorData } from "@/lib/data";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function StuMessage({ title }: { title: string }) {
  const [user, setUser] = useState<number>(1);
   const GetUserData=useMemo(()=>{
    return TopInstructorData.find((instructor)=>instructor.id===user)
   },[user])
  return (
    <div className="flex gap-2 h-screen  border-2 rounded">
      <aside className="w-80 bg-white border-r">
        <div className="p-4 font-semibold text-lg">{title}</div>

        <div className="px-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>

        <ul className="mt-4">
          {TopInstructorData.slice(0, 5).map((instructor, i) => (
            <li
              key={i}
              className={`px-4 py-3 cursor-pointer ${user===instructor.id && "bg-orange-100"} `}
            >
              <div
                className="flex items-center gap-2"
                onClick={() => setUser(instructor.id)}
              >
                <Image
                  src={instructor.instrucorImage}
                  alt={instructor.name}
                  width={40}
                  height={40}
                  className="w-12 h-12 rounded-full"
                />
                <div className="font-medium">{instructor.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 flex flex-col border-l">
        {/* Header */}
        <div className="h-16 bg-white border-b flex items-center px-6">
          <div className="flex items-center gap-2">
            <Image
              src={GetUserData?.instrucorImage ?? "/placeholder-avatar.png"}
              alt={GetUserData?.name ?? "Instructor"}
              width={40}
              height={40}
              className="w-12 h-12 rounded-full"
            />
            <div className="font-semibold">{GetUserData?.name}</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex">
            <div className="bg-white px-4 py-2 rounded-lg shadow text-sm max-w-md">
              Hello and thanks for signing up 👋
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm max-w-md">
              Hello, Good Evening.
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm max-w-md">
              I only have a small doubt about your lecture.
            </div>
          </div>

          <div className="flex">
            <div className="bg-white px-4 py-2 rounded-lg shadow text-sm max-w-md">
              Yeah sure, tell me 🙂
            </div>
          </div>
        </div>

        <div className="bg-white border-t p-4 flex items-center gap-3">
          <textarea
            placeholder="Type your message"
            className="flex-1 border rounded-md px-3 py-2 text-sm resize-none h-12"
          />
          <button className="bg-orange-500 text-white px-5 py-2 rounded-md">
            Send
          </button>
        </div>
      </main>
    </div>
  );
}
