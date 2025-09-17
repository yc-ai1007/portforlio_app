'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 프로필 이미지 (선택사항) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              개발자
            </div>
          </motion.div>

          {/* 이름과 직무 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              안녕하세요,{' '}
              <span className="text-green-600">
                개발자
              </span>
              입니다
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              프론트엔드 개발자
            </p>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              사용자 경험을 중시하며, 창의적이고 효율적인 웹 애플리케이션을 개발합니다.
              <br />
              React, Next.js, TypeScript를 활용한 모던 웹 개발에 전문성을 가지고 있습니다.
            </p>
          </motion.div>

          {/* CTA 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('#works')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>프로젝트 보기</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>연락하기</span>
            </button>

            <button className="group px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>이력서 다운로드</span>
            </button>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection('#about')}
              className="group flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-sm font-medium">더 알아보기</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-current rounded-full mt-2"
                />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



