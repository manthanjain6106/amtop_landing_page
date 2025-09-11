'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Sparkles, ArrowRight } from 'lucide-react';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl sm:max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Sparkles size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
            </motion.div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
              See how companies are transforming their operations with AI-powered automation.
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 sm:mb-16"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-3xl sm:max-w-4xl mx-auto border border-gray-100 relative overflow-hidden mx-4">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-blue-100">
                <Quote size={32} className="sm:w-12 sm:h-12" />
              </div>
              
              {/* Testimonial Content */}
              <div className="relative z-10">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 font-medium italic">
                  &quot;amTop has transformed how we handle customer support.&quot; - Sarah Chen, CEO
                  &quot;The automation capabilities are incredible.&quot; - Marcus Rodriguez, CTO
                </p>
                
                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    SC
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Sarah Chen</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Chief Operations Officer at TechFlow Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-600 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-400 fill-current sm:w-5 sm:h-5" />
                <span className="font-medium">4.9/5 rating</span>
              </div>
              <div className="hidden sm:block w-1 h-6 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">99.9% uptime</span>
              </div>
              <div className="hidden sm:block w-1 h-6 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium">24/7 support</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.a
              href="https://app.amtop.in/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 sm:gap-3 text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              Start Free Trial
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-200 text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto justify-center"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
