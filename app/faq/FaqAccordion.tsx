"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };
type FaqCategory = { category: string; items: FaqItem[] };

export default function FaqAccordion({ data }: { data: FaqCategory[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) =>
    setOpenIndex((prev) => (prev === key ? null : key));

  return (
    <div className="flex flex-col gap-8">
      {data.map((cat) => (
        <div key={cat.category}>
          <h2
            className="text-[16px] font-bold text-[#1B2B4B] mb-4 pb-3 border-b-2 border-[#1B2B4B]"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {cat.category}
          </h2>
          <div className="flex flex-col divide-y divide-[#e8e8e8] bg-white border border-[#e8e8e8]">
            {cat.items.map((item, i) => {
              const key = `${cat.category}-${i}`;
              const isOpen = openIndex === key;
              return (
                <div key={key}>
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F8F7F5] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[#C9A84C] font-bold text-[14px] flex-shrink-0 mt-0.5">Q</span>
                      <span className="text-[14px] font-semibold text-[#1B2B4B]">{item.q}</span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`flex-shrink-0 ml-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M3 6l5 5 5-5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 bg-[#F8F7F5]">
                      <div className="flex items-start gap-3">
                        <span className="text-[#1B2B4B] font-bold text-[14px] flex-shrink-0 mt-0.5">A</span>
                        <p className="text-[13.5px] text-[#555] leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
