'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github,
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    name: 'Email',
    href: 'mailto:developer@example.com',
    icon: Mail,
    color: 'hover:text-red-600 dark:hover:text-red-400'
  }
];

const quickLinks = [
  { name: '홈', href: '#hero' },
  { name: '소개', href: '#about' },
  { name: '기술', href: '#skills' },
  { name: '경력', href: '#experience' },
  { name: '작업물', href: '#works' },
  { name: '연락', href: '#contact' }
];

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 브랜드 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              <button
                onClick={scrollToTop}
                className="hover:text-blue-400 transition-colors"
              >
                Portfolio
              </button>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              사용자 경험을 중시하는 프론트엔드 개발자입니다. 
              창의적이고 효율적인 웹 애플리케이션을 개발하여 
              더 나은 디지털 경험을 제공합니다.
            </p>
            
            {/* 소셜 링크 */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 빠른 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <div className="space-y-2 text-gray-300">
              <p>developer@example.com</p>
              <p>+82 10-1234-5678</p>
              <p>서울, 대한민국</p>
            </div>
          </motion.div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 저작권 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span>© 2024 Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Developer</span>
            </motion.div>

            {/* 테마 토글 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 text-sm">테마:</span>
              <button
                onClick={toggleTheme}
                className="px-4 py-2 bg-gray-800 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                {theme === 'light' ? '다크 모드' : '라이트 모드'}
              </button>
            </motion.div>
          </div>
        </div>

        {/* 추가 정보 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-center text-gray-400 text-sm"
        >
          <p>
            이 포트폴리오는 Next.js, TypeScript, Tailwind CSS로 제작되었습니다.
          </p>
          <p className="mt-1">
            최적화된 성능과 접근성을 고려하여 개발되었습니다.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}



