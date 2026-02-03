import { AllCourses } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {AllCourses.length > 0 ? (
          AllCourses.slice(0, 4).map((course, i) => (
            <Link href={`/Dashboard/Mycourses/${course.id}`} key={i}>
              <div
                className="border rounded-xl overflow-hidden shadow-sm h-[330px]"
              >
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
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No courses found matching your search.
          </div>
        )}
      </section>
  )
}

export default Page