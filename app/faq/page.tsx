import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "자주 묻는 질문 (FAQ) | 청담사주",
  description: "청담사주작명원에 자주 묻는 질문들을 모았습니다. 상담 시간, 비용, 예약 방법 등을 확인하세요.",
};

export const faqData = [
  {
    category: "상담 안내",
    items: [
      {
        q: "상담 시간은 얼마나 걸리나요?",
        a: "상담은 보통 약 1시간 정도 진행되며, 상담 내용에 따라 시간이 조금 달라질 수 있습니다.",
      },
      {
        q: "전화 상담도 가능한가요?",
        a: "네. 방문 상담뿐 아니라 전화 및 비대면 상담도 가능합니다.",
      },
      {
        q: "예약 없이 방문 가능한가요?",
        a: "예약 없이 방문도 가능하지만, 예약 고객 우선으로 상담이 진행될 수 있어 사전 예약을 권장드립니다.",
      },
      {
        q: "당일 예약도 가능한가요?",
        a: "예약 상황에 따라 당일 상담도 가능하며, 사전 문의 부탁드립니다.",
      },
      {
        q: "상담 비용은 어떻게 되나요?",
        a: "비용은 20만원입니다.",
      },
      {
        q: "상담 시 필요한 정보가 있나요?",
        a: "보다 정확한 상담을 위해 생년월일 및 태어난 시간을 미리 준비해주시면 도움이 됩니다.",
      },
      {
        q: "비밀 상담도 가능한가요?",
        a: "모든 상담 내용은 편안하고 조용한 분위기에서 비공개로 진행됩니다.",
      },
      {
        q: "어떤 상담을 가장 많이 받으시나요?",
        a: "사주상담, 궁합상담, 재물운 상담, 작명 상담 문의가 가장 많은 편입니다.",
      },
    ],
  },
  {
    category: "상담 분야",
    items: [
      {
        q: "어떤 직업이 저와 잘 맞는지 상담 가능한가요?",
        a: "네. 사주를 바탕으로 공무원, 직장생활, 사업, 자영업 등 개인의 성향과 흐름에 맞는 직업 방향과 적성을 함께 상담해드립니다.",
      },
      {
        q: "시험운이나 합격운 상담도 가능한가요?",
        a: "네. 시험, 취업, 공무원 준비 등 중요한 시기의 흐름과 시험운에 대해 상담 가능합니다.",
      },
      {
        q: "궁합 상담은 어떤 내용을 보나요?",
        a: "연인, 부부, 결혼 예정인 분들의 성향과 관계 흐름을 중심으로 궁합 상담을 진행하고 있습니다.",
      },
      {
        q: "결혼이나 이사 날짜 상담도 가능한가요?",
        a: "네. 결혼택일, 출산택일, 이사택일, 개업택일 등 중요한 일정에 맞는 좋은 날짜를 상담해드립니다.",
      },
      {
        q: "재물운 상담도 가능한가요?",
        a: "네. 현재와 앞으로의 금전 흐름, 재물운의 변화 시기 등에 대해 상담해드립니다.",
      },
      {
        q: "배우자 및 애정 상담도 가능한가요?",
        a: "부부관계, 연애, 애정운 등 인간관계 전반에 대한 상담도 함께 진행하고 있습니다.",
      },
      {
        q: "작명 상담은 얼마나 걸리나요?",
        a: "작명 및 개명 상담은 보통 2~3일 정도 소요됩니다.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Page hero */}
        <section className="relative w-full h-56 md:h-72 overflow-hidden bg-[#1B2B4B] flex items-center justify-center">
          <Image src="/images/청담사주작명원 내부5.jpg" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B2B4B]/60" />
          <div className="relative z-10 text-center px-6">
            <h1
              className="text-[36px] md:text-[42px] font-bold text-white leading-tight mb-3"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              자주 묻는 질문
            </h1>
            <p className="text-white/70 text-[14px]">궁금하신 내용을 확인해보세요</p>
          </div>
        </section>

        {/* FAQ content */}
        <section className="w-full bg-[#F8F7F5] py-16">
          <div className="max-w-225 mx-auto px-6">
            <FaqAccordion data={faqData} />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-white py-14 border-t border-[#e8e8e8]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#F8F7F5] border border-[#e8e8e8] flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#1B2B4B" strokeWidth="1.3" />
                <path d="M10 6v5M10 14v.5" stroke="#1B2B4B" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h2
              className="text-[22px] font-bold text-[#1B2B4B] mb-3"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              더 궁금하신 내용이 있으신가요?
            </h2>
            <p className="text-[14px] text-[#666] mb-6">
              전화 또는 예약 페이지를 통해 언제든지 도움을 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 border border-[#1B2B4B] text-[#1B2B4B] text-[13px] font-medium px-7 py-3 hover:bg-[#F8F7F5] transition-colors"
              >
                상담 예약하러 가기 →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
