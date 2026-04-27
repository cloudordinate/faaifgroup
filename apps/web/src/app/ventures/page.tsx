import Link from 'next/link';
import { BrandCard } from '@/components/shared/BrandCard';
import { ventures } from '@/lib/site-data';

export default function VenturesPage() {
  return (
    <main className="pb-16 pt-14">
      <section className="mx-auto max-w-container px-6 md:px-12 md:pt-10">
        <p className="eyebrow mb-4">Portfolio · Ventures</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-navy-900 md:text-6xl">
          The FAAIF Ecosystem.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          FAAIF Group is home to five distinct, high-growth companies, each operating in a market
          ripe for digital disruption, and each powered by the group shared infrastructure of
          engineering, design, and strategic leadership.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-container px-6 md:px-12">
        <div className="grid gap-4 md:grid-cols-2">
          {ventures.map((venture) => (
            <BrandCard
              key={venture.slug}
              name={venture.name}
              category={venture.category}
              summary={venture.summary}
              year={venture.year}
              href={`/ventures/${venture.slug}#ventures-${venture.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-container px-6 md:px-12">
        <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-navy-900">
              Portfolio Strategy
            </h2>
            <p className="max-w-xs text-sm text-slate-600">
              Technology-first ventures built to set the standard for what is possible.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="mx-auto mb-6 w-fit rounded-md bg-navy-900 px-4 py-2 text-xs font-semibold text-white">
              FAAIF Group
            </div>
            <div className="grid gap-3 md:grid-cols-5">
              {ventures.map((venture) => (
                <div key={venture.slug} className="rounded-md border border-slate-200 bg-white p-3">
                  <p className="text-sm font-semibold text-navy-900">{venture.name}</p>
                  <p className="mt-1 text-[11px] text-slate-500">{venture.category}</p>
                  <Link
                    href={`/ventures/${venture.slug}#ventures-${venture.slug}`}
                    className="mt-2 inline-block text-[11px] font-medium text-amber-600"
                  >
                    View details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
