import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/SiteShell';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { findVentureBySlug, ventures } from '@/lib/ventures';
import { withHash } from '@/lib/hashRoute';

interface VentureDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export default function VentureDetailPage({ params }: VentureDetailPageProps) {
  const venture = findVentureBySlug(params.slug);

  if (!venture) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Eyebrow className="mb-4">Ventures · {venture.name}</Eyebrow>
          <h1 className="max-w-[920px] text-[50px] font-bold leading-[1.04] tracking-[-0.03em] text-navy-900 md:text-[64px]">
            {venture.name}
          </h1>
          <p className="mt-5 max-w-[760px] text-[17px] leading-relaxed text-slate-600">
            {venture.tagline}
          </p>
          <p className="mt-4 max-w-[760px] text-[15px] leading-relaxed text-slate-600">
            {venture.summary}
          </p>
          <p className="mt-6 text-[13px] text-slate-500">
            Sector: <span className="font-medium text-navy-900">{venture.sector}</span> · Region:{' '}
            <span className="font-medium text-navy-900">{venture.region}</span>
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr]">
            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-navy-900">
                Current focus
              </h2>
              <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-slate-600">
                {venture.focus.map((focusArea) => (
                  <li key={focusArea} className="flex items-start gap-2">
                    <span
                      className="mt-[9px] h-1.5 w-1.5 rounded-full bg-amber-500"
                      aria-hidden="true"
                    />
                    <span>{focusArea}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-navy-900">
                Operating metrics
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {venture.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-md border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-[32px] font-display tracking-[-0.02em] text-navy-900">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[12px] text-slate-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <Link
            href={withHash('/ventures')}
            className="mt-8 inline-flex text-[14px] font-semibold text-navy-900 hover:text-amber-600"
          >
            ← Back to ventures directory
          </Link>
        </Container>
      </section>
    </SiteShell>
  );
}
