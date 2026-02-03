"use client";
import AdvancedInformation from "@/components/dashboard/NewCourse/AdvancedInformation";
import BasicInformation from "@/components/dashboard/NewCourse/BasicInformation";
import React, { useState } from "react";
import { LibraryBig, Pickaxe } from "lucide-react";

const Newcourse = () => {
  const [Component, setComponent] = useState("Basic information");

  const renderComponent = () => {
    switch (Component) {
      case "Basic information":
        return <BasicInformation />;
      case "Advanced information":
        return <AdvancedInformation />;
      default:
        return <BasicInformation />;
    }
  };

  return (
    <div className="flex flex-col h-full ">
      <nav className="bg-neutral-50 p-3 rounded-md">
        <ul className="flex gap-6 justify-evenly">
          <li
            onClick={() => setComponent("Basic information")}
            className="flex gap-2 cursor-pointer hover:border-b-2 hover:border-orange-500 transition-all"
          >
            <LibraryBig />
            Basic information
          </li>
          <li
            onClick={() => setComponent("Advanced information")}
            className="flex gap-2 cursor-pointer hover:border-b-2 hover:border-orange-500 transition-all"
          >
            <Pickaxe />
            Advanced information
          </li>
        </ul>
      </nav>

      <main className="p-4 ">
        {renderComponent()}
      </main>
    </div>
  );
};

export default Newcourse;
