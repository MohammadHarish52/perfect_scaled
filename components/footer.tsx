"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FooterDown from "./footer-down";

gsap.registerPlugin(ScrollTrigger);

export function FooterComponent() {
  const emeraldBoxRef = useRef<HTMLDivElement>(null);
  const leftCubeRef = useRef<HTMLDivElement>(null);
  const rightCubeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const emeraldBox = emeraldBoxRef.current;
    const leftCube = leftCubeRef.current;
    const rightCube = rightCubeRef.current;
    const content = contentRef.current;

    if (!emeraldBox || !leftCube || !rightCube || !content) return;

    // Common ScrollTrigger settings for smoother animations
    const commonScrollTriggerOptions = {
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
      // markers: true, // Uncomment for debugging
    };

    // Animate Emerald Box Scaling
    gsap.fromTo(
      emeraldBox,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: emeraldBox,
          ...commonScrollTriggerOptions,
        },
      }
    );

    // Animate Left Cube Sliding In
    gsap.fromTo(
      leftCube,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftCube,
          ...commonScrollTriggerOptions,
        },
      }
    );

    // Animate Right Cube Sliding In
    gsap.fromTo(
      rightCube,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightCube,
          ...commonScrollTriggerOptions,
        },
      }
    );

    // Animate Content Fade-In and Slide-Up
    gsap.fromTo(
      content,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          ...commonScrollTriggerOptions,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer className="bg-white">
      <div className="w-full px-4 sm:px-8 md:px-[60px] py-8 md:py-[32px]">
        <div className="py-12">
          <div
            ref={emeraldBoxRef}
            className="relative bg-emerald-500 rounded-full p-8 sm:p-16 w-full overflow-hidden aspect-[8/9] sm:aspect-[3/1] flex flex-col justify-center items-center"
          >
            <div ref={leftCubeRef} className="absolute top-8 left-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="10" y="30" width="20" height="20" fill="#34D399" />
                <rect x="30" y="10" width="20" height="20" fill="#34D399" />
                <rect x="30" y="30" width="20" height="20" fill="#059669" />
              </svg>
            </div>
            <div ref={rightCubeRef} className="absolute bottom-4 right-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="10" y="30" width="20" height="20" fill="#FBBF24" />
                <rect x="30" y="10" width="20" height="20" fill="#FBBF24" />
              </svg>
            </div>
            <div ref={contentRef} className="text-center z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] leading-tight font-bold text-center mb-6 sm:mb-8 text-white">
                REDUCE YOUR <br /> CLOUD BILL
              </h2>
              <p className="text-white mb-8 sm:mb-10 md:mb-12 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Install in minutes and instantly receive actionable
                intelligence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 font-sans">
                <button className="font-sans w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg rounded-full font-bold text-black bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start a Trial
                </button>
                <button className="font-sans w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg rounded-full font-bold bg-[#00b67d] text-black border-2 border-black hover:bg-[#00a072] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
          <FooterDown />
        </div>
      </div>
    </footer>
  );
}
