import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "이용약관 | 청담사주",
  description: "청담사주작명원의 이용약관을 안내드립니다.",
};

const sections = [
  {
    title: "제1조 (목적)",
    content: `이 약관은 청담사주작명원(이하 '본원')이 운영하는 웹사이트(이하 '사이트') 및 상담 예약 서비스(이하 '서비스')의 이용과 관련하여 본원과 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.`,
  },
  {
    title: "제2조 (정의)",
    content: `① '사이트'란 본원이 서비스를 제공하기 위하여 운영하는 인터넷 홈페이지를 의미합니다.
② '이용자'란 사이트에 접속하여 이 약관에 따라 본원이 제공하는 서비스를 이용하는 자를 말합니다.
③ '예약'이란 이용자가 사이트 또는 전화를 통해 상담 일정을 신청하는 행위를 말합니다.`,
  },
  {
    title: "제3조 (약관의 효력 및 변경)",
    content: `① 이 약관은 사이트에 게시함으로써 효력이 발생합니다.
② 본원은 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 사이트에 공지함으로써 효력이 발생합니다.
③ 이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다. 변경 공지 후 계속 서비스를 이용하는 경우 변경 약관에 동의한 것으로 간주합니다.`,
  },
  {
    title: "제4조 (서비스 이용)",
    content: `① 본원은 다음과 같은 서비스를 제공합니다.
• 사주상담, 궁합상담, 재물운 상담, 작명·개명 상담, 사업운 상담, 택일 상담 등 명리학 기반 상담 서비스
• 온라인 예약 신청 서비스
• 상담 안내 및 관련 정보 제공

② 서비스는 방문, 전화, 비대면(화상·메신저) 방식으로 제공됩니다.
③ 서비스 이용 시간은 평일 10:00~19:00, 토요일 11:00~17:00이며, 일요일은 휴무입니다. 단, 사전 예약 시 일요일 상담도 가능합니다.`,
  },
  {
    title: "제5조 (예약 및 취소)",
    content: `① 이용자는 사이트 예약 페이지 또는 전화를 통해 상담 예약을 신청할 수 있습니다.
② 예약 신청 시 성함, 연락처, 생년월일, 성별, 상담 유형 및 희망 일시를 제공하여야 합니다.
③ 예약 확정은 본원의 확인 안내 후 이루어집니다.
④ 예약 취소 또는 일정 변경이 필요한 경우, 상담 예정일 하루 전까지 연락하시기 바랍니다. 당일 취소는 다음 예약에 영향을 줄 수 있습니다.
⑤ 천재지변, 시설 사정 등 불가피한 사유로 본원이 예약을 취소하는 경우, 이용자에게 즉시 통보하고 새로운 일정을 협의합니다.`,
  },
  {
    title: "제6조 (이용자의 의무)",
    content: `① 이용자는 다음 행위를 하여서는 안 됩니다.
• 허위 정보 기재 및 타인 정보 도용
• 본원 및 제3자의 저작권 등 지적재산권 침해
• 서비스 운영을 방해하는 행위
• 기타 불법적이거나 부당한 행위

② 이용자는 관계 법령, 이 약관의 규정, 본원의 안내 사항 등을 준수하여야 합니다.`,
  },
  {
    title: "제7조 (상담 서비스의 성격 및 한계)",
    content: `① 본원의 상담 서비스는 명리학(사주팔자)을 기반으로 한 동양철학적 해석이며, 법적·의학적·재정적 조언이 아닙니다.
② 상담 내용은 참고 정보로 활용하시되, 중요한 의사결정은 이용자 본인의 판단에 따라 이루어져야 합니다.
③ 상담 결과가 이용자의 기대와 다를 수 있으며, 이로 인한 결과에 대해 본원은 법적 책임을 지지 않습니다.`,
  },
  {
    title: "제8조 (면책조항)",
    content: `① 본원은 천재지변, 전쟁, 기간통신사업자의 서비스 장애 등 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
② 본원은 이용자의 귀책 사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.
③ 본원은 이용자가 사이트를 통해 취득한 정보에 대해 정확성, 신뢰성에 관하여 책임을 지지 않습니다.`,
  },
  {
    title: "제9조 (저작권)",
    content: `① 사이트에 게재된 텍스트, 이미지, 영상, 디자인 등 모든 콘텐츠의 저작권은 본원 또는 정당한 권리자에게 귀속됩니다.
② 이용자는 사이트의 콘텐츠를 본원의 사전 서면 동의 없이 복제, 배포, 전송, 출판하거나 상업적으로 이용할 수 없습니다.`,
  },
  {
    title: "제10조 (분쟁 해결 및 관할법원)",
    content: `① 본원과 이용자 간 서비스 이용과 관련하여 발생한 분쟁은 상호 협의를 통해 해결합니다.
② 협의로 해결되지 않는 경우, 관련 법령에 따른 조정 기관에 분쟁 조정을 신청할 수 있습니다.
③ 소송이 제기될 경우 본원의 소재지를 관할하는 법원을 관할 법원으로 합니다.

본원 소재지: 대구광역시 북구 침산남로 80, 상가동 2층 213호`,
  },
  {
    title: "부칙",
    content: `이 약관은 2026년 1월 1일부터 시행합니다.`,
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full bg-[#1B2B4B] py-14 md:py-20 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-[12px] text-white/40 uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-[32px] md:text-[40px] font-bold text-white leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              이용약관
            </h1>
            <p className="text-white/50 text-[13px] mt-3">시행일: 2026년 1월 1일</p>
          </div>
        </section>

        {/* Content */}
        <section className="w-full bg-[#F8F7F5] py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            {/* Intro */}
            <div className="bg-white border border-[#e8e8e8] rounded-2xl px-7 py-7 mb-8">
              <p className="text-[13.5px] text-[#555] leading-relaxed">
                청담사주작명원(대표: 정효근, 이하 '본원')이 운영하는 웹사이트 및 상담 예약 서비스를 이용하시기 전에 본 이용약관을 주의 깊게 읽어 주시기 바랍니다. 서비스를 이용하시면 본 약관에 동의한 것으로 간주됩니다.
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-6">
              {sections.map((s, i) => (
                <div key={i} className="bg-white border border-[#e8e8e8] rounded-2xl px-7 py-7">
                  <h2 className="text-[15px] font-bold text-[#1B2B4B] mb-4" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    {s.title}
                  </h2>
                  <p className="text-[13.5px] text-[#555] leading-relaxed whitespace-pre-line">{s.content}</p>
                </div>
              ))}
            </div>

            {/* Back */}
            <div className="mt-10 text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-[#1B2B4B] border border-[#1B2B4B] px-6 py-2.5 hover:bg-[#1B2B4B] hover:text-white transition-colors">
                ← 홈으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer hideHoursBar />
    </div>
  );
}
