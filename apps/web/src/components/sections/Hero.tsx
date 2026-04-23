import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';

const stats = [
  { n: '3', label: 'Operating Companies' },
  { n: '$240M', label: 'Assets Under Management' },
  { n: '180+', label: 'Team Members' },
  { n: '12', label: 'Countries Served' },
];

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export function Hero() {
  return (
    <section
      className="relative pt-[200px] pb-[160px] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient amber glow */}
      <div
        className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08), transparent 70%)',
          filter: 'blur(20px)',
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-[860px]">
          <Eyebrow className="mb-6">A Diversified Holding Company · Est. 2019</Eyebrow>

          <h1
            id="hero-heading"
            className="font-sans font-bold text-navy-900 mb-7"
            style={{
              fontSize: 'clamp(48px, 7vw, 84px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Empowering Diverse
            <br />
            Industries Through
            <br />
            <span
              className="font-display font-normal italic"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Innovation.
            </span>
          </h1>

          <p
            className="font-sans text-slate-600 max-w-[640px] mb-11"
            style={{ fontSize: 20, lineHeight: 1.55 }}
          >
            The parent organization behind Cloud Ordinate, SkyFitStrength, and GetMoodzy — three
            operating companies united by a single thesis: patient capital, engineered execution.
          </p>

          <div className="flex gap-3 items-center flex-wrap">
            <Button variant="primary" className="gap-[10px]">
              Our Portfolio <ArrowRight />
            </Button>
            <Button variant="ghost">Mission &amp; Values</Button>
          </div>

          {/* Investor stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24 pt-8 border-t border-slate-200">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="font-display font-medium text-navy-900"
                  style={{ fontSize: 40, letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  {s.n}
                </div>
                <div className="font-sans text-[13px] text-slate-500 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
