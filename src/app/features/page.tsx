'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Shield, Users, BarChart3, Globe, Clock, Target, ArrowRight, CheckCircle, Star, TrendingUp, Lock, Smartphone, Database, Cloud, Bell, Search, Filter, Download, Share2, Eye, Settings, Palette, Code, Zap as Lightning, Shield as Security, Users as Team, BarChart3 as Analytics, Globe as World, Clock as Time, Target as Goal } from 'lucide-react';

export default function FeaturesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Experience blazing-fast load times and instant responses with our optimized infrastructure.',
      benefits: ['99.9% uptime guarantee', 'Global CDN', 'Edge computing', 'Real-time optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption, compliance, and threat protection.',
      benefits: ['SOC 2 Type II certified', 'GDPR compliant', 'End-to-end encryption', '24/7 monitoring']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless teamwork with real-time collaboration tools and communication features.',
      benefits: ['Real-time editing', 'Team chat', 'Role-based access', 'Activity tracking']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights with customizable dashboards and comprehensive reporting.',
      benefits: ['Custom dashboards', 'Real-time metrics', 'Export capabilities', 'AI-powered insights']
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Access your data from anywhere with our cloud-based platform.',
      benefits: ['Cross-platform support', 'Offline mode', 'Mobile apps', 'API access']
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Stay current with live data synchronization and instant notifications.',
      benefits: ['Live sync', 'Push notifications', 'Webhooks', 'Real-time alerts']
    }
  ];

  const categories = [
    {
      name: 'Core Features',
      icon: Target,
      features: ['User Management', 'Authentication', 'Data Storage', 'API Access']
    },
    {
      name: 'Advanced Features',
      icon: Star,
      features: ['AI Integration', 'Machine Learning', 'Predictive Analytics', 'Custom Workflows']
    },
    {
      name: 'Security Features',
      icon: Security,
      features: ['Two-Factor Auth', 'SSO Integration', 'Audit Logs', 'Data Encryption']
    },
    {
      name: 'Integration Features',
      icon: Code,
      features: ['Webhooks', 'REST API', 'SDK Support', 'Third-party Apps']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding-top section-padding-bottom px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              All your marketing power in one dashboard
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Real-time data, smarter campaigns, and AI insights at your fingertips. No
              more switching tabs, no more guesswork — just the tools you need to grow,
              faster.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://app.amtop.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your advantages starts from here
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              amTop combines analytics, competitor tracking, and automation in ways
              no single tool can. These are the features that turn busywork into real growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Organized by Category
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Find exactly what you need with our organized feature categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose amTop?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Most tools give you data. Amtp gives you answers. That&apos;s the difference that
              saves you 20+ hours a week.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">Lightning-fast speed with 99.9% uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Enterprise-grade security with SOC 2 compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Real-time teamwork with advanced collaboration tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to work smarter, not harder?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Join the founders and teams using amTop to save hours every week and
              turn marketing chaos into clear growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://app.amtop.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Started Free
              </motion.a>
              <motion.a
                href="https://cal.com/amtop-amarnath/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
