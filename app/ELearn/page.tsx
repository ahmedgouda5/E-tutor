import Category from "@/components/featuers/Homepage/Category"
import RecentlyAddedCourses from "@/components/featuers/Homepage/CoursesAdded"
import FeatureCourses from "@/components/featuers/Homepage/Fetuered"
import Hero from "@/components/featuers/Homepage/hero"
import InstructorBanner from "@/components/featuers/Homepage/InstructorBanner"
import TrustedCompanies from "@/components/featuers/Homepage/Sponsers"
import BestSelling from "@/components/shared/BestSelling"
import TopInstructor from "@/components/shared/TopInstructor"

const Homepage = () => {
  return (
    <div className="space-y-14 overflow-hidden">
      <Hero />
      <main className="px-10 space-y-14 ">
        <Category />
        <BestSelling />
        <FeatureCourses />
        <RecentlyAddedCourses />
        <InstructorBanner />
        <TopInstructor/>
        <TrustedCompanies />
      </main>
    </div>
  )
}

export default Homepage