import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { withHash } from '@/lib/hashRoute';

const leadership = [
  {
    initials: 'AF',
    name: 'Ali Faaif',
    title: 'Founder & Chairman',
    bio: 'Lead thesis, capital allocation, and operator selection across the group.',
  },
  {
    initials: 'DV',
    name: 'Dr. Priya Venkat',
    title: 'Group COO',
    bio: 'Leads operating cadence, governance systems, and platform integration.',
  },
  {
    initials: 'JL',
    name: 'Joran Lindqvist',
    title: 'Chief Technology Officer',
    bio: 'Responsible for engineering standards and Labs architecture.',
  },
  {
    initials: 'MC',
    name: 'Mei Chen',
    title: 'Chief Financial Officer',
    bio: 'Capital markets, internal audit, and risk infrastructure.',
  },
];

const mds = [
  { initials: 'TO', name: 'Tom Odigus', title: 'Managing Director · Cloud Ordinate' },
  { initials: 'SR', name: 'Sara Rahman', title: 'Managing Director · SkyFitStrength' },
  { initials: 'LM', name: 'Luca Moretti', title: 'Executive Director · GetMoodzy' },
  { initials: 'HA', name: 'Hasan Ali', title: 'Managing Director · Tradeasia / Elite Express' },
];

export default function AboutTeamPage() {
  return (
    <SiteShell>
      <section className="bg-white py-16 md:py-20">
        <Container>
          <Eyebrow className="mb-4">About · Our Team</Eyebrow>
          <h1 className="max-w-[900px] text-[50px] font-bold leading-[1.04] tracking-[-0.03em] text-navy-900 md:text-[66px]">
            Leadership that
            <span className="ml-2 font-display font-normal italic">operates the businesses.</span>
          </h1>
          <p className="mt-7 max-w-[670px] text-[17px] leading-relaxed text-slate-600">
            A small group-level team. Strong managing directors running each company. At FAAIF:
            capital allocator; operators execute.
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>
          <p className="eyebrow mb-4">Group Leadership</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {leadership.map((person) => (
              <article
                key={person.name}
                className="rounded-md border border-slate-200 bg-white p-5"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-[11px] font-semibold text-white">
                  {person.initials}
                </div>
                <h2 className="text-[16px] font-semibold text-navy-900">{person.name}</h2>
                <p className="mt-1 text-[12px] text-slate-500">{person.title}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{person.bio}</p>
              </article>
            ))}
          </div>

          <p className="eyebrow mb-4 mt-10">Operating Company Managing Directors</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {mds.map((person) => (
              <article
                key={person.name}
                className="rounded-md border border-slate-200 bg-white p-5"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-slate-700 text-[11px] font-semibold text-white">
                  {person.initials}
                </div>
                <h3 className="text-[16px] font-semibold text-navy-900">{person.name}</h3>
                <p className="mt-1 text-[12px] text-slate-500">{person.title}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 rounded-xl border border-slate-200 bg-slate-50 p-8 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow mb-3">Join the Group</p>
              <h3 className="text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-navy-900">
                Hiring at every level across all four companies.
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                Engineering, commercial, and operations roles open across Sydney, Melbourne,
                Singapore, and Karachi.
              </p>
              <Link
                href={withHash('/contact')}
                className="mt-6 inline-flex rounded-md bg-amber-500 px-5 py-3 text-[14px] font-semibold text-navy-900 hover:bg-amber-600"
              >
                See Open Roles →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['180+', 'Across the group'],
                ['22', 'Open roles'],
                ['94%', '12-mo retention'],
                ['4', 'Office locations'],
              ].map((metric) => (
                <article
                  key={metric[0]}
                  className="rounded-md border border-slate-200 bg-white p-5"
                >
                  <p className="text-[33px] font-display font-medium tracking-[-0.02em] text-navy-900">
                    {metric[0]}
                  </p>
                  <p className="mt-1 text-[12px] text-slate-500">{metric[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
