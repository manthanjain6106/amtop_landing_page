'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, BarChart3, Users, Clock } from 'lucide-react';

const ScrollContainer = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    {
      id: 'intelligent-automation',
      title: 'Intelligent Marketing Automation',
      subtitle: 'AI that learns your marketing patterns and takes the busywork off your plate.',
      description: 'No more wasting time on boring tasks. See trends as they happen, keep an eye on competitors, and let your campaigns get better on their own — all from one easy dashboard that runs on smart automation.',
      icon: Brain,
      features: [
        'AI that evolves with your marketing data',
        'Campaigns get sharper every day',
        'Free up your time to focus on growth'
      ]
    },
    {
      id: 'lightning-fast',
      title: 'Lightning Fast Insights',
      subtitle: 'Stop waiting — start acting.',
      description: 'Don\'t wait hours for updates. Get refreshed insights in seconds — faster than Google Search Console. Whether it\'s tracking performance, spotting issues, or scaling operations, everything runs at lightning speed so you can move ahead without delays.',
      icon: Zap,
      features: [
        'Insights when you need them, not hours later',
        'Handle more without slowing down',
        'Smooth, fast, and built for growth'
      ]
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise Security',
      subtitle: 'Bank-level security built in',
      description: 'Your data is protected by enterprise-grade security with SOC 2 compliance, end-to-end encryption, and military-grade protection protocols.',
      icon: Shield,
      features: [
        'Trusted by the world\'s top platforms',
        'Protection at every step',
        'Only you can access your data'
      ]
    },
    {
      id: 'real-time-analytics',
      title: 'Real-time Analytics',
      subtitle: 'We bring the insights, you make the moves.',
      description: 'Forget digging through endless reports. Your key metrics, live trends, and competitor moves are all delivered in real time. Everything\'s prepared and ready — all you need to do is act.',
      icon: BarChart3,
      features: [
        'Performance at a glance, always updated',
        'The numbers you need, right when you need them',
        'Decisions made simple, opportunities made obvious'
      ]
    },
    {
      id: 'team-collaboration',
      title: 'Team Collaboration',
      subtitle: 'Work together seamlessly',
      description: 'Work together seamlessly with role-based access, shared workspaces, and real-time collaboration tools.',
      icon: Users,
      features: [
        'Role-based Access',
        'Shared Workspaces',
        'Real-time Collaboration'
      ]
    },
    {
      id: 'always-on',
      title: 'Always On',
      subtitle: 'AI that never sleeps, with a team that\'s always awake for you.',
      description: 'Day or night, your operations never stop. AI monitors everything 24/7, and our team is always ready when you need real support. Reliable, nonstop, and worry-free.',
      icon: Clock,
      features: [
        'Your business runs round the clock',
        'Zero downtime, no interruptions',
        'AI plus humans, keeping watch always'
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        const containerHeight = scrollContainerRef.current.clientHeight;
        const scrollHeight = scrollContainerRef.current.scrollHeight;
        const maxScroll = scrollHeight - containerHeight;
        
        // Calculate which section is currently in view
        const sectionHeight = maxScroll / (sections.length - 1);
        const newSection = Math.round(scrollTop / sectionHeight);
        const clampedSection = Math.max(0, Math.min(newSection, sections.length - 1));
        
        if (clampedSection !== currentSection) {
          setCurrentSection(clampedSection);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [currentSection, sections.length]);

  const currentSectionData = sections[currentSection];

  return (
    <section className="relative min-h-screen bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start min-h-screen">
          {/* Left Content - Changes based on scroll */}
          <div className="sticky top-20 sm:top-24 h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-md"
            >
              <div className="mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <currentSectionData.icon size={24} className="sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-black mb-4">
                  {currentSectionData.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-xl text-gray-600 mb-6">
                  {currentSectionData.subtitle}
                </p>
                <p className="text-xs sm:text-sm md:text-base xl:text-base 2xl:text-lg text-gray-700 leading-relaxed mb-8">
                  {currentSectionData.description}
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {currentSectionData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm xl:text-sm 2xl:text-base font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Scrollable Content */}
          <div className="h-screen overflow-auto scrollbar-hide scroll-container hidden lg:block" ref={scrollContainerRef}>
            <div className="min-h-full">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="h-screen flex items-center justify-center p-8 border-l border-gray-200"
                >
                  <div className="text-center max-w-md px-4 sm:px-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <section.icon size={24} className="text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600">
                      {section.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Friendly Alternative */}
      <div className="lg:hidden bg-gray-50 py-12 sm:py-16">
        <div className="container-max px-4">
          <div className="space-y-8 sm:space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <section.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                    {section.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {section.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {section.description}
                  </p>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollContainer;
