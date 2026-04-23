const footerCols = [
  { title: 'Portfolio', links: ['Cloud Ordinate', 'SkyFitStrength', 'GetMoodzy'] },
  { title: 'Company', links: ['Mission', 'Labs', 'Careers', 'Press'] },
  { title: 'Investors', links: ['Quarterly Letters', 'Annual Report', 'IR Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Disclosures'] },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 pt-20 pb-10" style={{ color: 'rgba(255,255,255,0.72)' }}>
      <div className="max-w-container mx-auto px-12">
        <div className="grid gap-12 mb-16" style={{ gridTemplateColumns: '1.5fr repeat(4, 1fr)' }}>
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-[10px] mb-4">
              <span className="font-sans font-bold text-[20px] text-white tracking-[-0.02em]">
                FAAIF{' '}
                <span className="font-normal" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Group
                </span>
              </span>
              <span className="inline-block w-0.5 h-4 bg-amber-500" aria-hidden="true" />
            </div>
            <p
              className="font-sans text-[13px] leading-relaxed max-w-[280px]"
              style={{ color: 'rgba(255,255,255,0.48)' }}
            >
              A diversified holding company. Patient capital, engineered execution.
            </p>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.48)' }}>
                {col.title}
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-[14px] transition-colors duration-micro ease-brand hover:text-white focus-visible:outline-none focus-visible:underline"
                      style={{ color: 'rgba(255,255,255,0.72)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex justify-between items-center text-[12px]"
          style={{
            borderTopColor: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span>© 2026 FAAIF Group. All rights reserved.</span>
          <span>Boston · London · Singapore</span>
        </div>
      </div>
    </footer>
  );
}
