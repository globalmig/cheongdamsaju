"use client";

import { useState } from "react";

const STEPS = ["상담 종류 선택", "상담 방식 선택", "일정 선택", "정보 입력", "예약 완료"];

const consultTypes = [
  "사주상담", "궁합상담", "재물운 상담", "사업운 상담",
  "택일 상담", "전문·직업·시험운 상담", "작명·개명·상호작명", "기타 상담",
];

const consultMethods = [
  { value: "visit", label: "방문 상담", desc: "직접 방문하여 대면 상담" },
  { value: "phone", label: "전화 상담", desc: "전화로 진행하는 상담" },
  { value: "remote", label: "비대면 상담", desc: "화상·메신저를 통한 상담" },
];

const WEEKDAY_SLOTS = ["10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const WEEKEND_SLOTS = ["11:00", "13:00", "14:00", "15:00", "16:00"];

function getDateType(dateStr: string): "weekday" | "weekend" | "closed" | null {
  if (!dateStr) return null;
  const day = new Date(dateStr).getDay(); // 0=일, 1=월 ... 6=토
  if (day === 0) return "closed"; // 일요일 휴무
  if (day === 6) return "weekend";
  return "weekday";
}

type FormData = {
  type: string;
  method: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  birthDate: string;
  gender: string;
  note: string;
};

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    type: "", method: "", date: "", time: "",
    name: "", phone: "", birthDate: "", gender: "", note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const set = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const submitBooking = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "오류가 발생했습니다.");
      setStep(4);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "예약 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canNext = () => {
    if (step === 0) return !!form.type;
    if (step === 1) return !!form.method;
    if (step === 2) return !!form.date && !!form.time && getDateType(form.date) !== "closed";
    if (step === 3) return !!form.name && !!form.phone && !!form.birthDate;
    return true;
  };

  return (
    <div className="bg-white border border-[#e8e8e8]">
      {/* Step indicators */}
      <div className="border-b border-[#e8e8e8] px-4 sm:px-8 py-4 sm:py-5">
        <div className="flex items-center gap-0">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-colors ${
                    i < step
                      ? "bg-[#C9A84C] text-white"
                      : i === step
                      ? "bg-[#1B2B4B] text-white"
                      : "bg-[#f0f0f0] text-[#aaa]"
                  }`}
                >
                  {i < step ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`text-[10px] whitespace-nowrap hidden sm:block ${
                    i === step ? "text-[#1B2B4B] font-semibold" : "text-[#aaa]"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-px mx-2 ${i < step ? "bg-[#C9A84C]" : "bg-[#e8e8e8]"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-8 py-8 sm:py-10">
        {/* Step 0: 상담 종류 */}
        {step === 0 && (
          <div>
            <h2
              className="text-[20px] font-bold text-[#1B2B4B] mb-6"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              상담 종류를 선택해 주세요
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {consultTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => set("type", t)}
                  className={`py-4 px-3 border text-[13px] font-medium transition-colors text-center ${
                    form.type === t
                      ? "border-[#1B2B4B] bg-[#1B2B4B] text-white"
                      : "border-[#e8e8e8] text-[#444] hover:border-[#1B2B4B]/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: 상담 방식 */}
        {step === 1 && (
          <div>
            <h2
              className="text-[20px] font-bold text-[#1B2B4B] mb-6"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              상담 방식을 선택해 주세요
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {consultMethods.map((m) => (
                <button
                  key={m.value}
                  onClick={() => set("method", m.value)}
                  className={`flex-1 border py-6 px-5 text-left transition-colors ${
                    form.method === m.value
                      ? "border-[#1B2B4B] bg-[#1B2B4B]/5"
                      : "border-[#e8e8e8] hover:border-[#1B2B4B]/40"
                  }`}
                >
                  <p className="text-[15px] font-bold text-[#1B2B4B] mb-1">{m.label}</p>
                  <p className="text-[12.5px] text-[#888]">{m.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: 일정 선택 */}
        {step === 2 && (
          <div>
            <h2
              className="text-[20px] font-bold text-[#1B2B4B] mb-6"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              상담 일정을 선택해 주세요
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-[13px] font-semibold text-[#333] mb-2">상담 날짜</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => { set("date", e.target.value); set("time", ""); }}
                  className="border border-[#e8e8e8] px-4 py-3 text-[14px] text-[#333] w-full sm:w-auto focus:outline-none focus:border-[#1B2B4B]"
                />
              </div>
              {getDateType(form.date) === "closed" ? (
                <div className="bg-[#FFF8F0] border border-[#F5C87A] px-5 py-4">
                  <p className="text-[13px] text-[#A07030] font-medium">일요일은 휴무일입니다. 다른 날짜를 선택해 주세요.</p>
                </div>
              ) : (
                <div>
                  <label className="block text-[13px] font-semibold text-[#333] mb-3">상담 시간</label>
                  <div className="flex flex-wrap gap-2">
                    {(getDateType(form.date) === "weekend" ? WEEKEND_SLOTS : WEEKDAY_SLOTS).map((t) => (
                      <button
                        key={t}
                        onClick={() => set("time", t)}
                        className={`px-4 py-2.5 border text-[13px] font-medium transition-colors ${
                          form.time === t
                            ? "border-[#1B2B4B] bg-[#1B2B4B] text-white"
                            : "border-[#e8e8e8] text-[#444] hover:border-[#1B2B4B]/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-[12px] text-[#888]">평일 10:00 ~ 19:00 · 주말 11:00 ~ 17:00 · 일요일 휴무, 미리 예약 시 상담가능</p>
            </div>
          </div>
        )}

        {/* Step 3: 정보 입력 */}
        {step === 3 && (
          <div>
            <h2
              className="text-[20px] font-bold text-[#1B2B4B] mb-6"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              정보를 입력해 주세요
            </h2>
            <div className="flex flex-col gap-5 max-w-[480px]">
              <div>
                <label className="block text-[13px] font-semibold text-[#333] mb-2">성함 *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="성함을 입력해 주세요"
                  className="border border-[#e8e8e8] px-4 py-3 text-[14px] text-[#333] w-full focus:outline-none focus:border-[#1B2B4B] placeholder:text-[#bbb]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#333] mb-2">연락처 *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="010-0000-0000"
                  className="border border-[#e8e8e8] px-4 py-3 text-[14px] text-[#333] w-full focus:outline-none focus:border-[#1B2B4B] placeholder:text-[#bbb]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#333] mb-2">생년월일 *</label>
                <input
                  type="text"
                  value={form.birthDate}
                  onChange={(e) => set("birthDate", e.target.value)}
                  placeholder="예: 1990-01-01"
                  className="border border-[#e8e8e8] px-4 py-3 text-[14px] text-[#333] w-full focus:outline-none focus:border-[#1B2B4B] placeholder:text-[#bbb]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#333] mb-2">성별</label>
                <div className="flex gap-4">
                  {["남성", "여성"].map((g) => (
                    <button
                      key={g}
                      onClick={() => set("gender", g)}
                      className={`px-6 py-2.5 border text-[13px] font-medium transition-colors ${
                        form.gender === g
                          ? "border-[#1B2B4B] bg-[#1B2B4B] text-white"
                          : "border-[#e8e8e8] text-[#444] hover:border-[#1B2B4B]/40"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#333] mb-2">상담 내용 (선택)</label>
                <textarea
                  value={form.note}
                  onChange={(e) => set("note", e.target.value)}
                  placeholder="상담을 원하시는 내용을 간략히 적어주시면 더 나은 상담이 가능합니다."
                  rows={4}
                  className="border border-[#e8e8e8] px-4 py-3 text-[14px] text-[#333] w-full focus:outline-none focus:border-[#1B2B4B] placeholder:text-[#bbb] resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: 예약 완료 */}
        {step === 4 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#1B2B4B] flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l5 5 11-11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2
              className="text-[24px] font-bold text-[#1B2B4B] mb-4"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              예약이 신청되었습니다
            </h2>
            <p className="text-[14px] text-[#666] leading-relaxed mb-2">
              {form.name}님의 예약 신청이 접수되었습니다.
            </p>
            <p className="text-[14px] text-[#666] leading-relaxed mb-8">
              예약 확인은 문자(SMS)로 안내드리겠습니다.
            </p>

            <div className="bg-[#F8F7F5] border border-[#e8e8e8] p-6 max-w-[400px] mx-auto mb-8 text-left">
              <div className="flex flex-col gap-3">
                {[
                  { label: "상담 종류", value: form.type },
                  { label: "상담 방식", value: consultMethods.find((m) => m.value === form.method)?.label || "" },
                  { label: "예약 일시", value: `${form.date} ${form.time}` },
                  { label: "성함", value: form.name },
                  { label: "연락처", value: form.phone },
                ].map((row) => (
                  <div key={row.label} className="flex gap-4">
                    <span className="text-[12px] text-[#888] w-[70px] flex-shrink-0">{row.label}</span>
                    <span className="text-[13px] text-[#333] font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[12px] text-[#888]">예약 확인은 문자로 안내드립니다.</p>
          </div>
        )}

        {/* Navigation buttons */}
        {step < 4 && (
          <div className="flex flex-col items-end gap-3 mt-10 pt-6 border-t border-[#e8e8e8]">
            {submitError && (
              <p className="text-[12.5px] text-red-500 w-full">{submitError}</p>
            )}
            <div className="flex justify-between w-full">
              <button
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 0 || isSubmitting}
                className="px-6 py-2.5 border border-[#e8e8e8] text-[13px] text-[#666] hover:border-[#1B2B4B]/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← 이전
              </button>
              <button
                onClick={() => {
                  if (step === 3) submitBooking();
                  else setStep((s) => s + 1);
                }}
                disabled={!canNext() || isSubmitting}
                className="px-8 py-2.5 bg-[#1B2B4B] text-white text-[13px] font-medium hover:bg-[#152240] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {step === 3 ? (isSubmitting ? "전송 중…" : "예약 완료") : "다음 단계 →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
