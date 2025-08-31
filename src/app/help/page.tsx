'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, BookOpen, Video, MessageCircle, FileText, Settings, Users, Zap, Shield, Globe, ArrowRight, Mail } from 'lucide-react';

const HelpPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics and set up your first AI agent',
      articles: 12,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Configuration',
      description: 'Customize your agents and workflows',
      articles: 18,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Create powerful automated workflows',
      articles: 25,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Keep your data and agents secure',
      articles: 8,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manage your team and permissions',
      articles: 15,
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Integrations',
      description: 'Connect with your favorite tools',
      articles: 32,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const popularArticles = [
    {
      title: 'How to create your first AI agent',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '2.4k'
    },
    {
      title: 'Setting up webhook integrations',
      category: 'Integrations',
      readTime: '8 min read',
      views: '1.8k'
    },
    {
      title: 'Best practices for workflow automation',
      category: 'Automation',
      readTime: '12 min read',
      views: '1.5k'
    },
    {
      title: 'Managing team permissions and roles',
      category: 'Team Management',
      readTime: '6 min read',
      views: '1.2k'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 min'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: '< 4 hours'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a screen sharing session',
      availability: 'Business hours',
      responseTime: '< 24 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Find answers to your questions, learn best practices, and get the most out of amTop&apos;s AI agents.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or guides..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find help content organized by topic to quickly get the information you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} text-white h-full transition-transform duration-300 group-hover:scale-105`}>
                  <div className="mb-6">
                    <category.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-blue-100 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">{category.articles} articles</span>
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most viewed and helpful articles from our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>👁 {article.views} views</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our support team is here to help you succeed with amTop.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <option.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-500">
                    <span className="font-medium">Availability:</span> {option.availability}
                  </div>
                  <div className="text-gray-500">
                    <span className="font-medium">Response:</span> {option.responseTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Still can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you get the most out of amTop. Reach out and we&apos;ll get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Request Feature
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpPage;
