import { coursesFeatured } from "@/lib/data";
import { BarChart2, Clock, Star, Users } from "lucide-react";
import Image from "next/image";

const FeatureCourses = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 bg-white">

            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
                <div className="flex  text-center justify-between  items-center flex-wrap  w-full">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Our feature courses
                    </h2>
                    <p className="text-gray-500 max-w-md">
                        Vestibulum sed dolor sed diam mollis maximus vel nec dolor.
                        Donec varius purus et eleifend porta.
                    </p>
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {coursesFeatured.map((course) => (
                    <div
                        key={course.id}
                        className="flex flex-col sm:flex-row gap-4 p-4  bg-white rounded-lg border border-gray-200
                                   hover:shadow-lg transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="w-full sm:w-auto">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={300}
                                height={200}
                                priority
                                className="w-full sm:w-[150px] h-[180px] sm:h-[120px] object-cover rounded-lg"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">

                            {/* Top */}
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded ${course.categoryColor}`}>
                                        {course.category}
                                    </span>

                                    <div className="text-right">
                                        <span className="text-xl font-bold text-gray-900">
                                            ${course.price.toFixed(2)}
                                        </span>
                                        <span className="text-sm text-gray-400 line-through ml-2">
                                            ${course.originalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                                    {course.title}
                                </h3>

                                {/* Instructor */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={course.instructorImage}
                                            alt={course.instructor}
                                            width={24}
                                            height={24}
                                            priority
                                            className="rounded-full"
                                        />
                                        <span className="text-sm text-gray-600">{course.instructor}</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                                        <span className="font-semibold text-gray-900">{course.rating}</span>
                                        <span className="text-gray-500">({course.reviews})</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom - Stats */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">

                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4 text-purple-600" />
                                    <span>{course.students} students</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <BarChart2 className="w-4 h-4 text-red-600" />
                                    <span>{course.level}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4 text-green-500" />
                                    <span>{course.duration}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCourses;
