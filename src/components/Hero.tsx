'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';


const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    whileHover: { 
      scale: 1.05, 
      y: -3,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
    },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  };



  return (
    <section 
      ref={containerRef}
      className="section-padding-top section-padding-bottom px-4 sm:px-6 lg:px-8 xl:px-12 bg-white relative overflow-hidden min-h-screen flex items-center pt-24 sm:pt-20 lg:pt-24 xl:pt-28 2xl:pt-32"
    >
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]"></div>
      
      <div className="container-max relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl sm:max-w-7xl mx-auto"
        >
          {/* Enhanced Top Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-4 sm:px-6 lg:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium mb-6 sm:mb-8 lg:mb-10 shadow-lg backdrop-blur-sm"
          >
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">
              Trusted by fast-moving founders and marketers worldwide
            </span>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </motion.div>

          {/* Enhanced Main Headline with 3D effect */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-8 sm:mb-10"
            style={{ textShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <span className="text-gray-900">Agentic Marketing Intelligence</span>
            <br />
            <span className="text-blue-600 relative">
              From Creation to Conversion
              <motion.div
                className="absolute inset-0 bg-blue-600/20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h1>
          
          {/* Enhanced Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed max-w-5xl sm:max-w-6xl xl:max-w-7xl mx-auto mb-10 sm:mb-14 px-4 font-medium"
          >
            While you&apos;re busy wasting hours on reports, your
            competitors are moving faster. Get all your insights and ads in
            one dashboard — and save your 20+ hours every week to focus
            on scaling.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 sm:mb-20 px-4"
          >
            <motion.a
              href="https://app.amtop.in/"
              target="_blank"
              rel="noopener noreferrer"
              {...buttonVariants}
              className="bg-gradient-to-r from-black via-gray-800 to-black text-white font-bold py-5 sm:py-6 md:py-7 xl:py-6 2xl:py-7 px-10 sm:px-12 md:px-16 xl:px-14 2xl:px-16 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg sm:text-xl xl:text-lg 2xl:text-xl flex items-center gap-3 justify-center group relative overflow-hidden hover:bg-black"
            >
              <span className="relative z-10">Start Free</span>
              <ArrowRight size={22} className="sm:w-7 sm:h-7 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            <motion.a
              href="https://cal.com/amtop-amarnath/30min"
              target="_blank"
              rel="noopener noreferrer"
              {...buttonVariants}
              className="border-2 border-gray-300 text-gray-700 font-bold py-5 sm:py-6 md:py-7 xl:py-6 2xl:py-7 px-10 sm:px-12 md:px-16 xl:px-14 2xl:px-16 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg sm:text-xl xl:text-lg 2xl:text-xl flex items-center gap-3 justify-center group relative overflow-hidden hover:bg-gray-50 hover:border-gray-400"
            >
              <span className="relative z-10">Schedule Demo</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Analytics GIF with 3D effect */}
          <motion.div
            variants={itemVariants}
            className="mb-16 sm:mb-20 relative flex justify-center"
          >
            <motion.div
              className="relative max-w-4xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
                <Image 
                  src="/GIF/Analytics.gif" 
                  alt="AMTOP Analytics Dashboard - See your workflows in real-time with comprehensive monitoring and insights" 
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain rounded-3xl block"
                  priority
                  style={{ minHeight: '400px', maxHeight: '600px' }}
                  onLoad={() => console.log('GIF loaded successfully')}
                  onError={(e) => {
                    console.error('GIF failed to load:', e);
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center"><div class="text-center"><div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div><p class="text-gray-600 font-medium">Analytics Dashboard Preview</p><p class="text-sm text-gray-500 mt-2">GIF loading...</p></div></div>';
                    }
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-3xl ring-2 ring-blue-200/30 ring-offset-4 ring-offset-white/50"></div>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 text-gray-500"
          >
            <span className="text-sm font-semibold bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm">
              Powerful features that save you time and grow your business
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-12 border-2 border-gray-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
