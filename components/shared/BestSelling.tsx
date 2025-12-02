import { bestSellingCourses } from '@/lib/data'
import Image from 'next/image'
import Heading from './heading'
import Link from 'next/link'

const BestSelling = () => {
    return (
        <main>
            < Heading heading="Best Selling Courses" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {bestSellingCourses.slice(0, 4).map((course, i) => (
                  <Link key={i} href={`/ELearn/courses/${course.id}`}>
                      <div key={i} className="border rounded-xl overflow-hidden shadow-sm h-[330px]">
                        <Image src={course.image} alt={course.title} priority className="w-full h-40 object-cover" width={400} height={160} />

                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-orange-600">{course.category}</span>
                                <span className="text-xs font-bold text-red-500">{course.price}</span>
                            </div>

                            <h3 className="font-semibold text-sm leading-5 mb-3">{course.title}</h3>

                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>⭐ {course.rating}</span>
                                <span>{course.students} students</span>
                            </div>
                        </div>
                    </div>
                  </Link>
                ))}
            </div>
        </main>
    )
}

export default BestSelling