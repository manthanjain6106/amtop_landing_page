import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollContainer from '@/components/ScrollContainer';
import TrustedBy from '@/components/TrustedBy';

import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ScrollContainer />
      <Pricing />
      <FAQ/>
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Footer />
      </div>
    </div>
  );
}
