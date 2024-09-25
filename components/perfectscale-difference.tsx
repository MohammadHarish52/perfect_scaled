"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PerfectscaleDifference() {
  const containerRef = useRef(null);

  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            fill="currentColor"
          />
          <path
            d="M19 15C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13C18.4477 13 18 13.4477 18 14C18 14.5523 18.4477 15 19 15Z"
            fill="currentColor"
          />
          <path
            d="M19 11C19.5523 11 20 10.5523 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 10.5523 18.4477 11 19 11Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "App Resilience Optimized",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V18M12 6L7 11M12 6L17 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Eliminate costly cloud waste",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="30" width="20" height="20" fill="currentColor" />
          <rect x="30" y="10" width="20" height="20" fill="currentColor" />
          <rect x="30" y="30" width="20" height="20" fill="currentColor" />
        </svg>
      ),
      title: "Reduce repetitive Ops work",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 10H20M4 14H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="6" r="2" fill="currentColor" />
          <circle cx="15" cy="10" r="2" fill="currentColor" />
          <circle cx="9" cy="14" r="2" fill="currentColor" />
          <circle cx="15" cy="18" r="2" fill="currentColor" />
        </svg>
      ),
      title: "Optimization via smart automation",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Performance & cost analysis for K8s",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Reduce app carbon footprint efficiently",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
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
      <div className="max-w-7xl flex flex-col items-center justify-center">
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
              className="feature-card bg-[#eff8c9] hover:bg-emerald-500 text-[#00b67d] hover:text-[#fff] p-8 flex flex-col items-center justify-center text-center h-[307px] rounded-[20px] transition-colors duration-300"
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
