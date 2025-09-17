'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageSquare, Calendar, BookOpen, ExternalLink, Rocket, Zap, Users, Video, FileText, HelpCircle, UserCheck } from 'lucide-react';

const CommunityPage = () => {

  const upcomingFeatures = [
    {
      title: 'Live Events (Happening Now)',
      description: 'Join weekly webinars, AMAs, and exclusive workshops where we cover everything from SEO playbooks to campaign optimization. You\'ll get real-time access to our team, guest experts, and actionable tactics you can put to work the same day. Every event is designed to cut through the noise and deliver strategies that move your ROI.',
      status: 'Happening Now',
      icon: Video
    },
    {
      title: 'Community Forums (Coming Soon)',
      description: 'An interactive space for sharing insights, asking questions, and connecting with like-minded founders and marketers. From troubleshooting integrations to swapping growth hacks, this will be the go-to hub for peer-to-peer learning and support — with our team jumping in when you need extra help.',
      status: 'Coming Soon',
      icon: MessageSquare
    },
    {
      title: 'Blogs & Power Pages (In Progress)',
      description: 'Our blog delivers fresh content weekly, including best practices, case studies, and industry trends. Power Pages go a step further — long-form, data-backed guides packed with advanced strategies you\'d normally only find in paid playbooks. Think "The Ultimate Guide to Scaling Ads" or "SEO That Drives Revenue, Not Just Traffic."',
      status: 'In Progress',
      icon: FileText
    },
    {
      title: 'Knowledge Base (In Development)',
      description: 'Step-by-step guides, video tutorials, and product walkthroughs designed to help you unlock every feature in amTop. Whether you\'re setting up your first campaign or automating entire workflows, the knowledge base will give you answers instantly without waiting for support.',
      status: 'In Development',
      icon: HelpCircle
    },
    {
      title: 'User Groups (Future)',
      description: 'Tailored groups for power users based on their goals — from B2B SaaS growth teams to eCommerce marketers to agencies managing multiple clients. These groups will help you go deeper into your niche with others solving the exact same challenges.',
      status: 'Future',
      icon: UserCheck
    },
    {
      title: 'API & Integrations (Planned)',
      description: 'Comprehensive API access and pre-built integrations with popular marketing tools, CRMs, and analytics platforms. Connect amTop with your entire tech stack for seamless data flow and automated workflows.',
      status: 'Planned',
      icon: Zap
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
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Join Discord Server
                <ExternalLink size={16} />
              </a>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Header with icon and status */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <span className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
                      feature.status === 'Happening Now' ? 'bg-red-50 text-red-700 border-red-200' :
                      feature.status === 'Coming Soon' ? 'bg-green-50 text-green-700 border-green-200' :
                      feature.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      feature.status === 'In Development' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                      feature.status === 'Planned' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                      'bg-gray-50 text-gray-700 border-gray-200'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-6" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {feature.description}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 font-medium">
                      Updates on Discord
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gray-400 transition-colors"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Join Our Community?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building more than just a product — we&apos;re creating a movement of founders and marketers who believe in working smarter, not harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Founder Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Chat directly with Amarnath, Anant, and the team. Get your questions answered by the people who built amTop from the ground up.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Rocket size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Early Access & Beta Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Be the first to try new features, provide feedback that shapes the product, and get exclusive access to beta versions before public release.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Peer Learning & Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with like-minded founders and marketers. Share strategies, troubleshoot together, and learn from others facing similar challenges.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusive Events & Workshops</h3>
              <p className="text-gray-600 leading-relaxed">
                Join weekly webinars, AMAs, and hands-on workshops where we dive deep into marketing strategies that actually move the needle.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Updates</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant notifications about new features, platform updates, and important announcements. Stay ahead of the curve with live updates.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusive Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to private playbooks, case studies, and advanced guides that aren&apos;t available anywhere else. Premium content for community members only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Be Part of Our Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our Discord server and be part of building the future of Agentic Marketing Intelligence. 
              Your feedback shapes our product!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/VYyBafcB"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Join Discord Now
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;
