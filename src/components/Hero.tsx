'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Simple animation variants that work reliably
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const buttonVariants = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  };



  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      
      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl sm:max-w-7xl mx-auto"
        >
          {/* Top Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-base font-medium mb-6 sm:mb-8 shadow-sm"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="whitespace-nowrap">Trusted by fast-moving engineering teams worldwide</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight leading-tight mb-6 sm:mb-8"
          >
            Stop losing time on{' '}
            <span className="text-blue-600">
              repetitive tasks
            </span>
          </motion.h1>
          
          {/* Enhanced Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-5xl sm:max-w-6xl mx-auto mb-8 sm:mb-12 px-4"
          >
            Transform your engineering workflow with intelligent AI agents that work 24/7. 
            <span className="font-semibold text-gray-800"> Save 20+ hours per week</span> while your team focuses on innovation, 
            not maintenance. From deployment automation to intelligent monitoring, we handle the repetitive work so you can build what matters.
          </motion.p>



          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <motion.button
              {...buttonVariants}
              className="bg-black hover:bg-gray-800 text-white font-semibold py-4 sm:py-5 md:py-6 px-8 sm:px-10 md:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg sm:text-xl flex items-center gap-3 justify-center"
            >
              Start building for free
              <ArrowRight size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
          </motion.div>





          {/* Analytics GIF with Enhanced Context */}
          <motion.div
            variants={itemVariants}
            className="mb-12 sm:mb-16"
          >
            <div className="relative">
              <img 
                src="/GIF/Anylitics.gif" 
                alt="AMTOP Analytics Dashboard - See your workflows in real-time with comprehensive monitoring and insights" 
                className="rounded-2xl shadow-2xl max-w-full h-auto mx-auto border border-gray-200"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/20"></div>
            </div>

          </motion.div>



          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm font-medium">Discover how AMTOP transforms engineering teams</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
