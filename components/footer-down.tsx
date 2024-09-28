import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const FooterDown = () => {
  return (
    <div className="border-t border-gray-200 py-12 mt-[224px]">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left side: Email form and logo */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* Email Form */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-black font-sans">
              Stay up-to-date with PerfectScale and{" "}
              <br className="hidden md:block" />
              gain additional access to our team.
            </h3>
            <div>
              <form className="flex flex-col sm:flex-row mt-4 font-sans">
                <Input
                  type="email"
                  placeholder="Email"
                  className="rounded-full px-5 py-2 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 mb-2 sm:mb-0 sm:mr-2"
                />
                <Button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Logo */}
          <div>
            <h2 className="text-5xl font-bold leading-none text-[40px] md:text-[100px]">
              PERFECT <br />
              SCALE
            </h2>
          </div>
        </div>

        {/* Right side: Navigation */}
        <div className="flex flex-col items-start md:items-end space-y-4 mt-8 md:mt-0 font-sans font-bold md:w-1/2">
          <ul className="space-y-2 text-left">
            {["Platform", "Pricing", "Resources", "Company"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-lg text-black hover:text-gray-900 text-[20px] md:text-[40px]"
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
