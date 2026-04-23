import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { ToastProvider } from '@/components/ToastProvider';
import { PageTransition } from '@/components/shared/PageTransition';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main id="main-content" className="min-h-[60vh] pt-[96px]">
          {children}
        </main>
      </PageTransition>
      <Footer />
      <ToastProvider />
    </>
  );
}
