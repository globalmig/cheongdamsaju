import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 청담사주",
  description: "청담사주작명원의 개인정보처리방침을 안내드립니다.",
};

const sections = [
  {
    title: "제1조 (개인정보의 처리 목적)",
    content: `청담사주작명원(이하 '본원')은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

• 상담 예약 접수 및 확인 안내
• 예약 일정 조율 및 변경·취소 안내
• 상담 진행을 위한 정보 확인
• 고객 문의 응대 및 민원 처리`,
  },
  {
    title: "제2조 (개인정보의 처리 및 보유 기간)",
    content: `본원은 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.

• 수집 항목: 성함, 연락처(전화번호), 생년월일, 성별, 상담 내용(선택사항)
• 보유 기간: 상담 완료 후 3년
  - 단, 관련 법령에 의한 보존 의무가 있는 경우 해당 기간 동안 보존합니다.
  - 소비자의 불만 또는 분쟁 처리에 관한 기록: 3년 (전자상거래법)`,
  },
  {
    title: "제3조 (정보주체와 법정대리인의 권리·의무 및 행사 방법)",
    content: `정보주체는 본원에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.

• 개인정보 열람 요구
• 오류 등이 있을 경우 정정 요구
• 삭제 요구
• 처리 정지 요구

위 권리 행사는 전화 또는 방문을 통해 하실 수 있으며, 본원은 이에 대해 지체 없이 조치하겠습니다. 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 정정 또는 삭제를 완료할 때까지 해당 개인정보를 이용하거나 제공하지 않습니다.`,
  },
  {
    title: "제4조 (처리하는 개인정보의 항목)",
    content: `본원은 다음의 개인정보 항목을 처리하고 있습니다.

필수 항목
• 성함
• 연락처(전화번호)
• 생년월일
• 성별

선택 항목
• 상담 관련 메모 및 요청사항

자동 수집 항목
• 접속 IP, 쿠키, 서비스 이용 기록 (웹사이트 운영 및 보안 목적)`,
  },
  {
    title: "제5조 (개인정보의 제3자 제공)",
    content: `본원은 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

현재 본원은 수집한 개인정보를 제3자에게 제공하지 않습니다.`,
  },
  {
    title: "제6조 (개인정보의 파기)",
    content: `본원은 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.

파기 절차
정보주체가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 혹은 즉시 파기됩니다.

파기 방법
• 전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법으로 삭제
• 종이 문서 형태: 분쇄기로 분쇄하거나 소각`,
  },
  {
    title: "제7조 (개인정보의 안전성 확보 조치)",
    content: `본원은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

• 개인정보 취급 직원의 최소화 및 교육
• 개인정보에 대한 접근 제한
• 개인정보를 보관하는 물리적 보관 장소의 잠금 장치 설치
• 해킹 등에 대비한 기술적 대책 마련`,
  },
  {
    title: "제8조 (개인정보 보호책임자)",
    content: `본원은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

개인정보 보호책임자
• 성명: 정효근
• 직책: 대표
• 연락처: 예약 페이지 또는 방문 문의

정보주체께서는 본원의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.`,
  },
  {
    title: "제9조 (개인정보 처리방침 변경)",
    content: `이 개인정보처리방침은 2026년 1월 1일부터 적용됩니다. 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="w-full bg-[#1B2B4B] py-14 md:py-20 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-[12px] text-white/40 uppercase tracking-widest mb-3">Legal</p>
            <h1 className="text-[32px] md:text-[40px] font-bold text-white leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
              개인정보처리방침
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
                청담사주작명원(대표: 정효근, 이하 '본원')은 정보주체의 개인정보를 중요시하며, 개인정보 보호법 등 관련 법령을 준수하고 있습니다. 본원은 본 개인정보처리방침을 통하여 수집하는 개인정보의 항목, 처리 목적, 보유 기간 및 정보주체의 권리 등을 안내드립니다.
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
