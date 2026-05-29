import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroIcons = [
  {
    label: "사주",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="#1B2B4B" strokeWidth="1.3" strokeLinecap="round" />
        <rect x="7" y="7" width="8" height="8" rx="1" stroke="#1B2B4B" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "궁합",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 17s-7-4.5-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 18 8c0 4.5-7 9-7 9z" stroke="#1B2B4B" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "재물운",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="14" width="3.5" height="6" rx="0.8" stroke="#1B2B4B" strokeWidth="1.3" />
        <rect x="7" y="10" width="3.5" height="10" rx="0.8" stroke="#1B2B4B" strokeWidth="1.3" />
        <rect x="12" y="6" width="3.5" height="14" rx="0.8" stroke="#1B2B4B" strokeWidth="1.3" />
        <rect x="17" y="2" width="3.5" height="18" rx="0.8" stroke="#1B2B4B" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "작명",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 17l3-3 9-9a2 2 0 0 0-3-3L5 11l-1 6z" stroke="#1B2B4B" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M14 5l3 3" stroke="#1B2B4B" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "사업운",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="10" width="18" height="10" rx="1.5" stroke="#1B2B4B" strokeWidth="1.3" />
        <path d="M8 10V7a3 3 0 0 1 6 0v3" stroke="#1B2B4B" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="11" y1="14" x2="11" y2="17" stroke="#1B2B4B" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full min-h-140 overflow-hidden max-w-[2880px] mx-auto">
      {/* Full-section background image */}
      <Image src="/images/ceo/사주_ceo3.png" alt="청담사주 작명원 원장" fill sizes="100vw" className="object-cover object-center" preload />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex min-h-140">
        {/* Left content */}
        <div className="w-[46%] shrink-0 flex flex-col justify-center py-16 px-8 lg:px-16">
          <p className="text-[14px] text-[#444] mb-4 tracking-wide">삶의 흐름을 함께 보는</p>
          <h1 className="text-[48px] font-bold text-[#1B2B4B] leading-tight mb-5" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            정통 사주·작명 상담
          </h1>
          <p className="text-[14px] text-[#444] leading-relaxed mb-10 max-w-90">
            사주팔자를 바탕으로 인생의 흐름을 분석하고,
            <br />더 나은 선택과 방향을 함께 제시해드립니다.
          </p>

          {/* Circular icon strip */}
          <div className="flex items-center gap-6 mb-10">
            {heroIcons.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-13 h-13 rounded-full border border-[#aaa] flex items-center justify-center hover:border-[#1B2B4B] transition-colors bg-white/30 backdrop-blur-sm">{item.icon}</div>
                <span className="text-[11px] text-[#333] font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div>
            <Link href="/booking" className="inline-flex items-center gap-2 bg-[#1B2B4B] text-white text-[14px] font-medium px-7 py-3.5 hover:bg-[#152240] transition-colors">
              상담 예약하기 &nbsp;→
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

// ── Service Nav ───────────────────────────────────────────────────────────────
const serviceNavItems = [
  {
    title: "사주상담",
    desc: "사주팔자를 기반으로 인생의 흐름과\n전반적인 운세를 분석합니다.",
    href: "/services/saju",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="4" y="6" width="22" height="18" rx="1.5" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <path d="M4 11h22" stroke="#1B2B4B" strokeWidth="1.4" />
        <path d="M10 6V4M20 6V4" stroke="#1B2B4B" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 16h5M9 20h8" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "궁합상담",
    desc: "연애, 결혼, 부부 관계의 궁합과\n인연의 흐름을 상담합니다.",
    href: "/services/gunghap",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="10" cy="15" r="6" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <circle cx="20" cy="15" r="6" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <path d="M15 11.5a3.5 3.5 0 0 0 0 7" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "재물운 상담",
    desc: "재물의 흐름과 재정운을 분석하고\n미래의 재정 방향을 안내합니다.",
    href: "/services/money",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <ellipse cx="15" cy="10" rx="8" ry="4" stroke="#1B2B4B" strokeWidth="1.6" fill="none" />
        <path d="M7 10v6c0 2.21 3.582 4 8 4s8-1.79 8-4v-6" stroke="#1B2B4B" strokeWidth="1.6" />
        <path d="M7 16v4c0 2.21 3.582 4 8 4s8-1.79 8-4v-4" stroke="#1B2B4B" strokeWidth="1.4" />
        <path d="M12 10h3M15 8v4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "작명·개명 상담",
    desc: "사주와 오행의 균형을 고려하여\n좋은 이름을 제안해드립니다.",
    href: "/services/naming",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M7 23l3-3 11-11-3-3L7 17v6z" stroke="#1B2B4B" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
        <path d="M18 6l3 3" stroke="#1B2B4B" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 23h5" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ServiceNav() {
  return (
    <section className="w-full bg-white border-t border-b border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {serviceNavItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-start gap-4 py-8 px-6 transition-colors hover:bg-[#F8F7F5] ${i < serviceNavItems.length - 1 ? "border-r border-[#e8e8e8]" : ""}`}
            >
              <div className="w-14 h-14 rounded-full border border-[#e8e8e8] flex items-center justify-center shrink-0 group-hover:border-[#C9A84C] transition-colors">{item.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-[#1B2B4B] mb-1.5" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  {item.title}
                </p>
                <p className="text-[12px] text-[#888] leading-relaxed whitespace-pre-line mb-3">{item.desc}</p>
                <span className="text-[12px] text-[#C9A84C] font-medium">자세히 보기 →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Gallery ───────────────────────────────────────────────────────────────────
const galleryItems = [
  {
    src: "/images/청담사주작명원 내부1.jpg",
    title: "조용하고 편안한 상담 공간",
    desc: "충분한 시간을 가지고 정성스럽게 상담이 진행됩니다.",
  },
  {
    src: "/images/청담사주작명원 내부2.jpg",
    title: "정통 명리학 기반 상담",
    desc: "오랜 경험과 전문성으로 정확한 상담을 제공합니다.",
  },
  {
    src: "/images/청담사주작명원 내부3.jpg",
    title: "방문 / 전화 / 비대면 상담 가능",
    desc: "상담자의 상황에 맞춰 편한 방식으로 상담받으실 수 있습니다.",
  },
];

const infoList = ["사주·궁합·재물운·작명·사업운 전문", "안전한 상담 & 철저한 비밀 보장", "방문·전화·비대면 상담 가능"];

function Gallery() {
  return (
    <section className="w-full bg-white border-t py-16 border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto flex gap-4 ">
        {/* 3 image columns */}
        <div className="flex flex-1 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col border-r shadow rounded-2xl border-[#e8e8e8]">
              {/* Image */}
              <div className="relative w-full rounded-2xl" style={{ aspectRatio: "4/3" }}>
                <Image src={item.src} alt={item.title} fill className="object-cover" />
              </div>
              {/* Caption */}
              <div className="px-5 py-5 flex-1">
                <h4 className="text-[14.5px] font-bold text-[#1B2B4B] mb-2" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  {item.title}
                </h4>
                <p className="text-[12.5px] text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navy info card */}
        <div className="w-67.5 shrink-0 rounded-2xl bg-[#1B2B4B] px-7 py-10 flex flex-col justify-center">
          <h3 className="text-[19px] font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            청담사주작명원
          </h3>
          <p className="text-[13px] text-white/70 leading-relaxed mb-7">단순한 운세 풀이가 아닌, 사주의 구조와 흐름을 바탕으로 현실적인 방향을 제시하는 상담을 지향합니다.</p>
          <ul className="flex flex-col gap-3 mb-8">
            {infoList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <svg className="shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="7" stroke="#C9A84C" strokeWidth="1" />
                  <path d="M4.5 7.5l2 2 4-4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[12.5px] text-white/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-1.5 border border-white/40 text-white text-[13px] font-medium px-5 py-2.5 hover:bg-white/10 transition-colors w-fit"
          >
            더 알아보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceNav />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
