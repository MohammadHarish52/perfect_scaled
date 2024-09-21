"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import gsap from "gsap";

export function LandingPage() {
  const titleRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    // Rotating text animation
    gsap.to(titleRef.current, {
      rotationX: -180,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 50% -100px",
      onUpdate: function () {
        const progress = this.progress();
        if (progress < 0.5) {
          gsap.to(titleRef.current, {
            color: gsap.utils.interpolate("#000000", "#00b67d", progress * 2),
          });
        } else {
          gsap.to(titleRef.current, {
            color: gsap.utils.interpolate(
              "#00b67d",
              "#000000",
              (progress - 0.5) * 2
            ),
          });
        }
      },
    });

    // 3D cube animation
    gsap.to(cubeRef.current, {
      rotationY: 360,
      duration: 4,
      repeat: -1,
      ease: "none",
    });

    // Up and down animation
    gsap.to(cubeRef.current, {
      y: -20,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#eff8c9]">
      <div className="px-4 sm:px-8 md:px-[60px] py-8">
        <Navbar />
        <main className="py-8 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex flex-col gap-4">
                <h1
                  ref={titleRef}
                  className="text-4xl sm:text-6xl md:text-[148px] leading-tight md:leading-[144px] tracking-[4%] font-[700] text-[#000] mb-4 perspective-1000"
                >
                  PERFECTLY SCALED
                </h1>
                <p className="text-sm sm:text-base text-[#707070] mb-4">
                  Optimize Your K8s Stack:{" "}
                  <span className="font-bold text-black">Cut Costs by 50%</span>{" "}
                  <br />
                  Performance Tuning with Autonomous Performance Tuning
                </p>
              </div>
              <button className="px-7 py-3 rounded-[60px] font-bold bg-[#00b67d] text-[black] w-[146px]">
                Get Started
              </button>
            </div>

            <div
              ref={cubeRef}
              className="w-full md:w-1/2 aspect-square bg-[#00b67d] rounded-lg max-w-[300px] md:max-w-none transform-3d"
            >
              <div className="cube-face cube-face-front"></div>
              <div className="cube-face cube-face-back"></div>
              <div className="cube-face cube-face-right"></div>
              <div className="cube-face cube-face-left"></div>
              <div className="cube-face cube-face-top"></div>
              <div className="cube-face cube-face-bottom"></div>
            </div>
          </div>
        </main>
      </div>
      <footer className="py-8">
        <div className="container mx-auto flex flex-wrap justify-center gap-4 sm:gap-8">
          {[
            "opentext",
            "fiverr",
            "monday",
            "ironclad",
            "firefly",
            "paramount",
          ].map((partner) => (
            <Image
              key={partner}
              src={`/placeholder.svg`}
              alt={`${partner} logo`}
              width={100}
              height={40}
              className="w-20 sm:w-24 md:w-28"
            />
          ))}
        </div>
      </footer>
    </div>
  );
}
