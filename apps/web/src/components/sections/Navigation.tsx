'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Labs', href: '#labs' },
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <nav
        aria-label="Primary navigation"
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50',
          'w-[calc(100%-32px)] max-w-container',
          'bg-white/[0.72] backdrop-blur-xl',
          'border border-navy-900/[0.06] rounded-xl',
          'px-6 py-[14px]',
          'flex items-center justify-between',
          'transition-shadow duration-[300ms] ease-brand',
          scrolled ? 'shadow-3' : 'shadow-nav'
        )}
      >
        <a
          href="#"
          className="flex items-center gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-sm"
          aria-label="FAAIF Group home"
        >
          <span className="font-sans font-bold text-[17px] tracking-[-0.02em] text-navy-900">
            FAAIF <span className="font-normal text-slate-500">Group</span>
          </span>
          <span className="inline-block w-0.5 h-3.5 bg-amber-500" aria-hidden="true" />
        </a>

        <div className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              role="listitem"
              className="font-sans font-medium text-sm text-slate-600 hover:text-navy-900 transition-colors duration-short ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-sm py-1.5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="font-sans font-medium text-[13px] bg-navy-900 text-white border-none px-4 py-[10px] rounded-md cursor-pointer transition-colors duration-micro ease-brand hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          aria-label="Investor Relations"
        >
          Investor Relations
        </button>
      </nav>
    </header>
  );
}
