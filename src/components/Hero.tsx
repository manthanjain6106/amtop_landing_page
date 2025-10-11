'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <section className="relative pt-20 pb-12 xs:pt-24 xs:pb-16 sm:pt-28 sm:pb-20 md:pt-28 md:pb-20 lg:pt-28 lg:pb-28 xl:pt-32 xl:pb-32 overflow-hidden">
        <div className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-16 mx-0">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 gap-x-4 xs:gap-x-5 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-6 xs:gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-14 xl:gap-y-16 items-center">
             {/* Left content area - 6 columns on large screens */}
             <div className="w-full md:max-w-3xl md:mx-auto lg:max-w-4xl lg:mx-auto xl:col-span-6 xl:pr-6">
              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-6 sm:mb-8 md:mb-10">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-700">AI-Powered Marketing Platform</span>
              </div>
              
              {/* Main headline with exactly 2 lines */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <p className="text-gray-900 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold m-0 p-0 leading-tight">
                  Transform Your
                </p>
                <p className="text-blue-600 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold m-0 p-0 leading-tight mt-1 xs:mt-2 sm:mt-3 whitespace-nowrap">
                  Marketing Strategy
                </p>
              </div>
              
              {/* Description with highlighted text */}
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-2xl">
                Stop wasting hours on manual reporting. Get all your marketing insights in one intelligent dashboard and <span className="font-semibold text-gray-900">save 20+ hours every week</span>.
              </p>
              
              
              
              {/* CTA buttons with distinctive styling */}
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <a
              href="https://app.amtop.in/"
              target="_blank"
              rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-lg flex items-center justify-center gap-2 group transition-all shadow-lg shadow-red-100 text-base xs:text-lg md:text-xl w-full xs:w-auto"
                >
                  <span>Start Free</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
              href="https://cal.com/amtop-amarnath/30min"
              target="_blank"
              rel="noopener noreferrer"
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-lg flex items-center justify-center text-base xs:text-lg md:text-xl w-full xs:w-auto"
                >
                  <span>Schedule Demo</span>
                </a>
              </div>
              
              
            </div>
            
            {/* Right content area - 6 columns on large screens */}
             <div className="w-full md:max-w-3xl md:mx-auto lg:max-w-4xl lg:mx-auto xl:col-span-6 relative">
              {/* Distinctive frame for the dashboard */}
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-24 h-24 sm:w-40 sm:h-40 bg-blue-50 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -bottom-5 -left-5 sm:-bottom-10 sm:-left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-50 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute top-1/3 right-1/3 w-10 h-10 sm:w-16 sm:h-16 bg-yellow-50 rounded-full opacity-40 blur-lg"></div>
                
                {/* Dashboard frame with distinctive design */}
          <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, rotate: 0, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200 rotate-1 transform transition-all duration-500 mt-8 xs:mt-10 sm:mt-12 md:mt-8 lg:mt-12 xl:mt-16" 
                  style={{ transform: "scale(1)", maxWidth: "100%", overflow: "hidden" }}>
                  {/* Browser-like top bar with distinctive design */}
                  <div className="bg-gradient-to-r from-gray-100 to-white px-4 py-3 flex items-center border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto bg-white rounded-full px-4 py-1 text-xs text-gray-500 border border-gray-200 shadow-sm">
                      app.amtop.in
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="relative">
                <Image 
                  src="/GIF/Analytics.gif" 
                      alt="app.amtop.in" 
                      width={2400}
                      height={1600}
                       className="w-full h-auto object-contain"
                  priority
                       style={{ maxHeight: '550px', width: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    console.error('GIF failed to load:', e);
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                          parent.innerHTML = '<div class="w-full h-96 bg-white flex items-center justify-center"><div class="text-center"><div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div><p class="text-gray-600 font-medium">app.amtop.in Preview</p></div></div>';
                    }
                  }}
                />
              </div>
            </motion.div>
                
                {/* Floating feature cards */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -right-2 xs:-right-4 top-1/3 bg-white rounded-lg p-2 sm:p-3 shadow-lg border border-gray-200 transform rotate-3 w-32 xs:w-36 sm:w-40 md:w-48 hidden sm:block">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-900">Conversion Rate</div>
                  </div>
                  <div className="text-sm text-gray-600">Increased by 24% this week</div>
          </motion.div>

          <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -left-2 xs:-left-4 bottom-1/4 bg-white rounded-lg p-2 sm:p-3 shadow-lg border border-gray-200 transform -rotate-2 w-32 xs:w-36 sm:w-40 md:w-48 hidden sm:block">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="font-medium text-gray-900">ROI Growth</div>
                  </div>
                  <div className="text-sm text-gray-600">3.5x higher than industry average</div>
        </motion.div>
              </div>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;