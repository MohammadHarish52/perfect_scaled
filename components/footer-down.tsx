import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const FooterDown = () => {
  return (
    <div className="border-t border-gray-200 py-12 sm:py-16 md:py-20 mt-32 sm:mt-40 md:mt-48 lg:mt-56">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
        {/* Left side: Email form and logo */}
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:w-1/2">
          {/* Email Form */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black font-sans leading-relaxed">
              Stay up-to-date with PerfectScale and
              <br className="hidden sm:block" />
              gain additional access to our team.
            </h3>
            <div>
              <form className="flex flex-col sm:flex-row mt-2 sm:mt-4 font-sans gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full px-5 sm:px-6 py-3 border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-base flex-1"
                />
                <Button
                  type="submit"
                  className="px-6 sm:px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 font-bold transition-colors duration-300 shadow-md hover:shadow-lg text-base"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Logo */}
          <div className="mt-4 sm:mt-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-bold leading-[1.1]">
              PERFECT <br />
              SCALE
            </h2>
          </div>
        </div>

        {/* Right side: Navigation */}
        <div className="flex flex-col items-start lg:items-end space-y-3 sm:space-y-4 mt-8 lg:mt-0 font-sans font-bold lg:w-1/2">
          <ul className="space-y-3 sm:space-y-4 text-left lg:text-right">
            {["Platform", "Pricing", "Resources", "Company"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] text-black hover:text-[#00b67d] inline-block hover:scale-105 transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterDown;
