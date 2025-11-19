"use client";
import React, { useState } from "react";
import { Heart, Clock, Users, BarChart3, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { bestSellingCourses } from "@/lib/data";
import Heading from "@/components/shared/heading";

// Type definitions
type Course = typeof bestSellingCourses[0];

type CourseCardProps = {
  course: Course;
  index: number;
  isHovered: number | null;
  setIsHovered: React.Dispatch<React.SetStateAction<number | null>>;
  favorites: { [key: string]: boolean };
  setFavorites: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
};

// CourseCard Component
const CourseCard: React.FC<CourseCardProps> = ({
  course,
  index,
  isHovered,
  setIsHovered,
  favorites,
  setFavorites,
}) => {
  const price = Number(course.price.replace("$", ""));
  const originalPrice = course.price ? Number(course.price.replace("$", "")) : price;
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(null)}
    >
      {/* Main Card */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
        <div className="relative">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={250}
            priority
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded">
              {course.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
              {course.price}
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 min-h-12">
            {course.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <span className="text-orange-500">★</span>
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students} students</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Card */}
      {isHovered === index && (
        <div className="absolute left-0 top-0 w-80 bg-white rounded-lg shadow-2xl z-50 border border-gray-200 animate-fadeIn">
          <div className="relative">
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              priority
              height={250}
              className="w-full h-40 object-cover rounded-t-lg"
            />
          </div>

          <div className="p-5">
            <div className="mb-3">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded">
                {course.category}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">{course.title}</h3>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b">
              <div className="flex items-center gap-1">
                <span className="text-orange-500 font-bold">{course.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{ "N/A"}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gray-900">${price}</span>
              <span className="text-gray-400 line-through">${originalPrice}</span>
              <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded">
                {discount}% OFF
              </span>
            </div>

            {/* Favorite Button */}
            <button
              onClick={() =>
                setFavorites({ ...favorites, [course.id]: !favorites[course.id] })
              }
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
            >
              <Heart
                className={`w-5 h-5 ${
                  favorites[course.id] ? "fill-red-500 text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// RecentlyAddedCourses Component
const RecentlyAddedCourses: React.FC = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  return (
    <section className="py-12 bg-gray-50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4">
        <Heading heading="Recently Added Courses" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {bestSellingCourses.slice(0, 3).map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              index={index}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(RecentlyAddedCourses);
