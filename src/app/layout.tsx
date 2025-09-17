import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "개발자 포트폴리오 | 프론트엔드 개발자",
  description: "창의적이고 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자의 포트폴리오입니다.",
  keywords: ["포트폴리오", "프론트엔드", "개발자", "React", "Next.js", "TypeScript"],
  authors: [{ name: "개발자" }],
  robots: "index, follow",
  openGraph: {
    title: "개발자 포트폴리오 | 프론트엔드 개발자",
    description: "창의적이고 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "개발자 포트폴리오 | 프론트엔드 개발자",
    description: "창의적이고 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자의 포트폴리오입니다.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
