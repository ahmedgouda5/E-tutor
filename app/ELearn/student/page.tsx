"use client";
import StuCourses from "@/components/featuers/studentProfile/StuCourses";
import StuInstructor from "@/components/featuers/studentProfile/StuInstructor";
import StuMessage from "@/components/featuers/studentProfile/StuMessage";
import StuProfile from "@/components/featuers/studentProfile/StuProfile";
import StuWishlist from "@/components/featuers/studentProfile/StuWishlist";
import StuPurchaseList from "@/components/featuers/studentProfile/StuPurchaseList";
import { useState } from "react";
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
      <nav className="bg-[#FFEEE8]">
        <section className="flex justify-center py-3 ">
          <ul className="flex gap-x-2 md:gap-x-10 bg-white py-2 md:px-4 rounded-2xl">
            {StudentLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => setActiveLink(link.name)}
                className={`text-sm text-gray-600 cursor-pointer ${
                  activeLink === link.name
                    ? "font-bold text-black border-b-2 border-orange-500"
                    : ""
                }`}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </section>
      </nav>
      <main className="py-4 md:px-28">{renderContent()}</main>
    </>
  );
};

export default StudentPage;
