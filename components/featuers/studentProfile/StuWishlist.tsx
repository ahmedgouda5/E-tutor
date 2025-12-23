import { Button } from "@/components/ui/button";
import { AllCourses } from "@/lib/data";
import { Heart, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type StuWishlistProps = {
  title: string;
};

const StuWishlist = ({ title }: StuWishlistProps) => {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold">{title} (3)</h1>
      <main>
        <nav className="hidden border border-gray-200 p-3 md:block">
          <ul className="flex items-center gap-4 text-sm font-semibold uppercase text-gray-500">
            <li className="flex-1">Course</li>
            <li className="w-64 text-center">Price</li>
            <li className="w-48 text-right">Action</li>
          </ul>
        </nav>

        <section className="border border-gray-200 md:border-t-0">
          {AllCourses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="flex flex-col gap-19 border-b p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-1 items-center gap-2">
                <Image
                  src={course.image}
                  width={100}
                  height={100}
                  alt={course.title}
                  className="rounded-md"
                />
                <div>
                  <p className="flex items-center gap-1 text-sm text-gray-500">
                    <StarIcon
                      size={16}
                      className="text-orange-500 fill-orange-500"
                    />{" "}
                    {course.rating} ({course.students})
                  </p>
                  <h4 className="font-medium md:w-52">{course.title}</h4>

                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Course by:</span>{" "}
                    {course.instructorName}
                  </p>
                </div>
              </div>

              <div className="text-sm font-semibold md:w-32 md:text-center">
                <span className="text-gray-500 md:hidden">Price: </span>
                <span className="text-orange-500">{course.price}</span>
              </div>

              <div className="flex flex-col gap-2 md:w-48 md:flex-row md:justify-end">
                <Button className="rounded bg-gray-200 hover:bg-gray-300 px-2 py-2 text-sm text-black">
                  Buy Now
                </Button>
                <Button className="rounded border bg-orange-500 hover:bg-orange-600 px-2 py-2 text-sm">
                  Add to Cart
                </Button>
                <Button className="flex items-center hover:bg-[#FFEEE8] bg-[#FFEEE8] justify-center rounded border p-2">
                  <Heart size={18} className="text-orange-500 fill-orange-500" />
                </Button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default React.memo(StuWishlist);
