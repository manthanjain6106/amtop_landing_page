'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, MessageCircle, Share2, UserCheck, ArrowRight } from 'lucide-react';

const TeamCollaboration = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  return (
    <section id="team-collaboration" ref={ref} className="relative min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-2xl"></div>
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
            <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
              <Users size={16} />
              <span>Team Collaboration</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Work{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Together
              </span>
              {' '}Seamlessly
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Enable your teams to collaborate effectively with role-based access, shared workspaces, and real-time communication tools that keep everyone connected.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <UserCheck size={16} className="text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Role-Based Access</h4>
                  <p className="text-gray-600">Granular permissions and team management controls</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Share2 size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Shared Workspaces</h4>
                  <p className="text-gray-600">Collaborative environments for projects and teams</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageCircle size={16} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Real-time Communication</h4>
                  <p className="text-gray-600">Built-in chat, comments, and notification systems</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              Start Collaborating
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                <Users size={16} className="text-white" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Team Workspace</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Active Members</span>
                      <span className="text-sm text-cyan-600">24</span>
                    </div>
                    <div className="text-xs text-gray-600">Online now</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Projects</span>
                      <span className="text-sm text-blue-600">12</span>
                    </div>
                    <div className="text-xs text-gray-600">In progress</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Collaboration Score</span>
                      <span className="text-sm text-teal-600">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">File Sharing</span>
                      <span className="text-sm text-indigo-600">1.2GB</span>
                    </div>
                    <div className="text-xs text-gray-600">This week</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamCollaboration;
