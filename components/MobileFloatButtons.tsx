"use client";

import Link from "next/link";
import { useState } from "react";

// 실제 전화번호와 카카오 링크로 교체하세요
const PHONE = "010-3816-3231";
const KAKAO_URL = "https://open.kakao.com/o/YOUR_CHANNEL";

export default function MobileFloatButtons() {
  const [tip, setTip] = useState<"" | "show" | "copied">("");

  function handlePhoneClick(e: React.MouseEvent) {
    // 터치 기기(모바일)는 tel: 링크 그대로 동작
    if (window.matchMedia("(hover: none)").matches) return;

    // PC: tel: 링크 막고 번호 복사 + 툴팁
    e.preventDefault();
    navigator.clipboard
      .writeText(PHONE)
      .then(() => setTip("copied"))
      .catch(() => setTip("show"));
    setTimeout(() => setTip(""), 2500);
  }

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 lg:hidden">
      {/* 예약/문의 */}
      <Link
        href="/booking"
        aria-label="예약 문의"
        className="w-[52px] h-[52px] flex flex-col items-center justify-center gap-[3px] rounded-full bg-[#C9A84C] text-white shadow-[0_4px_20px_rgba(30,64,175,0.30)] active:scale-95 transition-transform"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="16" y1="2" x2="16" y2="6" />
        </svg>
        <span className="text-[9px] font-semibold leading-none tracking-tight">예약</span>
      </Link>

      {/* 카카오톡 */}
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 문의"
        className="w-[52px] h-[52px] flex flex-col items-center justify-center gap-[3px] rounded-full bg-[#FEE500] shadow-[0_4px_20px_rgba(30,64,175,0.30)] active:scale-95 transition-transform"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5C6.2 2.5 1.5 6.3 1.5 11C1.5 13.9 3.3 16.5 6.1 18.1L5.2 22L9.1 20C10.03 20.17 11 20.26 12 20.26C17.8 20.26 22.5 16.46 22.5 11C22.5 5.54 17.8 2.5 12 2.5Z" fill="#391B1B" />
          <circle cx="8.5" cy="11" r="1.3" fill="#FEE500" />
          <circle cx="12" cy="11" r="1.3" fill="#FEE500" />
          <circle cx="15.5" cy="11" r="1.3" fill="#FEE500" />
        </svg>
        <span className="text-[9px] font-semibold leading-none tracking-tight text-[#391B1B]">카카오</span>
      </a>

      {/* 전화 */}
      <div className="relative">
        {tip && (
          <div className="absolute bottom-full right-0 mb-2.5 whitespace-nowrap bg-[#1B2B4B] text-white text-[11px] font-medium px-3 py-2 rounded-lg shadow-lg pointer-events-none">
            {tip === "copied" ? `${PHONE} · 복사됨 ✓` : PHONE}
            <div className="absolute top-full right-4 border-4 border-transparent border-t-[#1B2B4B]" />
          </div>
        )}
        <a
          href={`tel:${PHONE.replace(/-/g, "")}`}
          aria-label="전화 연결"
          onClick={handlePhoneClick}
          className="w-[52px] h-[52px] flex flex-col items-center justify-center gap-[3px] rounded-full bg-[#22C55E] text-white shadow-[0_4px_20px_rgba(30,64,175,0.30)] active:scale-95 transition-transform"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.86 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.64a16 16 0 006.29 6.29l1.56-1.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="text-[9px] font-semibold leading-none tracking-tight">전화</span>
        </a>
      </div>
    </div>
  );
}
