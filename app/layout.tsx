import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import MobileFloatButtons from "@/components/MobileFloatButtons";

const notoSerifKR = Noto_Serif_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-noto-serif-kr",
});

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "청담사주 - 정통 사주·작명 상담",
  description: "사주팔자를 바탕으로 인생의 흐름을 분석하고, 더 나은 선택과 방향을 함께 제시해드립니다.",
  openGraph: {
    title: "청담사주 - 정통 사주·작명 상담",
    description: "사주팔자를 바탕으로 인생의 흐름을 분석하고, 더 나은 선택과 방향을 함께 제시해드립니다.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "청담사주 - 정통 사주·작명 상담",
    description: "사주팔자를 바탕으로 인생의 흐름을 분석하고, 더 나은 선택과 방향을 함께 제시해드립니다.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`h-full ${notoSerifKR.variable} ${notoSansKR.variable}`}>
      <body className="min-h-full flex flex-col">
        {children}
        <MobileFloatButtons />
      </body>
    </html>
  );
}
