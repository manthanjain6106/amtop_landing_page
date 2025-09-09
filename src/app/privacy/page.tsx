'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Database, Users, Globe, Calendar, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const lastUpdated = '09-09-2025';
  const effectiveDate = '09-09-2025';

  const informationWeCollect = [
    {
      category: 'Information You Provide Directly',
      items: [
        'Account details such as your name, email address, phone number, and company information',
        'Payment and billing information when you subscribe to our services',
        'Content you upload, including ad creatives, campaign settings, and business documents'
      ]
    },
    {
      category: 'Information Collected Automatically',
      items: [
        'Usage data such as log files, IP addresses, browser type, operating system, and activity within our platform',
        'Device information such as identifiers, time zone, and language preferences'
      ]
    },
    {
      category: 'Information from Third-Party Integrations',
      items: [
        'Meta Ads (Facebook & Instagram Ads Manager) – ad performance, audience insights, and engagement data',
        'Google Analytics – website traffic, user behavior, and conversion metrics',
        'Google Search Console – keyword performance, impressions, and click-through rates',
        'Facebook APIs – page insights, audience sentiment, and content engagement metrics'
      ]
    },
    {
      category: 'Competitive Intelligence & Research Data',
      items: [
        'Publicly available market data',
        'Reports, benchmarks, and comparisons relevant to your industry'
      ]
    }
  ];

  const howWeUseInfo = [
    'Automate and optimize your ad campaigns',
    'Provide insights on audience sentiment and engagement',
    'Manage and schedule your content',
    'Generate analytics reports and white papers tailored to your business',
    'Improve, maintain, and secure our platform',
    'Communicate with you regarding updates, support, and promotions'
  ];

  const dataSharing = [
    {
      partner: 'Service Providers and Partners',
      description: 'Who assist in hosting, data processing, and analytics',
      dataShared: 'Limited to what\'s necessary for service delivery',
      safeguards: 'Strict data processing agreements and security requirements'
    },
    {
      partner: 'Third-Party Integrations',
      description: 'Meta, Google when you connect your accounts',
      dataShared: 'Only data necessary for integration functionality',
      safeguards: 'Your explicit consent and integration terms'
    },
    {
      partner: 'Legal Compliance',
      description: 'When required by law, regulation, or court order',
      dataShared: 'Only what is legally required',
      safeguards: 'Legal review and minimal disclosure'
    },
    {
      partner: 'Business Transfer',
      description: 'In case of merger, acquisition, or sale of assets',
      dataShared: 'Subject to same privacy protections',
      safeguards: 'Continued compliance with this privacy policy'
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Access and obtain a copy of your personal data',
      icon: Eye
    },
    {
      right: 'Correction',
      description: 'Request correction or deletion of your information',
      icon: Database
    },
    {
      right: 'Deletion',
      description: 'Request deletion of your personal data',
      icon: Lock
    },
    {
      right: 'Restriction',
      description: 'Restrict or object to certain processing activities',
      icon: Shield
    },
    {
      right: 'Withdraw Consent',
      description: 'Withdraw consent for third-party integrations',
      icon: Users
    },
    {
      right: 'Data Portability',
      description: 'Port your data to another service provider',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              amTop (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates Agentic Marketing Solution, a platform that helps businesses 
              create and manage advertisements automatically, grow their online presence organically, analyze audience 
              sentiment, integrate with third-party analytics platforms, and generate competitive intelligence and business white papers.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This Privacy Policy explains how we collect, use, share, and protect your information when you use our services.
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

      {/* Information We Collect */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We collect the following categories of information:
            </p>
          </div>

          <div className="space-y-8">
            {informationWeCollect.map((category) => (
              <div
                key={category.category}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use collected information to:
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <ul className="space-y-4">
              {howWeUseInfo.map((use, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700 text-lg">{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How We Share Your Information */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              3. How We Share Your Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We do not sell your personal information. However, we may share your data in the following cases:
            </p>
          </div>

          <div className="space-y-6">
            {dataSharing.map((partner) => (
              <div
                key={partner.partner}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              4. Data Retention
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We retain your information only as long as necessary to provide our services, comply with legal obligations, or resolve disputes. You may request deletion of your data at any time (see Your Rights below).
            </p>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use industry-standard safeguards to protect your information, including encryption, access controls, and secure data storage. However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Depending on your jurisdiction, you may have the following rights:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right) => (
              <div
                key={right.right}
                className="bg-white p-6 rounded-xl text-center shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <right.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{right.right}</h3>
                <p className="text-gray-600">{right.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 p-8 rounded-2xl text-center">
            <p className="text-lg text-gray-700">
              To exercise these rights, contact us at <a href="mailto:admin@amtop.in" className="text-blue-600 font-semibold hover:underline">admin@amtop.in</a>
            </p>
          </div>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              7. International Data Transfers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If you are accessing our services from outside your country, your data may be transferred to and processed in countries with different data protection laws. We implement safeguards to ensure compliance with applicable regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our services are not directed to individuals under 18. We do not knowingly collect personal data from children. If you believe a child has provided us data, please contact us for deletion.
            </p>
          </div>
        </div>
      </section>

      {/* Updates to Privacy Policy */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              9. Updates to this Privacy Policy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We may update this Privacy Policy periodically. The updated version will be posted with a new &quot;Last Updated&quot; date. Significant changes will be communicated to users.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              10. Contact Us
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about this Privacy Policy or our practices, please contact:
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">amTop</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <Mail size={20} className="text-blue-600" />
                    <span className="text-gray-700">Email: <a href="mailto:admin@amtop.in" className="text-blue-600 font-semibold hover:underline">admin@amtop.in</a></span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Globe size={20} className="text-blue-600" />
                    <span className="text-gray-700">Website: <a href="https://amtop.in" className="text-blue-600 font-semibold hover:underline">amTop.in</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
