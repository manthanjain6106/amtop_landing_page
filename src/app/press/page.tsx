'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Mail, Phone, MapPin, Calendar, User, FileText, Image, Video, ExternalLink, Camera, FileType, ArrowRight } from 'lucide-react';

export default function PressPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pressReleases = [
    {
      date: 'December 15, 2024',
      title: 'amTop Raises $50M Series C Funding to Accelerate Global Expansion',
      excerpt: 'Funding round led by leading venture capital firms to support product development and international market expansion.',
      category: 'Funding',
      readMore: '#'
    },
    {
      date: 'November 28, 2024',
      title: 'amTop Launches Revolutionary AI-Powered Analytics Platform',
      excerpt: 'New platform combines machine learning with real-time data processing to deliver unprecedented business insights.',
      category: 'Product Launch',
      readMore: '#'
    },
    {
      date: 'October 12, 2024',
      title: 'amTop Named Leader in Gartner Magic Quadrant for Business Intelligence',
      excerpt: 'Company recognized for its innovative approach to data analytics and user experience design.',
      category: 'Awards',
      readMore: '#'
    },
    {
      date: 'September 5, 2024',
      title: 'amTop Expands Executive Team with Industry Veterans',
      excerpt: 'New hires bring decades of experience in enterprise software and data analytics.',
      category: 'Leadership',
      readMore: '#'
    }
  ];

  const mediaKit = [
    {
      name: 'Company Logo',
      description: 'High-resolution logo files in various formats',
      icon: Image,
      download: '#',
      formats: ['PNG', 'SVG', 'EPS']
    },
    {
      name: 'Product Screenshots',
      description: 'Latest product screenshots and interface images',
      icon: Camera,
      download: '#',
      formats: ['PNG', 'JPG']
    },
    {
      name: 'Company Fact Sheet',
      description: 'Key company information and statistics',
      icon: FileText,
      download: '#',
      formats: ['PDF']
    },
    {
      name: 'Executive Headshots',
      description: 'Professional photos of company leadership',
      icon: User,
      download: '#',
      formats: ['JPG', 'PNG']
    },
    {
      name: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      icon: FileType,
      download: '#',
      formats: ['PDF']
    },
    {
      name: 'Product Videos',
      description: 'Demo videos and product overviews',
      icon: Video,
      download: '#',
      formats: ['MP4', 'MOV']
    }
  ];



  const recentNews = [
    {
      source: 'TechCrunch',
      title: 'amTop Revolutionizes Business Intelligence with AI',
      date: 'December 10, 2024',
      link: '#'
    },
    {
      source: 'Forbes',
      title: 'The Future of Data Analytics: amTop\'s Approach',
      date: 'November 25, 2024',
      link: '#'
    },
    {
      source: 'Business Insider',
      title: 'Startup Spotlight: amTop\'s Journey to Success',
      date: 'November 15, 2024',
      link: '#'
    },
    {
      source: 'VentureBeat',
      title: 'amTop Secures Major Funding for Expansion',
      date: 'October 30, 2024',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Press & Media
              <span className="text-blue-600"> Resources</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest news, press releases, and media resources from amTop.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Press Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Download Media Kit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Press Releases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest announcements and company news.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {release.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {release.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <a
                  href={release.readMore}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download high-quality assets for your media coverage and publications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {item.formats.map((format, formatIndex) => (
                      <span key={formatIndex} className="text-xs bg-white px-2 py-1 rounded text-gray-600">
                        {format}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Media Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what the media is saying about amTop.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600">{news.source}</span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{news.title}</h3>
                <a
                  href={news.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read Article <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Press Contact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our press team for media inquiries, interviews, and press opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Press Team</h3>
              <p className="text-gray-600 mb-4">For all media inquiries and press opportunities</p>
              <div className="space-y-2">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  press@amtop.com
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Headquarters</h3>
              <p className="text-gray-600 mb-4">Visit our main office for in-person meetings</p>
              <div className="text-sm text-gray-600">
                <p>123 Innovation Drive</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Press Team
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
