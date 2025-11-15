"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export function AvailableForComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // Select all elements with the 'provider-card' class within the container
    const cards = container.querySelectorAll<HTMLElement>(".provider-card");

    // Iterate over each card and create a ScrollTrigger instance
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
        }
      );
    });

    // Cleanup function to kill ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const providers = [
    {
      name: "Microsoft Azure",
      logoUrl: "https://cdn-icons-png.flaticon.com/512/873/873209.png",
    },
    {
      name: "Rancher",
      logoUrl:
        "https://www.rancher.cn/img/brand-guidelines/assets/logos/png/black/rancher-logo-stacked-black.png",
    },
    {
      name: "Google Cloud",
      logoUrl:
        "https://www.naswa.org/sites/default/files/styles/affiliate_logo/public/2022-02/Google-CLoud-EG.png?itok=eQpT6RaK",
    },
    {
      name: "Red Hat",
      logoUrl:
        "https://www.netscout.com/sites/default/files/2022-03/02/images/Red-Hat_grey-1500x400.png",
    },
    {
      name: "Neon",
      logoUrl:
        "https://logos-world.net/wp-content/uploads/2023/07/Aveda-Logo.png",
    },
    {
      name: "AWS",
      logoUrl:
        "https://static-00.iconduck.com/assets.00/amazon-aws-icon-2048x1224-ug1v1ts2.png",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] font-bold text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          AVAILABLE FOR
        </h2>
        <div
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="provider-card bg-white border-2 border-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex items-center justify-center aspect-[3/2] hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-emerald-500"
            >
              <img
                src={provider.logoUrl}
                alt={`${provider.name} logo`}
                className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto max-h-[44px] sm:max-h-[48px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
