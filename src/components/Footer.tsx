'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { useEmailSubscription } from '@/utils/useEmailSubscription';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [email, setEmail] = useState('');
  const { subscribe, isLoading, error, success, reset } = useEmailSubscription();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Changelog', href: '/changelog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Press', href: '/press' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-600' },
    { name: 'Email', icon: Mail, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-white text-gray-900 border-t-2 border-gray-200 ">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {/* Brand Section */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <div className="mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">amTop</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Transform your business with intelligent AI agents that automate workflows, 
                optimize processes, and drive growth 24/7.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                  Stay updated with our newsletter
                </h4>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  if (email.trim()) {
                    await subscribe(email.trim(), 'footer_newsletter', 'footer');
                    if (success) {
                      setEmail('');
                      setTimeout(() => reset(), 3000);
                    }
                  }
                }} className="space-y-2">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                      disabled={isLoading}
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isLoading || !email.trim()}
                      className="bg-black hover:bg-gray-800 disabled:bg-gray-400 px-3 sm:px-4 py-2 sm:py-3 rounded-r-lg transition-colors duration-200 text-white disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                      )}
                    </motion.button>
                  </div>
                  {error && (
                    <p className="text-xs text-red-600">{error}</p>
                  )}
                  {success && (
                    <p className="text-xs text-green-600">{success}</p>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="sm:w-4 sm:h-4" />
                  <span>amarnath@amtop.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="flex flex-col items-start"
              >
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-200 py-6 sm:py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
              © 2025 amTop. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-600 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
