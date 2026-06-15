import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Compass, UserCheck, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ABOUT - 청담사주작명원 소개 | 청담사주",
  description: "청담사주작명원을 소개합니다. 정통 명리학 기반의 깊이 있는 사주·작명 상담을 제공합니다.",
};

const features = [
  { label: "정통 명리학 기반", icon: <BookOpen size={40} strokeWidth={1.5} className="text-[#1B2B4B]" /> },
  { label: "현실적인 방향 제시", icon: <Compass size={40} strokeWidth={1.5} className="text-[#1B2B4B]" /> },
  { label: "개인 맞춤 상담", icon: <UserCheck size={40} strokeWidth={1.5} className="text-[#1B2B4B]" /> },
  { label: "신뢰와 정성", icon: <ShieldCheck size={40} strokeWidth={1.5} className="text-[#1B2B4B]" /> },
];

const values = [
  {
    num: "01",
    title: "정통 명리학 기반",
    desc: "수십 년 전통의 정통 명리학을 기반으로 사주팔자의 구조와 흐름을 정밀하게 분석합니다.",
    icon: <BookOpen size={80} strokeWidth={1.8} />,
  },
  {
    num: "02",
    title: "현실적인 방향 제시",
    desc: "단순한 운세풀이가 아닌, 실생활에 적용할 수 있는 현실적인 방향과 선택의 지혜를 제시합니다.",
    icon: <Compass size={80} strokeWidth={1.8} />,
  },
  {
    num: "03",
    title: "개인 맞춤 상담",
    desc: "사주팔자의 구조를 바탕으로 개인의 상황과 목표에 맞춤화된 1:1 상담을 진행합니다.",
    icon: <UserCheck size={80} strokeWidth={1.8} />,
  },
  {
    num: "04",
    title: "신뢰와 정성",
    desc: "한 분 한 분 정성스럽게, 비밀이 철저히 보장되는 신뢰할 수 있는 상담 환경을 제공합니다.",
    icon: <ShieldCheck size={80} strokeWidth={1.8} />,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* ── 1. Hero: full-width image + centered text below ── */}
        <section className="w-full bg-white">
          {/* Full-width image */}
          <div className="relative w-full h-85 md:h-115">
            <Image src="/images/청담사주작명원 내부2.jpg" alt="청담사주작명원 내부" fill sizes="100vw" className="object-cover" priority />
            {/* <div className="absolute inset-0 bg-[#1B2B4B]/40" /> */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white to-transparent" />
          </div>

          {/* Centered title + features */}
          <div className="flex flex-col items-center px-4 md:px-6 pt-10 md:pt-14 pb-12 md:pb-16">
            <h1 className="text-[32px] md:text-[36px] font-bold text-[#1B2B4B] leading-tight mb-3 text-center" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              청담사주작명원 소개
            </h1>
            <p className="text-[15px] text-[#888] mb-14 text-center">삶의 흐름을 함께 보는 정통 상담공간</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-[1440px] border-b pb-12 md:pb-20 border-[#e8e8e8]">
              {features.map((f) => (
                <div key={f.label} className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center">{f.icon}</div>
                  <span className="text-[13px] text-[#444] font-medium text-center leading-snug">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Greeting ── */}
        <section className="w-full bg-white pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            {/* Text */}
            <div className="flex-1">
              <p className="text-[12px] text-[#C9A84C] tracking-widest uppercase font-medium mb-3">Greeting</p>
              <h2 className="text-[22px] md:text-[24px] font-bold text-[#1B2B4B] mb-6 md:mb-10" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                인사말
              </h2>
              <p className="text-[15px] text-[#333] leading-[1.9] mb-6" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                안녕하세요. 청담사주작명원입니다.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.9] mb-6">사람의 삶에는 누구에게나 중요한 선택의 순간이 찾아옵니다. 그 선택의 방향에 따라 인생의 흐름은 크게 달라지기도 합니다.</p>
              <p className="text-[14px] text-[#555] leading-[1.9] mb-6">
                저희는 사주를 통해 단순히 미래를 단정짓기보다는, 현재의 흐름을 이해하고 보다 나은 방향을 선택하실 수 있도록 돕는 것을 가장 중요하게 생각합니다.
              </p>
              <p className="text-[14px] text-[#555] leading-[1.9] mb-6">인생의 고민은 누구에게나 있습니다. 혼자 고민하기 어려운 문제일수록, 함께 풀어가는 과정이 필요하다고 믿습니다.</p>
              <p className="text-[14px] text-[#555] leading-[1.9]">찾아주시는 모든 분들이 조금이라도 편안한 마음과 명확한 방향을 얻어가실 수 있도록 항상 정성을 다해 상담드리겠습니다.</p>
              <div className="border-t border-[#e8e8e8] mt-8 pt-6">
                <p className="text-[14px] font-medium text-[#1B2B4B]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  감사합니다.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[42%] shrink-0">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image src="/images/ceo/KakaoTalk_20260527_110958816_05.jpg" alt="청담사주작명원 원장" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Values ── */}
        <section className="w-full bg-[#F8F7F5] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[11px] text-[#C9A84C] tracking-[0.2em] uppercase font-semibold mb-3">Our Values</p>
              <h2 className="text-[26px] md:text-[28px] font-bold text-[#1B2B4B]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                청담사주작명원이 추구하는 가치
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.num} className="relative bg-white rounded-2xl px-8 py-8 shadow-sm border border-[#eeeeee] overflow-hidden">
                  {/* 장식 아이콘 */}
                  <div className="absolute bottom-4 right-4 text-[#1B2B4B]/5">
                    {v.icon}
                  </div>
                  {/* 번호 + 제목 */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#1B2B4B] flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-white tracking-wide">{v.num}</span>
                    </div>
                    <h3 className="text-[17px] font-bold text-[#1B2B4B]" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                      {v.title}
                    </h3>
                  </div>
                  {/* 구분선 */}
                  <div className="h-px bg-[#f0f0f0] mb-5" />
                  {/* 설명 */}
                  <p className="text-[13.5px] text-[#666] leading-[1.85]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CTA (combined) ── */}
        <section className="w-full bg-[#1B2B4B] py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
            {/* Left: description */}
            <div className="lg:w-[48%] shrink-0">
              <h2 className="text-[22px] font-bold text-white leading-snug mb-6" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                단순한 운세 풀이가 아닌
                <br />
                현실적인 방향을 제시합니다
              </h2>
              <p className="text-[13.5px] text-white/65 leading-relaxed mb-4">
                청담사주작명원은 사주명리학을 바탕으로 개인의 운의 흐름을 분석하고, 삶의 중요한 선택에 도움이 되는 방향을 제시하는 상담 공간입니다. 저희는 단순한 운세 풀이가 아닌, 사주 구조와 흐름을
                기반으로 현실적인 판단과 선택에 도움이 되는 상담을 지향합니다.
              </p>
              <p className="text-[13.5px] text-white/65 leading-relaxed">방문 상담뿐 아니라 전화 및 비대면 상담도 가능하여, 지역과 시간에 관계없이 편안하게 상담받으실 수 있습니다.</p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-white/15 self-stretch" />

            {/* Right: CTA */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-[22px] font-bold text-white leading-snug mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                인생의 중요한 순간,
                <br />
                청담사주작명원이 함께하겠습니다
              </h2>
              <p className="text-white/50 text-[13px] mb-8">방문·전화·비대면 상담 가능 &nbsp;·&nbsp; 평일 10:00~19:00 &nbsp;·&nbsp; 주말 11:00~17:00 &nbsp;·&nbsp; 일요일 휴무, 미리 예약 시 상담가능</p>
              <Link href="/booking" className="inline-flex self-start items-center gap-2 bg-white text-[#1B2B4B] text-[13px] font-semibold px-8 py-3.5 hover:bg-[#F8F7F5] transition-colors">
                상담 예약하기 →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer hideHoursBar />
    </div>
  );
}
