'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    company: '테크 스타트업',
    role: '시니어 프론트엔드 개발자',
    location: '서울, 대한민국',
    start: '2022-03',
    end: null,
    current: true,
    achievements: [
      'React 기반 대시보드 성능 40% 개선',
      'TypeScript 도입으로 버그 발생률 60% 감소',
      '반응형 웹 디자인으로 모바일 사용자 경험 향상',
      '팀 내 코드 리뷰 프로세스 구축 및 멘토링'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL']
  },
  {
    company: '디지털 에이전시',
    role: '프론트엔드 개발자',
    location: '서울, 대한민국',
    start: '2021-01',
    end: '2022-02',
    current: false,
    achievements: [
      '다양한 클라이언트 프로젝트 15개 이상 완료',
      '컴포넌트 라이브러리 구축으로 개발 효율성 30% 향상',
      '웹 접근성 가이드라인 준수하여 WCAG AA 등급 달성',
      '크로스 브라우저 호환성 문제 해결'
    ],
    skills: ['React', 'JavaScript', 'SCSS', 'Webpack', 'jQuery']
  },
  {
    company: 'IT 컨설팅',
    role: '주니어 웹 개발자',
    location: '서울, 대한민국',
    start: '2020-06',
    end: '2020-12',
    current: false,
    achievements: [
      '기업 웹사이트 리뉴얼 프로젝트 참여',
      '반응형 웹 디자인 구현',
      'SEO 최적화 작업으로 검색 순위 상승',
      '고객사 요구사항 분석 및 기술적 솔루션 제안'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', { 
    year: 'numeric', 
    month: 'long' 
  });
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            다양한 프로젝트와 팀 환경에서 쌓아온 실무 경험을 소개합니다.
          </p>
        </motion.div>

        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.start}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 타임라인 포인트 */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-white dark:border-gray-900" />

                {/* 카드 */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700">
                    {/* 회사 정보 */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {experience.role}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {experience.company}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {formatDate(experience.start)} - {experience.current ? '현재' : formatDate(experience.end!)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 주요 성과 */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        주요 성과
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 사용 기술 */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        사용 기술
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 추가 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              지속적인 성장과 학습
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              각 경험을 통해 기술적 역량뿐만 아니라 팀워크, 커뮤니케이션, 문제 해결 능력을 키워왔습니다. 
              앞으로도 새로운 도전을 통해 더 나은 개발자로 성장하고자 합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



