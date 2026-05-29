import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "상담 분야 | 청담사주",
  description: "청담사주작명원의 다양한 상담 분야를 소개합니다. 사주·궁합·재물운·작명·사업운·택일 등 전문 상담을 제공합니다.",
};

const services = [
  {
    href: "/services/saju",
    title: "사주상담",
    subtitle: "인생의 흐름을 읽다",
    desc: "사주를 기반으로 인생의 흐름과 방향을 상담합니다. 재물운, 직업운, 사업운, 결혼운 등 전반적인 운의 흐름을 안내드립니다.",
    items: ["사주팔자 분석", "재물운", "직업운 / 진로", "사업운", "결혼운", "인간관계", "건강운"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="20" height="16" rx="1" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <path d="M4 10h20" stroke="#1B2B4B" strokeWidth="1.4" />
        <path d="M9 6V4M19 6V4" stroke="#1B2B4B" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 14h4M8 18h6" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/gunghap",
    title: "궁합상담",
    subtitle: "인연의 흐름을 살피다",
    desc: "연인, 부부, 인간관계의 흐름과 인연을 상담합니다. 서로의 성향과 관계의 방향성을 중심으로 풀이합니다.",
    items: ["연애운", "결혼운", "재회운", "부부궁합"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="14" r="5" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <circle cx="19" cy="14" r="5" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <path d="M14 11c0 1.657-1.343 3-3 3M14 17c0-1.657 1.343-3 3-3" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/money",
    title: "재물운 상담",
    subtitle: "재물의 흐름을 파악하다",
    desc: "금전 흐름과 재물의 운세를 분석합니다. 현재와 미래의 재정 방향을 중심으로 상담합니다.",
    items: ["돈의 흐름 분석", "직장 / 투자 / 사업 타이밍", "재정운 방향"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="13" r="7" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <path d="M14 6v2M14 18v2M8 22h8" stroke="#1B2B4B" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 13h4M14 11v4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/business",
    title: "사업운 상담",
    subtitle: "사업의 가능성을 보다",
    desc: "창업, 확장, 업종 선택 등 사업의 흐름을 상담합니다. 시기와 방향에 맞는 현실적인 조언을 드립니다.",
    items: ["창업 시기", "사업 확장 시기", "업종 적합성", "사업 흐름 분석"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="15" width="5" height="9" stroke="#1B2B4B" strokeWidth="1.5" fill="none" />
        <rect x="11.5" y="10" width="5" height="14" stroke="#1B2B4B" strokeWidth="1.5" fill="none" />
        <rect x="20" y="5" width="5" height="19" stroke="#1B2B4B" strokeWidth="1.5" fill="none" />
        <path d="M4 12l4-4 6 3 6-6" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/services/date",
    title: "택일 상담",
    subtitle: "좋은 날을 고르다",
    desc: "결혼, 개업, 이사 등 중요한 날짜를 상담합니다. 사주에 맞는 좋은 시기를 안내드립니다.",
    items: ["결혼 날짜", "개업 날짜", "이사 날짜", "계약 / 수술 날짜"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="20" height="18" rx="1" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <path d="M4 11h20" stroke="#1B2B4B" strokeWidth="1.4" />
        <path d="M9 6V4M19 6V4" stroke="#1B2B4B" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 17l3 3 5-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/services/career",
    title: "진로 / 직업 / 시험운 상담",
    subtitle: "적성과 진로를 찾다",
    desc: "진로, 취업, 이직, 시험 등 인생의 중요한 선택을 상담합니다. 개인의 흐름에 맞는 방향을 안내드립니다.",
    items: ["학생 진로", "취업 방향", "이직 상담", "공무원 / 시험운"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="9" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <circle cx="14" cy="14" r="2.5" stroke="#1B2B4B" strokeWidth="1.4" fill="none" />
        <path d="M14 5v2M14 21v2M5 14h2M21 14h2" stroke="#1B2B4B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14 14l-3.5-3.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/naming",
    title: "작명 · 개명 · 상호작명",
    subtitle: "이름으로 운을 더하다",
    desc: "사주와 오행의 균형을 고려하여 이름을 상담합니다. 아기이름, 개명, 상호작명 등을 진행합니다.",
    items: ["아기 이름 작명", "개명 상담", "상호 작명 (가게/회사 이름)"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22l2.5-2.5L20 8l-2.5-2.5L6 17v5z" stroke="#1B2B4B" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
        <path d="M17.5 5.5L22 10" stroke="#1B2B4B" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 22h4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/etc",
    title: "기타 상담",
    subtitle: "다양한 고민을 함께",
    desc: "개인의 상황에 맞는 다양한 상담을 진행합니다. 사주 흐름을 기반으로 현실적인 방향을 안내드립니다.",
    items: ["재물 / 사업 / 건강 / 시험 / 인간관계", "개인 사주 기반 맞춤 상담", "필요 시 추가 상담 안내"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6h18a1 1 0 011 1v11a1 1 0 01-1 1H9l-4 3V7a1 1 0 011-1z" stroke="#1B2B4B" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
        <path d="M9 11h10M9 15h6" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Page hero */}
        <section className="relative w-full h-56 md:h-72 overflow-hidden bg-[#1B2B4B] flex items-center justify-center">
          {/* <Image src="/images/청담사주작명원 내부2.jpg" alt="" fill className="object-cover object-center" /> */}
          <Image src="/images/hero/hero_services_02.png" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B2B4B]/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-[36px] md:text-[42px] font-bold text-white leading-tight mb-3" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              상담 분야
            </h1>
            <p className="text-white/70 text-[14px]">다양한 분야의 전문 상담을 제공합니다</p>
          </div>
        </section>

        {/* Intro */}
        <section className="w-full bg-white border-b border-[#e8e8e8] py-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[15px] text-[#555] leading-relaxed max-w-140 mx-auto">
              사주를 바탕으로 인생의 흐름과 방향을 함께 살펴드립니다.
              <br />
              아래 상담 분야 중 원하시는 항목을 선택하세요.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="w-full bg-[#F8F7F5] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="bg-white border border-[#e8e8e8] hover:border-[#1B2B4B]/40 hover:shadow-sm transition-all group block">
                  <div className="p-8">
                    {/* Icon + title header */}
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 rounded-full border border-[#e8e8e8] group-hover:border-[#C9A84C] flex items-center justify-center shrink-0 transition-colors">{s.icon}</div>
                      <div className="pt-1">
                        <p className="text-[11px] text-[#C9A84C] tracking-widest uppercase font-medium mb-1.5">{s.subtitle}</p>
                        <h2 className="text-[20px] font-bold text-[#1B2B4B] leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                          {s.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-[13px] text-[#666] leading-relaxed mb-5">{s.desc}</p>

                    <ul className="flex flex-wrap gap-2 mb-6">
                      {s.items.map((item) => (
                        <li key={item} className="text-[12px] text-[#555] border border-[#e0e0e0] rounded-full px-3 py-1 leading-none">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <span className="text-[12px] text-[#C9A84C] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">자세히 보기 →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[#1B2B4B] py-14">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[26px] font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              사주를 바탕으로 인생의 흐름과 방향을 함께 살펴드립니다
            </h2>
            <p className="text-white/60 text-[14px] mb-8">평일 10:00 ~ 19:00 &nbsp;·&nbsp; 주말 11:00 ~ 17:00 &nbsp;·&nbsp; 방문·전화·비대면 상담 가능</p>
            <Link href="/booking" className="inline-flex items-center gap-2 bg-white text-[#1B2B4B] text-[14px] font-semibold px-8 py-4 hover:bg-[#F8F7F5] transition-colors">
              상담 예약하기 →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
