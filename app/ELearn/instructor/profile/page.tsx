"use client";
import { useState } from "react";

import TabButton from "@/components/featuers/instructor/TabButton";
import Courses from "@/components/featuers/instructor/courses";
import Reviews from "@/components/featuers/CourseDetails/Reviews";

const Page = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="w-full">
      <nav className="flex gap-8 border-b mb-6">
        <TabButton
          label="Courses"
          value="courses"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          label="Reviews"
          value="reviews"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </nav>

      <div className="mt-6">
        {activeTab === "courses" && <Courses />}
        {activeTab === "reviews" && <Reviews />}
      </div>
    </div>
  );
};

export default Page;
