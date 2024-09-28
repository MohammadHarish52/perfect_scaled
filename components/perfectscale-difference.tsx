"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "@/constants/data";

gsap.registerPlugin(ScrollTrigger);

export function PerfectscaleDifference() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll(".feature-card"));

    gsap.fromTo(
      cards.slice(0, 3),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      cards.slice(3),
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 my-16 sm:my-24 lg:my-32 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[100px] font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          PERFECTSCALE
          <br />
          DIFFERENCE
        </h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-[#eff8c9] hover:bg-emerald-500 text-[#00b67d] hover:text-[#fff] p-6 sm:p-8 flex flex-col items-center justify-center text-center h-[250px] sm:h-[307px] rounded-[20px] transition-colors duration-300"
            >
              <div className="flex-shrink-0 text-[24px] sm:text-[28px]">
                {feature.icon}
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg font-sans text-black hover:text-white text-[24px] sm:text-[28px] font-bold transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
