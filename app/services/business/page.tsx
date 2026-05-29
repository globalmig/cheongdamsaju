import ServiceDetail, { buildMetadata, type ServiceData } from "@/components/ServiceDetail";

const data: ServiceData = {
  title: "사업운 상담",
  subtitle: "사업의 가능성을 보다",
  description: [
    "창업, 확장, 업종 선택 등 사업의 흐름을 상담합니다.",
    "시기와 방향에 맞는 현실적인 조언을 드립니다.",
  ],
  items: [
    "창업 시기",
    "사업 확장 시기",
    "업종 적합성",
    "사업 흐름 분석",
  ],
};

export const metadata = buildMetadata(data);

export default function Page() {
  return <ServiceDetail data={data} currentHref="/services/business" />;
}
