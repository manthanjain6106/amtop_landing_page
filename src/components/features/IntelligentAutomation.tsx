'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, TrendingUp, Cpu, Zap, ArrowRight } from 'lucide-react';

const IntelligentAutomation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="intelligent-automation" ref={ref} className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-red-400 to-pink-600 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Brain size={16} />
              <span>AI-Powered</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Intelligent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Automation
              </span>
              {' '}that Learns
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Our AI agents don&apos;t just follow rules—they learn from your workflows, adapt to changes, and continuously optimize performance for maximum efficiency.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Continuous Learning</h4>
                  <p className="text-gray-600">AI agents improve with every task, becoming more efficient over time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Cpu size={16} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adaptive Intelligence</h4>
                  <p className="text-gray-600">Automatically adjusts strategies based on changing business conditions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap size={16} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Smart Optimization</h4>
                  <p className="text-gray-600">Identifies bottlenecks and suggests improvements automatically</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              Explore AI Features
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Brain size={16} className="text-white" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">AI Agent Active</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Learning Progress</span>
                      <span className="text-sm text-blue-600">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Efficiency Gain</span>
                      <span className="text-sm text-green-600">+34%</span>
                    </div>
                    <div className="text-xs text-gray-600">Based on last 30 days</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Tasks Completed</span>
                      <span className="text-sm text-purple-600">1,247</span>
                    </div>
                    <div className="text-xs text-gray-600">This month</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentAutomation;
