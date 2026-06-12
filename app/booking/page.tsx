import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "예약/상담 신청 | 청담사주",
  description: "청담사주작명원 상담 예약 및 신청 페이지입니다. 원하시는 상담 분야와 일정을 선택해 주세요.",
};

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Page hero */}
        <section className="relative w-full h-56 md:h-72 overflow-hidden bg-[#1B2B4B] flex items-center justify-center">
          {/* <Image src="/images/청담사주작명원 내부3.jpg" alt="" fill className="object-cover object-center" /> */}
          <Image src="/images/청담사주작명원 내부4.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B2B4B]/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-[36px] md:text-[42px] font-bold text-white leading-tight mb-3" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              예약 / 상담신청
            </h1>
            <p className="text-white/70 text-[14px]">원하시는 상담을 편리하게 예약하세요</p>
          </div>
        </section>

        {/* Form section */}
        <section className="w-full bg-[#F8F7F5] py-16">
          <div className="max-w-[900px] mx-auto px-6">
            <BookingForm />
          </div>
        </section>

        {/* Info */}
        <section className="w-full bg-white py-12 border-t border-[#e8e8e8]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "상담 안내",
                  items: ["방문·전화·비대면 상담 가능", "1:1 개인 맞춤 상담 진행", "비밀 철저 보장"],
                },
                {
                  title: "영업시간",
                  items: ["평일 10:00~19:00", "주말 11:00~17:00", "일요일 휴무, 미리 예약 시 상담가능"],
                },
                {
                  title: "문의",
                  items: ["예약 확인은 문자로 안내드립니다", "당일 예약 가능 여부는 문의 바랍니다"],
                },
              ].map((col) => (
                <div key={col.title}>
                  <h3 className="text-[15px] font-bold text-[#1B2B4B] mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    {col.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0 mt-1.5" />
                        <span className="text-[13px] text-[#666]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer hideHoursBar />
    </div>
  );
}
