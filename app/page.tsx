import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import Results from '@/components/Results';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Results />
      <Services />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
