"use client";

import { AllCourses } from "@/lib/data";
import { ListFilterPlus, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredAndSortedCourses = useMemo(() => {
    let courses = [...AllCourses];

    // Filter by search query
    if (searchQuery) {
      courses = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (course.category &&
            course.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort courses
    switch (sortBy) {
      case "title":
        courses.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "category":
        courses.sort((a, b) =>
          (a.category || "").localeCompare(b.category || "")
        );
        break;
      case "rating":
        courses.sort((a, b) => b.rating - a.rating);
        break;
      case "students":
        courses.sort((a, b) => {
          const aStudents = parseFloat(a.students.replace("K", "")) * 1000;
          const bStudents = parseFloat(b.students.replace("K", "")) * 1000;
          return bStudents - aStudents;
        });
        break;
      default:
        break;
    }

    return courses;
  }, [searchQuery, sortBy]);

  return (
    <main className="md:px-[100px] px-[20px] md:py-7 py-5 space-y-7">
      <nav className="flex items-center md:gap-4 gap-2">
        <div className="flex items-center gap-2 rounded-lg border-2 px-4 py-1 cursor-pointer hover:bg-gray-50">
          <ListFilterPlus size={17} />
          <span>Filter</span>
        </div>
        <div className="flex w-fit items-center gap-2 rounded-lg border-2 px-4 py-1  max-w-[200px] md:max-w-md">
          <Search size={17} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none flex-1 bg-transparent"
          />
        </div>

        {/* Sort By Dropdown */}
        <div className="md:flex items-center gap-2 rounded-lg border-2 px-4 py-1 hidden">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="outline-none bg-transparent cursor-pointer"
          >
            <option value="default">Default</option>
            <option value="title">Title</option>
            <option value="category">Category</option>
            <option value="rating">Rating</option>
            <option value="students">Students</option>
          </select>
        </div>
      </nav>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredAndSortedCourses.length > 0 ? (
          filteredAndSortedCourses.map((course, i) => (
            <Link href={`/ELearn/courses/${course.id}`} key={i}>
              <div
                className="border rounded-xl overflow-hidden shadow-sm h-[330px]"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  priority
                  className="w-full h-40 object-cover"
                  width={400}
                  height={160}
                />

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-orange-600">
                      {course.category}
                    </span>
                    <span className="text-xs font-bold text-red-500">
                      {course.price}
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm leading-5 mb-3">
                    {course.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>⭐ {course.rating}</span>
                    <span>{course.students} students</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No courses found matching your search.
          </div>
        )}
      </section>
    </main>
  );
};

export default Courses;
