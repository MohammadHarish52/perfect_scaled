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
    <div className="bg-white  px-[60px] py-[32px] my-[224px] flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl leading-[95px] tracking-[4%] sm:text-5xl md:text-[100px] font-bold text-center mb-16">
          PERFECTSCALE
          <br />
          DIFFERENCE
        </h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-[#eff8c9] hover:bg-emerald-500 text-[#00b67d] hover:text-[#fff] p-8 flex flex-col items-center justify-center text-center h-[307px] sm:w-[427px] rounded-[20px] transition-colors duration-300"
            >
              <div className="flex-shrink-0 text-[28px]">{feature.icon}</div>
              <h3 className="mt-6 text-lg  font-sans text-black hover:text-white text-[28px] font-bold transition-colors duration-300">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
