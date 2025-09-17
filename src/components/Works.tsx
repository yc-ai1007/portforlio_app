'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce 플랫폼',
    description: 'React와 Next.js를 활용한 현대적인 온라인 쇼핑몰 플랫폼',
    image: '/api/placeholder/600/400',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    features: [
      '반응형 웹 디자인',
      '실시간 결제 시스템',
      '사용자 인증 및 권한 관리',
      '상품 검색 및 필터링',
      '장바구니 및 주문 관리'
    ],
    links: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/example/ecommerce'
    },
    status: '완료'
  },
  {
    id: 2,
    title: '대시보드 관리 시스템',
    description: '데이터 시각화와 분석을 위한 관리자 대시보드',
    image: '/api/placeholder/600/400',
    stack: ['React', 'D3.js', 'Chart.js', 'Node.js', 'MongoDB'],
    features: [
      '실시간 데이터 시각화',
      '대화형 차트 및 그래프',
      '데이터 필터링 및 정렬',
      'PDF 리포트 생성',
      '사용자 권한별 접근 제어'
    ],
    links: {
      demo: 'https://dashboard.example.com',
      github: 'https://github.com/example/dashboard'
    },
    status: '완료'
  },
  {
    id: 3,
    title: '모바일 앱 웹뷰',
    description: 'React Native와 연동되는 하이브리드 웹 애플리케이션',
    image: '/api/placeholder/600/400',
    stack: ['React', 'React Native', 'WebView', 'Redux', 'API'],
    features: [
      '네이티브 앱과 웹 연동',
      '푸시 알림 지원',
      '오프라인 데이터 동기화',
      '지문 인증 연동',
      '크로스 플랫폼 호환성'
    ],
    links: {
      demo: 'https://app.example.com',
      github: 'https://github.com/example/mobile-webview'
    },
    status: '진행중'
  },
  {
    id: 4,
    title: '포트폴리오 웹사이트',
    description: '개인 포트폴리오를 위한 반응형 웹사이트',
    image: '/api/placeholder/600/400',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      '다크모드 지원',
      '반응형 디자인',
      '부드러운 애니메이션',
      'SEO 최적화',
      '접근성 준수'
    ],
    links: {
      demo: 'https://portfolio.example.com',
      github: 'https://github.com/example/portfolio'
    },
    status: '완료'
  },
  {
    id: 5,
    title: '실시간 채팅 애플리케이션',
    description: 'Socket.io를 활용한 실시간 메시징 플랫폼',
    image: '/api/placeholder/600/400',
    stack: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    features: [
      '실시간 메시지 전송',
      '그룹 채팅 지원',
      '파일 및 이미지 공유',
      '메시지 히스토리',
      '온라인 상태 표시'
    ],
    links: {
      demo: 'https://chat.example.com',
      github: 'https://github.com/example/chat-app'
    },
    status: '완료'
  },
  {
    id: 6,
    title: 'API 관리 도구',
    description: 'RESTful API 테스트 및 문서화를 위한 개발자 도구',
    image: '/api/placeholder/600/400',
    stack: ['React', 'Express', 'Swagger', 'JWT', 'PostgreSQL'],
    features: [
      'API 엔드포인트 테스트',
      '자동 문서 생성',
      'API 버전 관리',
      '사용량 모니터링',
      '팀 협업 기능'
    ],
    links: {
      demo: 'https://api-tool.example.com',
      github: 'https://github.com/example/api-tool'
    },
    status: '완료'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case '완료': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    case '진행중': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
    case '계획중': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  }
};

export default function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="works" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Works & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            다양한 기술 스택을 활용하여 개발한 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* 프로젝트 이미지 */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* 기술 스택 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                {/* 액션 버튼들 */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>자세히 보기</span>
                  </button>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:border-gray-500 hover:text-gray-500 dark:hover:border-gray-400 dark:hover:text-gray-400 transition-colors flex items-center justify-center"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 프로젝트 상세 모달 */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      프로젝트 설명
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      주요 기능
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      사용 기술
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.stack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      링크
                    </h4>
                    <div className="space-y-3">
                      <a
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>데모 사이트</span>
                      </a>
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub 저장소</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}



