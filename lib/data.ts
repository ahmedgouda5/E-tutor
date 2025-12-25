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
    href: "/ELearn",
  },

  {
    label: "Courses",
    href: "/ELearn/courses",
  },
  {
    label: "About",
    href: "/ELearn/about",
  },
  {
    label: "Contact",
    href: "/ELearn/contact",
  },
  {
    label: "Become an Instructor",
    href: "/ELearn/become-instructor",
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
    instructorImage: "/instructors/instructorone.png",
    title: "Senior Developer",
    rating: 4.6,
    students: 534,
  },
  {
    id: 2,
    name: "Devon Lane",
    instructorImage: "/instructors/instructortwo.png",
    title: "Digital Product Designer",
    rating: 4.9,
    students: 1133,
  },
  {
    id: 3,
    name: "Jane Cooper",
    instructorImage: "/instructors/instructorthree.png",
    title: "UI / UX Designer",
    rating: 4.8,
    students: 5671,
  },
  {
    id: 4,
    name: "Albert Flores",
    instructorImage: "/instructors/instructorfour.png",
    title: "Adobe Instructor",
    rating: 4.7,
    students: 7123,
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    instructorImage: "/instructors/instructorfive.png",
    title: "Lead Developer",
    rating: 4.2,
    students: 2711,
  },
  {
    id: 6,
    name: "Brooklyn Simmons",
    instructorImage: "/instructors/instructorsix.png",
    title: "Frontend Engineer",
    rating: 4.5,
    students: 3890,
  },
  {
    id: 7,
    name: "Courtney Henry",
    instructorImage: "/instructors/instructorseven.png",
    title: "Backend Engineer",
    rating: 4.4,
    students: 4120,
  },
  {
    id: 8,
    name: "Eleanor Pena",
    instructorImage: "/instructors/instructoreight.png",
    title: "Full Stack Developer",
    rating: 4.3,
    students: 3560,
  },
];

export interface ICourse {
  id: number;
  category: string;
  price: string;
  discount: number;
  title: string;
  rating: number;
  students: string;
  image: string;
  instrucorImage: string;
  instructorName: string;
  instructorTitle?: string;
  instructorBio?: string;
  instructorRating?: number;
  instructorStudents?: number;
  instructorCourses?: number;
}

export const AllCourses: ICourse[] = [
  {
    id: 1,
    category: "AI & Machine Learning",
    price: "$57",
    discount: 56,
    title: "Machine Learning A–Z™: Hands-On Python & R In Data...",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-1.png",
    instrucorImage: "/instructors/inst1.png",
    instructorName: "Kevin Gilbert",
    instructorTitle: "Senior Developer",
    instructorBio:
      "Experienced developer with 10+ years in AI and machine learning. Passionate about teaching and helping students achieve their goals.",
    instructorRating: 4.6,
    instructorStudents: 534000,
    instructorCourses: 8,
  },
  {
    id: 2,
    category: "IT & Software",
    price: "$57",
    discount: 56,
    title: "The Complete 2021 Web Development Bootcamp",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-2.png",
    instrucorImage: "/instructors/inst2.png",
    instructorName: "Devon Lane",
    instructorTitle: "Digital Product Designer",
    instructorBio:
      "Full-stack developer and designer specializing in modern web technologies. Helping students create beautiful and functional web applications.",
    instructorRating: 4.9,
    instructorStudents: 451133,
    instructorCourses: 12,
  },
  {
    id: 3,
    category: "IT & Software",
    price: "$57",
    discount: 56,
    title: "Learn Python Programming Masterclass",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-3.png",
    instrucorImage: "/instructors/inst3.png",
    instructorName: "Jane Cooper",
    instructorTitle: "UI/UX Designer",
    instructorBio:
      "Python expert with extensive experience in software development and data science. Committed to making programming accessible to everyone.",
    instructorRating: 4.8,
    instructorStudents: 435671,
    instructorCourses: 15,
  },
  {
    id: 4,
    category: "Marketing",
    price: "$57",
    discount: 56,
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-4.png",
    instrucorImage: "/instructors/inst4.png",
    instructorName: "Albert Flores",
    instructorTitle: "Adobe Instructor",
    instructorBio:
      "Digital marketing specialist with proven track record in SEO, social media, and content marketing. Helping businesses grow their online presence.",
    instructorRating: 4.7,
    instructorStudents: 511123,
    instructorCourses: 10,
  },
  {
    id: 5,
    category: "IT & Software",
    price: "$57",
    discount: 56,
    title: "Reiki Level I, II and Master/Teacher Program",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-5.png",
    instrucorImage: "/instructors/inst5.png",
    instructorName: "Kathryn Murphy",
    instructorTitle: "Lead Developer",
    instructorBio:
      "Holistic wellness practitioner and certified Reiki Master with over 15 years of experience. Dedicated to teaching healing arts and personal growth.",
    instructorRating: 4.2,
    instructorStudents: 2711,
    instructorCourses: 5,
  },
  {
    id: 6,
    category: "Music",
    price: "$57",
    discount: 56,
    title: "The Complete Foundation Stock Trading Course",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-6.png",
    instrucorImage: "/instructors/inst1.png",
    instructorName: "Kathryn Murphy",
    instructorTitle: "Financial Analyst",
    instructorBio:
      "Professional stock trader with 20+ years of market experience. Teaching practical strategies for successful investing.",
    instructorRating: 4.5,
    instructorStudents: 125000,
    instructorCourses: 7,
  },
  {
    id: 7,
    category: "Marketing",
    price: "$57",
    discount: 56,
    title: "Beginner to Pro in Excel: Financial Modeling and Valuation",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-7.png",
    instrucorImage: "/instructors/inst2.png",
    instructorName: "Devon Lane",
    instructorTitle: "Financial Modeling Expert",
    instructorBio:
      "Excel specialist and financial analyst. Teaching business professionals to master financial modeling and data analysis.",
    instructorRating: 4.8,
    instructorStudents: 320000,
    instructorCourses: 9,
  },
  {
    id: 8,
    category: "IT & Software",
    price: "$57",
    discount: 56,
    title: "The Python Mega Course: Build 10 Real-World Applications",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-8.png",
    instrucorImage: "/instructors/inst3.png",
    instructorName: "Jane Cooper",
    instructorTitle: "Python Developer",
    instructorBio:
      "Experienced Python developer and educator. Specializing in practical, project-based learning to build real-world applications.",
    instructorRating: 4.9,
    instructorStudents: 580000,
    instructorCourses: 14,
  },
  {
    id: 9,
    category: "Design",
    price: "$57",
    discount: 56,
    title: "Copywriting – Become a Freelance Copywriter, your own boss",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-9.png",
    instrucorImage: "/instructors/inst4.png",
    instructorName: "Albert Flores",
    instructorTitle: "Professional Copywriter",
    instructorBio:
      "Award-winning copywriter with 12+ years crafting compelling content for major brands. Teaching the art of persuasive writing.",
    instructorRating: 4.7,
    instructorStudents: 198000,
    instructorCourses: 6,
  },
  {
    id: 10,
    category: "Business",
    price: "$57",
    discount: 56,
    title: "Google Analytics Certification – Learn How To Pass The Exam",
    rating: 5.0,
    students: "265.7K",
    image: "/courses/course-10.png",
    instrucorImage: "/instructors/inst5.png",
    instructorName: "Kathryn Murphy",
    instructorTitle: "Analytics Expert",
    instructorBio:
      "Google Analytics certified professional helping businesses leverage data for growth. Making analytics accessible and actionable.",
    instructorRating: 4.6,
    instructorStudents: 275000,
    instructorCourses: 11,
  },
];

export const COURSE_DATA = {
  title: "Complete Website Responsive Design: Zero to Mastery",
  currentVideo: {
    title: "Introduction to Responsive Design",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:45",
  },
  instructor: {
    name: "Ahmed Hassan",
    title: "Senior Web Developer & Instructor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    bio: "10+ years of experience in web development. Taught over 50,000 students worldwide.",
    rating: 4.8,
    students: 45230,
    courses: 12,
  },
  sections: [
    {
      id: 1,
      title: "Getting Started",
      duration: "45 min",
      lectures: [
        {
          id: 1,
          title: "Introduction to Responsive Design",
          duration: "12:45",
          completed: true,
        },
        {
          id: 2,
          title: "Setting Up Your Environment",
          duration: "8:30",
          completed: true,
        },
        {
          id: 3,
          title: "Understanding Mobile-First Approach",
          duration: "15:20",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      duration: "2 hr 15 min",
      lectures: [
        {
          id: 4,
          title: "Flexbox Deep Dive",
          duration: "25:10",
          completed: false,
        },
        {
          id: 5,
          title: "CSS Grid Mastery",
          duration: "32:45",
          completed: false,
        },
        {
          id: 6,
          title: "Media Queries Explained",
          duration: "18:30",
          completed: false,
        },
        {
          id: 7,
          title: "Responsive Typography",
          duration: "22:15",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Advanced Techniques",
      duration: "3 hr 30 min",
      lectures: [
        {
          id: 8,
          title: "Container Queries",
          duration: "28:40",
          completed: false,
        },
        {
          id: 9,
          title: "Responsive Images & Videos",
          duration: "35:20",
          completed: false,
        },
        {
          id: 10,
          title: "Performance Optimization",
          duration: "42:15",
          completed: false,
        },
      ],
    },
  ],
  comments: [
    {
      id: 1,
      user: "Sarah Ahmed",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
      date: "2 days ago",
      comment:
        "This is an excellent explanation! The examples really helped me understand the concepts better.",
      likes: 24,
    },
    {
      id: 2,
      user: "Mohamed Ali",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
      date: "5 days ago",
      comment: "Great course! Can you add more examples about CSS Grid?",
      likes: 12,
    },
    {
      id: 3,
      user: "Fatima Nour",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
      date: "1 week ago",
      comment:
        "Very clear and well-structured. Thank you for this amazing content!",
      likes: 18,
    },
  ],
};
