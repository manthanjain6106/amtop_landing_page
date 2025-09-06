'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Shield,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'AI that actually saves you time — not buzzwords. Every update is built to cut the busywork and give you insights you can act on today.'
    },
    {
      icon: Target,
      title: 'Customer Success',
      description: 'Your growth is the only metric that matters. From 24/7 support to tailored insights, we\'re here to make sure you hit your goals faster.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data, protected. Enterprise-grade security and compliance come standard, so you can focus on scaling with peace of mind.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We don\'t stand still — and neither should your marketing. amTop evolves with new tech and trends so your team always stays ahead.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former AI researcher at Stanford, passionate about democratizing AI for businesses.',
      image: '/images/team/sarah.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      bio: 'Ex-Google engineer with 15+ years building scalable AI infrastructure.',
      image: '/images/team/marcus.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Product',
      bio: 'Product visionary with experience at Slack and Notion, focused on user experience.',
      image: '/images/team/priya.jpg'
    },
    {
      name: 'David Kim',
      role: 'VP Engineering',
      bio: 'Engineering leader who has scaled teams at Twitter and Stripe.',
      image: '/images/team/david.jpg'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'amTop was founded with a vision to democratize AI and make intelligent automation accessible to businesses of all sizes.'
    },
    {
      year: '2024',
      title: 'Platform Development',
      description: 'Developed our core AI automation platform with focus on Google Analytics, Meta Ads, and intelligent advertising optimization.'
    },
    {
      year: '2025',
      title: 'Platform Launch',
      description: 'Successfully launched amTop platform with core integrations and AI-powered automation capabilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="section-padding-top section-padding-bottom bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">amTop</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 space-y-4"
            >
              <p>
                If you&apos;re running a startup or managing marketing, you know the grind:
                switching between Google Analytics, Search Console, Meta ads, and a dozen
                other tools… only to spend hours piecing together insights that should&apos;ve been
                obvious.
              </p>
              <p>
                We created <span className="font-bold text-black">amTop</span> to fix that.
              </p>
              <p>
                It&apos;s an AI-powered dashboard that unifies your analytics, competitor insights,
                and ad automation into one clean platform. Instead of drowning in
                spreadsheets, you&apos;ll get real-time answers, smarter campaigns, and strategies
                tailored to your growth.
              </p>
              <p>
                Our edge? We don&apos;t just show you data — we tell you what to do with it.
                amTop actively suggests winning campaigns, optimizes ads 24/7, and frees up
                20+ hours every week so your team can focus on scaling, not busywork.
              </p>
              <p>
                For ambitious teams worldwide, amTop is more than software. It&apos;s your always-
                on marketing command center.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Most teams waste hours every week bouncing between tools, chasing reports,
                and guessing at what actually works. We believe that&apos;s broken.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                Our mission with <span className="font-bold text-black">amTop</span> is to change that — by making AI-powered marketing
                simple, fast, and actionable for every business. No jargon, no complexity, just a
                clear path to smarter campaigns and faster growth.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Because the less time you spend on grunt work, the more time you can spend
                building the company you actually dream about.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We believe the best tools are the ones that actually move the needle — not the
                ones that add more dashboards to your day. That&apos;s why our values are simple:
                keep things clear, save time, and put growth first. Every feature inside amTop
                was built with that mindset — and below, you&apos;ll see exactly how we&apos;ve turned
                those values into tools that help your business scale faster.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Tools don&apos;t build themselves. People do. And at Amtp, our team is obsessed
              with one thing: helping you grow without wasting time. Scroll down and see the
              folks who power your marketing command center.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-600">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{member.role}</p>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From late-night brainstorms to a global platform
            </p>
          </motion.div>
          
          {/* Desktop Timeline - Hidden on mobile */}
          <div className="hidden lg:block max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-black rounded-full shadow-lg z-20"></div>
                
                {/* Content container */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'ml-0 mr-auto text-right pr-12' : 'ml-auto mr-0 text-left pl-12'}`}>
                  {/* Year badge */}
                  <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline - Cards layout */}
          <div className="lg:hidden space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                {/* Year badge */}
                <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  {milestone.year}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{milestone.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
