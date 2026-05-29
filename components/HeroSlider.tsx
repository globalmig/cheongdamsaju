"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/ceo/사주_ceo2.png",
    alt: "청담사주작명원 원장",
    position: "object-top",
  },
  {
    src: "/images/청담사주작명원 외부1.jpg",
    alt: "청담사주작명원 외관",
    position: "object-center",
  },
  {
    src: "/images/청담사주작명원 내부1.jpg",
    alt: "청담사주작명원 내부",
    position: "object-center",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover ${slide.position} transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Slider dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`슬라이드 ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-5 h-1.5 bg-[#1B2B4B]" : "w-1.5 h-1.5 bg-[#aaa] hover:bg-[#888]"
            }`}
          />
        ))}
      </div>
    </>
  );
}
