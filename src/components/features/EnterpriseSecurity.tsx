'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Eye, CheckCircle, ArrowRight, BadgeCheck } from 'lucide-react';

const EnterpriseSecurity = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="enterprise-security" ref={ref} className="relative min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 left-10 w-36 h-36 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-2xl"></div>
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
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <Shield size={16} />
              <span>Enterprise Security</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Bank-Level{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Security
              </span>
              {' '}Built In
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Your data is protected by enterprise-grade security with SOC 2 compliance, end-to-end encryption, and military-grade protection protocols.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BadgeCheck size={16} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">SOC 2 Type II Compliant</h4>
                  <p className="text-gray-600">Highest level of security certification for cloud services</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock size={16} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">End-to-End Encryption</h4>
                  <p className="text-gray-600">256-bit AES encryption for data in transit and at rest</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Zero-Knowledge Architecture</h4>
                  <p className="text-gray-600">We can&apos;t see your data, even if we wanted to</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              View Security Report
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Shield size={16} className="text-white" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Security Status: Active</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Encryption Level</span>
                      <span className="text-sm text-green-600">256-bit AES</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Compliance</span>
                      <span className="text-sm text-blue-600">SOC 2 Type II</span>
                    </div>
                    <div className="text-xs text-gray-600">Certified & Audited</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Threat Detection</span>
                      <span className="text-sm text-emerald-600">Real-time</span>
                    </div>
                    <div className="text-xs text-gray-600">24/7 monitoring</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Data Centers</span>
                      <span className="text-sm text-purple-600">Global</span>
                    </div>
                    <div className="text-xs text-gray-600">ISO 27001 certified</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [12, -12, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSecurity;
