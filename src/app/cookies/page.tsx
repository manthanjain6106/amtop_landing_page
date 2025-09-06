'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield,
  Heart,
  Lightbulb,
  TrendingUp,
  Clock,
  Cookie,
  Settings,
  Lock
} from 'lucide-react';

const CookiePolicyPage = () => {
  const lastUpdated = 'December 10, 2024';

  const cookieTypes = [
    {
      type: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: ['Authentication, security, session management'],
      purpose: 'Cannot be disabled as they are necessary for the site to work',
      duration: 'Session or up to 1 year'
    },
    {
      type: 'Performance Cookies',
      description: 'Help us understand how visitors interact with our website',
      examples: ['Analytics, error tracking, performance monitoring'],
      purpose: 'To improve website performance and user experience',
      duration: 'Up to 2 years'
    },
    {
      type: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      examples: ['Language preferences, user settings, form data'],
      purpose: 'To remember your preferences and provide personalized features',
      duration: 'Up to 1 year'
    },
    {
      type: 'Marketing Cookies',
      description: 'Used for advertising and marketing purposes',
      examples: ['Social media integration, targeted advertising'],
      purpose: 'To show relevant content and measure advertising effectiveness',
      duration: 'Up to 2 years'
    }
  ];

  const cookieManagement = [
    {
      method: 'Browser Settings',
      description: 'Configure your browser to block or delete cookies',
      instructions: 'Check your browser\'s help section for cookie settings'
    },
    {
      method: 'Cookie Consent Tool',
      description: 'Use our cookie consent manager to control preferences',
      instructions: 'Click the cookie settings button in the footer'
    },
    {
      method: 'Third-Party Opt-Out',
      description: 'Opt out of specific third-party tracking',
      instructions: 'Visit individual service provider opt-out pages'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We&apos;re committed to protecting your privacy and being transparent about our data practices. 
              Learn about the types of cookies we use and how to manage them.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Clock size={16} />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cookies are small text files stored on your device that help us provide a better website experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Cookie size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Small Files</h3>
              <p className="text-gray-600">Tiny text files stored on your device when you visit our website.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Settings size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Remember Preferences</h3>
              <p className="text-gray-600">Help us remember your settings and provide personalized content.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Shield size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Safe</h3>
              <p className="text-gray-600">Cookies cannot access personal files or install malware on your device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use different types of cookies for various purposes. Here&apos;s what each type does.
            </p>
          </div>

          <div className="space-y-6">
            {cookieTypes.map((cookie) => (
              <div
                key={cookie.type}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{cookie.type}</h3>
                    <p className="text-gray-600">{cookie.description}</p>
                  </div>
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Examples</h4>
                    <p className="text-gray-600 text-sm">{cookie.examples}</p>
                  </div>
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Purpose</h4>
                    <p className="text-gray-600 text-sm">{cookie.purpose}</p>
                  </div>
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                    <p className="text-gray-600 text-sm">{cookie.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You have control over which cookies are stored on your device. Here are your options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cookieManagement.map((method) => (
              <div
                key={method.method}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.method}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-gray-500 text-sm">{method.instructions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Some cookies are placed by third-party services that help us provide better functionality.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Google Analytics - Website usage statistics</li>
                  <li>• Hotjar - User behavior analysis</li>
                  <li>• Mixpanel - Product analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Facebook Pixel - Social media tracking</li>
                  <li>• LinkedIn Insight Tag - Professional network</li>
                  <li>• Google Ads - Advertising performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              If you have questions about our cookie policy or want to manage your preferences, 
              please contact our privacy team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Lock size={24} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">admin@amtop.in</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Users size={24} className="text-yellow-600" />
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

export default CookiePolicyPage;
