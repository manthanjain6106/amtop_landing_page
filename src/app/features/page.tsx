'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Search, Link, Calendar, Target, Bell, FileText, Monitor, Users, CheckCircle, TrendingUp, Lock } from 'lucide-react';

export default function FeaturesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: 'Agentic AI Command Center',
      description: 'Most tools throw numbers at you. amTop gives you answers. Powered by Agentic AI, it plugs directly into Google Analytics, Search Console, and Meta, then turns raw data into live, actionable insights. It doesn\'t stop at reporting — it plans, executes, and optimizes campaigns for you, so your marketing stack finally does the work.',
      benefits: ['Live actionable insights', 'Auto campaign optimization', 'Direct platform integration', 'AI-powered execution']
    },
    {
      icon: Search,
      title: 'Competitor & Trend Tracking',
      description: 'Tired of playing catch-up? amTop\'s agents keep a constant eye on competitors and industry trends, surfacing what\'s working right now. You\'ll know where the market is shifting before anyone else — and exactly how to pivot.',
      benefits: ['Real-time competitor monitoring', 'Industry trend analysis', 'Market shift alerts', 'Strategic pivot guidance']
    },
    {
      icon: Link,
      title: 'SEO & Outreach Automation',
      description: 'Stop wasting weeks chasing backlinks and drafting blogs that never rank. amTop finds high-probability link creators and outreach targets, then drafts and publishes SEO-ready content directly to your site. That means better rankings, real traffic, and less grind.',
      benefits: ['High-probability link discovery', 'Automated outreach', 'SEO-ready content creation', 'One-click publishing']
    },
    {
      icon: Calendar,
      title: 'Social Listening + Content Calendar',
      description: 'Your audience is already telling you what they want — most tools just don\'t listen. amTop scans social posts and comments, then turns that chatter into insights you can use. From there, it builds a day-by-day content calendar complete with ready-to-use scripts for blogs, ads, and socials — all one-click publish.',
      benefits: ['Social sentiment analysis', 'Automated content calendar', 'Ready-to-use scripts', 'Multi-platform publishing']
    },
    {
      icon: Target,
      title: 'Self-Optimizing Ad Campaigns',
      description: 'Running ads shouldn\'t feel like burning cash. With amTop, campaigns launch, learn, and self-optimize in real time. Budgets shift automatically to winners, underperformers get cut, and you get higher ROAS without babysitting dashboards.',
      benefits: ['Real-time optimization', 'Automatic budget allocation', 'Performance-based cuts', 'Higher ROAS guaranteed']
    },
    {
      icon: Bell,
      title: 'Proactive Alerts & Next Actions',
      description: 'amTop constantly monitors your KPIs (Key Performance Indicators — the numbers that show if your marketing is working, like traffic, conversions, or ROAS). The moment something looks off, it flags it and tells you what to do next — so small problems never turn into big headaches.',
      benefits: ['24/7 KPI monitoring', 'Proactive issue detection', 'Actionable recommendations', 'Preventive problem solving']
    },
    {
      icon: FileText,
      title: 'Automated Reporting',
      description: 'Forget late nights building spreadsheets or waiting a week for updates. amTop auto-writes clear, simple reports in seconds, showing what\'s working, what\'s not, and where to focus next.',
      benefits: ['Instant report generation', 'Clear performance insights', 'Actionable recommendations', 'Time-saving automation']
    },
    {
      icon: Monitor,
      title: '24/7 Monitoring & Support',
      description: 'Your marketing doesn\'t sleep — and neither does amTop. Every key metric is tracked around the clock, backed by enterprise-grade security and always-on support (AI for speed, humans for depth).',
      benefits: ['Round-the-clock monitoring', 'Enterprise-grade security', 'AI + human support', 'Always-on availability']
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
                className="bg-black text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-black" />
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
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">Lightning-fast speed with 99.9% uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600">Enterprise-grade security with SOC 2 compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Real-time teamwork with advanced collaboration tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-4 bg-black">
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
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started Free
              </motion.a>
              <motion.a
                href="https://cal.com/amtop-amarnath/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
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
