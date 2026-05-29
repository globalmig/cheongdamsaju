import ServiceDetail, { buildMetadata, type ServiceData } from "@/components/ServiceDetail";

const data: ServiceData = {
  title: "사주상담",
  subtitle: "인생의 흐름을 읽다",
  description: [
    "사주를 기반으로 인생의 흐름과 방향을 상담합니다.",
    "재물운, 직업운, 사업운, 결혼운 등 전반적인 운의 흐름을 안내드립니다.",
  ],
  items: [
    "사주팔자 분석",
    "재물운",
    "직업운 / 진로",
    "사업운",
    "결혼운",
    "인간관계",
    "건강운",
  ],
};

export const metadata = buildMetadata(data);

export default function Page() {
  return <ServiceDetail data={data} currentHref="/services/saju" />;
}
