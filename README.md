#요구사항 명세서
개인 포트폴리오 1페이지 웹사이트 – 기능 명세서
1) 개요

목표: 모던·전문 느낌의 1페이지(스크롤형) 포트폴리오. 이력·작업물·연락을 한 화면 흐름에서 전달.

타깃: 채용담당자, 클라이언트.

디바이스: 모바일 퍼스트, 데스크톱 대응.

2) 정보 구조(섹션 순서)

Hero (이름/직무/핵심 키워드/CTA)

About (소개, 핵심 역량)

Skills (기술 스택: 로고/레벨/활용도)

Experience (경력·프로젝트 하이라이트)

Works/Projects (대표 포트폴리오 그리드)

Testimonials (선택)

Contact (양식 + 이메일/소셜)

Footer (저작권, 소셜, 테마 토글)

3) 공통 UI/기능

헤더: 로고/이름, 섹션 앵커 내비게이션, 다크모드 토글, 언어 토글(선택: KO/EN).

스크롤 스파이: 현재 섹션에 메뉴 활성 표기.

다크모드: OS 선호도 감지 + 토글(로컬스토리지 저장).

애니메이션: 섹션 인뷰 페이드/슬라이드(저강도, 성능 우선), 호버/포커스 상태 피드백.

반응형 그리드: 3단(≥1200px) / 2단(≥768px) / 1단(<768px).

수락 기준

헤더 고정, 60px 이상 높이, 스크롤 시 배경 불투명 전환.

다크/라이트 전환 시 깜빡임 없음(FOUC 방지).

320px ~ 1920px 레이아웃 깨짐 없음.

4) 섹션별 기능 요구사항
4.1 Hero

요소: 프로필 이름, 직무 타이틀, 1~2문장 키 메시지, 주요 CTA(“프로젝트 보기”, “연락하기”).

선택 요소: 프로필 이미지(원형), 배경 그래픽(저용량 SVG).

CTA 클릭 시 해당 섹션 스무스 스크롤.

수락 기준

LCP 요소(타이틀/이미지) 2.5s 이내 로드.

폰트 로딩 실패 시 시스템 폰트 폴백.

4.2 About

요약 소개(3~5문장), 핵심 역량 태그(최대 8개), 다운로드 이력서 버튼(PDF).

수락 기준

이력서 파일 캐시 가능, 파일명 규칙: resume_{ko|en}_v{semver}.pdf.

4.3 Skills

카테고리(Frontend/Backend/DevOps/Tools 등) 별 아이콘+이름+숙련도(바/배지/텍스트).

배지 툴팁: “실무 3년+” 등 정량 설명.

수락 기준

접근성: 숙련도 시각 외 텍스트 제공(예: aria-label="React 숙련도 상").

4.4 Experience

타임라인 카드: 회사/역할/기간/요약/핵심성과(불릿, 지표 포함).

각 카드에 스킬 태그.

수락 기준

기간 형식 ISO 보유(데이터), 노출은 지역화(예: 2021.03–현재).

4.5 Works/Projects

그리드 카드: 썸네일, 프로젝트명, 한줄 설명, 주요 기술, 행동(데모/코드/상세 모달).

프로젝트 상세 모달: 역할, 문제–해결, 성과지표, 기술스택, 링크.

수락 기준

썸네일 지연 로딩(loading="lazy"), CLS 0.1 이하.

외부 링크 새창 + rel="noopener noreferrer".

4.6 Testimonials (선택)

캐러셀/카드: 인물명, 소속/직함, 한줄 추천사, 아바타.

수락 기준

자동 회전 OFF 기본, 키보드 조작 가능.

4.7 Contact

입력: 이름*, 이메일*, 메시지*(500자 내), 목적(드롭다운: 채용/의뢰/기타).

기능: 유효성 검사(프론트), 스팸 방지(hCaptcha/Cloudflare Turnstile), 전송 후 토스트 알림.

백엔드: 메일 전송 + 저장(선택: Notion/Google Sheets/Airtable).

수락 기준

실패/성공 상태 명확, 재전송 버튼 제공.

봇 방지 통과 못하면 서버 미호출.

4.8 Footer

소셜 링크(LinkedIn/GitHub/Behance 등), 카피라이트, 테마 토글 미러.

수락 기준

키보드 탭 순서 자연, 포커스 링 표시.

5) 접근성(A11y)

시맨틱 태그(section/nav/header/main/footer/figure).

색 대비 WCAG AA 이상(텍스트 대비 4.5:1).

키보드 전 영역 조작 가능, 포커스 가시.

이미지 대체 텍스트 제공, 아이콘은 aria-hidden.

라이브영역 토스트에 role="status".

수락 기준

Lighthouse Accessibility 95점 이상.

6) 성능/보안/품질

성능: Lighthouse Performance ≥ 90(모바일), LCP ≤ 2.5s, TBT ≤ 200ms, CLS ≤ 0.1.

이미지: WebP/AVIF, srcset·sizes, 크기 지정으로 CLS 방지.

폰트: font-display: swap, 서브셋 최적화.

번들: 코드 스플리팅, 지연 로딩(모달/캐러셀/비주요).

보안: CSP·SRI(외부 스크립트), HTTPS 강제, 폼 CSRF 토큰.

에러 로깅: 콘솔 에러 0, 런타임 에러 Sentry(선택) 연동.

7) SEO/메타

메타 태그: 타이틀(60자), 디스크립션(150자), 파비콘/애플터치.

Open Graph/Twitter 카드: 대표 이미지 1200×630.

스키마: Person, WebSite, CreativeWork/Project 마크업(JSON-LD).

사이트맵, robots.txt.

수락 기준

주요 키워드 포함된 H1 단일 사용, 섹션 H2 구조.

8) 로컬라이제이션(선택)

언어 토글(KO/EN). URL 전략: 해시/쿼리/서브패스 중 하나.

날짜/단위 지역화.

수락 기준

초기 언어: 브라우저 언어 감지 + 저장.

9) 분석/마케팅

기본: Google Analytics 4 또는 Plausible(쿠키리스).

이벤트: CTA 클릭, 프로젝트 카드 클릭, 폼 제출.

수락 기준

트래킹 비차단 모드에서도 동작(저침습).

10) 콘텐츠 모델(데이터 스키마 요약)
{
  "hero": { "name": "string", "title": "string", "summary": "string", "ctaPrimary": "anchorId" },
  "about": { "bio": "markdown", "highlights": ["string"], "resumeUrl": "url" },
  "skills": [{ "category": "string", "items": [{ "name": "string", "level": "beginner|intermediate|advanced|expert", "years": "number", "icon": "url" }]}],
  "experience": [{ "company": "string", "role": "string", "start": "YYYY-MM", "end": "YYYY-MM|null", "achievements": ["string"], "skills": ["string"] }],
  "projects": [{ "title": "string", "thumb": "url", "summary": "string", "stack": ["string"], "links": { "demo": "url", "code": "url" }, "details": "markdown" }],
  "testimonials": [{ "name": "string", "role": "string", "avatar": "url", "quote": "string" }],
  "contact": { "emails": ["string"], "socials": [{ "name": "github|linkedin|x|behance", "url": "url" }] }
}

11) 기술 스택(제안)

프런트: Next.js(App Router) + React + TypeScript + Tailwind.

UI: shadcn/ui + Radix UI.

폼: React Hook Form + Zod, hCaptcha/Turnstile.

이미지: next/image.

배포: Vercel(또는 Netlify).

CMS(선택): 파일 기반(JSON/YAML) 또는 Headless(CMS: Contentlayer, Sanity 등).

12) 빌드·배포·운영

CI/CD: main 브랜치 푸시 시 프리뷰/프로덕션 자동 배포.

브랜치 전략: feature/* → PR → 리뷰 1인 이상.

환경변수: 메일/캡차 키 .env 관리.

에러/로그: Sentry(선택), 404/500 커스텀 페이지.

13) QA 체크리스트(발췌)

 iOS/Android/Chrome/Edge/Safari 주요 뷰포트 테스트.

 키보드 전용 내비게이션 가능.

 네트워크 Slow 3G에서 LCP ≤ 2.5s.

 다크모드 토글 상태 유지.

 폼 검증/스팸 차단/에러 처리 정상.

 OG 이미지/메타 검증 통과.

14) 비기능 요구사항

코드 규칙: ESLint + Prettier + TypeScript strict.

접근성/성능/SEO 지표는 빌드 시 Lighthouse CI로 점검.

오프라인 대비 최소 PWA 메타(선택).

15) 제외 범위

블로그/멀티 페이지, 결제, 회원 시스템, 관리자 대시보드(본 명세 범위 외).

16) 산출물

소스 리포지토리(README 포함), 디자인 토큰(색/타이포/간격), OG 이미지 세트, resume_{lang}.pdf, 사이트맵/robots, 환경변수 샘플.