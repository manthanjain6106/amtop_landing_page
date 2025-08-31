'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Gauge, Rocket, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const LightningFast = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="lightning-fast" ref={ref} className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-red-400 to-pink-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-2xl"></div>
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
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Performance Monitor</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Speed Boost</span>
                      <span className="text-sm text-orange-600">10x Faster</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Response Time</span>
                      <span className="text-sm text-green-600">0.2s</span>
                    </div>
                    <div className="text-xs text-gray-600">Average latency</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Throughput</span>
                      <span className="text-sm text-blue-600">50k/sec</span>
                    </div>
                    <div className="text-xs text-gray-600">Operations per second</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-20"
            ></motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap size={16} />
              <span>Lightning Fast</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Execute in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Seconds
              </span>
              , Not Hours
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience unprecedented speed with our optimized AI engine. What used to take hours now happens in seconds, with real-time scaling and instant deployment.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Gauge size={16} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">10x Performance Boost</h4>
                  <p className="text-gray-600">Optimized algorithms and parallel processing for maximum speed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Rocket size={16} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Instant Scaling</h4>
                  <p className="text-gray-600">Automatically scale resources up or down based on demand</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock size={16} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Real-time Processing</h4>
                  <p className="text-gray-600">Handle massive workloads with sub-second response times</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              See Performance Demo
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LightningFast;
