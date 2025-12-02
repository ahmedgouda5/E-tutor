import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Curriculum() {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Curriculum
      </h2>

      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">

        <AccordionItem value="item-1">
          <AccordionTrigger>
            🔹 Section 1: Introduction to the Course
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">

            <Lesson title="Welcome & Overview" duration="04:12" />
            <Lesson title="What You Will Learn" duration="06:30" />
            <Lesson title="How to Get the Most from the Course" duration="03:45" />

          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            🔹 Section 2: Getting Started with React
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">

            <Lesson title="What is React?" duration="05:50" />
            <Lesson title="Creating Your First Component" duration="08:22" />
            <Lesson title="Understanding JSX" duration="07:15" />

          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            🔹 Section 3: State & Props
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">

            <Lesson title="Props Overview" duration="05:00" />
            <Lesson title="useState Explained" duration="09:10" />
            <Lesson title="Building Interactive UI" duration="11:25" />

          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}

function Lesson({ title, duration }: { title: string; duration: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span>• {title}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{duration}</span>
    </div>
  );
}
