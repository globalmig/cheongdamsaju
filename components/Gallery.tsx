const galleryItems = [
  {
    title: "조용하고 편안한 상담 공간",
    desc: "충분한 시간을 가지고 정성스럽게 상담이 진행됩니다.",
  },
  {
    title: "정통 명리학 기반 상담",
    desc: "오랜 경험과 전문성으로 정확한 상담을 제공합니다.",
  },
  {
    title: "방문 / 전화 / 비대면 상담 가능",
    desc: "상담자의 상황에 맞춰 편한 방식으로 상담받으실 수 있습니다.",
  },
];

const infoList = [
  "사주·궁합·재물운·작명·사업운 전문",
  "안전한 상담 & 철저한 비밀 보장",
  "방문·전화·비대면 상담 가능",
];

export default function Gallery() {
  return (
    <section className="w-full bg-[#F8F7F5]">
      <div className="max-w-[1280px] mx-auto flex gap-0">
        {/* Gallery images - 3 cols */}
        <div className="flex flex-1">
          {galleryItems.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col">
              {/* Image placeholder */}
              <div className="bg-[#d0ccc5] aspect-[4/3] w-full" />
              {/* Caption */}
              <div className="bg-white px-5 py-5 flex-1 border-r border-[#e8e8e8]">
                <h4
                  className="text-[14.5px] font-bold text-[#1B2B4B] mb-2"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-[12.5px] text-[#666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info card */}
        <div
          className="w-[280px] flex-shrink-0 bg-[#1B2B4B] px-7 py-10 flex flex-col justify-center"
        >
          <h3
            className="text-[19px] font-bold text-white mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            청담사주작명원
          </h3>
          <p className="text-[13px] text-white/75 leading-relaxed mb-7">
            단순한 운세 풀이가 아닌, 사주의 구조와 흐름을
            바탕으로 현실적인 방향을 제시하는 상담을
            지향합니다.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {infoList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <svg
                  className="flex-shrink-0 mt-0.5"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <circle cx="7.5" cy="7.5" r="7" stroke="#C9A84C" strokeWidth="1" />
                  <path
                    d="M4.5 7.5l2 2 4-4"
                    stroke="#C9A84C"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[12.5px] text-white/80 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-1.5 border border-white/40 text-white text-[13px] font-medium px-5 py-2.5 hover:bg-white/10 transition-colors w-fit"
          >
            더 알아보기 →
          </a>
        </div>
      </div>
    </section>
  );
}
