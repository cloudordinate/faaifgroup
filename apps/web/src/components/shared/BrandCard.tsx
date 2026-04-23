import Link from 'next/link';
import { Venture } from '@/lib/ventures';
import { withHash } from '@/lib/hashRoute';

interface BrandCardProps {
  venture: Venture;
}

export function BrandCard({ venture }: BrandCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-1 transition-all duration-short ease-brand hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-2">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p
          className="text-[11px] uppercase tracking-[0.07em] text-slate-500"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {venture.sector}
        </p>
        <p className="text-[11px] text-slate-400">{venture.region}</p>
      </div>

      <h3 className="mb-2 text-[26px] font-semibold tracking-[-0.02em] text-navy-900">
        {venture.name}
      </h3>
      <p className="mb-5 text-[14px] leading-relaxed text-slate-600">{venture.oneLiner}</p>

      <Link
        href={withHash(`/ventures/${venture.slug}`)}
        className="inline-flex items-center gap-2 text-[13px] font-medium text-navy-900 transition-colors duration-micro ease-brand hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        Visit subsidiary
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
