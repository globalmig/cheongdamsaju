import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "오시는 길 | 청담사주",
  description: "청담사주작명원을 방문하시는 길 안내입니다. 대구광역시 북구 침산남로 80에 위치하고 있습니다.",
};

const transportInfo = [
  {
    type: "지하철",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="2" width="14" height="16" rx="3" stroke="#1B2B4B" strokeWidth="1.4" />
        <circle cx="7" cy="14" r="1.5" fill="#1B2B4B" />
        <circle cx="13" cy="14" r="1.5" fill="#1B2B4B" />
        <path d="M6 6h8M6 9h8" stroke="#1B2B4B" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    details: [
      "3호선(모노레일) 북구청역 하차 후 버스·택시 이용",
      "1호선 대구역 하차 후 버스 환승",
    ],
  },
  {
    type: "버스",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="#1B2B4B" strokeWidth="1.4" />
        <circle cx="6" cy="17" r="1.5" fill="#1B2B4B" />
        <circle cx="14" cy="17" r="1.5" fill="#1B2B4B" />
        <path d="M2 8h16" stroke="#1B2B4B" strokeWidth="1.2" />
        <path d="M10 3v5" stroke="#1B2B4B" strokeWidth="1.2" />
      </svg>
    ),
    details: [
      "간선: 101·300·349·523·708·730번 침산남로 정류장 하차",
      "지선: 북구3·북구4번 침산남로 정류장 하차",
    ],
  },
  {
    type: "자가용",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 12V9l2-5h10l2 5v3" stroke="#1B2B4B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="1" y="12" width="18" height="4" rx="1" stroke="#1B2B4B" strokeWidth="1.4" />
        <circle cx="5.5" cy="16" r="1.5" fill="#1B2B4B" />
        <circle cx="14.5" cy="16" r="1.5" fill="#1B2B4B" />
      </svg>
    ),
    details: [
      "내비 목적지: '침산태왕리더스' 또는 '침산남로 80' 검색",
      "건물 내 주차장 이용 / 인근 공영주차장 이용 가능",
    ],
  },
];

export default function LocationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Page hero */}
        <section className="relative w-full h-56 md:h-72 overflow-hidden bg-[#1B2B4B] flex items-center justify-center">
          <Image src="/images/청담사주작명원 외부2.jpg" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B2B4B]/60" />
          <div className="relative z-10 text-center px-6">
            <h1
              className="text-[36px] md:text-[42px] font-bold text-white leading-tight mb-3"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              오시는 길
            </h1>
            <p className="text-white/70 text-[14px]">청담사주작명원을 방문하시는 길을 안내합니다</p>
          </div>
        </section>

        {/* Map + basic info */}
        <section className="w-full bg-white py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Map */}
              <div className="flex-1 min-h-[400px] relative overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=대구광역시+북구+침산남로+80+침산태왕리더스&output=embed&hl=ko&z=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="청담사주작명원 위치"
                />
                {/* Map buttons overlay */}
                <div className="absolute bottom-5 right-5 flex flex-col gap-2">
                  <a
                    href="https://map.naver.com/v5/search/대구광역시 북구 침산남로 80 침산태왕리더스"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white border border-[#e8e8e8] shadow-sm px-4 py-2.5 text-[12px] font-medium text-[#333] hover:bg-[#F8F7F5] transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1C3.686 1 1 3.686 1 7c0 4 6 9 6 9s6-5 6-9c0-3.314-2.686-6-6-6z" stroke="#1B2B4B" strokeWidth="1.2" />
                      <circle cx="7" cy="7" r="2" stroke="#1B2B4B" strokeWidth="1.2" />
                    </svg>
                    네이버 지도
                  </a>
                  <a
                    href="https://map.kakao.com/?q=대구광역시 북구 침산남로 80 침산태왕리더스"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#FAE100] border border-[#e8c800] shadow-sm px-4 py-2.5 text-[12px] font-medium text-[#3A1D1D] hover:bg-[#f5d900] transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1C3.686 1 1 3.686 1 7c0 4 6 9 6 9s6-5 6-9c0-3.314-2.686-6-6-6z" fill="#3A1D1D" />
                      <circle cx="7" cy="6.5" r="2" fill="#FAE100" />
                    </svg>
                    카카오맵
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="lg:w-[340px] flex-shrink-0">
                <h2
                  className="text-[22px] font-bold text-[#1B2B4B] mb-6"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  청담사주작명원
                </h2>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 1C4.686 1 2 3.686 2 7c0 4.5 6 9 6 9s6-4.5 6-9c0-3.314-2.686-6-6-6z" stroke="#1B2B4B" strokeWidth="1.3" />
                          <circle cx="8" cy="7" r="2" stroke="#1B2B4B" strokeWidth="1.3" />
                        </svg>
                      ),
                      label: "주소",
                      value: "대구광역시 북구 침산남로 80\n상가동 2층 213호 (침산태왕리더스)",
                    },
                    {
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6.5" stroke="#1B2B4B" strokeWidth="1.2" />
                          <path d="M8 4.5v3.5l2.5 1.5" stroke="#1B2B4B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                      label: "영업시간",
                      value: "평일 10:00 ~ 19:00\n주말 11:00 ~ 17:00\n목요일 휴무",
                    },
                    {
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="1" y="4" width="14" height="10" rx="1.5" stroke="#1B2B4B" strokeWidth="1.2" />
                          <path d="M5 4V3a3 3 0 0 1 6 0v1" stroke="#1B2B4B" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      ),
                      label: "주차 안내",
                      value: "건물 내 주차 가능\n(1시간 무료 제공)",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full border border-[#e8e8e8] flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] text-[#888] font-medium mb-1">{item.label}</p>
                        <p className="text-[13px] text-[#333] whitespace-pre-line leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/booking"
                    className="w-full block text-center bg-[#1B2B4B] text-white text-[13px] font-medium px-5 py-3 hover:bg-[#152240] transition-colors"
                  >
                    상담 예약하기 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className="w-full bg-[#F8F7F5] py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[12px] text-[#C9A84C] tracking-widest uppercase font-medium mb-3">How to get here</p>
              <h2
                className="text-[28px] font-bold text-[#1B2B4B]"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                교통 안내
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e8e8]">
              {transportInfo.map((t) => (
                <div key={t.type} className="bg-white px-8 py-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full border border-[#e8e8e8] flex items-center justify-center">
                      {t.icon}
                    </div>
                    <h3
                      className="text-[17px] font-bold text-[#1B2B4B]"
                      style={{ fontFamily: "'Noto Serif KR', serif" }}
                    >
                      {t.type}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {t.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0 mt-1.5" />
                        <span className="text-[13px] text-[#555] leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exterior photo */}
        <section className="w-full bg-white py-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2
                className="text-[24px] font-bold text-[#1B2B4B]"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                건물 외관
              </h2>
              <p className="text-[13px] text-[#888] mt-2">아래 이미지를 참고하여 방문해 주세요</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-120 relative flex items-end p-5 overflow-hidden">
                <Image
                  src="/images/청담사주작명원 외부1.jpg"
                  alt="건물 정문"
                  fill
                  className="object-cover object-center"
                />
                <div className="relative z-10 bg-[#1B2B4B]/85 px-3 py-2">
                  <p className="text-white text-[13px] font-medium">건물 정문</p>
                </div>
              </div>
              <div className="h-120 relative flex items-end p-5 overflow-hidden">
                <Image
                  src="/images/청담사주작명원 외부3.jpg"
                  alt="간판 / 안내"
                  fill
                  className="object-cover object-center"
                />
                <div className="relative z-10 bg-[#1B2B4B]/85 px-3 py-2">
                  <p className="text-white text-[13px] font-medium">간판 / 안내</p>
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
