import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ventures } from '@/lib/site-data';

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export default function VentureDetailPage({ params }: { params: { slug: string } }) {
  const venture = ventures.find((item) => item.slug === params.slug);

  if (!venture) {
    notFound();
  }

  return (
    <main className="pb-16 pt-14">
      <section className="mx-auto max-w-container px-6 md:px-12 md:pt-10">
        <p className="eyebrow mb-4">Venture detail</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-navy-900 md:text-6xl">
          {venture.name}
        </h1>
        <p className="mt-3 text-xs uppercase tracking-[0.08em] text-slate-500">
          {venture.category}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">{venture.detail}</p>
      </section>

      <section className="mx-auto mt-12 grid max-w-container gap-4 px-6 md:grid-cols-3 md:px-12">
        {venture.metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-lg border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-4xl font-display text-navy-900">{metric.value}</p>
            <p className="mt-1 text-sm text-slate-500">{metric.label}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-container px-6 md:px-12">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-navy-900">
            Operating profile
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{venture.summary}</p>
          <p className="mt-2 text-sm text-slate-500">Website: {venture.website}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ventures#ventures"
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-navy-900 hover:border-navy-900"
            >
              Back to directory
            </Link>
            <Link
              href="/contact#contact"
              className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-navy-900 hover:bg-amber-600"
            >
              Contact group office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
