"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, memo } from "react";
import {
  AppWindowMac,
  CircleCheckBig,
  CirclePlay,
  FileUser,
  Handshake,
  type LucideIcon,
} from "lucide-react";

// Icon components extracted for better performance
const StepIcon = memo(
  ({ Icon, className }: { Icon: LucideIcon; className: string }) => (
    <Icon className={className} size={24} />
  )
);
StepIcon.displayName = "StepIcon";

// Type definitions for better type safety
interface StepData {
  iconType: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

interface EduguardData {
  title: string;
  description: string;
}

// Static data without JSX - more performant
const STEPS_DATA: StepData[] = [
  {
    iconType: AppWindowMac,
    iconClass: "w-10 p-2 h-10 text-[#564FFD] bg-[#EBEBFF] rounded",
    title: "Apply to become instructor.",
    description:
      "Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.",
  },
  {
    iconType: FileUser,
    iconClass: "w-10 h-10 p-2 text-[#E34444] bg-[#FFF0F0] rounded",
    title: "Setup & edit your profile.",
    description:
      "Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget accumsan ullamcorper.",
  },
  {
    iconType: CirclePlay,
    iconClass: "w-10 h-10 p-2 text-[#FF6636] bg-[#FFEEE8] rounded",
    title: "Create your new course",
    description:
      "Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque.",
  },
  {
    iconType: Handshake,
    iconClass: "w-10 h-10 p-2 text-[#23BD33] bg-[#E1F7E3] rounded",
    title: "Start teaching & earning",
    description:
      "Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque.",
  },
];

const EDUGUARD_DATA: EduguardData[] = [
  {
    title: "Teach your students as you want.",
    description:
      "Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus.",
  },
  {
    title: "Manage your course, payment in one place",
    description:
      "Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.",
  },
  {
    title: "Chat with your students",
    description:
      "Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id.",
  },
];

const HeroSection = memo(() => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-6xl w-full">
    <div className="flex flex-col items-center md:items-start space-y-4 order-2 md:order-1">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
        Become an Instructor
      </h2>
      <p className="text-gray-600 max-w-[500px] text-center md:text-left">
        Become an instructor & start teaching with 26k certified instructors.
        Create a success story with 67.1k Students — Grow yourself with 71
        countries.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded font-medium">
        Get Started
      </button>
    </div>
    <div className="order-1 md:order-2 flex justify-center">
      <Image
        src="/instructors/ImageInst.png"
        alt="Instructor teaching online course"
        width={500}
        height={500}
        className="w-full max-w-md"
        priority
      />
    </div>
  </section>
));
HeroSection.displayName = "HeroSection";

const WhyTeachSection = memo(() => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center max-w-6xl w-full">
    <div className="flex justify-center">
      <Image
        src="/instructors/ImageInsturcorBanner.svg"
        alt="Why teach on Eduguard"
        width={500}
        height={500}
        className="w-full max-w-md"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col items-center md:items-start space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
          Why you&apos;ll start teaching on Eduguard
        </h2>
        <p className="text-gray-600 max-w-[500px] text-center md:text-left">
          Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus
          non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a
          purus mollis venenatis.
        </p>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        {EDUGUARD_DATA.map((item) => (
          <div key={item.title} className="flex items-start gap-3 text-left">
            <div className="mt-1">
              <CircleCheckBig
                size={24}
                className="w-12 h-12 p-2 text-[#23BD33] shrink-0"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));
WhyTeachSection.displayName = "WhyTeachSection";

const StepsSection = memo(() => (
  <section className="bg-gray-100 w-full flex justify-center flex-col items-center space-y-10 py-16 px-5">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
      How you&rsquo;ll become successful instructor
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
      {STEPS_DATA.map((step) => (
        <div
          key={step.title}
          className="bg-white p-6 flex flex-col text-center justify-start items-center space-y-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="shrink-0">
            <StepIcon Icon={step.iconType} className={step.iconClass} />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
));
StepsSection.displayName = "StepsSection";

const RulesSection = memo(() => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-6xl w-full">
    <div className="flex flex-col items-center md:items-start space-y-4 order-2 md:order-1">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
        Instructor rules & regulations
      </h2>
      <p className="text-gray-600 max-w-[500px] text-center md:text-left">
        Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at
        iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem
        luctus in. Etiam et egestas lorem.
      </p>
      <ul className="list-disc space-y-2 text-gray-600 pl-5 text-left">
        <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
        <li>Nam leo tortor, tempus et felis non.</li>
        <li>
          Porttitor faucibus erat. Integer eget purus non massa ultricies
          pretium ac sed eros.
        </li>
        <li>
          Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.
        </li>
      </ul>
    </div>
    <div className="order-1 md:order-2 flex justify-center">
      <Image
        src="/instructors/union.svg"
        alt="Instructor regulations illustration"
        width={500}
        height={500}
        className="w-full max-w-md"
        loading="lazy"
      />
    </div>
  </section>
));
RulesSection.displayName = "RulesSection";

const SuccessStoriesSection = memo(() => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-6xl w-full">
    <div className="flex justify-center">
      <Image
        src="/instructors/Imagescoll.png"
        alt="Success stories from instructors"
        width={500}
        height={500}
        className="w-full max-w-md"
        loading="lazy"
      />
    </div>
    <div className="flex flex-col items-center md:items-start space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
        20k+ Instructor created their success story with eduguard
      </h2>
      <p className="text-gray-600 max-w-[500px] text-center md:text-left">
        Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros
        justo, id commodo ante laoreet nec. Phasellus aliquet, orci id
        pellentesque mollis.
      </p>
      <blockquote className="bg-[#FFEEE8] p-6 rounded-lg text-gray-700 italic border-l-4 border-orange-500">
        Nulla sed malesuada augue. Morbi interdum vulputate imperdiet.
        Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis
        commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique
        suscipit metus, a molestie dui dapibus vel.
      </blockquote>
    </div>
  </section>
));
SuccessStoriesSection.displayName = "SuccessStoriesSection";

const FooterSection = memo(() => (
  <section className="grid bg-[#1D2026] grid-cols-1 md:grid-cols-2 md:p-10 p-5 rounded-lg gap-8 items-center justify-center max-w-6xl w-full">
    <div className="flex flex-col items-center md:items-start space-y-4 order-2 md:order-1">
      <h2 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
        Start teaching with us and inspire others{" "}
      </h2>
      <p className="text-gray-600 max-w-[500px] text-center md:text-left">
        Become an instructor & start teaching with 26k certified instructors.
        Create a success story with 67.1k Students — Grow yourself with 71
        countries.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded font-medium">
        Register Now
      </button>
    </div>
    <div className="order-1 md:order-2 flex justify-center">
      <Image
        src="/instructors/UnionIns.png"
        alt="Instructor teaching online course"
        width={500}
        height={500}
        className="w-full max-w-md"
        priority
      />
    </div>
  </section>
));

FooterSection.displayName = "FooterSection";

const Page = () => {
  const pathname = usePathname();

  const breadcrumb = useMemo(
    () => pathname.slice(1, pathname.length),
    [pathname]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="my-7"
    >
      <nav className="flex justify-center flex-col items-center space-y-3 bg-gray-100 p-5">
        <h3 className="text-2xl font-bold text-gray-900">
          Become an Instructor
        </h3>
        <span className="capitalize text-gray-600">{breadcrumb}</span>
      </nav>

      <main className="flex justify-center flex-col items-center space-y-20 mt-5 px-5">
        <HeroSection />
        <WhyTeachSection />
        <StepsSection />
        <RulesSection />
        <SuccessStoriesSection />
        <FooterSection />
      </main>
    </motion.div>
  );
};

export default Page;
