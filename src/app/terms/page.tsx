'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Shield, Users, Globe, Calendar, Mail, Phone, AlertTriangle } from 'lucide-react';

const TermsOfServicePage = () => {
  const lastUpdated = 'December 10, 2024';
  const effectiveDate = 'December 10, 2024';

  const keyTerms = [
    {
      title: 'Acceptance of Terms',
      description: 'By accessing or using amTop services, you agree to be bound by these terms and conditions.'
    },
    {
      title: 'Service Description',
      description: 'amTop provides AI-powered automation services including workflow automation, AI agents, and business process optimization.'
    },
    {
      title: 'User Accounts',
      description: 'You are responsible for maintaining the security of your account and all activities that occur under it.'
    },
    {
      title: 'Acceptable Use',
      description: 'You agree to use our services only for lawful purposes and in accordance with these terms.'
    }
  ];

  const prohibitedActivities = [
    'Violating any applicable laws or regulations',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with the proper functioning of our services',
    'Using our services for malicious or harmful purposes',
    'Violating intellectual property rights',
    'Engaging in spam or unsolicited communications'
  ];

  const serviceTerms = [
    {
      category: 'Availability',
      description: 'We strive to maintain 99.9% uptime but do not guarantee uninterrupted service.',
      details: 'Scheduled maintenance windows will be communicated in advance.'
    },
    {
      category: 'Support',
      description: 'Technical support is available during business hours for paid plans.',
      details: 'Response times vary based on plan tier and issue severity.'
    },
    {
      category: 'Updates',
      description: 'We may update our services and features from time to time.',
      details: 'Significant changes will be communicated via email or in-app notifications.'
    }
  ];

  const paymentTerms = [
    {
      term: 'Billing Cycle',
      description: 'Billing occurs monthly or annually based on your selected plan.'
    },
    {
      term: 'Payment Methods',
      description: 'We accept major credit cards, bank transfers, and other approved payment methods.'
    },
    {
      term: 'Refunds',
      description: 'Refunds are provided according to our refund policy and applicable laws.'
    },
    {
      term: 'Price Changes',
      description: 'We may change prices with 30 days notice to existing customers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              These terms govern your use of amTop services. Please read them carefully before using our platform.
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
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important terms that govern your relationship with amTop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTerms.map((term) => (
              <div
                key={term.title}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{term.title}</h3>
                <p className="text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prohibited Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Activities that are not allowed when using our services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Terms */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important details about how our services work and what you can expect.
            </p>
          </div>

          <div className="space-y-6">
            {serviceTerms.map((term) => (
              <div
                key={term.category}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{term.category}</h3>
                <p className="text-gray-600 mb-3">{term.description}</p>
                <p className="text-gray-500 text-sm">{term.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important information about billing, payments, and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentTerms.map((term) => (
              <div
                key={term.term}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{term.term}</h3>
                <p className="text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have questions about these terms of service, please contact our legal team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">admin@amtop.in</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Phone size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 9265249821</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
