import { Terminal } from '@/components/terminal';
import { Header } from '@/components/header';
import { Features } from '@/components/features';
import { HowItWorks } from '@/components/how-it-works';
import { Benefits } from '@/components/benefits';
import { Milestones } from '@/components/milestones';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="min-h-screen bg-black text-green-400 overflow-x-hidden">
        <div className="container mx-auto px-4 py-12">
          <Terminal />
          <Features />
          <Benefits />
          <HowItWorks />
          <Milestones />
          <Testimonials />
          <FAQ />
        </div>
      </main>
      <Footer />
      </div>
  );
}