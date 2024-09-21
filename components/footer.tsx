'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterComponent() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="relative bg-emerald-500 rounded-full p-16 w-full">
            <div className="absolute top-4 left-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="30" width="20" height="20" fill="#34D399" />
                <rect x="30" y="10" width="20" height="20" fill="#34D399" />
                <rect x="30" y="30" width="20" height="20" fill="#059669" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="30" width="20" height="20" fill="#FBBF24" />
                <rect x="30" y="10" width="20" height="20" fill="#FBBF24" />
              </svg>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">REDUCE YOUR CLOUD BILL</h2>
              <p className="text-white mb-8">Install in minutes and instantly receive actionable intelligence.</p>
              <div className="flex justify-center space-x-4">
                <Button variant="secondary">Start a Trial</Button>
                <Button variant="outline" className="bg-emerald-600 text-white hover:bg-emerald-700">Book a Demo</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Stay up-to-date with PerfectScale and gain additional access to our team.
                </h3>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500 sm:max-w-xs border-gray-300 rounded-md"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <Button type="submit" className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
              <div>
                <h2 className="text-4xl font-bold">PERFECT SCALE</h2>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                  Navigation
                </h3>
                <ul className="space-y-4">
                  {['Platform', 'Pricing', 'Resources', 'Company'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 flex justify-between">
            <p className="text-base text-gray-400">&copy; 2023 PerfectScale, Inc. All rights reserved.</p>
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
    </footer>
  )
}