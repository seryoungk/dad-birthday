import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 배포 URL 설정
// Vercel에서는 자동으로 VERCEL_URL을 제공하지만, 프로덕션에서는 절대 URL이 필요합니다
const getBaseUrl = () => {
  // 환경변수로 직접 설정된 경우
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  // Vercel 자동 환경변수 사용
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // 배포된 프로덕션 URL
  return "https://dad-birthday-eta.vercel.app";
};

const baseUrl = getBaseUrl();

export const metadata = {
  title: "아빠 생일 축하해요!",
  description: "2025.12.10",
  openGraph: {
    title: "아빠 생일 축하해요!",
    description: "2025.12.10",
    type: "website",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/cake.png`,
        width: 1200,
        height: 630,
        alt: "아빠 생일 축하",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "아빠 생일 축하해요!",
    description: "2025.12.10",
    images: [`${baseUrl}/cake.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
