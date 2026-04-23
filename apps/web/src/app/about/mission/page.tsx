import { SiteShell } from '@/components/layout/SiteShell';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

const values = [
  {
    title: 'Builder for decades',
    body: 'We optimize for compounding, not quarters. Every decision is tested against a 10-year horizon.',
  },
  {
    title: 'Operator-first',
    body: 'Subsidiaries are run by operators. Our role is infrastructure, not governance theatre.',
  },
  {
    title: 'Engineering rigor',
    body: 'Shared standards and release discipline keep every company fast and reliable.',
  },
  {
    title: 'Honest numbers',
    body: 'Conservative accounting and transparent reporting over narrative inflation.',
  },
  {
    title: 'Quiet excellence',
    body: 'We are not a consumer brand. We win by execution quality inside operating teams.',
  },
  {
    title: 'Patient capital',
    body: 'No rate-case agendas and no own-balance-sheet noise. We invest then stay in lane.',
  },
];

export default function AboutMissionPage() {
  return (
    <SiteShell>
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Eyebrow className="mb-4">About · Mission & Vision</Eyebrow>
          <h1 className="max-w-[900px] text-[50px] font-bold leading-[1.04] tracking-[-0.03em] text-navy-900 md:text-[66px]">
            Patient capital.
            <span className="ml-2 font-display font-normal italic">Engineered execution.</span>
          </h1>
          <p className="mt-7 max-w-[680px] text-[17px] leading-relaxed text-slate-600">
            Our mandate is to build durable operating groups: entities that compound through cycles
            because underlying companies are run correctly.
          </p>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <p className="eyebrow mb-3">Mission</p>
              <h2 className="text-[37px] font-bold leading-[1.08] tracking-[-0.02em] text-navy-900">
                Empower diverse industries through engineered innovation.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                We identify sectors where software leverage is real but underapplied, partner with
                operators who know the domain cold, and underwrite patient engineering with
                long-term stewardship.
              </p>
            </article>

            <article className="rounded-xl bg-navy-900 p-8 text-white">
              <p className="eyebrow mb-3 text-amber-500">Vision</p>
              <h2 className="text-[37px] font-bold leading-[1.08] tracking-[-0.02em]">
                A diversified group that lasts a hundred years.
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-300">
                By 2035, FAAIF Group should contain ten companies on three continents, each a leader
                in its category, each sharing a platform that no single operator could build alone.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-[42px] font-bold tracking-[-0.025em] text-navy-900">
              Six commitments.
            </h3>
            <p className="max-w-[420px] text-[14px] leading-relaxed text-slate-600">
              Not posters on a wall. Operating rules we test against every quarter.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {values.map((item, idx) => (
              <article key={item.title} className="rounded-md border border-slate-200 bg-white p-5">
                <p className="text-[11px] uppercase tracking-[0.07em] text-amber-500">0{idx + 1}</p>
                <h4 className="mt-2 text-[16px] font-semibold text-navy-900">{item.title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
