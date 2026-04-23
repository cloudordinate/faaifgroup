import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { LabsSection } from '@/components/sections/LabsSection';
import { MissionSection } from '@/components/sections/MissionSection';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';
import { ToastProvider } from '@/components/ToastProvider';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <PortfolioGrid />
        <LabsSection />
        <MissionSection />
        <ContactForm />
      </main>
      <Footer />
      <ToastProvider />
    </>
  );
}
