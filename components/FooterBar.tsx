export default function FooterBar() {
  return (
    <div className="w-full bg-white border-t border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between">
        {/* Left: Hours */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#1B2B4B]">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#1B2B4B" strokeWidth="1.2" />
              <path d="M7.5 4v3.5l2.5 1.5" stroke="#1B2B4B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-[12px] font-semibold text-[#1B2B4B] mr-2">
              상담 가능 시간
            </span>
            <span className="text-[12px] text-[#555]">
              평일 10:00 ~ 19:00 &nbsp;|&nbsp; 주말 11:00 ~ 17:00
              <span className="text-[#888] ml-1">(일요일 휴무, 미리 예약 시 상담가능)</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
