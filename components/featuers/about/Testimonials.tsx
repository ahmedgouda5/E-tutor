import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="my-10 rounded-md flex flex-col antialiased  bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

export const testimonials = [
  {
    quote:
      "This platform completely changed the way I learn. The courses are clear, practical, and straight to the point. I was able to land my first frontend job thanks to what I learned here!",
    name: "Ahmed Hassan",
    title: "Frontend Developer",
  },
  {
    quote:
      "As an instructor, I love how easy it is to upload content and manage my students. The dashboard is simple, and I can track progress in real time. Highly recommended for any teacher!",
    name: "Sarah Mohamed",
    title: "UI/UX Instructor",
  },
  {
    quote:
      "I started from zero, and within two months I built my first project. The step-by-step lessons and assignments made learning programming so much easier.",
    name: "Omar Youssef",
    title: "Student",
  },
  {
    quote:
      "The quality of the courses is amazing. I’ve taken more than 7 classes and every one of them helped me level up my skills significantly.",
    name: "Mariam Adel",
    title: "Digital Marketing Specialist",
  },
  {
    quote:
      "The certificates helped me strengthen my CV and stand out in job interviews. The instructors are extremely knowledgeable and supportive.",
    name: "Hossam Ali",
    title: "Software Engineer",
  },
];

