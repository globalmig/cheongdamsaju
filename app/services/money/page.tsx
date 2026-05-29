import ServiceDetail, { buildMetadata, type ServiceData } from "@/components/ServiceDetail";

const data: ServiceData = {
  title: "재물운 상담",
  subtitle: "재물의 흐름을 파악하다",
  description: [
    "금전 흐름과 재물의 운세를 분석합니다.",
    "현재와 미래의 재정 방향을 중심으로 상담합니다.",
  ],
  items: [
    "돈의 흐름 분석",
    "직장 / 투자 / 사업 타이밍",
    "재정운 방향",
  ],
};

export const metadata = buildMetadata(data);

export default function Page() {
  return <ServiceDetail data={data} currentHref="/services/money" />;
}
