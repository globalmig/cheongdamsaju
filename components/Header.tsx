"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const servicesDropdown = [
  { label: "사주상담", href: "/services/saju" },
  { label: "궁합상담", href: "/services/gunghap" },
  { label: "재물운 상담", href: "/services/money" },
  { label: "사업운 상담", href: "/services/business" },
  { label: "택일 상담", href: "/services/date" },
  { label: "진로·직업·시험운 상담", href: "/services/career" },
  { label: "작명·개명·상호작명", href: "/services/naming" },
  { label: "기타 상담", href: "/services/etc" },
];

const navLinks = [
  // { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "상담 분야", href: "/services", dropdown: servicesDropdown },
  { label: "예약", href: "/booking" },
  { label: "Q&A", href: "/faq" },
  { label: "오시는 길", href: "/location" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="w-full bg-white border-b border-[#e8e8e8] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight flex-shrink-0">
          <span className="text-[22px] font-bold tracking-tight" style={{ color: "#1B2B4B", fontFamily: "'Noto Serif KR', serif" }}>
            청담사주
          </span>
          <span className="text-[10px] text-[#888] tracking-widest mt-[1px]">정통 사주·작명 상담</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-[13.5px] font-medium text-[#2d3748]">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="relative group">
                <Link href={link.href} className={`px-5 py-2 flex items-center gap-1 transition-colors ${isServicesActive ? "text-[#1B2B4B] font-semibold" : "hover:text-[#1B2B4B]"}`}>
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-200 group-hover:rotate-180">
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {/* Dropdown panel */}
                <div className="absolute top-full left-0 min-w-[200px] bg-white border border-[#e8e8e8] rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-[13px] whitespace-nowrap hover:bg-[#f5f7fa] hover:text-[#1B2B4B] transition-colors ${
                        pathname === item.href ? "text-[#1B2B4B] font-semibold bg-[#f5f7fa]" : "text-[#444]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={`px-5 py-2 transition-colors ${pathname === link.href ? "text-[#1B2B4B] font-semibold" : "hover:text-[#1B2B4B]"}`}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right buttons */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <a
            href="http://blog.naver.com/chungdamsaju"
            target="_blank"
            rel="noopener noreferrer"
            title="네이버 블로그"
            className="w-9 h-9 flex items-center justify-center hover:bg-[#edfff5] rounded-xl transition-colors"
          >
            <Image src="/images/icon_blog.png" alt="네이버 블로그" width={20} height={20} />
          </a>
          <button
            onClick={() => alert("준비중입니다.")}
            title="유튜브"
            className="w-9 h-9 flex items-center justify-center text-[#666] hover:text-[#FF0000] hover:bg-[#fff5f5] rounded-md transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="1" y="1" width="18" height="18" rx="3" fill="currentColor" />
              <path d="M8.5 7.5l4 2.5-4 2.5V7.5z" fill="white" />
            </svg>
          </button>
          <div className="w-px h-5 bg-[#e8e8e8] mx-1" />
          <Link href="/booking" className="flex items-center gap-2 bg-[#1B2B4B] text-white text-[13px] font-medium px-4 py-[9px] rounded-md hover:bg-[#152240] transition-colors">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <rect x="1" y="2" width="13" height="12" rx="1.5" stroke="white" strokeWidth="1.2" />
              <path d="M1 6h13" stroke="white" strokeWidth="1.2" />
              <path d="M5 1v2M10 1v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            예약하기
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M4 4l14 14M18 4l-14 14" stroke="#1B2B4B" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="#1B2B4B" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e8e8] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href}>
                <button
                  className={`w-full flex items-center justify-between py-2.5 text-[14px] font-medium border-b border-[#f0f0f0] ${isServicesActive ? "text-[#1B2B4B] font-semibold" : "text-[#444]"}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col bg-[#f8f9fb] rounded-md my-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`py-2.5 px-4 text-[13px] border-b border-[#efefef] last:border-b-0 ${pathname === item.href ? "text-[#1B2B4B] font-semibold" : "text-[#555]"}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 text-[14px] font-medium border-b border-[#f0f0f0] ${pathname === link.href ? "text-[#1B2B4B] font-semibold" : "text-[#444]"}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link href="/booking" className="mt-3 text-center bg-[#1B2B4B] text-white text-[13px] font-medium px-4 py-2.5 rounded-md" onClick={() => setMobileOpen(false)}>
            예약하기
          </Link>
        </div>
      )}
    </header>
  );
}
