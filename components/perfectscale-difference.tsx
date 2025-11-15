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
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 my-16 sm:my-24 lg:my-32 xl:my-40 flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] font-bold text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 leading-tight">
          PERFECTSCALE
          <br />
          DIFFERENCE
        </h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-[#eff8c9] hover:bg-emerald-500 text-[#00b67d] p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[250px] sm:min-h-[280px] md:min-h-[307px] rounded-2xl sm:rounded-3xl transition-all duration-300 group hover:shadow-xl hover:scale-105"
            >
              <div className="flex-shrink-0 text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-sans text-black group-hover:text-white font-bold transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
