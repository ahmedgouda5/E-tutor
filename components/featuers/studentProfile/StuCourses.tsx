import { PaginationDemo } from '@/components/featuers/studentProfile/Ui/pagination'
import { AllCourses } from '@/lib/data'
import Image from 'next/image'
import React, { useState } from 'react'

const StuCourses = ({title}: {title: string}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(AllCourses.length / itemsPerPage);
  console.log(totalPages) //!3
  
  return (
    <div>
        <h1 className='font-bold text-2xl '>{title}</h1>
        <section className='py-5'>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {AllCourses.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((course) => (
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
        <section>
          <PaginationDemo currentPage={page} totalPages={totalPages} setPage={setPage}/>
        </section>
    </div>
  )
}

export default StuCourses