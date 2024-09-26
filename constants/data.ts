import React from "react";
import AppResilienceIcon from "@/components/icons/AppResilienceIcon";
import EliminateCloudWasteIcon from "@/components/icons/EliminateCloudWasteIcon";
// ...import other icon components as needed

export interface Feature {
  icon: React.ReactElement;
  title: string;
}

export const features: Feature[] = [
  {
    icon: <AppResilienceIcon />,
    title: "App Resilience Optimized",
  },
  {
    icon: <EliminateCloudWasteIcon />,
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
