import ServiceDetail, { buildMetadata, type ServiceData } from "@/components/ServiceDetail";

const data: ServiceData = {
  title: "진로 / 직업 / 시험운 상담",
  subtitle: "적성과 진로를 찾다",
  description: [
    "진로, 취업, 이직, 시험 등 인생의 중요한 선택을 상담합니다.",
    "개인의 흐름에 맞는 방향을 안내드립니다.",
  ],
  items: [
    "학생 진로",
    "취업 방향",
    "이직 상담",
    "공무원 / 시험운",
  ],
};

export const metadata = buildMetadata(data);

export default function Page() {
  return <ServiceDetail data={data} currentHref="/services/career" />;
}
