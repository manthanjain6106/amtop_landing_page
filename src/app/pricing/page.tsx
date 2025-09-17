'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight, Zap } from 'lucide-react';

export default function PricingPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: 'Starter',
      originalPrice: '$29',
      price: 'FREE',
      period: 'forever',
      description: 'Perfect for individuals and small teams getting started with AI automation.',
      features: [
        'Up to 3 AI agents',
        'Basic workflow templates',
        'Community support',
        '1GB storage',
        'Standard integrations'
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'secondary',
      popular: false
    },
    {
      name: 'Professional',
      originalPrice: '$99',
      price: 'FREE',
      period: 'forever',
      description: 'Ideal for growing teams that need advanced automation capabilities.',
      features: [
        'Up to 25 AI agents',
        'Advanced workflow templates',
        'Priority support',
        '10GB storage',
        'Premium integrations',
        'Custom workflows',
        'Analytics dashboard',
        'Team collaboration'
      ],
      buttonText: 'Get Pro Free',
      buttonVariant: 'primary',
      popular: true
    },
    {
      name: 'Enterprise',
      originalPrice: '$299',
      price: 'FREE',
      period: 'forever',
      description: 'For large organizations requiring enterprise-grade features and support.',
      features: [
        'Unlimited AI agents',
        'Custom workflow development',
        '24/7 dedicated support',
        'Unlimited storage',
        'Custom integrations',
        'Advanced analytics',
        'SSO & advanced security',
        'Custom training',
        'SLA guarantees'
      ],
      buttonText: 'Get Enterprise Free',
      buttonVariant: 'secondary',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding-top pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-blue-600"> Pricing</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              All plans are now completely FREE. Start building with enterprise-grade features at zero cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pt-8 section-padding-bottom px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              All plans include our core features. Upgrade when you need more.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-black to-gray-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <Zap size={14} className="sm:w-4 sm:h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'ring-2 ring-black shadow-xl' 
                    : 'border border-gray-200 hover:border-gray-300'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-3 sm:mb-4">
                      {/* Crossed out original price */}
                      <div className="text-lg sm:text-2xl text-gray-400 line-through mb-1 sm:mb-2">
                        {plan.originalPrice}
                      </div>
                      {/* New FREE price */}
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                        {plan.price}
                      </div>
                                           
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-gray-600 sm:w-3.5 sm:h-3.5" />
                        </div>
                        <span className="text-gray-700 text-xs sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <motion.a
                      href="https://app.amtop.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base ${
                        plan.buttonVariant === 'primary'
                          ? 'bg-gradient-to-r from-black to-gray-600 hover:from-gray-800 hover:to-black text-white shadow-lg hover:shadow-xl'
                          : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {plan.buttonText}
                      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of teams already using amTop. All plans are completely FREE.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://app.amtop.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started Free
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
