import React from 'react'
import Heading from '@/components/shared/heading';
import { TopInstructorData } from '@/lib/data';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const TopInstructor = () => {
    return (
        <main className="my-7 border shadow-lg p-2 rounded-xl ">
            <Heading heading="Top Instructor In the Month" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {TopInstructorData.map((instructor) => (
                    <div
                        key={instructor.id}
                        className="border rounded-xl flex flex-col items-center hover:shadow-orange-300 hover:shadow-lg transition-all duration-300 overflow-hidden shadow-sm bg-white"
                    >
                        <Image
                            priority
                            src={instructor.instrucorImage}
                            alt={instructor.name}
                            width={200}
                            height={200}
                            className="w-full h-[200px] object-cover"
                        />

                        <div className="text-center px-3 py-2">
                            <h3 className="text-lg font-semibold">{instructor.name}</h3>
                            <p className="text-gray-500 text-sm">{instructor.major}</p>
                        </div>

                        <div className="border-t w-full flex justify-between px-3 py-2 text-sm text-gray-700">
                            <span className='flex items-center gap-1'><Star size={16} className='text-orange-600 fill-orange-600'/> {instructor.rating}</span>
                            <span>{instructor.students} students</span>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center my-7">
                Thousands of students waiting for a instructor. Start teaching & earning now!.
                <Link
                    className="text-orange-500 inline-flex items-center gap-1 font-medium"
                    href="#"
                    prefetch
                >
                    Become Instructor
                    <ArrowRight className="w-4 h-4 translate-y-0.5" />
                </Link>
            </p>
        </main>
    )
}

export default React.memo(TopInstructor);
