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
      title: 'Intelligent Automation',
      subtitle: 'AI agents that learn from your workflows',
      description: 'Our AI agents don\'t just follow rules—they learn from your workflows, adapt to changes, and continuously optimize performance for maximum efficiency.',
      icon: Brain,
      features: [
        'Continuous Learning',
        'Adaptive Intelligence', 
        'Smart Optimization'
      ]
    },
    {
      id: 'lightning-fast',
      title: 'Lightning Fast',
      subtitle: 'Execute complex tasks in seconds',
      description: 'Execute complex tasks in seconds, not hours. Scale your operations instantly with our optimized performance engine.',
      icon: Zap,
      features: [
        '10x Faster Execution',
        'Instant Scaling',
        'Optimized Performance'
      ]
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise Security',
      subtitle: 'Bank-level security built in',
      description: 'Your data is protected by enterprise-grade security with SOC 2 compliance, end-to-end encryption, and military-grade protection protocols.',
      icon: Shield,
      features: [
        'SOC 2 Type II Compliant',
        'End-to-End Encryption',
        'Zero-Knowledge Architecture'
      ]
    },
    {
      id: 'real-time-analytics',
      title: 'Real-time Analytics',
      subtitle: 'Monitor performance with live dashboards',
      description: 'Monitor performance, track metrics, and gain insights with live dashboards that update in real-time.',
      icon: BarChart3,
      features: [
        'Live Dashboards',
        'Real-time Metrics',
        'Instant Insights'
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
      subtitle: '24/7 continuous operation',
      description: 'Your AI agents never sleep. Continuous operation around the clock with automatic failover and monitoring.',
      icon: Clock,
      features: [
        '24/7 Operation',
        'Automatic Failover',
        'Continuous Monitoring'
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
        <div className="grid lg:grid-cols-2 gap-0 items-start min-h-screen">
          {/* Left Content - Changes based on scroll */}
          <div className="sticky top-24 h-screen flex items-center justify-center p-8">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-md"
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <currentSectionData.icon size={32} className="text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  {currentSectionData.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {currentSectionData.subtitle}
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  {currentSectionData.description}
                </p>
                
                <div className="space-y-4">
                  {currentSectionData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Scrollable Content */}
          <div className="h-screen overflow-auto scrollbar-hide scroll-container" ref={scrollContainerRef}>
            <div className="min-h-full">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="h-screen flex items-center justify-center p-8 border-l border-gray-200"
                >
                  <div className="text-center max-w-md">
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
    </section>
  );
};

export default ScrollContainer;
