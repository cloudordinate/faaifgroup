import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BrandCardProps {
  name: string;
  category: string;
  summary: string;
  href: string;
  year?: string;
  className?: string;
}

export function BrandCard({ name, category, summary, href, year, className }: BrandCardProps) {
  return (
    <article
      className={cn(
        'rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300',
        className
      )}
    >
      <p className="mb-2 text-[10px] uppercase tracking-[0.08em] text-slate-500">{category}</p>
      <h3 className="mb-2 text-xl font-semibold text-navy-900">{name}</h3>
      <p className="mb-4 text-sm leading-6 text-slate-600">{summary}</p>
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <Link href={href} className="font-medium text-navy-900">
          Visit subsidiary →
        </Link>
        {year ? <span>{year}</span> : null}
      </div>
    </article>
  );
}
