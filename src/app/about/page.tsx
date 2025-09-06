'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Award, 
  Zap, 
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
      description: 'We constantly push boundaries to create cutting-edge AI solutions that transform industries.'
    },
    {
      icon: Target,
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to helping you achieve your business goals.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and compliance built into every aspect of our platform.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We evolve with technology and market demands to stay ahead of the curve.'
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
            >
              We&apos;re on a mission to democratize AI and make intelligent automation accessible to businesses of all sizes. 
              Our platform empowers teams to work smarter, not harder.
            </motion.p>
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
                We believe that every business, regardless of size or industry, should have access to the power of AI. 
                Our mission is to break down the barriers to AI adoption and create tools that make complex automation 
                simple and accessible.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                By combining cutting-edge AI technology with intuitive design, we&apos;re helping companies transform their 
                operations, reduce costs, and focus on what matters most - growing their business and serving their customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Vision 2030</h3>
                  <p className="text-gray-600 text-sm sm:text-base">AI-powered businesses in every industry</p>
                </div>
              </div>
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
              These core values guide everything we do, from product development to customer support.
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
              The brilliant minds behind amTop, dedicated to transforming how businesses work with AI.
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
              From startup to industry leader, here are the key milestones in our company&apos;s growth.
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
