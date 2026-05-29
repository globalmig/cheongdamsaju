export default function Footer() {
  return (
    <footer className="w-full bg-[#1B2B4B] text-white">
      {/* Top bar */}
      <div className="w-full bg-white border-t border-[#e8e8e8]">
        <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#1B2B4B]">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="#1B2B4B" strokeWidth="1.2" />
                <path d="M7.5 4v3.5l2.5 1.5" stroke="#1B2B4B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="text-[12px] font-semibold text-[#1B2B4B] mr-2">상담 가능 시간</span>
              <span className="text-[12px] text-[#555]">
                평일 10:00 ~ 19:00 &nbsp;|&nbsp; 주말 11:00 ~ 17:00
                <span className="text-[#888] ml-1">(매주 목요일 휴무)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
          {/* Brand */}
          <div className="lg:w-[280px] flex-shrink-0">
            <p
              className="text-[24px] font-bold mb-1"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              청담사주
            </p>
            <p className="text-[11px] text-white/50 tracking-widest mb-5">정통 사주·작명 상담</p>
            <p className="text-[13px] text-white/65 leading-relaxed max-w-[220px]">
              사주를 바탕으로 인생의 흐름과 방향을 함께 살펴드립니다.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:w-[220px] flex-shrink-0 flex flex-col gap-3">
            <div>
              <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Address</p>
              <p className="text-[13px] text-white/75 leading-relaxed">
                대구광역시 북구 침산남로 80<br />상가동 2층 213호
              </p>
            </div>
            <div>
              <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Hours</p>
              <p className="text-[13px] text-white/75 leading-relaxed">
                평일 10:00 ~ 19:00<br />주말 11:00 ~ 17:00<br /><span className="text-white/45">목요일 휴무</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col gap-2">
          <p className="text-[11px] text-white/30 leading-relaxed">
            상호: 청담사주작명원 &nbsp;|&nbsp; 대표: 정효근 &nbsp;|&nbsp; 사업장소재지: 대구광역시 북구 침산남로 80, 상가동 2층 213호 (침산동, 침산태왕리더스)
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[12px] text-white/35">
              © 2025 청담사주작명원. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[12px] text-white/35 hover:text-white/60 transition-colors">개인정보처리방침</a>
              <a href="#" className="text-[12px] text-white/35 hover:text-white/60 transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
