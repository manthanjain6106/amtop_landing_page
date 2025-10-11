'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
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
      name: 'Amarnath Pandey',
      role: 'CEO & CTO',
      bio: 'Visionary leader driving innovation and technical excellence at amTop.',
      image: '/images/Amarnath_Pandey.png',
      hasImage: true
    },
    {
      name: 'Anant Dubey',
      role: 'COO',
      bio: 'Operations expert ensuring smooth execution and strategic growth initiatives.',
      image: '/images/anant_dubey.png',
      hasImage: true
    },
    {
      name: 'Manthan Jain',
      role: 'VP of Engineering',
      bio: 'Engineering leader building scalable and robust technical solutions.',
      image: '/images/manthan_jain.jpg',
      hasImage: true
    },
    {
      name: 'Manashi Sheth',
      role: 'VP of Designing',
      bio: 'Creative director shaping user experience and visual excellence.',
      image: '/images/Manashi.jpeg',
      hasImage: true
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'The Beginning',
      description: 'In February 2025, amTop started as a simple idea from Amarnath. He reached out to Anant, and together they began building what would soon become a game-changing SaaS platform.'
    },
    {
      year: '2025',
      title: 'MVP Launch',
      description: 'By September 2025, we launched our first MVP — the early version of amTop\'s Agentic AI-powered platform. It was built to save founders and marketers from drowning in repetitive work.'
    },
    {
      year: 'Future',
      title: 'The Road Ahead',
      description: 'From here, our focus is crystal clear: make amTop the most advanced marketing platform available. We\'re just getting started, and the journey ahead is all about scaling growth — for us, and for you.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="section-padding-top section-padding-bottom bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content column */}
          <motion.div
            ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-left max-w-xl mx-auto lg:mx-0"
            >
              {/* Professional badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6 sm:mb-8"
          >
                <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
                <span className="text-sm font-medium text-gray-800">Our Story</span>
              </motion.div>
              
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
            >
                About <span className="border-b-4 border-gray-900 pb-1">amTop</span>
            </motion.h1>
              
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 space-y-4"
            >
                <p className="font-medium">
                If you&apos;re running a startup or managing marketing, you know the grind:
                switching between Google Analytics, Search Console, Meta ads, and a dozen
                other tools… only to spend hours piecing together insights that should&apos;ve been
                obvious.
              </p>
                <p className="text-xl font-bold text-gray-900">
                  We created <span className="text-black underline decoration-2 underline-offset-4">amTop</span> to fix that.
                </p>
              </motion.div>
              
              {/* CTA Button */}
              <motion.a
                href="#mission"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-base hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Learn More About Us
              </motion.a>
            </motion.div>
            
            {/* Right visual column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-500"></div>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                It&apos;s an AI-powered dashboard that unifies your analytics, competitor insights,
                and ad automation into one clean platform. Instead of drowning in
                spreadsheets, you&apos;ll get real-time answers, smarter campaigns, and strategies
                tailored to your growth.
              </p>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Our Edge</h3>
                      <p className="text-gray-700">
                        We don&apos;t just show you data — we tell you what to do with it.
                amTop actively suggests winning campaigns, optimizes ads 24/7, and frees up
                        20+ hours every week.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Always On</h3>
                      <p className="text-gray-700">
                For ambitious teams worldwide, amTop is more than software. It&apos;s your always-
                on marketing command center.
              </p>
                    </div>
                  </div>
                </div>
                
                {/* Stats indicators */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">20+</div>
                    <div className="text-xs text-gray-500">Hours Saved Weekly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-xs text-gray-500">Optimization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-500">Focus on Growth</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gray-900 rounded-full hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-4 border-gray-200 rounded-full hidden lg:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="section-padding bg-white relative">
        {/* Background elements */}
        <div className="absolute right-0 top-20 w-64 h-64 border-r-4 border-b-4 border-gray-100 opacity-50 hidden lg:block"></div>
        <div className="absolute left-0 bottom-20 w-32 h-32 border-l-4 border-t-4 border-gray-100 opacity-50 hidden lg:block"></div>
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left column - Mission statement */}
            <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                className="pr-0 lg:pr-12"
              >
                <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full mb-6">
                  <span className="text-sm font-medium text-gray-800">Why We Exist</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Our <span className="relative inline-block">
                    Mission
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900"></span>
                  </span>
              </h2>
                
                <div className="space-y-6">
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Most teams waste hours every week bouncing between tools, chasing reports,
                    and guessing at what actually works. <span className="font-semibold">We believe that&apos;s broken.</span>
              </p>
                  
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Our mission with <span className="font-bold text-black">amTop</span> is to change that — by making AI-powered marketing
                simple, fast, and actionable for every business. No jargon, no complexity, just a
                clear path to smarter campaigns and faster growth.
              </p>
                  
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                Because the less time you spend on grunt work, the more time you can spend
                building the company you actually dream about.
              </p>
                </div>
            </motion.div>
            </div>
            
            {/* Right column - Visual elements */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-lg relative"
              >
                {/* Mission highlights */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Simplify</h3>
                      <p className="text-gray-600">Unify all your marketing data in one place</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Automate</h3>
                      <p className="text-gray-600">Let AI handle repetitive marketing tasks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Grow</h3>
                      <p className="text-gray-600">Focus on strategic growth, not busywork</p>
                    </div>
                  </div>
                </div>
                
                {/* Mission impact */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">20+</div>
                      <div className="text-sm text-gray-500">Hours Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">Fast</div>
                      <div className="text-sm text-gray-500">Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-500">Actionable</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="section-padding bg-gradient-to-b from-gray-50 to-white relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 border-t-4 border-r-4 border-gray-100 opacity-30 hidden lg:block"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 border-b-4 border-l-4 border-gray-100 opacity-30 hidden lg:block"></div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-medium text-gray-800">What Drives Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our Core <span className="relative inline-block">
                Values
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-900"></span>
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We believe the best tools are the ones that actually move the needle — not the
                ones that add more dashboards to your day. That&apos;s why our values are simple:
              keep things clear, save time, and put growth first.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Value number badge */}
                  <div className="absolute -top-5 -left-2 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {index + 1}
                  </div>
                  
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 border border-gray-200">
                        <value.icon className="text-gray-800" size={28} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{value.title}</h3>
                    </div>
                    
                    <p className="text-base text-gray-700 leading-relaxed flex-grow">{value.description}</p>
                    
                    {/* Practical application */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        How We Apply This
                      </h4>
                      <p className="text-sm text-gray-600">
                        {index === 0 && "We constantly test new AI models to find what actually saves you time — not just what sounds impressive in a pitch."}
                        {index === 1 && "Our entire product roadmap is built around the metrics that matter most to your business, not vanity features."}
                        {index === 2 && "We've implemented enterprise-grade security protocols from day one, not as an afterthought when problems arise."}
                        {index === 3 && "We release updates every two weeks based on user feedback and emerging marketing trends to keep you ahead."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Values in action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Values in Action</h3>
            <p className="text-base text-gray-700 mb-6 max-w-3xl mx-auto">
              Every feature inside amTop was built with our values in mind — and that&apos;s how we&apos;ve turned
              these principles into tools that help your business scale faster.
            </p>
            <a 
              href="#team" 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md"
            >
              <span>Meet the Team Behind Our Values</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-gradient-to-b from-white to-gray-50 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 border-r-4 border-b-4 border-gray-100 opacity-30 hidden lg:block"></div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6 shadow-sm">
              <span className="text-sm font-medium text-gray-800">The People Behind amTop</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Meet Our <span className="relative inline-block">
                Team
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-900"></span>
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Tools don&apos;t build themselves. People do. And at amTop, our team is obsessed
              with one thing: helping you grow without wasting time.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center relative overflow-hidden">
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900"></div>
                  
                  {/* Image container with enhanced styling */}
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-6 relative group-hover:scale-105 transition-transform duration-300 shadow-md border-4 border-white">
                  {member.hasImage && member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={160}
                      height={160}
                      className={`w-full h-full object-cover ${member.name === 'Anant Dubey' ? 'scale-110 object-top' : ''} ${member.name === 'Manthan Jain' ? 'object-top' : ''} ${member.name === 'Amarnath Pandey' ? 'object-top' : ''}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"><span class="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-600">${member.name.charAt(0)}</span></div>`;
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-600">{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                  <p className="text-base text-gray-600 mb-4 text-center font-medium">{member.role}</p>
                  
                  <div className="w-12 h-1 bg-gray-200 mb-4"></div>
                  
                  <p className="text-sm text-gray-700 leading-relaxed text-center">{member.bio}</p>
                  
                  {/* Role-specific expertise */}
                  <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 text-center">Expertise</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {index === 0 && (
                        <>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">AI Strategy</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Tech Vision</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Leadership</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Operations</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Growth</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Strategy</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Engineering</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Architecture</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">DevOps</span>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">UX/UI</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Design Systems</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Branding</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Team values statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 italic">
              &quot;Our team combines decades of experience in marketing, AI, and product development to create
              a platform that truly understands what marketers need to succeed in today&apos;s landscape.&quot;
            </p>
            <div className="mt-4 font-semibold text-gray-900">— The amTop Team</div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="absolute left-0 top-0 w-64 h-64 border-l-4 border-t-4 border-gray-100 opacity-30 hidden lg:block"></div>
        <div className="absolute right-0 bottom-0 w-48 h-48 border-r-4 border-b-4 border-gray-100 opacity-30 hidden lg:block"></div>
        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gray-200 opacity-20 hidden lg:block"></div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-gray-800">Our Story So Far</span>
              <span className="w-2 h-2 bg-gray-800 rounded-full ml-2"></span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              The <span className="relative inline-block">
                Journey
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-900"></span>
              </span> of amTop
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              From late-night brainstorms to a global platform — follow our path as we build
              the future of AI-powered marketing.
            </p>
            
            {/* Journey highlights */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-10">
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">2025</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="w-12 h-0.5 bg-gray-300 self-center hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">2+</div>
                <div className="text-sm text-gray-600">Founders</div>
              </div>
              <div className="w-12 h-0.5 bg-gray-300 self-center hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">Fast</div>
                <div className="text-sm text-gray-600">Growth</div>
              </div>
            </div>
          </motion.div>
          
          {/* Desktop Timeline - Hidden on mobile */}
          <div className="hidden lg:block max-w-6xl mx-auto relative pb-12">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 via-gray-600 to-gray-900 rounded-full shadow-md"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${milestone.title}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-32"
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-12 h-12 bg-white border-4 border-gray-900 rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  </div>
                  {/* Pulse animation */}
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-gray-900 opacity-20 animate-ping" style={{ animationDuration: '3s' }}></div>
                </div>
                
                {/* Content container */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'ml-0 mr-auto text-right pr-16' : 'ml-auto mr-0 text-left pl-16'}`}>
                  {/* Year badge */}
                  <div className="inline-block bg-gray-900 text-white px-5 py-2 rounded-lg text-base font-semibold mb-4 shadow-md">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <motion.div 
                    className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 ${
                      index % 2 === 0 ? 'mr-10 transform hover:-translate-x-2 hover:-translate-y-1' : 'ml-10 transform hover:translate-x-2 hover:-translate-y-1'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{milestone.description}</p>
                    
                    {/* Milestone icon and key achievement */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                          {index === 0 && (
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                          )}
                          {index === 1 && (
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                          )}
                          {index === 2 && (
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                          )}
                        </div>
                        <span className="ml-3 text-gray-500 font-medium">
                          {index === 0 && "Idea to Inception"}
                          {index === 1 && "First Product Release"}
                          {index === 2 && "Future Growth"}
                        </span>
                      </div>
                      
                      {/* Key achievement tag */}
                      <div className="bg-gray-50 px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                        {index === 0 && "Team Formation"}
                        {index === 1 && "MVP Launch"}
                        {index === 2 && "Growth Planning"}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Timeline image/icon on opposite side */}
                <div className={`absolute top-0 w-5/12 h-full flex items-center ${index % 2 === 0 ? 'right-0 justify-start pl-16' : 'left-0 justify-end pr-16'}`}>
                  <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-200 shadow-md flex items-center justify-center opacity-80">
                    {index === 0 && (
                      <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Final dot */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 rounded-full shadow-lg z-20 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Mobile Timeline - Enhanced Cards layout */}
          <div className="lg:hidden space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${milestone.title}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Vertical connector line for mobile */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-5 top-full w-1 h-12 bg-gradient-to-b from-gray-400 to-gray-300 rounded-full z-0"></div>
                )}
                
                <motion.div 
                  className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg border border-gray-100 ml-12 sm:ml-14"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Year badge with dot */}
                  <div className="absolute left-0 top-6 flex items-center">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-md">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {/* Pulse animation */}
                      <div className="absolute w-10 h-10 rounded-full bg-gray-900 opacity-20 animate-ping" style={{ animationDuration: '3s' }}></div>
                    </div>
                    <div className="w-5 h-0.5 bg-gray-300"></div>
                  </div>
                  
                  <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4 shadow-sm">
                  {milestone.year}
                </div>
                
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                  
                  {/* Milestone icon and tag for mobile */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                        {index === 0 && (
                          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                          </svg>
                        )}
                      </div>
                      <span className="ml-2 text-sm text-gray-700 font-medium">
                        {index === 0 && "Idea to Inception"}
                        {index === 1 && "First Product Release"}
                        {index === 2 && "Future Growth"}
                      </span>
                    </div>
                    
                    <div className="bg-gray-50 px-3 py-1 rounded-full text-xs text-gray-700 border border-gray-200 shadow-sm">
                      {index === 0 && "Team Formation"}
                      {index === 1 && "MVP Launch"}
                      {index === 2 && "Growth Planning"}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            
            {/* Final dot for mobile */}
            <div className="relative flex justify-center">
              <div className="w-8 h-8 bg-gray-900 rounded-full shadow-lg z-20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Vision statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gray-50 rounded-full -translate-x-1/4 -translate-y-1/4 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-50 rounded-full translate-x-1/4 translate-y-1/4 opacity-70"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
                <span className="text-sm font-medium text-gray-800">The Future</span>
                <span className="w-2 h-2 bg-gray-800 rounded-full ml-2"></span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Join Us on This Journey</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
                We&apos;re just getting started, and the road ahead is filled with innovation and growth.
                Our mission is to transform how businesses approach marketing — making it more
                intelligent, efficient, and impactful every step of the way.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex flex-col items-center px-6 py-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 mb-1">2025</div>
                  <div className="text-xs text-gray-600">Founded</div>
                </div>
                <div className="flex flex-col items-center px-6 py-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-xs text-gray-600">AI Support</div>
                </div>
                <div className="flex flex-col items-center px-6 py-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 mb-1">Global</div>
                  <div className="text-xs text-gray-600">Reach</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <a 
                  href="https://app.amtop.in/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <span className="text-lg">Start Your Journey With Us</span>
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
