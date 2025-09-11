'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

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
            ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center h-12 sm:h-16 md:h-18 lg:h-20"
            >
              <img
                src="/images/logo.png"
                alt="amTop Logo"
                className="h-12 sm:h-16 md:h-18 lg:h-20 w-auto object-contain brightness-0 filter"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-700 hover:text-black font-medium transition-colors duration-200 relative group text-sm xl:text-base"
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
                className="bg-black hover:bg-gray-800 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 text-sm xl:text-base"
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
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 mobile-menu"
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
                className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg mobile-menu"
              >
                <div className="py-4 space-y-3">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-base"
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
                      className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-base"
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
