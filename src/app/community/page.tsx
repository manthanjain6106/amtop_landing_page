'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageSquare, Calendar, BookOpen, ExternalLink, Rocket, Zap, Users } from 'lucide-react';

const CommunityPage = () => {

  const upcomingFeatures = [
    {
      title: 'Community Forums',
      description: 'Discussion boards for users to share insights and get help',
      status: 'Coming Soon',
      icon: MessageSquare
    },
    {
      title: 'Live Events',
      description: 'Webinars and Q&A sessions with the team',
      status: 'Planned',
      icon: Calendar
    },
    {
      title: 'User Groups',
      description: 'Specialized groups for different use cases',
      status: 'Future',
      icon: Users
    },
    {
      title: 'Knowledge Base',
      description: 'Comprehensive guides and documentation',
      status: 'In Development',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding-top section-padding-bottom bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket size={16} />
              New Startup - Building the Future
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our Growing Community
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We&apos;re a new startup building the future of Agentic Marketing Intelligence. 
              Join our Discord server to connect with the founders, get early access, and be part of our journey from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/VYyBafcB"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Join Discord Server
                <ExternalLink size={16} />
              </a>
              <button
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Upcoming Features */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Coming Next
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re building an amazing community experience. Here&apos;s what we have planned for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-300 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon size={20} className="text-blue-600" />
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    feature.status === 'Coming Soon' ? 'bg-green-100 text-green-800' :
                    feature.status === 'In Development' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-sm text-gray-500">
                  Stay tuned for updates on our Discord server!
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord Server Info */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Discord Server
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect directly with the founders, get early access to features, and be part of our growing community.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <MessageSquare size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">amTop Discord Community</h3>
              <p className="text-gray-600 mb-6">
                Our Discord server is where the magic happens. Get direct access to the founders, 
                share feedback, and be the first to know about new features and updates.
              </p>
              <div className="space-y-4 text-left mb-8">
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Direct access to founders</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Early access to new features</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Real-time updates and announcements</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Shape the product with your feedback</span>
                </div>
              </div>
              <a
                href="https://discord.gg/VYyBafcB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
              >
                <MessageSquare size={24} />
                Join Discord Server
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Be Part of Our Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our Discord server and be part of building the future of Agentic Marketing Intelligence. 
              Your feedback shapes our product!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/VYyBafcB"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Join Discord Now
                <ExternalLink size={16} />
              </a>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Learn More About amTop
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;
