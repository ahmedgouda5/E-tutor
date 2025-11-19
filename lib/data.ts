import {
  Tag,
  Briefcase,
  Wallet,
  Laptop,
  Heart,
  FileBox,
  Megaphone,
  Camera,
  Sun,
  PenTool,
  Dumbbell,
  Music2,
} from "lucide-react";

interface INavabar {
  label: string;
  href: string;
}

export const Navabar: INavabar[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: " Courses",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Become an Instructor",
    href: "/become-instructor",
  },
];

export const categories = [
  {
    name: "Label",
    courses: "63,476 Courses",
    bgColor: "#E8E6FF",
    icon: Tag,
  },
  {
    name: "Business",
    courses: "52,822 Courses",
    bgColor: "#E4F6E8",
    icon: Briefcase,
  },
  {
    name: "Finance & Accounting",
    courses: "33,841 Courses",
    bgColor: "#FFF2E2",
    icon: Wallet,
  },
  {
    name: "IT & Software",
    courses: "22,649 Courses",
    bgColor: "#FFE7E7",
    icon: Laptop,
  },
  {
    name: "Personal Development",
    courses: "20,126 Courses",
    bgColor: "#FFE8D8",
    icon: Heart,
  },
  {
    name: "Office Productivity",
    courses: "13,932 Courses",
    bgColor: "#F1F2F4",
    icon: FileBox,
  },
  {
    name: "Marketing",
    courses: "12,068 Courses",
    bgColor: "#ECE8FF",
    icon: Megaphone,
  },
  {
    name: "Photography & Video",
    courses: "6,196 Courses",
    bgColor: "#EDEFF1",
    icon: Camera,
  },
  {
    name: "Lifestyle",
    courses: "2,736 Courses",
    bgColor: "#FFEEDD",
    icon: Sun,
  },
  {
    name: "Design",
    courses: "2,600 Courses",
    bgColor: "#FFE4E4",
    icon: PenTool,
  },
  {
    name: "Health & Fitness",
    courses: "1,678 Courses",
    bgColor: "#E6F6E5",
    icon: Dumbbell,
  },
  {
    name: "Music",
    courses: "959 Courses",
    bgColor: "#FFF2DD",
    icon: Music2,
  },
];

export const bestSellingCourses = [
  {
    id: 1,
    category: "Design",
    price: "$57",
    title: "Machine Learning A–Z™: Hands-On Python & R In Data...",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-1.png",
  },
  {
    id: 2,
    category: "Developments",
    price: "$57",
    title: "The Complete 2021 Web Development Bootcamp",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-2.png",
  },
  {
    id: 3,
    category: "Business",
    price: "$57",
    title: "Learn Python Programming Masterclass",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-3.png",
  },
  {
    id: 4,
    category: "Marketing",
    price: "$57",
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-4.png",
  },
  {
    id: 5,
    category: "IT & Software",
    price: "$57",
    title: "Reiki Level I, II and Master/Teacher Program",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-5.png",
  },
  {
    id: 6,
    category: "Music",
    price: "$57",
    title: "The Complete Foundation Stock Trading Course",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-6.png",
  },
  {
    id: 7,
    category: "Marketing",
    price: "$57",
    title: "Beginner to Pro in Excel: Financial Modeling and Valuation",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-7.png",
  },
  {
    id: 8,
    price: "$57",
    title: "The Python Mega Course: Build 10 Real-World Applications",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-8.png",
  },
  {
    id: 9,
    category: "Design",
    price: "$57",
    title: "Copywriting – Become a Freelance Copywriter, your own boss",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-9.png",
  },
  {
    id: 10,
    category: "Lifestyle",
    price: "$57",
    title: "Google Analytics Certification – Learn How To Pass The Exam",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-10.png",
  },
];

export const coursesFeatured = [
  {
    id: 1,
    category: "HEALTH & FITNESS",
    categoryColor: "bg-emerald-100 text-emerald-600",
    title: "Investing In Stocks The Complete Course! (13 H...",
    image: "/courses/course-4.png",
    instructor: "Kevin Gilbert",
    instructorImage: "/photo.png",
    rating: 5.0,
    reviews: "(357,914)",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
    price: 14.0,
    originalPrice: 32.0,
  },
  {
    id: 2,
    category: "PERSONAL DEVELOPMENT",
    categoryColor: "bg-orange-100 text-orange-600",
    title: "Google Analytics Certification - Learn How To...",
    image: "/courses/course-6.png",
    instructor: "Kevin Gilbert",
    instructorImage: "/photo.png",

    rating: 5.0,
    reviews: "(357,914)",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
    price: 14.0,
    originalPrice: 32.0,
  },
  {
    id: 3,
    category: "PRODUCTIVITY",
    categoryColor: "bg-purple-100 text-purple-600",
    title: "Adobe XD for Web Design: Essential Principles",
    image: "/courses/course-9.png",
    instructor: "Kevin Gilbert",
    instructorImage: "/photo.png",

    rating: 5.0,
    reviews: "(357,914)",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
    price: 14.0,
    originalPrice: 32.0,
  },
  {
    id: 4,
    category: "MUSIC",
    categoryColor: "bg-blue-100 text-blue-600",
    title: "The Python Mega Course: Build 10 Real World ...",
    image: "/courses/course-8.png",
    instructor: "Kevin Gilbert",
    instructorImage: "/photo.png",

    rating: 5.0,
    reviews: "(357,914)",
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
    price: 14.0,
    originalPrice: 32.0,
  },
];

export const TopInstructorData = [
  {
    id: 1,
    name: "Kevin Gilbert",
    instrucorImage: "/Instructors/Inst1.png",
    major: "senior developer",
    rating: 4.6,
    students: "534",
  },
  {
    id: 2,
    instrucorImage: "/Instructors/Inst2.png",

    name: "Devon Lane",
    major: "Digital Product Designer",
    rating: 4.9,
    students: "451,133",
  },
  {
    id: 3,
    instrucorImage: "/Instructors/Inst3.png",

    name: "Jane Cooper",
    major: "UI/UX Designer",
    rating: 4.8,
    students: "435,671",
  },
  {
    id: 4,
    instrucorImage: "/Instructors/Inst4.png",

    name: "Albert Flores",
    major: "Adobe Instructor",
    rating: 4.7,
    students: "511,123",
  },
  {
    id: 5,
    instrucorImage: "/Instructors/Inst5.png",
    name: "Kathryn Murphy",
    major: "Lead Developer",
    rating: 4.2,
    students: "2,711",
  },
];
