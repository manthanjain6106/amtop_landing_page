'use client';

import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [forceShow, setForceShow] = useState(false);

  // Fallback animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setForceShow(true);
    }, 2000); // Show after 2 seconds if intersection observer fails

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="testimonials" className="py-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full blur-2xl opacity-40"></div>
      </div>

      <div className="container-max relative z-10">
        {/* Content can be added here in the future */}
      </div>
    </section>
  );
};

export default Testimonials;
