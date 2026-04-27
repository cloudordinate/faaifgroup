import Link from 'next/link';
import { BrandCard } from '@/components/shared/BrandCard';
import { ventures } from '@/lib/site-data';

export default function Home() {
  return (
    <main className="pb-20 pt-14">
      <section className="mx-auto grid max-w-container gap-10 px-6 md:grid-cols-[1.1fr_1fr] md:px-12 md:pt-10">
        <div>
          <p className="eyebrow mb-4">FAAIF Group</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-navy-900 md:text-6xl">
            Bridging ambition
            <span className="ml-2 font-display text-navy-900">and execution.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
            FAAIF Group is a Karachi-based digital conglomerate founded in 2024, building
            high-growth ventures across cloud infrastructure, AI/ML, fitness technology, lifestyle
            applications, fintech, and global trade logistics.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/ventures#ventures"
              className="rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-amber-600"
            >
              Explore Ventures
            </Link>
            <Link
              href="/investor-relations#investor-relations"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900"
            >
              Investor Relations
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-1 md:col-span-2">
            <p className="mb-2 text-xs uppercase tracking-[0.08em] text-amber-500">Group profile</p>
            <p className="text-4xl font-bold text-navy-900">5 Ventures</p>
            <p className="mt-2 text-sm text-slate-600">
              One parent organization, one innovation engine, and a multi-venture execution model.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-3xl font-bold text-navy-900">10</p>
            <p className="mt-1 text-sm text-slate-500">Industry experts</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-3xl font-bold text-navy-900">100+</p>
            <p className="mt-1 text-sm text-slate-500">Projects delivered</p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-container px-6 md:px-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-navy-900">
            Bento portfolio.
          </h2>
          <Link
            href="/ventures#ventures"
            className="text-sm font-medium text-slate-600 hover:text-navy-900"
          >
            View directory →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {ventures.map((venture) => (
            <BrandCard
              key={venture.slug}
              name={venture.name}
              category={venture.category}
              summary={venture.summary}
              href={`/ventures/${venture.slug}#ventures-${venture.slug}`}
              year={venture.year}
              className="h-full"
            />
          ))}
        </div>
      </section>

      <section className="mt-16 bg-slate-50 py-12">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-navy-900">
              Brands and platform.
            </h2>
            <Link
              href="/labs#labs"
              className="text-sm font-medium text-slate-600 hover:text-navy-900"
            >
              Visit FAAIF Labs →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {['Cloud Ordinate', 'GetMoodzy', 'SkyFitStrength', 'Eliteshipping', 'Rosca App'].map(
              (brand) => (
                <div
                  key={brand}
                  className="rounded-lg border border-slate-200 bg-white p-4 text-center text-sm font-semibold text-navy-900"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-container px-6 md:px-12">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-amber-50 p-8 md:grid-cols-[1.1fr_1fr] md:p-10">
          <div>
            <p className="eyebrow mb-3">Investor thesis</p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-navy-900">
              Transparency. Growth. Value.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We focus on ventures with high barriers to entry and strong potential for digital
              disruption, supported by centralized engineering, design, and AI capabilities.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-600">Timeline</p>
            <p className="text-lg font-semibold text-navy-900">2024 → 2026</p>
            <p className="text-sm text-slate-600">
              From four professionals to ten experts powering five specialized ventures.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
