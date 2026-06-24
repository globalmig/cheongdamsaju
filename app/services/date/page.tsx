import ServiceDetail, { buildMetadata, buildServiceJsonLd, type ServiceData } from "@/components/ServiceDetail";

const data: ServiceData = {
  title: "택일 상담",
  subtitle: "좋은 날을 고르다",
  description: [
    "결혼, 개업, 이사 등 중요한 날짜를 상담합니다.",
    "사주에 맞는 좋은 시기를 안내드립니다.",
  ],
  items: [
    "결혼 날짜",
    "개업 날짜",
    "이사 날짜",
    "계약 / 수술 날짜",
  ],
};

export const metadata = buildMetadata(data);

export default function Page() {
  const jsonLd = buildServiceJsonLd(data, "/services/date");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetail data={data} currentHref="/services/date" />
    </>
  );
}
