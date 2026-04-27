import Link from 'next/link';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'Overview', href: '/about/overview#about-overview' },
      { label: 'Mission & Vision', href: '/about/mission#about-mission' },
      { label: 'Team', href: '/about/team#about-team' },
      { label: 'Contact', href: '/contact#contact' },
    ],
  },
  {
    title: 'Ventures',
    links: [
      { label: 'Cloud Ordinate', href: '/ventures/cloud-ordinate#ventures-cloud-ordinate' },
      { label: 'SkyFitStrength', href: '/ventures/skyfitstrength#ventures-skyfitstrength' },
      { label: 'GetMoodzy', href: '/ventures/getmoodzy#ventures-getmoodzy' },
      {
        label: 'Tradeasia',
        href: '/ventures/tradeasia-elite-express#ventures-tradeasia-elite-express',
      },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'FAAIF Labs', href: '/labs#labs' },
      { label: 'Engineering', href: '/labs#labs-engineering' },
      { label: 'Security', href: '/labs#labs-security' },
      { label: 'Careers', href: '/contact#contact' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 pb-8 pt-12 text-slate-300">
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold text-white">FAAIF Group</p>
            <p className="max-w-xs text-xs leading-6 text-slate-400">
              A diversified holding company operating across logistics, health, lifestyle, and
              shipping.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-[11px] uppercase tracking-[0.08em] text-amber-400">
                {column.title}
              </p>
              <ul className="space-y-2 text-xs">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-5 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 FAAIF Group Pty Ltd</p>
          <p>Sydney · Melbourne · Singapore · Karachi</p>
        </div>
      </div>
    </footer>
  );
}
