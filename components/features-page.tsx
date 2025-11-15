"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChartBarIcon,
  CheckIcon,
  CogIcon,
  DollarSignIcon,
  LucideIcon,
  PiggyBank,
  TrashIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div
      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
        highlighted ? "bg-emerald-100" : "bg-gray-100"
      }`}
    >
      <Icon
        className={`w-7 h-7 sm:w-8 sm:h-8 ${
          highlighted ? "text-emerald-500" : "text-gray-500"
        }`}
      />
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-3 font-sans leading-tight">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
      {description}
    </p>
  </div>
);

export function FeaturesPageComponent() {
  const containerRef = useRef(null);
  const emeraldBgRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureCardsRef = useRef<HTMLDivElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    // Animate emerald background with better easing
    if (emeraldBgRef.current) {
      tl.fromTo(
        emeraldBgRef.current,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }

    // Animate cards with stagger and better performance
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animate feature cards with better stagger
    if (featureCardsRef.current) {
      gsap.fromTo(
        Array.from(featureCardsRef.current.children),
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featureCardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className="bg-white min-h-screen my-12 sm:my-24 md:my-32 lg:my-40 overflow-x-hidden w-full px-4 sm:px-6 md:px-8"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-bold text-center mb-4 sm:mb-6 leading-tight">
          FEATURES
        </h1>
        <p className="text-center text-gray-600 mb-12 sm:mb-16 md:mb-20 font-sans text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Optimize your cloud operations with Kubernetes: effortless scaling,
          robust deployment options, and automatic self-repair capabilities.
        </p>

        <div className="flex justify-center w-full mb-16 sm:mb-20 md:mb-24">
          <div
            className="bg-emerald-500 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 w-full max-w-6xl"
            ref={emeraldBgRef}
          >
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row h-full overflow-hidden">
              <div className="hidden sm:flex w-10 md:w-12 bg-black rounded-xl mr-3 md:mr-4 flex-col items-center justify-between py-4">
                {/* Sidebar icons would go here */}
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-700 rounded-full mb-2"></div>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-700 rounded-full mb-2"></div>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-700 rounded-full mb-2"></div>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-700 rounded-full"></div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 p-2 sm:p-4">
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

        <div className="mt-12 sm:mt-16 md:mt-20 w-full">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
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
  );
}
