import ServiceDetail, { buildMetadata, buildServiceJsonLd, type ServiceData } from "@/components/ServiceDetail";

const data: ServiceData = {
  title: "궁합상담",
  subtitle: "인연의 흐름을 살피다",
  description: [
    "연인, 부부, 인간관계의 흐름과 인연을 상담합니다.",
    "서로의 성향과 관계의 방향성을 중심으로 풀이합니다.",
  ],
  items: [
    "연애운",
    "결혼운",
    "재회운",
    "부부궁합",
  ],
};

export const metadata = buildMetadata(data);

export default function Page() {
  const jsonLd = buildServiceJsonLd(data, "/services/gunghap");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetail data={data} currentHref="/services/gunghap" />
    </>
  );
}
