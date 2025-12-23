import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AllCourses } from "@/lib/data";
import { CreditCard, DollarSign, Play, StarIcon } from "lucide-react";
import Image from "next/image";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
    {Array.from({ length: 3 }).map((_, index) => (
      <AccordionItem className="border p-2" value={`item-${index + 1}`} key={`item-${index + 1}`}>
        <AccordionTrigger >
          <div className="flex justify-between flex-col gap-2">
            <h5 className="text-gray-900 text-sm">1st Septembar, 2021 at 11:30 PM</h5>
            <div className="flex gap-2 items-center">
              <span className="flex gap-1 items-center font-light">
                <Play size={14} className="text-[#564FFD]" /> 3 courses
              </span>
              <span className="flex gap-1 items-center font-light">
                <DollarSign size={14} className="text-[#FF6636]" />
                $75.00 USD
              </span>
              <span className="flex gap-1 items-center font-light">
                <CreditCard size={14} className="text-[#23BD33]" /> Credit Card
              </span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className=" border-t flex flex-col gap-4 text-balance">
          {AllCourses.slice(0, 1).map((course) => (
            <div
              key={course.id}
              className="flex flex-col gap-19   md:flex-row md:items-center md:justify-between"
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
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    ))}
    </Accordion>
  );
}
