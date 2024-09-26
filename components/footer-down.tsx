import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const FooterDown = () => {
  return (
    <div className="border-t border-gray-200 py-12 mt-[224px]">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left side: Email form and logo */}
        <div className="flex flex-col space-y-8">
          {/* Email Form */}
          <div className="flex flex-col gap-29px">
            <h3 className="text-base font-semibold text-black font-sans text-thin">
              Stay up-to-date with PerfectScale and <br />
              gain additional access to our team.
            </h3>
            <div>
              <form className="flex mt-4 font-sans">
                <Input
                  type="email"
                  placeholder="Email"
                  className="rounded-full px-5 py-2 border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <Button
                  type="submit"
                  className="ml-2 px-5 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Logo */}
          <div>
            <h2 className="text-5xl font-bold leading-none text-[100px]">
              PERFECT <br />
              SCALE
            </h2>
          </div>
        </div>

        {/* Right side: Navigation */}
        <div className="flex flex-col items-end space-y-4 mt-8 md:mt-0 font-sans font-bold">
          <ul className="space-y-2 text-left">
            {["Platform", "Pricing", "Resources", "Company"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-lg text-black hover:text-gray-900 text-[40px]"
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
