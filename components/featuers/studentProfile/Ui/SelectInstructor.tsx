import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TopInstructorData } from "@/lib/data";

export function SelectInstructor({ instructorId }: { instructorId?: number }) {
  return (
    <Select defaultValue={instructorId?.toString()}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Instructor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Choose Instructor</SelectLabel>
          {TopInstructorData.map((instructor) => (
            <SelectItem key={instructor.id} value={instructor.id.toString()}>
              {instructor.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
