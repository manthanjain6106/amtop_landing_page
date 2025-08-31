'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, TrendingUp, Activity, PieChart, ArrowRight, Eye } from 'lucide-react';

const RealTimeAnalytics = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="real-time-analytics" ref={ref} className="relative min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-rose-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <BarChart3 size={16} className="text-white" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live Dashboard</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Conversion Rate</span>
                      <span className="text-sm text-purple-600">+23%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Active Users</span>
                      <span className="text-sm text-green-600">12.4k</span>
                    </div>
                    <div className="text-xs text-gray-600">Real-time count</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Revenue Growth</span>
                      <span className="text-sm text-blue-600">+45%</span>
                    </div>
                    <div className="text-xs text-gray-600">Month over month</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Performance Score</span>
                      <span className="text-sm text-indigo-600">94/100</span>
                    </div>
                    <div className="text-xs text-gray-600">System health</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 2.8, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-18 h-18 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 3.2, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-14 h-14 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20"
            ></motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <BarChart3 size={16} />
              <span>Real-time Analytics</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Monitor{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Performance
              </span>
              {' '}Live
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Get instant insights into your operations with real-time dashboards, live metrics, and predictive analytics that help you make data-driven decisions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity size={16} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Live Monitoring</h4>
                  <p className="text-gray-600">Track performance metrics in real-time with zero latency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp size={16} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Predictive Insights</h4>
                  <p className="text-gray-600">AI-powered forecasting and trend analysis</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <PieChart size={16} className="text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Custom Dashboards</h4>
                  <p className="text-gray-600">Build personalized views for different teams and roles</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              View Demo Dashboard
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeAnalytics;
