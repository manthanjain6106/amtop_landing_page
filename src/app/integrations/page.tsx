'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare,
  Database,
  Users
} from 'lucide-react';

const IntegrationsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const integrationCategories = [
    {
      integrations: [
        { 
          name: 'Google Analytics', 
          icon: Database, 
          description: 'Track website performance and user behavior',
          details: 'Advanced analytics, real-time data monitoring, conversion tracking, audience insights, and comprehensive reporting for data-driven decision making',
          color: 'bg-green-500' 
        },
        { 
          name: 'Meta Ads', 
          icon: MessageSquare, 
          description: 'Manage Facebook and Instagram advertising campaigns',
          details: 'Automated bidding, audience targeting, creative optimization, performance tracking, and cross-platform campaign management',
          color: 'bg-blue-500' 
        },
        { 
          name: 'Ads Agent', 
          icon: Users, 
          description: 'AI-powered advertising optimization and management',
          details: 'Intelligent budget allocation, automated A/B testing, performance prediction, and real-time campaign adjustments for maximum ROI',
          color: 'bg-purple-500' 
        }
      ]
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
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Integrations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              Connect amTop with your favorite tools and services. Automate workflows, 
              sync data, and create powerful integrations that work seamlessly together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-colors duration-200"
              >
                View All Integrations
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-black text-black font-semibold py-4 px-8 rounded-xl hover:bg-black hover:text-white transition-all duration-200"
              >
                Request Integration
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Integrations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how amTop connects with the tools you already use and love.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories[0].integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${integration.color} rounded-xl flex items-center justify-center mb-6`}>
                  <integration.icon className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">{integration.name}</h4>
                <p className="text-gray-600 text-base leading-relaxed mb-4">{integration.description}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{integration.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect Your Tools?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building powerful integrations today and automate your entire workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-black transition-all duration-200"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationsPage;
