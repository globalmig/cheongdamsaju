const heroIcons = [
  {
    label: "사주",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="#1B2B4B" strokeWidth="1.5" />
        <path d="M14 2C14 2 14 14 14 14C14 14 7 14 2 14" stroke="#1B2B4B" strokeWidth="1.2" />
        <circle cx="14" cy="8" r="2" fill="#1B2B4B" />
        <circle cx="14" cy="20" r="2" fill="none" stroke="#1B2B4B" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: "궁합",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 22s-9-5.5-9-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-9 11-9 11z" stroke="#1B2B4B" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    label: "재물운",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="18" width="4" height="7" rx="1" stroke="#1B2B4B" strokeWidth="1.4" />
        <rect x="9" y="13" width="4" height="12" rx="1" stroke="#1B2B4B" strokeWidth="1.4" />
        <rect x="15" y="8" width="4" height="17" rx="1" stroke="#1B2B4B" strokeWidth="1.4" />
        <rect x="21" y="3" width="4" height="22" rx="1" stroke="#1B2B4B" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "작명",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22l3-3L20 8a2 2 0 0 0-3-3L6 16l-1 5z" stroke="#1B2B4B" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M17 5l3 3" stroke="#1B2B4B" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "사업운",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="13" width="20" height="12" rx="1.5" stroke="#1B2B4B" strokeWidth="1.4" />
        <path d="M10 13V9a4 4 0 0 1 8 0v4" stroke="#1B2B4B" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="14" y1="17" x2="14" y2="21" stroke="#1B2B4B" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto flex min-h-[520px]">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center py-16 px-8 lg:px-16">
          <p className="text-[15px] text-[#555] mb-3 tracking-wide">
            삶의 흐름을 함께 보는
          </p>
          <h1
            className="text-[42px] font-bold text-[#1B2B4B] leading-tight mb-5"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            정통 사주·작명 상담
          </h1>
          <p className="text-[14.5px] text-[#555] leading-relaxed mb-8 max-w-[400px]">
            사주팔자를 바탕으로 인생의 흐름을 분석하고,
            <br />
            더 나은 선택과 방향을 함께 제시해드립니다.
          </p>

          {/* Icon strip */}
          <div className="flex items-center gap-6 mb-10">
            {heroIcons.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                {item.icon}
                <span className="text-[12px] text-[#444] font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1B2B4B] text-white text-[14px] font-medium px-7 py-3.5 rounded hover:bg-[#152240] transition-colors"
            >
              상담 예약하기
              <span className="text-base">→</span>
            </a>
          </div>
        </div>

        {/* Right image placeholder */}
        <div className="flex-1 relative bg-[#d6d3cc] min-h-[520px] flex items-end justify-center">
          {/* Empty image area */}
          <div className="absolute inset-0 bg-[#c8c5be]" />

          {/* 청담사주 badge overlay */}
          <div
            className="absolute bottom-10 right-10 px-4 py-2 text-center z-10"
            style={{ background: "rgba(27,43,75,0.85)" }}
          >
            <p
              className="text-white text-[16px] font-bold"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              청담사주
            </p>
            <p className="text-white/70 text-[10px] tracking-widest mt-0.5">
              정통 사주·작명 상담
            </p>
          </div>

          {/* Slider dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            <span className="w-6 h-1.5 rounded-full bg-white" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
