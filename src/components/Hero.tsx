'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';


const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      className="section-padding-top section-padding-bottom px-4 sm:px-6 lg:px-8 xl:px-12 bg-white relative overflow-hidden min-h-screen flex items-center"
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
              <span className="hidden sm:inline">Trusted by fast-moving engineering teams worldwide</span>
              <span className="sm:hidden">Trusted by engineering teams</span>
            </span>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </motion.div>

          {/* Enhanced Main Headline with 3D effect */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight leading-tight mb-8 sm:mb-10"
            style={{ textShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            Stop losing time on{' '}
            <span className="text-blue-600 relative">
              repetitive tasks
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
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-5xl sm:max-w-6xl mx-auto mb-10 sm:mb-14 px-4 font-medium"
          >
            Transform your engineering workflow with intelligent AI agents that work 24/7. 
            <span className="font-bold text-blue-600"> Save 20+ hours per week</span> while your team focuses on innovation, 
            not maintenance. From deployment automation to intelligent monitoring, we handle the repetitive work so you can build what matters.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 sm:mb-20 px-4"
          >
            <motion.button
              {...buttonVariants}
              className="bg-gradient-to-r from-black via-gray-800 to-black text-white font-bold py-5 sm:py-6 md:py-7 px-10 sm:px-12 md:px-16 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg sm:text-xl flex items-center gap-3 justify-center group relative overflow-hidden hover:bg-black"
            >
              <span className="relative z-10">Start building for free</span>
              <ArrowRight size={22} className="sm:w-7 sm:h-7 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              className="border-2 border-gray-300 text-gray-700 font-semibold py-5 sm:py-6 md:py-7 px-10 sm:px-12 md:px-16 rounded-2xl hover:border-blue-300 hover:text-blue-700 transition-all duration-300 text-lg sm:text-xl backdrop-blur-sm bg-white/50"
            >
              Watch demo
            </motion.button>
          </motion.div>

          {/* Enhanced Analytics GIF with 3D effect */}
          <motion.div
            variants={itemVariants}
            className="mb-16 sm:mb-20 relative"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/GIF/Anylitics.gif" 
                alt="AMTOP Analytics Dashboard - See your workflows in real-time with comprehensive monitoring and insights" 
                className="rounded-3xl shadow-2xl max-w-full h-auto mx-auto border border-gray-200/50 relative z-10"
              />
              <div className="absolute inset-0 rounded-3xl ring-2 ring-blue-200/30 ring-offset-4 ring-offset-white/50"></div>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3 text-gray-500"
          >
            <span className="text-sm font-semibold bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm">
              Discover how AMTOP transforms engineering teams
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
