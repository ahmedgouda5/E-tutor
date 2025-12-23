"use client";
import StuCourses from "@/components/featuers/studentProfile/StuCourses";
import StuInstructor from "@/components/featuers/studentProfile/StuInstructor";
import StuMessage from "@/components/featuers/studentProfile/StuMessage";
import StuProfile from "@/components/featuers/studentProfile/StuProfile";
import StuWishlist from "@/components/featuers/studentProfile/StuWishlist";
import StuPurchaseList from "@/components/featuers/studentProfile/StuPurchaseList";
import React, { useState } from "react";
import StuSettings from "@/components/featuers/studentProfile/StuSettings";
const StudentLinks = [
  {
    name: "Dashboard",
  },
  {
    name: "Courses",
  },
  {
    name: "Teachers",
  },
  {
    name: "Message",
  },
  {
    name: "Wishlist",
  },
  {
    name: "Purchase History",
  },
  {
    name: "Settings",
  },
];
const StudentPage = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const renderContent = () => {
    switch (activeLink) {
      case "Dashboard":
        return <StuProfile title={activeLink} />;
      case "Courses":
        return <StuCourses title={activeLink} />;
      case "Teachers":
        return <StuInstructor title={activeLink} />;
      case "Message":
        return <StuMessage title={activeLink} />;
      case "Wishlist":
        return <StuWishlist title={activeLink} />;
      case "Purchase History":
        return <StuPurchaseList title={activeLink} />;
      case "Settings":
        return <StuSettings title={activeLink} />;
      default:
        return <StuProfile title={activeLink} />;
    }
  };

  return (
    <>
      <nav className="bg-[#FFEEE8] px-2 sm:px-4">
        <section className="flex justify-center py-2 sm:py-3">
          <div className="w-full max-w-full overflow-x-auto scrollbar-hide">
            <ul className="flex gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-10 bg-white py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-xl sm:rounded-2xl min-w-max sm:min-w-0 justify-center">
              {StudentLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => setActiveLink(link.name)}
                  className={`text-xs sm:text-sm md:text-base text-gray-600 cursor-pointer whitespace-nowrap px-1 sm:px-2 pb-1 transition-all duration-200 ${
                    activeLink === link.name
                      ? "font-bold text-black border-b-2 border-orange-500"
                      : "hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </nav>
      <main className="py-3 sm:py-4 px-3 sm:px-6 md:px-16 lg:px-28">{renderContent()}</main>
    </>
  );
};

export default React.memo(StudentPage);
