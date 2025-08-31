'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Eye, Lock, Database, Users, Globe, Calendar, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const lastUpdated = 'December 10, 2024';
  const effectiveDate = 'December 10, 2024';

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are clear about what data we collect and how we use it.'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Your data is encrypted and stored securely using enterprise-grade infrastructure.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your data and can request deletion at any time.'
    }
  ];

  const dataCategories = [
    {
      category: 'Personal Information',
      examples: ['Name, email address, phone number', 'Company name and job title', 'Profile information and preferences'],
      purpose: 'To provide our services, communicate with you, and personalize your experience'
    },
    {
      category: 'Usage Data',
      examples: ['Login times and session duration', 'Feature usage and interactions', 'Performance metrics and analytics'],
      purpose: 'To improve our services, troubleshoot issues, and optimize performance'
    },
    {
      category: 'Technical Data',
      examples: ['IP address and device information', 'Browser type and version', 'Operating system and platform'],
      purpose: 'To ensure security, prevent fraud, and provide technical support'
    }
  ];

  const dataSharing = [
    {
      partner: 'Service Providers',
      description: 'Third-party vendors who help us deliver our services (hosting, analytics, support)',
      dataShared: 'Limited to what\'s necessary for service delivery',
      safeguards: 'Strict data processing agreements and security requirements'
    },
    {
      partner: 'Legal Requirements',
      description: 'When required by law, court order, or government request',
      dataShared: 'Only what is legally required',
      safeguards: 'Legal review and minimal disclosure'
    },
    {
      partner: 'Business Transfers',
      description: 'In case of merger, acquisition, or sale of assets',
      dataShared: 'Subject to same privacy protections',
      safeguards: 'Continued compliance with this privacy policy'
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data',
      icon: Eye
    },
    {
      right: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: Database
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Lock
    },
    {
      right: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Users
    },
    {
      right: 'Objection',
      description: 'Object to certain types of data processing',
      icon: Shield
    },
    {
      right: 'Restriction',
      description: 'Limit how we process your data',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Effective Date: {effectiveDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow these core principles to ensure your privacy and data security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <principle.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
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
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We collect only the information necessary to provide and improve our services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples</h4>
                    <ul className="space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-gray-600">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Purpose</h4>
                    <p className="text-gray-600">{category.purpose}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
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
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use your information responsibly to provide and improve our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Delivery</h3>
              <p className="text-gray-600">To provide our AI automation services, process transactions, and deliver customer support.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Improvement</h3>
              <p className="text-gray-600">To analyze usage patterns, improve features, and develop new capabilities.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-purple-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication</h3>
              <p className="text-gray-600">To send important updates, respond to inquiries, and provide technical support.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-orange-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600">To protect against fraud, ensure account security, and maintain system integrity.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-red-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance</h3>
              <p className="text-gray-600">To meet legal obligations, enforce our terms, and protect our rights.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-indigo-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalization</h3>
              <p className="text-gray-600">To customize your experience and provide relevant content and recommendations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
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
              Data Sharing and Disclosure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We do not sell your personal information. We only share data when necessary and with appropriate safeguards.
            </p>
          </motion.div>

          <div className="space-y-6">
            {dataSharing.map((partner, index) => (
              <motion.div
                key={partner.partner}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{partner.partner}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Data Shared</h4>
                    <p className="text-gray-600 text-sm">{partner.dataShared}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Safeguards</h4>
                    <p className="text-gray-600 text-sm">{partner.safeguards}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
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
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You have control over your personal data. Here are your rights and how to exercise them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <right.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{right.right}</h3>
                <p className="text-gray-600">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
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
              Data Security
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We implement comprehensive security measures to protect your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Safeguards</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">End-to-end encryption for data in transit and at rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Multi-factor authentication and access controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">24/7 monitoring and threat detection</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Organizational Measures</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Employee training on data protection and privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Strict access controls and least privilege principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Incident response procedures and breach notification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">Regular privacy impact assessments</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have questions about this privacy policy or want to exercise your rights, 
              please contact our privacy team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">privacy@amtop.ai</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Phone size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Globe size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Online</h3>
                <p className="text-gray-600">Privacy Request Form</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
