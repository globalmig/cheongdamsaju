import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type ServiceData = {
  title: string;
  subtitle: string;
  description: string[];
  items: string[];
  note?: string;
};

export function buildMetadata(data: ServiceData): Metadata {
  return {
    title: `${data.title} | 청담사주`,
    description: data.description[0],
  };
}

const allServices = [
  { title: "사주상담", href: "/services/saju" },
  { title: "궁합상담", href: "/services/gunghap" },
  { title: "재물운 상담", href: "/services/money" },
  { title: "사업운 상담", href: "/services/business" },
  { title: "택일 상담", href: "/services/date" },
  { title: "진로/직업/시험운 상담", href: "/services/career" },
  { title: "작명·개명·상호작명", href: "/services/naming" },
  { title: "기타 상담", href: "/services/etc" },
];

export default function ServiceDetail({
  data,
  currentHref,
}: {
  data: ServiceData;
  currentHref: string;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-[#1B2B4B] py-14 md:py-20">
          <Image src="/images/청담사주작명원 정보1.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B2B4B]/75" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 text-[12px] text-white/40 mb-6">
              <Link href="/services" className="hover:text-white/70 transition-colors">상담 분야</Link>
              <span>›</span>
              <span className="text-white/70">{data.title}</span>
            </div>
            <p className="text-[#C9A84C] text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
              {data.subtitle}
            </p>
            <h1
              className="text-[26px] sm:text-[32px] md:text-[40px] font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              {data.title}
            </h1>
            <div className="w-10 h-[2px] bg-[#C9A84C]" />
          </div>
        </section>

        {/* Content */}
        <section className="w-full bg-[#F8F7F5] py-10 md:py-14">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Main */}
              <div className="flex-1 min-w-0">

                {/* Description */}
                <div className="bg-white border border-[#e8e8e8] p-5 md:p-8 mb-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-[3px] h-5 bg-[#C9A84C] rounded-full shrink-0" />
                    <h2
                      className="text-[16px] font-bold text-[#1B2B4B]"
                      style={{ fontFamily: "'Noto Serif KR', serif" }}
                    >
                      상담 안내
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {data.description.map((line, i) => (
                      <p key={i} className="text-[14px] text-[#555] leading-[1.9]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Items */}
<div className="bg-white border border-[#e8e8e8] p-5 md:p-8 mb-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-[3px] h-5 bg-[#C9A84C] rounded-full shrink-0" />
                    <h2
                      className="text-[16px] font-bold text-[#1B2B4B]"
                      style={{ fontFamily: "'Noto Serif KR', serif" }}
                    >
                      상담 항목
                    </h2>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {data.items.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] text-[#444] bg-[#f2f2f2] border border-[#e0e0e0] rounded-full px-4 py-1.5 leading-none"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {data.note && (
                    <p className="text-[13px] text-[#888] mt-6 pt-5 border-t border-[#f0f0f0]">
                      {data.note}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <div className="bg-[#1B2B4B] p-5 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div>
                    <p className="text-[#C9A84C] text-[11px] tracking-[0.15em] uppercase font-medium mb-2">
                      지금 바로 예약하세요
                    </p>
                    <p
                      className="text-[22px] font-bold text-white"
                      style={{ fontFamily: "'Noto Serif KR', serif" }}
                    >
                      {data.title} 예약하기
                    </p>
                  </div>
                  <Link
                    href="/booking"
                    className="shrink-0 inline-flex items-center gap-2 bg-[#C9A84C] text-white text-[13px] font-semibold px-7 py-3.5 hover:bg-[#b8943e] transition-colors"
                  >
                    상담 예약하기 →
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-[220px] shrink-0">
                <div className="bg-white border border-[#e8e8e8] sticky top-24">
                  <div className="px-5 py-4 border-b border-[#e8e8e8]">
                    <p className="text-[11px] font-bold text-[#1B2B4B] tracking-[0.12em] uppercase">전체 상담 분야</p>
                  </div>
                  <ul>
                    {allServices.map((s) => (
                      <li key={s.href} className="border-b border-[#f0f0f0] last:border-0">
                        <Link
                          href={s.href}
                          className={`flex items-center gap-3 px-5 py-3.5 text-[13px] transition-colors ${
                            s.href === currentHref
                              ? "text-[#1B2B4B] font-semibold bg-[#F8F7F5]"
                              : "text-[#666] hover:bg-[#F8F7F5] hover:text-[#1B2B4B]"
                          }`}
                        >
                          {s.href === currentHref && (
                            <div className="w-[3px] h-3.5 bg-[#C9A84C] rounded-full shrink-0" />
                          )}
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 border-t border-[#e8e8e8]">
                    <Link
                      href="/booking"
                      className="block w-full text-center bg-[#1B2B4B] text-white text-[12px] font-medium py-3 hover:bg-[#152240] transition-colors"
                    >
                      예약하기
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}