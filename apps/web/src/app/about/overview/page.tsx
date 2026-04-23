import { SiteShell } from '@/components/layout/SiteShell';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

const timeline = [
  {
    year: '2019',
    title: 'FAAIF Group founded',
    note: 'Sydney HQ established. Cloud Ordinate acquired as first operating company.',
  },
  {
    year: '2021',
    title: 'SkyFitStrength acquired',
    note: 'Fitness arm launched with performance-led coaching products.',
  },
  {
    year: '2022',
    title: 'GetMoodzy launched',
    note: 'Lifestyle retail venture enters market in Singapore.',
  },
  {
    year: '2024',
    title: 'Tradeasia integrated',
    note: 'Cross-border freight operator joins portfolio.',
  },
];

export default function AboutOverviewPage() {
  return (
    <SiteShell>
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Eyebrow className="mb-4">About · Company Overview</Eyebrow>
          <h1 className="max-w-[880px] text-[50px] font-bold leading-[1.04] tracking-[-0.03em] text-navy-900 md:text-[66px]">
            The organization behind
            <span className="ml-2 font-display font-normal italic">a diversified portfolio.</span>
          </h1>
          <p className="mt-7 max-w-[650px] text-[17px] leading-relaxed text-slate-600">
            FAAIF Group was founded in Sydney in 2019 by Ali Faaif on a deceptively simple thesis:
            patient capital paired with disciplined operating support outperforms financial
            engineering.
          </p>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Our Story</p>
              <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.025em] text-navy-900">
                Founded in 2019 on a single thesis.
              </h2>
            </div>
            <div className="space-y-4 text-[14px] leading-relaxed text-slate-600">
              <p>
                The group now operates four companies across four sectors. Each has its own managing
                director and P&L. FAAIF shares infrastructure and governance while operating teams
                remain independent.
              </p>
              <p>
                We allocate capital where the operators are exceptional and unit economics are
                honest. We do not force adjacency and we do not optimize for quarterly theatre.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-[40px] font-bold tracking-[-0.025em] text-navy-900">
              A measured path.
            </h3>
            <p className="max-w-[420px] text-[14px] leading-relaxed text-slate-600">
              Seven years. Four operating companies. Three continents.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.year} className="rounded-md border border-slate-200 bg-white p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-amber-500">
                  {item.year}
                </p>
                <h4 className="mt-2 text-[15px] font-semibold text-navy-900">{item.title}</h4>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500">{item.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 md:grid-cols-5">
            {[
              ['2019', 'Founded'],
              ['$240M', 'AUM'],
              ['180+', 'Team members'],
              ['12', 'Countries served'],
              ['3', 'Regional offices'],
            ].map((item) => (
              <div key={item[0]}>
                <p className="text-[40px] font-display font-medium tracking-[-0.02em] text-navy-900">
                  {item[0]}
                </p>
                <p className="mt-1 text-[12px] text-slate-500">{item[1]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
