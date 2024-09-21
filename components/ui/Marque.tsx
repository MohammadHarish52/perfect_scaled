import React, { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  reverse,
  pauseOnHover,
  className,
}) => {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ "--duration": "20s" } as React.CSSProperties}
    >
      <div
        className={`flex animate-marquee ${reverse ? "flex-row-reverse" : ""} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
        {children} {/* Duplicate children for seamless loop */}
      </div>
    </div>
  );
};

export default Marquee;
