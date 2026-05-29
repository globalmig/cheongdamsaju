const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#1B2B4B" strokeWidth="1.5" />
        <path d="M20 4C20 4 20 20 20 20C20 20 11 20 4 20" stroke="#1B2B4B" strokeWidth="1.3" />
        <circle cx="20" cy="12" r="2.5" fill="#1B2B4B" />
        <circle cx="20" cy="28" r="2.5" fill="none" stroke="#1B2B4B" strokeWidth="1.3" />
      </svg>
    ),
    title: "사주상담",
    desc: "사주팔자를 기반으로 인생의 흐름과 전반적인 운세를 분석합니다.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#1B2B4B" strokeWidth="1.5" />
        <path d="M20 30s-10-6-10-12a6 6 0 0 1 10-4.5A6 6 0 0 1 30 18c0 6-10 12-10 12z" stroke="#1B2B4B" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    title: "궁합상담",
    desc: "연애, 결혼, 부부 관계의 궁합과 인연의 흐름을 상담합니다.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#1B2B4B" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="8" stroke="#1B2B4B" strokeWidth="1.3" />
        <path d="M20 14v-4M20 30v-4M14 20h-4M30 20h-4" stroke="#1B2B4B" strokeWidth="1.3" strokeLinecap="round" />
        <text x="16.5" y="23.5" fontSize="8" fill="#1B2B4B" fontFamily="sans-serif" fontWeight="600">₩</text>
      </svg>
    ),
    title: "재물운 상담",
    desc: "재물의 흐름과 재물운을 분석하고 미래의 재정 방향을 안내합니다.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#1B2B4B" strokeWidth="1.5" />
        <path d="M13 27l4-4L28 12a2.5 2.5 0 0 0-3.5-3.5L13 19.5 12 26z" stroke="#1B2B4B" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
        <path d="M24.5 8.5l3.5 3.5" stroke="#1B2B4B" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "작명·개명 상담",
    desc: "사주와 오행의 균형을 고려하여 좋은 이름을 제안해드립니다.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white border-t border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto flex divide-x divide-[#e8e8e8]">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex-1 px-8 py-10 hover:bg-[#F8F7F5] transition-colors group"
          >
            <div className="mb-5">{service.icon}</div>
            <h3
              className="text-[17px] font-bold text-[#1B2B4B] mb-3"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              {service.title}
            </h3>
            <p className="text-[13px] text-[#666] leading-relaxed mb-5">
              {service.desc}
            </p>
            <a
              href="#"
              className="text-[13px] text-[#1B2B4B] font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              자세히 보기 <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
