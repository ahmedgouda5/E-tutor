import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, GraduationCap, ChevronDown, ArrowRight, Apple } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const topCategories = [
    'Development',
    'Finance & Accounting',
    'Design',
    'Business'
  ];

  const quickLinks = [
    { label: 'About', href: '#' },
    { label: 'Become Instructor', href: '#', hasArrow: true },
    { label: 'Contact', href: '#' },
    { label: 'Career', href: '#' }
  ];

  const supportLinks = [
    'Help Center',
    'FAQs',
    'Terms & Condition',
    'Privacy Policy'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Start learning with 671k
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                students around the world.
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Join The Family
                </button>
                <button className="bg-transparent hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg border border-gray-600 transition-colors">
                  Browse All Courses
                </button>
              </div>
            </div>

            <div className="flex gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6.3k</div>
                <div className="text-gray-400 text-sm">Online courses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">26k</div>
                <div className="text-gray-400 text-sm">Certified Instructor</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">E-tutor</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
              </p>
              <div className="flex gap-1">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="bg-orange-500 hover:bg-orange-600 p-2.5 rounded transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                TOP 4 CATEGORY
              </h3>
              <ul className="space-y-3">
                {topCategories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                      {link.label}
                      {link.hasArrow && <ArrowRight className="w-4 h-4" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                SUPPORT
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                DOWNLOAD OUR APP
              </h3>
              <div className="space-y-3">
                <Link href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
                  <Image src="/footer/apple.png" alt="Apple Logo" width={32} height={32} priority />
                  <div>
                    <div className="text-xs text-gray-400">Download now</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Link>

                <Link href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
                  <Image src="/footer/google-play.png" alt="Google Logo" width={32} height={32} priority />
                  <div>
                    <div className="text-xs text-gray-400">Download now</div>
                    <div className="text-sm font-semibold">Play Store</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} - Eduflex. Designed by{' '}
              <Link href="https://portfolio-two-lemon-69.vercel.app/" className="text-white hover:text-orange-500 transition-colors">
                Goudeawy              </Link>
              . All rights reserved
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);