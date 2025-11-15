import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full mb-4 sm:mb-6">
      <nav className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center">
          <span className="text-[#000] text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
            PERFECTSCALE
          </span>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`w-full lg:w-auto font-sans ${
            isMenuOpen ? "block" : "hidden"
          } lg:block mt-4 lg:mt-0`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center font-sans lg:space-x-6 xl:space-x-8 border border-black py-2 px-4 sm:py-3 sm:px-6 md:px-7 rounded-full bg-white/50 backdrop-blur-sm">
            <Link
              href="#"
              className="text-[#000] py-2 lg:py-0 hover:text-[#00b67d] transition-colors duration-200 text-sm sm:text-base font-medium"
            >
              Platform
            </Link>
            <Link
              href="#"
              className="text-[#000] py-2 lg:py-0 hover:text-[#00b67d] transition-colors duration-200 text-sm sm:text-base font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-[#000] py-2 lg:py-0 hover:text-[#00b67d] transition-colors duration-200 text-sm sm:text-base font-medium"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-[#000] py-2 lg:py-0 hover:text-[#00b67d] transition-colors duration-200 text-sm sm:text-base font-medium"
            >
              Company
            </Link>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className={`w-full lg:w-auto ${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col sm:flex-row mt-4 lg:mt-0 gap-2 sm:gap-3`}
        >
          <button className="font-sans w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-[#000] border-2 border-[#000] hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base">
            Log in
          </button>
          <button className="font-sans w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold bg-[#00b67d] text-[black] hover:bg-[#00a072] transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
            Book a Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
