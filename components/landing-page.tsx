"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Marquee from "@/components/ui/Marque";
import Opentext from "@/icons/opentext.png";
import Fiverr from "@/icons/fiver.jpg";
import Monday from "@/icons/monday.jpg";
import Nike from "@/icons/nike.png";
import CocaCola from "@/icons/coca.png";
import Paramount from "@/icons/paramount.png";
import gsap from "gsap";

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

  useEffect(() => {
    // Cube animation
    gsap.to(cubeRef.current, {
      rotationY: 360,
      rotationX: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });

    // Cube up and down animation
    gsap.to(cubeRef.current, {
      y: -20,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // ... (other animations)
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
                <p className="text-sm sm:text-base text-[#707070] mb-4 font-sans">
                  Optimize Your K8s Stack:{" "}
                  <span className="font-bold text-black">Cut Costs by 50%</span>{" "}
                  <br />
                  Performance Tuning with Autonomous Performance Tuning
                </p>
              </div>
              <button className=" font-sans px-7 py-3 rounded-[60px] font-bold bg-[#00b67d] text-[black] w-[146px]">
                Get Started
              </button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center h-[300px]">
              <div ref={cubeRef} className="cube w-[100px] h-[100px] relative">
                <div className="cube__face cube__face--front"></div>
                <div className="cube__face cube__face--back"></div>
                <div className="cube__face cube__face--right"></div>
                <div className="cube__face cube__face--left"></div>
                <div className="cube__face cube__face--top"></div>
                <div className="cube__face cube__face--bottom"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="py-8 overflow-hidden bg-[#eff8c9] relative">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 mx-4 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={100}
                height={40}
                className="w-auto h-8 object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
          {secondRow.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 mx-4 flex items-center justify-center gap-10"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={100}
                height={40}
                className="w-auto h-8 object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#eff8c9]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#eff8c9]"></div>
      </footer>
    </div>
  );
}
