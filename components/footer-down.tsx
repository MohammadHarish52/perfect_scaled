import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const FooterDown = () => {
  return (
    <div>
      <div className="border-t border-gray-200 py-12 mt-[224px]  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <div className="font-sans">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Stay up-to-date with PerfectScale and gain additional access to
                our team.
              </h3>
              <form className="mt-4 sm:flex sm:max-w-md">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-3 placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500 sm:max-w-xs border-gray-300 rounded-md"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                PERFECT <br />
                SCALE
              </h2>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8 font-sans">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Navigation
              </h3>
              <ul className="space-y-4">
                {["Platform", "Pricing", "Resources", "Company"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex justify-between font-sans">
          <p className="text-base text-gray-400">
            &copy; 2023 PerfectScale, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDown;
