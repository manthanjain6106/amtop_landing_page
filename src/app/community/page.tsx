'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageSquare, Calendar, Award, Star, TrendingUp, Globe, Heart, Share2, BookOpen } from 'lucide-react';

const CommunityPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const communityStats = [
    { number: '50K+', label: 'Active Members', icon: Users },
    { number: '100+', label: 'Countries', icon: Globe },
    { number: '1M+', label: 'Discussions', icon: MessageSquare },
    { number: '500+', label: 'Events', icon: Calendar }
  ];

  const discussionTopics = [
    {
      title: 'Best practices for AI agent training',
      author: 'Sarah Chen',
      replies: 24,
      views: '1.2k',
      category: 'AI & ML',
      isHot: true,
      lastActivity: '2 hours ago'
    },
    {
      title: 'Workflow automation tips and tricks',
      author: 'Mike Rodriguez',
      replies: 18,
      views: '856',
      category: 'Automation',
      isHot: false,
      lastActivity: '5 hours ago'
    },
    {
      title: 'Integration with Salesforce - need help!',
      author: 'Alex Thompson',
      replies: 31,
      views: '2.1k',
      category: 'Integrations',
      isHot: true,
      lastActivity: '1 hour ago'
    },
    {
      title: 'Team collaboration best practices',
      author: 'Emma Wilson',
      replies: 15,
      views: '743',
      category: 'Team Management',
      isHot: false,
      lastActivity: '8 hours ago'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Agent Masterclass',
      date: 'Dec 15, 2024',
      time: '2:00 PM EST',
      type: 'Webinar',
      attendees: 150,
      speaker: 'Dr. James Chen'
    },
    {
      title: 'Community Meetup - San Francisco',
      date: 'Dec 20, 2024',
      time: '6:00 PM PST',
      type: 'In-Person',
      attendees: 45,
      speaker: 'Local Community'
    },
    {
      title: 'Q&A with Product Team',
      date: 'Dec 22, 2024',
      time: '1:00 PM EST',
      type: 'Live Q&A',
      attendees: 200,
      speaker: 'Product Team'
    }
  ];

  const userGroups = [
    {
      name: 'Enterprise Users',
      members: 2500,
      description: 'For large organizations using amTop at scale',
      category: 'Enterprise'
    },
    {
      name: 'Startup Founders',
      members: 1800,
      description: 'Connect with fellow entrepreneurs',
      category: 'Startups'
    },
    {
      name: 'AI Enthusiasts',
      members: 3200,
      description: 'Share AI knowledge and experiences',
      category: 'AI/ML'
    },
    {
      name: 'Automation Experts',
      members: 2100,
      description: 'Advanced workflow automation discussions',
      category: 'Automation'
    }
  ];

  const featuredContributors = [
    {
      name: 'Sarah Chen',
      role: 'AI Engineer',
      company: 'TechCorp',
      contributions: 156,
      badges: ['Expert', 'Helper', 'Innovator'],
      avatar: '👩‍💻'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Automation Specialist',
      company: 'AutoFlow Inc',
      contributions: 89,
      badges: ['Helper', 'Community Leader'],
      avatar: '👨‍💼'
    },
    {
      name: 'Emma Wilson',
      role: 'Product Manager',
      company: 'StartupXYZ',
      contributions: 203,
      badges: ['Expert', 'Mentor', 'Innovator'],
      avatar: '👩‍💼'
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
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with fellow AI enthusiasts, share knowledge, and learn from the best in the industry. 
              Our community is where innovation meets collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Join Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Browse Forums
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon size={24} className="text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Forums */}
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
              Active Discussions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the conversation in our community forums. Ask questions, share insights, and learn from peers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {discussionTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {topic.isHot && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full flex items-center gap-1">
                          <TrendingUp size={12} />
                          Hot
                        </span>
                      )}
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {topic.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>By {topic.author}</span>
                      <span>💬 {topic.replies} replies</span>
                      <span>👁 {topic.views} views</span>
                      <span>{topic.lastActivity}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <Heart size={16} className="text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <Share2 size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Discussions
            </motion.button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our virtual and in-person events to learn, network, and grow your skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-300 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={20} className="text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">{event.type}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>📅 {event.date}</div>
                  <div>⏰ {event.time}</div>
                  <div>👥 {event.attendees} attendees</div>
                  <div>🎤 {event.speaker}</div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Register Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Groups */}
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
              Join User Groups
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with like-minded professionals in specialized groups tailored to your interests and needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userGroups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.name}</h3>
                    <p className="text-gray-600 mb-3">{group.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {group.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">👥 {group.members} members</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Join Group
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributors */}
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
              Featured Contributors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the community members who go above and beyond to help others succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="text-4xl mb-4">{contributor.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{contributor.name}</h3>
                <p className="text-gray-600 mb-2">{contributor.role}</p>
                <p className="text-gray-500 text-sm mb-4">{contributor.company}</p>
                <div className="flex justify-center gap-2 mb-4">
                  {contributor.badges.map((badge) => (
                    <span key={badge} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  {contributor.contributions} contributions
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join the Community?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with thousands of AI professionals, share your knowledge, and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;
