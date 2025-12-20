import Category from "@/components/featuers/Homepage/Category";
import RecentlyAddedCourses from "@/components/featuers/Homepage/CoursesAdded";
import FeatureCourses from "@/components/featuers/Homepage/Fetuered";
import Hero from "@/components/featuers/Homepage/hero";
import InstructorBanner from "@/components/featuers/Homepage/InstructorBanner";
import TrustedCompanies from "@/components/featuers/Homepage/Sponsers";
import BestSelling from "@/components/shared/BestSelling";
import TopInstructor from "@/components/shared/TopInstructor";
const Homepage = () => {
  const sections = [
    { id: "category", element: <Category /> },
    { id: "best-selling", element: <BestSelling /> },
    { id: "feature-courses", element: <FeatureCourses /> },
    { id: "recently-added", element: <RecentlyAddedCourses /> },
    { id: "instructor-banner", element: <InstructorBanner /> },
    { id: "top-instructor", element: <TopInstructor /> },
    { id: "trusted-companies", element: <TrustedCompanies /> },
  ];

  return (
    <div className="space-y-14 overflow-hidden">
      <Hero />
      <main className="px-10 space-y-14 ">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            {section.element}
          </section>
        ))}
      </main>
    </div>
  );
};

export default Homepage;
