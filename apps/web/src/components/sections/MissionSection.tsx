import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

const values = [
  {
    n: '01',
    title: 'Patient Capital',
    description: 'We invest on a decade horizon. Compounding only works when you let it.',
  },
  {
    n: '02',
    title: 'Operator-Led',
    description:
      'Every subsidiary is run by a founder who owns the outcome — not a professional manager.',
  },
  {
    n: '03',
    title: 'Engineering Rigor',
    description: 'Shared infrastructure. Shared standards. Independent execution.',
  },
  {
    n: '04',
    title: 'Durable Brands',
    description: 'We build companies that our grandchildren would still recognize.',
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="bg-white py-[128px]" aria-labelledby="mission-quote">
      <Container>
        <div className="max-w-[860px] mb-24">
          <Eyebrow className="mb-5">Mission &amp; Values</Eyebrow>

          <blockquote
            id="mission-quote"
            className="font-display font-normal italic text-navy-900 mb-10 font-variation-opsz"
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
              fontVariationSettings: '"opsz" 144',
            }}
          >
            &ldquo;We back operators who measure success in decades, not quarters — and give them
            the infrastructure to prove it.&rdquo;
          </blockquote>

          <div className="font-sans text-[14px] font-medium text-slate-500 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-amber-500" aria-hidden="true" />
            FAAIF Group · Founding Letter, 2019
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-200">
          {values.map((v) => (
            <div key={v.n}>
              <div
                className="font-medium text-amber-500 text-[12px] mb-5"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {v.n}
              </div>
              <h4 className="font-sans font-semibold text-[18px] leading-[1.3] tracking-[-0.01em] text-navy-900 mb-3">
                {v.title}
              </h4>
              <p className="font-sans text-[14px] leading-relaxed text-slate-600">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
