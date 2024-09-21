"use client";

import {
  ArrowDownIcon,
  CheckIcon,
  CogIcon,
  ChartBarIcon,
  LucideIcon,
} from "lucide-react";

const StatCard = ({
  icon: Icon,
  title,
  value,
  change,
  changeType,
  extraClass = "",
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  extraClass?: string;
}) => (
  <div className={`bg-white rounded-xl p-4 ${extraClass}`}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-emerald-500 flex items-center">
        <Icon className="w-5 h-5 mr-1" />
        {title}
      </span>
      <span
        className={`${
          changeType === "positive"
            ? "bg-emerald-100 text-emerald-800"
            : "bg-gray-200 text-gray-800"
        } text-xs px-2 py-1 rounded-full flex items-center`}
      >
        {changeType === "negative" && (
          <ArrowDownIcon className="w-3 h-3 mr-1" />
        )}
        {change}
      </span>
    </div>
    <div className="text-2xl sm:text-3xl font-bold">{value}</div>
    <div className="text-sm text-gray-500">
      {title === "Savings" ? "All time Savings" : `${title} Change`}
    </div>
  </div>
);

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
  <div className="text-center">
    <div
      className={`${
        highlighted ? "bg-emerald-100" : "bg-gray-100"
      } w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
    >
      <Icon
        className={`w-8 h-8 ${
          highlighted ? "text-emerald-500" : "text-gray-500"
        }`}
      />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600">{description}</p>
  </div>
);

export function FeaturesPageComponent() {
  return (
    <div className="bg-white min-h-screen p-4 sm:p-8 my-8 sm:my-[224px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl leading-[95px] tracking-[4%] sm:text-5xl md:text-[100px] font-bold text-center mb-4">
          FEATURES
        </h1>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 font-sans text-sm sm:text-base">
          Optimize your cloud operations with Kubernetes: effortless scaling,{" "}
          <br />
          robust deployment options, and automatic self-repair capabilities.
        </p>

        <div className="bg-emerald-500 rounded-3xl p-4 sm:p-6 mb-8 sm:mb-12 h-[488px]">
          <div className="bg-gray-900 rounded-2xl p-4 flex flex-col sm:flex-row">
            <div className="w-full sm:w-12 h-12 sm:h-auto bg-black rounded-xl sm:rounded-l-xl sm:rounded-r-none mb-4 sm:mb-0 sm:mr-4">
              {/* Sidebar icons would go here */}
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard
                icon={CogIcon}
                title="Cost"
                value="$188,224"
                change="5.6%"
                changeType="negative"
              />
              <StatCard
                icon={CogIcon}
                title="Waste"
                value="$42,844"
                change="3%"
                changeType="negative"
              />
              <StatCard
                icon={CogIcon}
                title="Savings"
                value="$26,283"
                change="$30.1B"
                changeType="positive"
                extraClass="col-span-1 sm:col-span-2"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
  );
}
