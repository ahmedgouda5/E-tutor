import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const InstructorBanner = () => {
    const InstructorBannerData = [
        {
            id: 1,
            title: "Apply to become an instructor",
            bgColor: "#EBEBFF",
            textColor: "#564FFD",
        },
        {
            id: 2,
            title: "Build & edit your profile",
            bgColor: "#FFF0F0",
            textColor: "#FF6636",
        },
        {
            id: 3,
            title: "Create your new course",
            bgColor: "#FFEFEF",
            textColor: "#E34444",
        },
        {
            id: 4,
            title: "Start teaching & earning",
            bgColor: "#E1F7E3",
            textColor: "#23BD33",
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-8 my-10">
            {/* LEFT BANNER */}
            <div className="flex items-center justify-between bg-linear-to-r from-amber-600 to-amber-500 px-10 py-8 rounded-xl text-white w-full lg:w-[48%]">
                <div className="flex flex-col gap-4 max-w-md">
                    <h2 className="text-3xl font-bold">Become an Instructor</h2>
                    <p className="text-sm leading-relaxed opacity-90">
                        Instructors from around the world teach millions of students on
                        Udemy. We provide the tools and skills to teach what you love.
                    </p>
                    <Button className="bg-white text-amber-600 hover:bg-gray-100 flex items-center gap-2 w-fit">
                        Start Teaching <ArrowRight size={18} />
                    </Button>
                </div>

                <Image
                    src="/Instructors/Inst1.png"
                    alt="instructor-banner"
                    width={220}
                    height={220}
                    className=" lg:block"
                />
            </div>

            {/* RIGHT STEPS */}
            <div className="w-full lg:w-[48%]">
                <h1 className="text-3xl font-bold mb-6">
                    Your teaching & earning steps
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {InstructorBannerData.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 p-5 rounded-lg shadow-sm border border-gray-100 bg-white"
                        >
                            <div
                                className="rounded-full w-12 h-12 flex items-center justify-center text-md font-semibold shrink-0"
                                style={{ backgroundColor: item.bgColor, color: item.textColor }}
                            >
                                {item.id}
                            </div>

                            <h3
                                style={{ color: item.textColor }}
                                className="text-md  font-semibold"
                            >
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>




            </div>
        </div>
    );
};

export default React.memo(InstructorBanner);
