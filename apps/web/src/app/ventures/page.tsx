import { SiteShell } from '@/components/layout/SiteShell';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { BrandCard } from '@/components/shared/BrandCard';
import { ventures } from '@/lib/ventures';

export default function VenturesPage() {
  return (
    <SiteShell>
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Eyebrow className="mb-4">Portfolio · Ventures</Eyebrow>
          <h1 className="max-w-[900px] text-[50px] font-bold leading-[1.04] tracking-[-0.03em] text-navy-900 md:text-[66px]">
            Four operating companies.
            <span className="ml-2 font-display font-normal italic">One disciplined group.</span>
          </h1>
          <p className="mt-7 max-w-[690px] text-[17px] leading-relaxed text-slate-600">
            Each venture is led independently with its own P&L, brand, and managing director. FAAIF
            Group provides capital, shared platform infrastructure, and patient governance.
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {ventures.map((venture) => (
              <BrandCard key={venture.slug} venture={venture} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="rounded-xl border border-slate-200 p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[40px] font-bold tracking-[-0.02em] text-navy-900">
                How the group is organized.
              </h2>
              <p className="max-w-[360px] text-[14px] leading-relaxed text-slate-600">
                A holding-and-operate model, not a fund. We own, we build, and we stay disciplined.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {ventures.map((venture) => (
                <div
                  key={venture.slug}
                  className="rounded-md border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <p className="text-[15px] font-semibold text-navy-900">{venture.name}</p>
                  <p className="mt-1 text-[12px] text-slate-500">{venture.sector}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
