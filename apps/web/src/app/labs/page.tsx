import { SiteShell } from '@/components/layout/SiteShell';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TechStack } from '@/components/shared/TechStack';

const projects = [
  {
    title: 'Unified identity service',
    body: 'Single sign-on model shared across all operating companies with role-aware access.',
    tag: 'Platform',
  },
  {
    title: 'Cross-venture analytics warehouse',
    body: 'Federated model delivering board-level finance and operations intelligence.',
    tag: 'Data',
  },
  {
    title: 'Internal copilots for MDs',
    body: 'Decision copilots restricted to group leadership with audited access.',
    tag: 'AI',
  },
  {
    title: 'Single-tenant deploy fleets',
    body: 'Pre-customer pools for Cloud Ordinate enterprise clients with 1-click promotion.',
    tag: 'Infra',
  },
];

export default function LabsPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white md:py-20">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[900px] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(245,158,11,0.2), rgba(15,23,42,0) 74%)',
            filter: 'blur(20px)',
          }}
          aria-hidden="true"
        />
        <Container className="relative">
          <Eyebrow className="mb-4 text-amber-500">FAAIF Labs · R&D</Eyebrow>
          <h1 className="max-w-[820px] text-[54px] font-bold leading-[1.02] tracking-[-0.03em] md:text-[72px]">
            Engineered for
            <span className="ml-2 font-display font-normal italic">Excellence.</span>
          </h1>
          <p className="mt-6 max-w-[700px] text-[16px] leading-relaxed text-slate-300">
            Labs is the platform team serving every operating company. One codebase, one security
            posture, one deployment pipeline.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-700 pt-8 md:grid-cols-4">
            {[
              ['142', 'Deploys / week'],
              ['99.98%', 'Uptime'],
              ['28', 'Platform engineers'],
              ['0', 'SEV-1 in 90 days'],
            ].map((metric) => (
              <div key={metric[0]}>
                <p className="text-[36px] font-display tracking-[-0.02em] text-white">
                  {metric[0]}
                </p>
                <p className="mt-1 text-[12px] text-slate-400">{metric[1]}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr] md:items-end">
            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.025em] text-navy-900">
              Three pillars. One platform.
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-600">
              A deliberately small, boring stack. Every operating company deploys on the same
              primitives.
            </p>
          </div>
          <TechStack />
        </Container>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <Container>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr] md:items-end">
            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-0.025em] text-navy-900">
              What Labs is building now.
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-600">
              Platform work in long cycles. These are four active efforts in FY 2026.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.07em] text-amber-500">
                  {project.tag}
                </p>
                <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.015em] text-navy-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{project.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-14">
        <Container>
          <div className="grid grid-cols-1 gap-5 border-t border-slate-200 pt-8 md:grid-cols-4">
            {[
              ['Boring by default', 'Choose durable stacks that scale with less process.'],
              ['Typed end-to-end', 'TypeScript at edge, Prisma in data, and strict APIs.'],
              ['Reversible decisions', 'Ship behind flags and keep rollback paths easy.'],
              ['Observability first', 'Every deploy inspects request, traces, and SLO impact.'],
            ].map((item) => (
              <article key={item[0]}>
                <h4 className="text-[17px] font-semibold text-navy-900">{item[0]}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{item[1]}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
