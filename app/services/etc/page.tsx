import ServiceDetail, { buildMetadata, buildServiceJsonLd, type ServiceData } from "@/components/ServiceDetail";

const data: ServiceData = {
  title: "기타 상담",
  subtitle: "다양한 고민을 함께",
  description: [
    "개인의 상황에 맞는 다양한 상담을 진행합니다.",
    "사주 흐름을 기반으로 현실적인 방향을 안내드립니다.",
  ],
  items: [
    "재물 / 사업 / 건강 / 시험 / 인간관계",
    "개인 사주 기반 맞춤 상담",
    "필요 시 추가 상담 안내",
  ],
};

export const metadata = buildMetadata(data);

export default function Page() {
  const jsonLd = buildServiceJsonLd(data, "/services/etc");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetail data={data} currentHref="/services/etc" />
    </>
  );
}
