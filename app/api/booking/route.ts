import { NextRequest, NextResponse } from "next/server";
import { SolapiMessageService } from "solapi";

const METHOD_LABEL: Record<string, string> = {
  visit: "방문 상담",
  phone: "전화 상담",
  remote: "비대면 상담",
};

export async function POST(req: NextRequest) {
  const { name, phone, birthDate, gender, type, method, date, time, note } =
    await req.json();

  if (!name || !phone || !birthDate || !type || !method || !date || !time) {
    return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 });
  }

  const apiKey = process.env.SOLAPI_API_KEY;
  const apiSecret = process.env.SOLAPI_API_SECRET;
  const from = process.env.SOLAPI_FROM;
  const ownerPhone = process.env.SOLAPI_OWNER_PHONE;

  if (!apiKey || !apiSecret || !from) {
    return NextResponse.json({ error: "SMS 서비스 설정이 완료되지 않았습니다." }, { status: 500 });
  }

  const messageService = new SolapiMessageService(apiKey, apiSecret);

  const customerText =
    `[청담사주작명원] 예약이 접수되었습니다.\n` +
    `상담: ${type} (${METHOD_LABEL[method] ?? method})\n` +
    `일시: ${date} ${time}`;

  const ownerText =
    `[청담사주] 새 예약 신청\n` +
    `성함: ${name}${gender ? ` (${gender})` : ""}\n` +
    `연락처: ${phone}\n` +
    `생년월일: ${birthDate}\n` +
    `상담: ${type} / ${METHOD_LABEL[method] ?? method}\n` +
    `일시: ${date} ${time}` +
    (note ? `\n메모: ${note}` : "");

  const messages = [{ to: phone, from, text: customerText }];
  if (ownerPhone) {
    messages.push({ to: ownerPhone, from, text: ownerText });
  }

  try {
    await messageService.send(messages);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Solapi error:", err);
    return NextResponse.json({ error: "SMS 발송 중 오류가 발생했습니다." }, { status: 500 });
  }
}
