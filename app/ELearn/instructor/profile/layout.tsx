import { Button } from "@/components/ui/button";
import {
  CirclePlay,
  Facebook,
  Instagram,
  Linkedin,
  Star,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="px-4 sm:px-8 lg:px-24 py-8 bg-linear-to-r from-orange-50 to-orange-100">
        <section className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <Image
                src="/instructors/instructortwo.png"
                alt="Instructor"
                width={110}
                height={110}
                className="rounded-full border-4 border-orange-200"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
              <p className="text-gray-500 text-sm">
                Web Designer & Best-Selling Instructor
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-3">
                <span className="flex items-center gap-1 text-sm font-medium text-gray-700">
                  <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                  4.8
                </span>

                <span className="flex items-center gap-1 text-sm text-gray-700">
                  <Users size={16} className="text-indigo-500" />
                  1,000+ Students
                </span>

                <span className="flex items-center gap-1 text-sm text-gray-700">
                  <CirclePlay size={16} className="text-orange-500" />
                  7 Courses
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="p-3 rounded-full bg-gray-100 hover:bg-orange-100 cursor-pointer transition"
              >
                <Icon className="w-5 h-5 text-gray-600" />
              </span>
            ))}

            <Button className="ml-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
              Follow
            </Button>
          </div>
        </section>
      </nav>

      <main className="px-4 sm:px-8 lg:px-24 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="bg-white rounded-2xl shadow-sm p-6 h-fit">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            About Instructor
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            One day Vako had enough with the 9-to-5 grind and decided to follow his
            dream. After trying many things, he found his passion in freelance
            design and online education. Today, through his courses and
            mentoring, Vako helps thousands of students build better careers
            and achieve financial freedom.
          </p>
        </aside>

        <section className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          {children}
        </section>
      </main>
    </div>
  );
};

export default layout;
