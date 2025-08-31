'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Globe, Zap, Activity, ArrowRight, Moon } from 'lucide-react';

const AlwaysOn = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="always-on" ref={ref} className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 right-10 w-36 h-36 bg-gradient-to-r from-slate-400 to-gray-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-gray-400 to-slate-400 rounded-full blur-2xl"></div>
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
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
              <Clock size={16} />
              <span>24/7 Operation</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your AI Agents{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-gray-600">
                Never Sleep
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience continuous operation with AI agents that work around the clock, handling tasks across all time zones while you focus on what matters most.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe size={16} className="text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Global Coverage</h4>
                  <p className="text-gray-600">Operate across all time zones with distributed infrastructure</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap size={16} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Instant Response</h4>
                  <p className="text-gray-600">Handle requests and tasks immediately, any time of day</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Activity size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Continuous Monitoring</h4>
                  <p className="text-gray-600">24/7 system health checks and automated maintenance</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              See Uptime Stats
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full flex items-center justify-center">
                <Clock size={16} className="text-white" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">System Status: Online</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Uptime</span>
                      <span className="text-sm text-slate-600">99.99%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-slate-500 to-gray-500 h-2 rounded-full" style={{ width: '99.99%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Active Agents</span>
                      <span className="text-sm text-blue-600">156</span>
                    </div>
                    <div className="text-xs text-gray-600">Running now</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Tasks Completed</span>
                      <span className="text-sm text-green-600">2.4M</span>
                    </div>
                    <div className="text-xs text-gray-600">This month</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Response Time</span>
                      <span className="text-sm text-indigo-600">0.1s</span>
                    </div>
                    <div className="text-xs text-gray-600">Average</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [12, -12, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlwaysOn;
