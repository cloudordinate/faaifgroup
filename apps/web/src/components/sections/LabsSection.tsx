import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

const stackItems = [
  {
    name: 'Next.js',
    role: 'Application framework',
    note: 'Edge-rendered, hybrid static, end-to-end TypeScript.',
    src: '/logos/nextjs.svg',
    invert: true,
  },
  {
    name: 'Node.js',
    role: 'Runtime',
    note: 'Shared services layer across all operating companies.',
    src: '/logos/nodejs.svg',
    invert: false,
  },
  {
    name: 'Prisma',
    role: 'Data layer',
    note: 'Typed ORM and migrations. A single source of schema truth.',
    src: '/logos/prisma.svg',
    invert: false,
  },
];

export function LabsSection() {
  return (
    <section
      id="labs"
      className="bg-navy-900 text-white py-[128px] relative overflow-hidden"
      aria-labelledby="labs-heading"
    >
      {/* Amber hairline at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)',
        }}
        aria-hidden="true"
      />

      <Container>
        {/* Header 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end mb-16">
          <div>
            <Eyebrow className="mb-4 text-amber-500">FAAIF Labs</Eyebrow>
            <h2
              id="labs-heading"
              className="font-sans font-bold text-white"
              style={{ fontSize: 48, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Engineered for
              <br />
              <span
                className="font-display font-normal italic"
                style={{ fontVariationSettings: '"opsz" 144' }}
              >
                Excellence.
              </span>
            </h2>
          </div>
          <p
            className="font-sans text-[17px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}
          >
            A shared engineering practice powers every product across the group. One platform team,
            one stack, one standard of quality — so each subsidiary ships faster than it could
            alone.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 200px)',
          }}
        >
          {/* Feature card — 2×2 */}
          <div
            className="rounded-xl p-9 flex flex-col justify-between"
            style={{
              gridColumn: '1 / 3',
              gridRow: '1 / 3',
              background: '#1E293B',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div>
              <Eyebrow className="mb-4 text-amber-500">Platform</Eyebrow>
              <h3 className="font-sans font-semibold text-white text-[28px] leading-[1.2] tracking-[-0.01em] mb-3">
                One stack. Three products.
              </h3>
              <p
                className="font-sans text-[15px] leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.72)' }}
              >
                A single codebase serves logistics software, fitness platforms, and consumer retail
                — with shared auth, billing, analytics, and deployment pipelines maintained by Labs.
              </p>
            </div>
            <div
              className="flex items-center gap-3 text-[12px]"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.5)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"
                aria-hidden="true"
              />
              v3.2.0 · 142 deploys this week
            </div>
          </div>

          {/* Stack cards */}
          {stackItems.map((s) => (
            <div
              key={s.name}
              className="rounded-xl p-7 flex flex-col justify-between"
              style={{ background: '#1E293B', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Image
                src={s.src}
                alt={s.name}
                width={40}
                height={40}
                className={s.invert ? 'invert' : ''}
              />
              <div>
                <div className="font-sans font-semibold text-[18px] text-white mb-1">{s.name}</div>
                <div
                  className="text-[11px] mb-2.5"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.5)' }}
                >
                  {s.role}
                </div>
                <div
                  className="font-sans text-[13px] leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
                >
                  {s.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
