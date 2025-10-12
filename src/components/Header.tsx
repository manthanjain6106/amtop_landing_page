'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];



  // Simple animation variants
  const headerVariants = {
    hidden: { y: -20 },
    visible: { y: 0, transition: { duration: 0.3 } }
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-100' 
            : 'bg-white/5 backdrop-blur-sm'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center h-12 sm:h-16 md:h-18 lg:h-20 relative group"
            >
              <Image
                src="/images/logo.png"
                alt="amTop Logo"
                width={80}
                height={80}
                className="h-12 sm:h-16 md:h-18 lg:h-20 w-auto object-contain invert transition-transform duration-300 group-hover:scale-105"
              />
            </motion.a>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8 xl:space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-800 hover:text-black font-medium transition-colors duration-200 relative group text-sm xl:text-base px-2 py-1 rounded-md"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <motion.a
                href="https://app.amtop.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-r from-[#0066ff] to-[#00aaff] hover:from-[#0055dd] hover:to-[#0099ff] text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl shadow-md hover:shadow-blue-200/50 hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm xl:text-base hover:scale-105"
              >
                Start Free
                <ArrowRight size={16} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 mobile-menu border border-transparent hover:border-gray-200 hover:shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:hidden border-t border-gray-200 bg-white/98 backdrop-blur-lg mobile-menu shadow-lg"
              >
                <div className="py-4 space-y-3">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="block px-4 py-3 text-gray-800 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-base border-l-2 border-transparent hover:border-l-2 hover:border-gray-900 pl-5"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <div className="px-4 pt-4 border-t border-gray-200">
                    <motion.a
                      href="https://app.amtop.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full bg-gradient-to-r from-[#0066ff] to-[#00aaff] hover:from-[#0055dd] hover:to-[#0099ff] text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-blue-200/50 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base hover:scale-[1.02]"
                    >
                      Start Free
                      <ArrowRight size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>


    </>
  );
};

export default Header;
