"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-[100px] font-bold text-center mb-[88px]">
          AVAILABLE FOR
        </h2>
        <div
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
        >
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="provider-card bg-white border border-black rounded-[20px] p-4 flex items-center justify-center aspect-[3/2]"
            >
              <img
                src={provider.logoUrl}
                alt={`${provider.name} logo`}
                className="w-[160px] h-[44px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
