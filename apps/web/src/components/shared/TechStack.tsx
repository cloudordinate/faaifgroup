import Image from 'next/image';

const stackItems = [
  {
    name: 'Next.js',
    role: 'Application framework',
    note: 'Edge-ready rendering and TypeScript-first delivery.',
    src: '/logos/nextjs.svg',
    invert: true,
  },
  {
    name: 'Node.js',
    role: 'Runtime layer',
    note: 'Shared services and APIs across operating companies.',
    src: '/logos/nodejs.svg',
    invert: false,
  },
  {
    name: 'Prisma',
    role: 'Data platform',
    note: 'Typed schemas and migrations with reliable governance.',
    src: '/logos/prisma.svg',
    invert: false,
  },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {stackItems.map((item) => (
        <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-6">
          <Image
            src={item.src}
            alt={item.name}
            width={34}
            height={34}
            className={item.invert ? 'invert' : ''}
          />
          <h3 className="mt-5 text-[24px] font-semibold tracking-[-0.02em] text-navy-900">
            {item.name}
          </h3>
          <p className="mt-1 text-[11px] uppercase tracking-[0.07em] text-slate-500">{item.role}</p>
          <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{item.note}</p>
        </article>
      ))}
    </div>
  );
}
