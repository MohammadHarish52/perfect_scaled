"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CheckIcon,
  CogIcon,
  ChartBarIcon,
  LucideIcon,
  DollarSignIcon,
  TrashIcon,
  PiggyBank,
} from "lucide-react";
import StatCard from "./StatCard";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  highlighted = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}) => (
  <div className="flex flex-col  items-center text-center">
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
        highlighted ? "bg-emerald-100" : "bg-gray-100"
      }`}
    >
      <Icon
        className={`w-8 h-8 ${
          highlighted ? "text-emerald-500" : "text-gray-500"
        }`}
      />
    </div>
    <h3 className="text-lg font-semibold mb-2 font-sans">{title}</h3>
    <p className="text-sm text-gray-600 font-sans">{description}</p>
  </div>
);

export function FeaturesPageComponent() {
  const containerRef = useRef(null);
  const emeraldBgRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureCardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });

    // Animate emerald background
    if (emeraldBgRef.current) {
      tl.fromTo(
        emeraldBgRef.current,
        {
          width: "60%",
          height: "200px",
          borderRadius: "24px",
          opacity: 0.5,
        },
        {
          width: "100%",
          height: "488px",
          borderRadius: "24px",
          opacity: 1,
          duration: 1,
        }
      );
    }

    // Animate cards
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animate feature cards
    if (featureCardsRef.current) {
      gsap.fromTo(
        Array.from(featureCardsRef.current.children),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: featureCardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="bg-white min-h-screen p-4 sm:p-8 my-8 sm:my-[224px]"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl leading-[95px] tracking-[4%] sm:text-5xl md:text-[100px] font-bold text-center mb-4">
          FEATURES
        </h1>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 font-sans text-sm sm:text-base">
          Optimize your cloud operations with Kubernetes: effortless scaling,{" "}
          <br />
          robust deployment options, and automatic self-repair capabilities.
        </p>

        <div className="flex justify-center">
          <div
            className="bg-emerald-500 rounded-3xl p-16 mb-8 sm:mb-12 overflow-hidden"
            ref={emeraldBgRef}
          >
            <div className="bg-gray-900 rounded-2xl p-4 flex h-full">
              <div className="w-12 bg-black rounded-xl mr-4 flex flex-col items-center justify-between py-4">
                {/* Sidebar icons would go here */}
                <div className="w-6 h-6 bg-gray-700 rounded-full mb-2"></div>
                <div className="w-6 h-6 bg-gray-700 rounded-full mb-2"></div>
                <div className="w-6 h-6 bg-gray-700 rounded-full mb-2"></div>
                <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 p-4">
                <div
                  className="flex justify-center items-center"
                  ref={(el: HTMLDivElement | null) => {
                    cardRefs.current[0] = el;
                  }}
                >
                  <StatCard
                    icon={DollarSignIcon}
                    title="Cost"
                    value="$188,224"
                    change="5.6%"
                    changeType="negative"
                  />
                </div>
                <div
                  className="flex justify-center items-center"
                  ref={(el: HTMLDivElement | null) => {
                    cardRefs.current[1] = el;
                  }}
                >
                  <StatCard
                    icon={TrashIcon}
                    title="Waste"
                    value="$42,844"
                    change="3%"
                    changeType="negative"
                  />
                </div>
                <div
                  className="flex justify-center items-center"
                  ref={(el) => {
                    cardRefs.current[2] = el;
                  }}
                >
                  <StatCard
                    icon={PiggyBank}
                    title="Savings"
                    value="$26,283"
                    change="$30.1B"
                    changeType="positive"
                  />
                </div>
                <div
                  className="flex justify-center items-center"
                  ref={(el: HTMLDivElement | null) => {
                    if (el) cardRefs.current[3] = el;
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="w-full ">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              ref={featureCardsRef}
            >
              <FeatureCard
                icon={CheckIcon}
                title="Smart Kubernetes"
                description="PerfectScale: Enhance stability, minimize waste, and gain system-wide insights."
                highlighted={true}
              />
              <FeatureCard
                icon={CogIcon}
                title="Kubernetes Efficiency"
                description="PerfectScale: Automated optimization for lower costs and stable, resilient systems."
              />
              <FeatureCard
                icon={ChartBarIcon}
                title="99.99% K8s availability"
                description="Prevent breaches and safeguard performance with proactive configuration management."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
