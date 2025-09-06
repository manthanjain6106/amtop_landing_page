'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock,
  ArrowRight,
  Star
} from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Marketing Automation',
      description: 'AI that learns your marketing patterns and takes the busywork off your plate.',
      color: 'from-blue-600 to-purple-600',
      highlight: 'Smart Learning',
      href: '#intelligent-automation'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Execute complex tasks in seconds, not hours. Scale your operations instantly.',
      color: 'from-yellow-500 to-orange-500',
      highlight: '10x Faster',
      href: '#lightning-fast'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and end-to-end encryption.',
      color: 'from-green-600 to-emerald-600',
      highlight: 'SOC 2 Compliant',
      href: '#enterprise-security'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor performance, track metrics, and gain insights with live dashboards.',
      color: 'from-purple-600 to-pink-600',
      highlight: 'Live Insights',
      href: '#real-time-analytics'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with role-based access and shared workspaces.',
      color: 'from-indigo-600 to-purple-600',
      highlight: 'Team Ready',
      href: '#team-collaboration'
    },
    {
      icon: Clock,
      title: '24/7 Operation',
      description: 'Your AI agents never sleep. Continuous operation around the clock.',
      color: 'from-red-600 to-pink-600',
      highlight: 'Always On',
      href: '#always-on'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features-overview" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Star className="w-4 h-4" />
            <span>Complete Feature Set</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              build intelligent workflows
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Explore our comprehensive suite of features designed to transform your business operations with intelligent AI agents.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.href}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 left-4 sm:left-6">
                <div className={`bg-gradient-to-r ${feature.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold`}>
                  {feature.highlight}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <feature.icon size={24} className="sm:w-8 sm:h-8" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-black transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {feature.description}
              </p>
              
              {/* Learn More Link */}
              <div className="flex items-center text-black font-medium group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base">
                Learn more
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300 sm:w-4 sm:h-4" />
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} rounded-t-full transition-all duration-300 group-hover:w-full`}></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-100 mx-4 shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to explore all features?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Each feature is designed to work seamlessly together, creating a powerful platform for intelligent workflow automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto text-sm sm:text-base"
            >
              Start Free Trial
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
