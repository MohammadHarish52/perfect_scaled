"use client";

import { ArrowDownIcon, CheckIcon, CogIcon, ChartBarIcon } from "lucide-react";

export function FeaturesPageComponent() {
  return (
    <div className="bg-white min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
          FEATURES
        </h1>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">
          Optimize your cloud operations with Kubernetes: effortless scaling,
          robust deployment options, and automatic self-repair capabilities.
        </p>

        <div className="bg-emerald-500 rounded-3xl p-4 sm:p-6 mb-8 sm:mb-12">
          <div className="bg-gray-900 rounded-2xl p-4 flex flex-col sm:flex-row">
            <div className="w-full sm:w-12 h-12 sm:h-auto bg-black rounded-xl sm:rounded-l-xl sm:rounded-r-none mb-4 sm:mb-0 sm:mr-4">
              {/* Sidebar icons would go here */}
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-emerald-500 flex items-center">
                    <CogIcon className="w-5 h-5 mr-1" />
                    Cost
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <ArrowDownIcon className="w-3 h-3 mr-1" />
                    5.6%
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold">$188,224</div>
                <div className="text-sm text-gray-500">Cost Change</div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-emerald-500 flex items-center">
                    <CogIcon className="w-5 h-5 mr-1" />
                    Waste
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <ArrowDownIcon className="w-3 h-3 mr-1" />
                    3%
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold">$42,844</div>
                <div className="text-sm text-gray-500">Waste Change</div>
              </div>
              <div className="bg-white rounded-xl p-4 col-span-1 sm:col-span-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-emerald-500 flex items-center">
                    <CogIcon className="w-5 h-5 mr-1" />
                    Savings
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    $30.1B
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold">$26,283</div>
                <div className="text-sm text-gray-500">All time Savings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Smart Kubernetes
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              PerfectScale: Enhance stability, minimize waste, and gain
              system-wide insights.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CogIcon className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Kubernetes Efficiency
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              PerfectScale: Automated optimization for lower costs and stable,
              resilient systems.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              99.99% K8s availability
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Prevent breaches and safeguard performance with proactive
              configuration management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
