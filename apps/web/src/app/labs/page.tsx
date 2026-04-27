import { TechStack } from '@/components/shared/TechStack';
import { innovationProjects, labsStack } from '@/lib/site-data';

export default function LabsPage() {
  return (
    <main className="pb-16 pt-14">
      <section className="bg-navy-900 py-14 text-white md:py-20">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <p className="eyebrow mb-4">FAAIF Labs · R&amp;D</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.02em] md:text-7xl">
            The Engine of Innovation.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
            FAAIF Labs is the internal research, development, and engineering powerhouse of FAAIF
            Group. It powers all five subsidiaries with world-class expertise in engineering,
            security, and artificial intelligence.
          </p>
          <div className="mt-10 grid gap-4 border-t border-white/15 pt-6 md:grid-cols-4">
            {[
              { label: 'Group subsidiaries', value: '5' },
              { label: 'Core pillars', value: '3' },
              { label: 'Engineering model', value: 'Full-stack' },
              { label: 'Security stance', value: 'Enterprise-grade' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-display">{item.value}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-container px-6 md:px-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-navy-900">Engineering</h2>
          <p className="max-w-xs text-sm text-slate-600">
            Architecture, development, and optimization across frontend, backend, databases, and
            APIs.
          </p>
        </div>
        <TechStack items={labsStack} />
      </section>

      <section className="mt-14 bg-slate-50 py-12">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-navy-900">Security</h2>
            <p className="max-w-xs text-sm text-slate-600">
              Secure API design, encrypted storage, vulnerability assessments, and compliance-first
              delivery.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {innovationProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border border-slate-200 bg-white p-5"
              >
                <p className="mb-2 inline-flex rounded-full bg-slate-100 px-2 py-1 text-[10px] uppercase tracking-[0.06em] text-slate-500">
                  {project.status}
                </p>
                <h3 className="text-xl font-semibold text-navy-900">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-container px-6 md:px-12">
        <div className="border-t border-slate-200 pt-8">
          <p className="eyebrow mb-3">Artificial Intelligence &amp; Machine Learning</p>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              [
                'Predictive Models',
                'Design and deploy predictive models that solve real operational problems.',
              ],
              [
                'Automation Frameworks',
                'Build intelligent automation frameworks to reduce friction across ventures.',
              ],
              [
                'Data Science Pipelines',
                'Create robust data pipelines that support product intelligence at scale.',
              ],
              [
                'Applied AI Outcomes',
                'Optimize logistics, personalize user experiences, and power smart recommendations.',
              ],
            ].map(([title, text]) => (
              <article key={title}>
                <h3 className="text-sm font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
