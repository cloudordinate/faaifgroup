'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const mainLinks = [
  { label: 'Ventures', href: '/ventures' },
  { label: 'Labs', href: '/labs' },
  { label: 'Investor Relations', href: '/investor-relations' },
  { label: 'Contact', href: '/contact' },
];

const aboutLinks = [
  { label: 'Company Overview', href: '/about/overview' },
  { label: 'Mission & Vision', href: '/about/mission' },
  { label: 'Our Team', href: '/about/team' },
  { label: 'Our Portfolio', href: '/ventures' },
  { label: 'FAAIF Labs', href: '/labs' },
  { label: 'Investor Relations', href: '/investor-relations' },
  { label: 'Contact', href: '/contact' },
];

function hashForPath(path: string) {
  return `#${path.replace(/^\//, '').replace(/\//g, '-') || 'home'}`;
}

export function SiteNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const isAboutRoute =
    pathname.startsWith('/about') ||
    pathname.startsWith('/ventures') ||
    pathname.startsWith('/labs');

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        className={cn(
          'mx-auto flex max-w-container items-center justify-between rounded-pill border border-slate-200/80 bg-white/80 px-4 py-2.5 backdrop-blur-xl md:px-6',
          scrolled ? 'shadow-2' : 'shadow-nav'
        )}
        aria-label="Primary"
      >
        <Link
          href={`/${hashForPath('/')}`}
          className="flex items-center gap-2 text-sm font-semibold text-navy-900"
        >
          <span>FAAIF Group</span>
          <span className="h-3 w-px bg-amber-500" aria-hidden="true" />
        </Link>

        <div className="flex items-center gap-3 text-[13px] font-medium text-slate-600 md:gap-6">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={cn(
                'inline-flex items-center gap-1 rounded-md px-2 py-1 transition-colors hover:text-navy-900',
                isAboutRoute ? 'text-navy-900' : ''
              )}
            >
              About
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {open && (
              <div className="absolute left-0 top-9 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-3">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={`${link.href}${hashForPath(link.href)}`}
                    className="block rounded-md px-3 py-2 text-[12px] text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={`${link.href}${hashForPath(link.href)}`}
              className={cn(
                'rounded-md px-2 py-1 transition-colors hover:text-navy-900',
                pathname.startsWith(link.href) ? 'text-navy-900' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/investor-relations#investor-relations"
          className="hidden rounded-md bg-navy-900 px-4 py-[10px] text-[13px] font-medium text-white transition-colors hover:bg-navy-800 md:inline-flex"
        >
          Investor Relations
        </Link>
      </nav>
    </header>
  );
}
