import { AllCourses } from "@/lib/data";
import { Dialog } from "./Dialog";
import { Button } from "@/components/ui/button";

const WCourseNav = ({ id }: { id: string }) => {
  const course = AllCourses.find((course) => course.id === Number(id));
  if (!course) return null;
  return (
    <nav className="flex justify-between items-center py-4">
      <h1>{course.title}</h1>
      <ul className=" flex gap-4">
        <li>
          <Dialog />
        </li>
        <li>
          <Button className="text-white bg-orange-500 hover:bg-orange-600 capitalize ">next lecture</Button>
        </li>
      </ul>
    </nav>
  );
};

export default WCourseNav;
