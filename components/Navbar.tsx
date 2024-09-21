import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#000] text-[18px] sm:text-[20px] tracking-[4%] leading-[22px] font-bold">
            PERFECTSCALE
          </span>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`w-full md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } md:block mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 lg:space-x-8">
            <Link href="#" className="text-[#000] py-2 md:py-0">
              Platform
            </Link>
            <Link href="#" className="text-[#000] py-2 md:py-0">
              Pricing
            </Link>
            <Link href="#" className="text-[#000] py-2 md:py-0">
              Resources
            </Link>
            <Link href="#" className="text-[#000] py-2 md:py-0">
              Company
            </Link>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className={`w-full md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } md:block mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-2`}
        >
          <button className="w-full md:w-auto px-7 py-3 rounded-[60px] font-bold text-[#000] border border-[#000]">
            Log in
          </button>
          <button className="w-full md:w-auto px-7 py-3 rounded-[60px] font-bold bg-[#00b67d] text-[black]">
            Book a Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
