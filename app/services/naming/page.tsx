import ServiceDetail, { buildMetadata, buildServiceJsonLd, type ServiceData } from "@/components/ServiceDetail";

const data: ServiceData = {
  title: "작명 · 개명 · 상호작명",
  subtitle: "이름으로 운을 더하다",
  description: [
    "사주와 오행의 균형을 고려하여 이름을 상담합니다.",
    "아기이름, 개명, 상호작명 등을 진행합니다.",
  ],
  items: [
    "아기 이름 작명",
    "개명 상담",
    "상호 작명 (가게/회사 이름)",
  ],
  note: "사주 + 오행 + 발음 + 의미 조화를 모두 고려하여 제안드립니다.",
};

export const metadata = buildMetadata(data);

export default function Page() {
  const jsonLd = buildServiceJsonLd(data, "/services/naming");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetail data={data} currentHref="/services/naming" />
    </>
  );
}
