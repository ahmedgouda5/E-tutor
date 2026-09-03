"use client";
import React, { useCallback, useState, useEffect } from "react";
import { Play, Clock, BarChart, Award, Globe, Star, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { AllCourses, ICourse } from "@/lib/data";
import Descritption from "@/components/featuers/CourseDetails/descritption";
import Curriculum from "@/components/featuers/CourseDetails/curriculum";
import Instructor from "@/components/featuers/CourseDetails/Instructor";
import Reviews from "@/components/featuers/CourseDetails/Reviews";
import { UseCartStore } from "@/store/CartStore";
import { useFavioritesStore } from "@/store/FavioritesStore";
import { AuthStore } from "@/store/AuthStore";
import toast from "react-hot-toast";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const { addToCart } = UseCartStore();
  const { addFaviorite } = useFavioritesStore();
  const { formData } = AuthStore();
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(formData.firstName) || Boolean(formData.email)
  );

  useEffect(() => {
    const isAuth = window.localStorage.getItem("isAuth") === "true";
    if (isAuth || formData.firstName || formData.email) {
      setIsAuthenticated(true);
    }
  }, [formData.firstName, formData.email]);

  const requireAuth = useCallback((): boolean => {
    const isAuth = window.localStorage.getItem("isAuth") === "true";
    if (isAuthenticated || isAuth) return true;
    toast.error("Please sign in to continue");
    router.push("/Auth/signin");
    return false;
  }, [isAuthenticated, router]);

  const handlerAddToCart = useCallback((course: ICourse) => {
    if (!requireAuth()) return;
    addToCart(course);
    toast.success("Course added to cart");
  }, [addToCart, requireAuth]);

  const handlerAddFaviorite = useCallback((course: ICourse) => {
    if (!requireAuth()) return;
    addFaviorite(course);
    toast.success("Course added to wishlist");
  }, [addFaviorite, requireAuth]);

  const handleBuyNow = useCallback(() => {
    if (!requireAuth()) return;
    router.push(`/ELearn/courses/${id}/checkout`);
  }, [id, requireAuth, router]);

  const handleGift = useCallback(() => {
    if (!requireAuth()) return;
    router.push(`/ELearn/courses/${id}/gift`);
  }, [id, requireAuth, router]);
  const [activeTab, setActiveTab] = useState("overview");
  const pathname = usePathname();
  const course = AllCourses.find((course) => course.id === Number(id));

  const renderComponent = () => {
    if (!course) return null;

    switch (activeTab) {
      case "overview":
        return <Descritption course={course} />;
      case "curriculum":
        return <Curriculum />;
      case "instructor":
        return <Instructor course={course} />;
      case "reviews":
        return <Reviews />;
      default:
        return <Descritption course={course} />;
    }
  };

  const courseFeatures = [
    { icon: Clock, text: "3 hrs on-demand video" },
    { icon: BarChart, text: "11 downloadable resources" },
    { icon: Award, text: "Certificate of completion" },
    { icon: Globe, text: "Access on mobile and TV" },
  ];

  const learningPoints = [
    "Go with demo lecture tips and video course Web Community",
    "You will learn apps to build your project and share the process about another students",
    "The only demo course you'll ever need course Web Community",
    "Learn UI/UX fundamentals, building each step of project",
    "This only course you'll ever need course Web Community",
    "Engage with the speaker in the public live Q&A sessions",
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Home</span>
              <span>/</span>
              <span>{pathname.split("/")[1]}</span>
              <span>/</span>
              <span>{pathname.split("/")[2]}</span>
              <span>/</span>
              <span className="text-foreground">{course?.category}</span>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {course?.category}
              </h1>
              <p className="text-muted-foreground mb-4">{course?.title || ""}</p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <Image
                    width={40}
                    height={40}
                    src="/courses/course-1.png"
                    alt="Instructor"
                    loading="lazy"
                    className="w-10 h-10 rounded-full border-2 border-card"
                  />
                  <Image
                    width={40}
                    height={40}
                    src="/courses/course-2.png"
                    alt="Instructor"
                    loading="lazy"
                    className="w-10 h-10 rounded-full border-2 border-card"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Dianne Russell • Kristin Watson
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#6366F1] text-[#6366F1]" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-sm text-muted-foreground">
                    (451,444 Rating)
                  </span>
                </div>
              </div>
            </div>

            <div
              className="relative z-0 aspect-video rounded-xl overflow-hidden
               bg-cover bg-center
                bg-linear-to-br from-[#6366F1] via-[#818CF8] to-[#C7D2FE]"
              style={{ backgroundImage: `url(${course?.image})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play
                    className="w-8 h-8 text-[#6366F1] ml-1"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>

            <div className="border-b">
              <div className="flex md:gap-8 gap-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-2 font-medium ${
                    activeTab === "overview"
                      ? "text-[#6366F1] border-b-2 border-[#6366F1]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`pb-4 px-2 font-medium ${
                    activeTab === "curriculum"
                      ? "text-[#6366F1] border-b-2 border-[#6366F1]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab("instructor")}
                  className={`pb-4 px-2 font-medium ${
                    activeTab === "instructor"
                      ? "text-[#6366F1] border-b-2 border-[#6366F1]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Instructor
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-4 px-2 font-medium ${
                    activeTab === "reviews"
                      ? "text-[#6366F1] border-b-2 border-[#6366F1]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Reviews
                </button>
              </div>
            </div>

            <div className="space-y-4 ">{renderComponent()}</div>

            {/* What you will learn */}
            <div className="bg-card rounded-xl p-6 border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                What you will learn in this course:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningPoints.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-[#EEF2FF] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#6366F1]" />
                    </div>
                    <p className="text-muted-foreground text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Who this course is for:</h2>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                {[
                  { icon: "👋", label: "Beginner" },
                  { icon: "🎯", label: "Intermediate" },
                  { icon: "📱", label: "Mobile Dev" },
                  { icon: "🎨", label: "Designer" },
                  { icon: "✍️", label: "Typography" },
                  { icon: "💬", label: "Discussion" },
                  { icon: "🔲", label: "Components" },
                  { icon: "</>", label: "Developer" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 py-3 px-10  border rounded-lg hover:border-[#6366F1] hover:shadow-md transition-all cursor-pointer"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-xs text-center text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 h-fit md:h-[calc(100vh-6rem)] ">
            <div className="bg-card rounded-xl border shadow-sm sticky top-24">
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      {course?.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      $99.99
                    </span>
                    <span className="px-2 py-1 bg-[#EEF2FF] text-[#6366F1] text-xs font-semibold rounded">
                      10% OFF
                    </span>
                  </div>
                  <p className="text-sm text-[#6366F1] font-medium">
                    2 days left at this price!
                  </p>
                </div>

                {/* Course Info */}
                <div className="space-y-3 py-4 border-t border-b">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Course Level:</span>
                    <span className="font-medium">Beginner</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Hour:</span>
                    <span className="font-medium">5 Hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Enrolled:</span>
                    <span className="font-medium">
                      Beginner Level (intermediat)
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Certificate:</span>
                    <span className="font-medium">Yes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Course Language:</span>
                    <span className="font-medium">English</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button onClick={() => course && handlerAddToCart(course)} className="w-full py-3 bg-[#6366F1] text-white font-semibold rounded-lg hover:bg-[#4F46E5] transition-colors">
                    Add to Cart
                  </button>
                  <button onClick={handleBuyNow} className="w-full py-3 border-2 border-[#6366F1] text-[#6366F1] font-semibold rounded-lg hover:bg-[#EEF2FF] transition-colors">
                    Buy Now
                  </button>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex  justify-evenly text-sm">
                    <button onClick={() => course && handlerAddFaviorite(course)} className="text-white p-2 rounded-2xl bg-[#6366F1] hover:bg-[#4F46E5] cursor-pointer">
                      Add to Wishlist
                    </button>
                    <button
                      onClick={handleGift}
                      className="text-white p-2 rounded-2xl bg-[#6366F1] hover:bg-[#4F46E5] cursor-pointer"
                    >
                      Gift this course
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold mb-3 text-foreground">This course includes:</h3>
                  <div className="space-y-2">
                    {courseFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <feature.icon className="w-4 h-4 text-[#6366F1]" />
                        <span className="text-sm text-muted-foreground">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-3 text-foreground">Share this course:</p>
                  <div className="flex gap-2">
                    <button className="p-2 border rounded hover:bg-accent">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </button>
                    <button className="p-2 border rounded hover:bg-accent">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="p-2 border rounded hover:bg-accent">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
