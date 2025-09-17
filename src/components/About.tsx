'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const highlights = [
  'React & Next.js 전문 개발',
  'TypeScript 활용한 타입 안전성',
  '반응형 웹 디자인 구현',
  '사용자 경험 중심 설계',
  '성능 최적화 및 접근성',
  '모던 개발 도구 활용',
  '협업 및 커뮤니케이션',
  '지속적인 학습과 성장'
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                안녕하세요! 저는 사용자 경험을 중시하는 프론트엔드 개발자입니다. 
                웹 기술의 발전과 함께 성장하며, 항상 최신 기술 트렌드를 학습하고 적용하려고 노력합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                React와 Next.js를 기반으로 한 모던 웹 애플리케이션 개발에 전문성을 가지고 있으며, 
                TypeScript를 활용한 타입 안전한 코드 작성과 성능 최적화에 관심이 많습니다.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                단순히 기능을 구현하는 것을 넘어서, 사용자가 직관적이고 편리하게 사용할 수 있는 
                인터페이스를 만드는 것에 보람을 느낍니다. 지속적인 학습을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.
              </p>
            </div>

            {/* 핵심 역량 태그 */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                핵심 역량
              </h3>
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight, index) => (
                  <motion.span
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 통계 및 정보 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* 경력 통계 */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-300">년 경력</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-300">완료 프로젝트</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">고객 만족도</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300">지원 가능</div>
              </div>
            </div>

            {/* 이력서 다운로드 버튼 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white text-center">
              <h3 className="text-xl font-semibold mb-2">이력서 다운로드</h3>
              <p className="text-blue-100 mb-4">더 자세한 정보를 확인해보세요</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                PDF 다운로드
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



