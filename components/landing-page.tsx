"use client";

import Marquee from "@/components/ui/Marque";
import CocaCola from "@/icons/coca.png";
import Fiverr from "@/icons/fiver.jpg";
import Monday from "@/icons/monday.jpg";
import Nike from "@/icons/nike.png";
import Opentext from "@/icons/opentext.png";
import Paramount from "@/icons/paramount.png";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

const partners = [
  { name: "opentext", logo: Opentext },
  { name: "fiverr", logo: Fiverr },
  { name: "monday", logo: Monday },
  { name: "Nike", logo: Nike },
  { name: "Coca Cola", logo: CocaCola },
  { name: "paramount", logo: Paramount },
];

const firstRow = partners.slice(0, partners.length / 2);
const secondRow = partners.slice(partners.length / 2);

export function LandingPage() {
  const titleRef = useRef(null);
  const cubeRef = useRef(null);
  const cubeWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Cube animation
    gsap.to(cubeRef.current, {
      rotationY: 360,
      rotationX: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    // Cube horizontal movement
    if (cubeWrapperRef.current) {
      gsap.to(cubeWrapperRef.current, {
        x: 170,
        y: -100,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, [cubeWrapperRef]);

  return (
    <div className="min-h-screen bg-[#eff8c9] overflow-x-hidden w-full">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 overflow-x-hidden max-w-[1920px] mx-auto">
        <Navbar />
        <main className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
            <div className="flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex flex-col gap-6">
                <h1
                  ref={titleRef}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[148px] leading-[1.1] sm:leading-[1.1] md:leading-[1.05] font-bold text-[#000] mb-4 sm:mb-6"
                >
                  PERFECTLY SCALED
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#707070] mb-6 sm:mb-8 font-sans leading-relaxed max-w-xl">
                  Optimize Your K8s Stack:{" "}
                  <span className="font-bold text-black">Cut Costs by 50%</span>
                  <br className="hidden sm:block" />
                  <span className="hidden sm:inline"> </span>Performance Tuning
                  with Autonomous Performance Tuning
                </p>
              </div>
              <button className="font-sans px-8 py-3 sm:py-3.5 rounded-full font-bold bg-[#00b67d] text-black hover:bg-[#00a072] transition-colors duration-300 w-fit min-w-[160px] text-base sm:text-lg shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-visible">
              <div
                ref={cubeWrapperRef}
                className="cube-wrapper"
                style={{ perspective: "1000px" }}
              >
                <div ref={cubeRef} className="cube relative">
                  <div className="cube__face cube__face--front"></div>
                  <div className="cube__face cube__face--back"></div>
                  <div className="cube__face cube__face--right"></div>
                  <div className="cube__face cube__face--left"></div>
                  <div className="cube__face cube__face--top"></div>
                  <div className="cube__face cube__face--bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="py-12 sm:py-16 overflow-x-hidden w-full bg-[#eff8c9] relative">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-gray-700">
          Trusted by Leading Companies
        </h2>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={48}
                className="w-auto h-10 sm:h-12 object-contain mix-blend-multiply opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] mt-6 sm:mt-8">
          {secondRow.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={48}
                className="w-auto h-10 sm:h-12 object-contain mix-blend-multiply opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-[#eff8c9]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-[#eff8c9]"></div>
      </footer>
    </div>
  );
}
