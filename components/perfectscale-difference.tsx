'use client'

export function PerfectscaleDifference() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#00b67d"/>
          <path d="M19 15C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13C18.4477 13 18 13.4477 18 14C18 14.5523 18.4477 15 19 15Z" fill="#00b67d"/>
          <path d="M19 11C19.5523 11 20 10.5523 20 10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10C18 10.5523 18.4477 11 19 11Z" fill="#00b67d"/>
        </svg>
      ),
      title: "App Resilience Optimized",
      highlighted: false,
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#00b67d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#00b67d" strokeWidth="2"/>
        </svg>
      ),
      title: "Eliminate costly cloud waste",
      highlighted: true,
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" fill="#00b67d"/>
          <rect x="14" y="3" width="7" height="7" fill="#00b67d"/>
          <rect x="14" y="14" width="7" height="7" fill="#00b67d"/>
        </svg>
      ),
      title: "Reduce repetitive Ops work",
      highlighted: false,
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 10H20M4 14H20M4 18H20" stroke="#00b67d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="6" r="2" fill="#00b67d"/>
          <circle cx="15" cy="10" r="2" fill="#00b67d"/>
          <circle cx="9" cy="14" r="2" fill="#00b67d"/>
          <circle cx="15" cy="18" r="2" fill="#00b67d"/>
        </svg>
      ),
      title: "Optimization via smart automation",
      highlighted: false,
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#00b67d" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="#00b67d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Performance & cost analysis for K8s",
      highlighted: false,
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#00b67d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Reduce app carbon footprint efficiently",
      highlighted: false,
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          PERFECTSCALE<br />DIFFERENCE
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${
                feature.highlighted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-[#f5ed6e] text-gray-900'
              } rounded-lg p-8 flex flex-col items-center text-center`}
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <h3 className="mt-6 text-lg font-medium">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}