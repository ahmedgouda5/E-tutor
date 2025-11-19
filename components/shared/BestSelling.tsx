import { bestSellingCourses } from '@/lib/data'
import Image from 'next/image'
import Heading from './heading'

const BestSelling = () => {
    return (
        <main>
            < Heading heading="Best Selling Courses" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {bestSellingCourses.map((course, i) => (
                    <div key={i} className="border rounded-xl overflow-hidden shadow-sm">
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
                ))}
            </div>
        </main>
    )
}

export default BestSelling