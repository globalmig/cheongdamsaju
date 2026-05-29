import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "상담 안내 | 청담사주",
  description: "청담사주작명원의 상담 방식, 시간, 비용 등을 안내드립니다. 편안하고 전문적인 상담을 약속드립니다.",
};

const guideItems = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="15" r="7" stroke="#1B2B4B" strokeWidth="1.5" />
        <path d="M7 35c0-7.18 5.82-13 13-13s13 5.82 13 13" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "1:1 맞춤 상담",
    desc: "모든 상담은 예약 고객 한 분만을 위한 1:1 개인 맞춤 상담으로 진행됩니다. 충분한 시간을 갖고 정성스럽게 상담을 진행합니다.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#1B2B4B" strokeWidth="1.5" />
        <path d="M20 11v9l6 4" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "충분한 상담 시간",
    desc: "기본 60분의 충분한 시간을 보장합니다. 상담 내용에 따라 연장이 가능하며, 바쁘게 서두르지 않고 여유롭게 진행합니다.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#1B2B4B" strokeWidth="1.5" />
        <path d="M20 4C20 4 20 20 20 20C20 20 11 20 4 20" stroke="#1B2B4B" strokeWidth="1.3" />
        <circle cx="20" cy="12" r="3" fill="#1B2B4B" />
        <circle cx="20" cy="28" r="3" fill="none" stroke="#1B2B4B" strokeWidth="1.3" />
      </svg>
    ),
    title: "사주 기반 분석",
    desc: "정통 명리학을 바탕으로 사주팔자의 구조와 흐름을 정밀하게 분석합니다. 단편적인 운세가 아닌 종합적인 분석을 제공합니다.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M14 30l4-4L30 14a3 3 0 0 0-4-4L14 22l-2 8z" stroke="#1B2B4B" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M26 10l4 4" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "현실적인 방향 제시",
    desc: "단순히 좋고 나쁨을 알려드리는 것이 아니라, 실생활에 적용 가능한 현실적이고 구체적인 방향과 조언을 제시합니다.",
  },
];

const consultInfo = [
  {
    title: "상담 방식",
    items: [
      { label: "방문 상담", desc: "청담사주작명원을 직접 방문하여 대면 상담을 진행합니다." },
      { label: "전화 상담", desc: "전화를 통해 편리하게 상담받으실 수 있습니다." },
      { label: "비대면 상담", desc: "화상통화 또는 메신저를 통한 비대면 상담이 가능합니다." },
    ],
  },
  {
    title: "상담 시간",
    items: [
      { label: "기본 60분", desc: "기본 상담 시간은 60분입니다." },
      { label: "내용에 따라 변동", desc: "상담 내용에 따라 시간이 달라질 수 있습니다." },
    ],
  },
  {
    title: "상담 비용",
    items: [
      { label: "분야별 상이", desc: "상담 종류와 시간에 따라 비용이 달라집니다." },
      { label: "예약 시 안내", desc: "예약 시 상담 내용에 따른 비용을 안내드립니다." },
    ],
  },
];

const flow = [
  { step: "01", title: "예약", desc: "홈페이지 또는 전화로 원하시는 날짜와 시간을 예약합니다." },
  { step: "02", title: "확인", desc: "예약 확인 문자를 발송해 드립니다." },
  { step: "03", title: "상담", desc: "예약하신 방식(방문·전화·비대면)으로 상담을 진행합니다." },
  { step: "04", title: "완료", desc: "상담 내용을 바탕으로 구체적인 방향과 조언을 전달드립니다." },
];

export default function GuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Page hero */}
        <section className="relative w-full h-56 md:h-72 overflow-hidden bg-[#1B2B4B] flex items-center justify-center">
          <Image src="/images/청담사주작명원 내부4.jpg" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B2B4B]/60" />
          <div className="relative z-10 text-center px-6">
            <h1
              className="text-[36px] md:text-[42px] font-bold text-white leading-tight mb-3"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              상담 안내
            </h1>
            <p className="text-white/70 text-[14px]">편안하고 전문적인 상담을 약속드립니다</p>
          </div>
        </section>

        {/* Features */}
        <section className="w-full bg-white py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[12px] text-[#C9A84C] tracking-widest uppercase font-medium mb-3">Our Promise</p>
              <h2
                className="text-[28px] font-bold text-[#1B2B4B]"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                청담사주작명원의 상담 특징
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e8e8]">
              {guideItems.map((g) => (
                <div key={g.title} className="bg-white px-7 py-10">
                  <div className="mb-5">{g.icon}</div>
                  <h3
                    className="text-[17px] font-bold text-[#1B2B4B] mb-3"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {g.title}
                  </h3>
                  <p className="text-[13px] text-[#666] leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consult info */}
        <section className="w-full bg-[#F8F7F5] py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[12px] text-[#C9A84C] tracking-widest uppercase font-medium mb-3">Info</p>
              <h2
                className="text-[28px] font-bold text-[#1B2B4B]"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                상담 정보
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-0 bg-white border border-[#e8e8e8] divide-y lg:divide-y-0 lg:divide-x divide-[#e8e8e8]">
              {consultInfo.map((col) => (
                <div key={col.title} className="flex-1 px-8 py-10">
                  <h3
                    className="text-[16px] font-bold text-[#1B2B4B] mb-6 pb-4 border-b border-[#e8e8e8]"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {col.title}
                  </h3>
                  <div className="flex flex-col gap-5">
                    {col.items.map((item) => (
                      <div key={item.label}>
                        <p className="text-[13px] font-semibold text-[#333] mb-1">{item.label}</p>
                        <p className="text-[12.5px] text-[#666] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consult flow */}
        <section className="w-full bg-white py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[12px] text-[#C9A84C] tracking-widest uppercase font-medium mb-3">Process</p>
              <h2
                className="text-[28px] font-bold text-[#1B2B4B]"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                상담 진행 과정
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-0">
              {flow.map((f, i) => (
                <div key={f.step} className="flex-1 flex flex-col md:flex-row items-start">
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0 w-full md:w-auto">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#1B2B4B] flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0">
                        {f.step}
                      </div>
                    </div>
                    <div className="md:pt-4 md:px-6 flex-1">
                      <p
                        className="text-[16px] font-bold text-[#1B2B4B] mb-2"
                        style={{ fontFamily: "'Noto Serif KR', serif" }}
                      >
                        {f.title}
                      </p>
                      <p className="text-[13px] text-[#666] leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                  {i < flow.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0 mt-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 8h8M9 5l3 3-3 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image + info */}
        <section className="w-full bg-[#F8F7F5] py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              <div className="flex-1 bg-[#c8c5be] min-h-[320px] relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1B2B4B]/40" />
                <div className="absolute bottom-6 left-6 bg-[#1B2B4B]/85 px-4 py-3">
                  <p className="text-white/90 text-[13px] font-medium">편안한 상담 공간</p>
                </div>
              </div>
              <div className="flex-1 bg-white border border-[#e8e8e8] p-10 flex flex-col justify-center">
                <p className="text-[12px] text-[#C9A84C] tracking-widest uppercase font-medium mb-4">Consulting Space</p>
                <h2
                  className="text-[24px] font-bold text-[#1B2B4B] mb-5"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  조용하고 편안한 상담 공간
                </h2>
                <p className="text-[13.5px] text-[#666] leading-relaxed mb-5">
                  청담사주작명원은 방문 고객분들이 편안하게 상담받으실 수 있도록 조용하고 아늑한 공간을 마련하고 있습니다.
                </p>
                <p className="text-[13.5px] text-[#666] leading-relaxed mb-8">
                  충분한 시간을 갖고 정성스럽게 상담이 진행되며, 상담 내용은 철저히 비밀이 보장됩니다.
                </p>
                <Link
                  href="/location"
                  className="inline-flex items-center gap-1.5 text-[13px] text-[#1B2B4B] font-semibold border-b border-[#1B2B4B]/40 pb-0.5 w-fit"
                >
                  오시는 길 보기 →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[#1B2B4B] py-14">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <h2
              className="text-[26px] font-bold text-white mb-4"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              예약 / 상담 신청하기
            </h2>
            <p className="text-white/60 text-[14px] mb-8">
              평일 10:00 ~ 19:00 &nbsp;·&nbsp; 주말 11:00 ~ 17:00 &nbsp;·&nbsp; 목요일 휴무
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1B2B4B] text-[14px] font-semibold px-8 py-4 hover:bg-[#F8F7F5] transition-colors"
              >
                상담 예약하기 →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
