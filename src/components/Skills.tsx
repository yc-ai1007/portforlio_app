'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'expert', years: 3, icon: '⚛️' },
      { name: 'Next.js', level: 'expert', years: 2, icon: '▲' },
      { name: 'TypeScript', level: 'advanced', years: 2, icon: '🔷' },
      { name: 'JavaScript', level: 'expert', years: 4, icon: '🟨' },
      { name: 'HTML/CSS', level: 'expert', years: 4, icon: '🎨' },
      { name: 'Tailwind CSS', level: 'advanced', years: 2, icon: '🎯' },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'intermediate', years: 2, icon: '🟢' },
      { name: 'Express', level: 'intermediate', years: 1, icon: '🚀' },
      { name: 'MongoDB', level: 'intermediate', years: 1, icon: '🍃' },
      { name: 'PostgreSQL', level: 'beginner', years: 1, icon: '🐘' },
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'advanced', years: 3, icon: '📦' },
      { name: 'Docker', level: 'intermediate', years: 1, icon: '🐳' },
      { name: 'AWS', level: 'beginner', years: 1, icon: '☁️' },
      { name: 'Figma', level: 'intermediate', years: 2, icon: '🎨' },
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'expert': return 'from-red-500 to-pink-500';
    case 'advanced': return 'from-orange-500 to-red-500';
    case 'intermediate': return 'from-yellow-500 to-orange-500';
    case 'beginner': return 'from-green-500 to-yellow-500';
    default: return 'from-gray-500 to-gray-400';
  }
};

const getLevelText = (level: string) => {
  switch (level) {
    case 'expert': return '전문가';
    case 'advanced': return '고급';
    case 'intermediate': return '중급';
    case 'beginner': return '초급';
    default: return '학습중';
  }
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            다양한 기술 스택을 활용하여 효율적이고 확장 가능한 웹 애플리케이션을 개발합니다.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl">{skill.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.years}년 경험
                        </p>
                      </div>
                    </div>
                    
                    {/* 숙련도 바 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          숙련도
                        </span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { 
                            width: skill.level === 'expert' ? '100%' : 
                                   skill.level === 'advanced' ? '80%' :
                                   skill.level === 'intermediate' ? '60%' : '40%'
                          } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}
                        />
                      </div>
                    </div>

                    {/* 툴팁 정보 */}
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {skill.level === 'expert' && '실무 3년 이상의 풍부한 경험'}
                        {skill.level === 'advanced' && '실무 2년 이상의 충분한 경험'}
                        {skill.level === 'intermediate' && '실무 1년 이상의 기본 경험'}
                        {skill.level === 'beginner' && '학습 및 프로젝트 경험'}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
              지속적인 학습과 성장
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              기술의 빠른 발전 속도에 맞춰 지속적으로 새로운 기술을 학습하고, 
              실무에 적용하여 더 나은 솔루션을 제공하기 위해 노력하고 있습니다. 
              코드 품질과 사용자 경험을 최우선으로 생각하며 개발합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



