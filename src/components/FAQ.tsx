'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are AI agents and how do they work?",
      answer: "AI agents are intelligent software programs that can autonomously perform tasks, make decisions, and learn from experience. They work by analyzing data, following predefined rules, and using machine learning to improve their performance over time. Our platform makes it easy to create and deploy these agents without any coding knowledge."
    },
    {
      question: "How secure is the platform?",
      answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and follow industry best practices. All data is encrypted in transit and at rest, and we provide role-based access controls, audit logs, and secure API endpoints. We also offer SSO integration for enterprise customers."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! We offer 100+ pre-built integrations with popular tools like Slack, Zapier, Salesforce, HubSpot, and many more. You can also create custom integrations using our API. Our platform is designed to work seamlessly with your existing tech stack."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including documentation, video tutorials, community forums, and direct support channels. Pro users get priority support, and Enterprise customers receive dedicated account management and 24/7 phone support. We also provide custom training sessions for enterprise teams."
    },
    {
      question: "How long does it take to get started?",
      answer: "You can get started in minutes! Our platform is designed for instant deployment. Simply choose a template, configure your preferences, and launch your first AI agent. Most users see results within the first day, and our team is available to help with any setup questions."
    },
    {
      question: "Can I customize the AI agents for my specific needs?",
      answer: "Absolutely! While we provide pre-built templates for common use cases, our platform is highly customizable. You can modify agent behavior, create custom workflows, integrate with your data sources, and even train agents on your specific domain knowledge. Enterprise customers can work with our team to build completely custom solutions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column - Title and Description */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Contact our support team and we&apos;ll get back to you shortly.
            </p>
            
            {/* Additional Info */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our team is here to help you get the most out of our platform.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{
                    height: { duration: 0.3, ease: 'easeInOut' },
                    opacity: { duration: 0.2, ease: 'easeInOut' }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
