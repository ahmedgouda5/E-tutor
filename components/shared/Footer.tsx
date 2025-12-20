"use client";
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const topCategories = [
    'Development',
    'Finance & Accounting',
    'Design',
    'Business'
  ];

  const quickLinks = [
    { label: 'About', href: 'ELearn/about' },
    { label: 'Become Instructor', href: '/become-instructor', hasArrow: true },
    { label: 'Contact', href: '/contact' },
    { label: 'Career', href: '/career' }
  ];

  const supportLinks = [
    'Help Center',
    'FAQs',
    'Terms & Condition',
    'Privacy Policy'
  ];

  return (
    <footer className="bg-[#1D2026] text-white">
      

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
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link href="#" className="bg-orange-500 hover:bg-orange-600 p-2.5 rounded transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded transition-colors">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 p-2.5 rounded transition-colors">
                  <Youtube className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {t('TOP 4 CATEGORY')}
              </h3>
              <ul className="space-y-3">
                {topCategories.map((category, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t(category)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {t('QUICK LINKS')}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                      {t(link.label)}
                      {link.hasArrow && <ArrowRight className="w-4 h-4" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {t('SUPPORT')}
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t(link)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {t('DOWNLOAD OUR APP')}
              </h3>
              <div className="space-y-3">
                <Link href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
                  <Image src="/footer/apple.png" alt="Apple Logo" width={32} height={32} priority />
                  <div>
                    <div className="text-xs text-gray-400">{t('Download now')}</div>
                    <div className="text-sm font-semibold">{t('App Store')}</div>
                  </div>
                </Link>

                <Link href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors">
                  <Image src="/footer/google-play.png" alt="Google Logo" width={32} height={32} priority />
                  <div>
                    <div className="text-xs text-gray-400">{t('Download now')}</div>
                    <div className="text-sm font-semibold">{t('Play Store')}</div>
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
              © {new Date().getFullYear()} - Eduflex. {t('Designed by')}{' '}
              <Link href="https://portfolio-two-lemon-69.vercel.app/" className="text-white hover:text-orange-500 transition-colors">
                Goudeawy              </Link>
              . {t('All rights reserved')}
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);