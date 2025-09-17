'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bug, 
  Zap, 
  Plus, 
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';

const ChangelogPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const releases = [
    {
      version: '1.0.0',
      date: 'January 15, 2025',
      type: 'major',
      title: 'amTop Platform Launch',
      description: 'This is where it all begins. With version 1.0.0, we\'re officially launching amTop into the world — a clean, powerful foundation built on Agentic AI. You\'ll get core integrations (Google Analytics, Search Console, Meta), real-time data sync, AI-powered campaign optimization, automated reporting, enterprise-grade security, and a responsive web interface. It\'s the first step in our journey to take the grunt work out of marketing and put growth back in your hands.',
      changes: [
        { type: 'feature', text: 'Agentic AI Command Center – Turns raw data into actionable insights and runs campaigns from creation to conversion' },
        { type: 'feature', text: 'Seamless Integrations – Google Analytics, Google Search Console, and Meta — all in one place' },
        { type: 'feature', text: 'Competitor & Trend Tracking – Stay ahead with real-time monitoring of industry shifts' },
        { type: 'feature', text: 'SEO & Outreach Automation – Find backlink opportunities, draft SEO blogs, and publish directly' },
        { type: 'feature', text: 'Social Listening + Content Calendar – Scan audience conversations and auto-generate day-by-day content plans' },
        { type: 'feature', text: 'Self-Optimizing Campaigns – Ads that launch, learn, and reallocate budget to winners automatically' },
        { type: 'feature', text: 'Whitepaper Generation – Automatically create professional, data-backed whitepapers to showcase expertise, win trust, and support sales' },
        { type: 'feature', text: 'Proactive Alerts & Next Actions – Monitors KPIs (traffic, conversions, ROAS) and gives instant fixes when things go wrong' },
        { type: 'feature', text: 'Automated Reporting – Clear, shareable reports written in seconds — no more spreadsheets' },
        { type: 'feature', text: '24/7 Monitoring & Support – Always-on KPI tracking with enterprise-grade security, AI support + human experts' },
        { type: 'feature', text: 'Lightning-Fast Data Refresh – Real-time updates for instant decisions' },
        { type: 'feature', text: 'Cloud-Native Architecture – Scalable, fast, and reliable — built for growing teams' }
      ],
      highlights: [
        'Complete Agentic AI foundation',
        'All-in-one marketing command center',
        'Enterprise-ready with 24/7 support'
      ]
    }
  ];

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return <Plus className="text-green-500" size={16} />;
      case 'improvement':
        return <Zap className="text-blue-500" size={16} />;
      case 'fix':
        return <Bug className="text-red-500" size={16} />;
      default:
        return <CheckCircle className="text-gray-500" size={16} />;
    }
  };

  const getChangeColor = (type: string) => {
    switch (type) {
      case 'feature':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'improvement':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'fix':
        return 'text-red-700 bg-red-50 border-red-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getVersionBadge = (type: string) => {
    switch (type) {
      case 'major':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'minor':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'patch':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
              The Product That Never Sleeps
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              We believe your marketing stack should get smarter every single day. That&apos;s
              why amTop is constantly improving — from new features and smarter
              automations to small fixes that make your workflow smoother. This changelog
              is where you&apos;ll see it all: the upgrades, the optimizations, and the behind-the-scenes work that keeps your growth engine running faster than ever.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">1.0.0</div>
              <div className="text-gray-600">Latest Version</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
              <div className="text-gray-600">Release</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
              <div className="text-gray-600">New Features</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Changelog Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Release History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track our journey of continuous improvement and innovation.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {releases.map((release, index) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Release Header */}
                <div className="p-8 border-b border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getVersionBadge(release.type)}`}>
                        {release.type === 'major' ? 'Major' : release.type === 'minor' ? 'Minor' : 'Patch'}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">v{release.version}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock size={16} />
                      <span className="text-sm">{release.date}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{release.title}</h4>
                  <p className="text-gray-600">{release.description}</p>
                </div>

                {/* Release Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Changes List */}
                    <div className="lg:col-span-2">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Changed</h5>
                      <div className="space-y-3">
                        {release.changes.map((change, changeIndex) => (
                          <div key={changeIndex} className="flex items-start gap-3">
                            {getChangeIcon(change.type)}
                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getChangeColor(change.type)}`}>
                              {change.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h5>
                      <div className="space-y-3">
                        {release.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start gap-3">
                            <Star className="text-yellow-500 mt-0.5" size={16} />
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
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
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and be the first to know about new features, 
              improvements, and platform updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-white text-gray-900 placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default ChangelogPage;
