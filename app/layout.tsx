import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/providers/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "E-Tutor | Premium Learning Platform",
    template: "%s | E-Tutor",
  },
  description: "A premium learning management system for online education. Learn from expert instructors, track your progress, and earn certificates.",
  icons: {
    icon: "/GraduationCap.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
