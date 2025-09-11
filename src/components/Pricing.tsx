'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight, Zap } from 'lucide-react';

const Pricing = () => {
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
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 px-4">
            Choose the plan that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">
              fits your needs
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl xl:text-xl 2xl:text-2xl text-gray-600 max-w-2xl sm:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed px-4">
            All plans are now completely FREE. Start building with enterprise-grade features at zero cost.
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
                  <h3 className="text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-3 sm:mb-4">
                    {/* Crossed out original price */}
                    <div className="text-lg sm:text-2xl xl:text-2xl 2xl:text-3xl text-gray-400 line-through mb-1 sm:mb-2">
                      {plan.originalPrice}
                    </div>
                    {/* New FREE price */}
                    <div className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                      {plan.price}
                    </div>
                                         
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm xl:text-sm 2xl:text-base">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-gray-600 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm xl:text-sm 2xl:text-base">
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
                    className={`w-full py-3 sm:py-4 xl:py-4 2xl:py-5 px-4 sm:px-6 xl:px-6 2xl:px-8 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base xl:text-base 2xl:text-lg ${
                      plan.buttonVariant === 'primary'
                        ? 'bg-gradient-to-r from-black to-gray-600 hover:from-gray-800 hover:to-black text-white shadow-lg hover:shadow-xl'
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
