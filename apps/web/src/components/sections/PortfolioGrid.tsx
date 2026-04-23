'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

interface Brand {
  name: string;
  sector: string;
  flagship: string;
  description: string;
  accent: string;
  href: string;
  LogoSvg: React.FC<{ color: string }>;
}

const CloudOrdinateLogo = ({ color }: { color: string }) => (
  <svg width="160" height="28" viewBox="0 0 200 40" fill="none" aria-label="Cloud Ordinate">
    <g stroke={color} strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 24c0-4 3-7 7-7 3 0 5 2 5 2s2-4 7-4 8 3 8 7-3 7-7 7H13c-4 0-7-2-7-5z" />
    </g>
    <text
      x="44"
      y="26"
      fontFamily="Inter, sans-serif"
      fontWeight="600"
      fontSize="18"
      fill={color}
      letterSpacing="-0.015em"
    >
      Cloud Ordinate
    </text>
  </svg>
);

const SkyFitStrengthLogo = ({ color }: { color: string }) => (
  <svg width="180" height="28" viewBox="0 0 200 40" fill="none" aria-label="SkyFitStrength">
    <g stroke={color} strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 20 L14 20 M16 12 L16 28 M22 12 L22 28 M16 20 L22 20 M28 12 L28 28 M32 12 L32 28" />
    </g>
    <text
      x="44"
      y="26"
      fontFamily="Inter, sans-serif"
      fontWeight="600"
      fontSize="18"
      fill={color}
      letterSpacing="-0.015em"
    >
      SkyFitStrength
    </text>
  </svg>
);

const GetMoodzyLogo = ({ color }: { color: string }) => (
  <svg width="160" height="28" viewBox="0 0 200 40" fill="none" aria-label="GetMoodzy">
    <g stroke={color} strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="20" r="8" />
      <path d="M14 22c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5" strokeLinecap="round" />
      <circle cx="15.5" cy="18" r="0.6" fill={color} />
      <circle cx="20.5" cy="18" r="0.6" fill={color} />
    </g>
    <text
      x="36"
      y="26"
      fontFamily="Inter, sans-serif"
      fontWeight="600"
      fontSize="18"
      fill={color}
      letterSpacing="-0.015em"
    >
      GetMoodzy
    </text>
  </svg>
);

const brands: Brand[] = [
  {
    name: 'Cloud Ordinate',
    sector: 'Logistics & Tech',
    flagship: 'DepotOS',
    description:
      'Container management SaaS for depots, yards, and intermodal terminals. DepotOS is the flagship operating system trusted by logistics operators across 12 countries.',
    accent: '#38BDF8',
    href: '#',
    LogoSvg: CloudOrdinateLogo,
  },
  {
    name: 'SkyFitStrength',
    sector: 'Health & Fitness',
    flagship: 'Performance Platform',
    description:
      'A strength and performance platform for athletes and operators who measure progress in kilos, not vibes. Built by coaches, used by champions.',
    accent: '#F59E0B',
    href: '#',
    LogoSvg: SkyFitStrengthLogo,
  },
  {
    name: 'GetMoodzy',
    sector: 'Lifestyle · Retail',
    flagship: 'Direct-to-Consumer',
    description:
      'Emotion-driven consumer products that turn everyday objects into small celebrations. Mood-first design for the generation that shops with feelings.',
    accent: '#F43F5E',
    href: '#',
    LogoSvg: GetMoodzyLogo,
  },
];

function BrandCard({ name, sector, flagship, description, accent, href, LogoSvg }: Brand) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="block bg-white rounded-lg p-8 flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
      style={{
        border: `1px solid ${hovered ? accent : '#E2E8F0'}`,
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered
          ? `0 16px 40px ${accent}1f, 0 4px 12px rgba(15,23,42,0.05)`
          : '0 1px 2px rgba(15,23,42,0.04)',
        transition: 'all 400ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      aria-label={`Visit ${name} subsidiary`}
    >
      <div className="flex items-center justify-between mb-8">
        <div
          style={{
            color: hovered ? accent : '#94A3B8',
            transition: 'color 400ms cubic-bezier(0.2, 0.8, 0.2, 1)',
            height: 28,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LogoSvg color={hovered ? accent : '#94A3B8'} />
        </div>
        <span className="eyebrow" style={{ color: '#64748B', fontSize: 11 }}>
          {sector}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-sans font-semibold text-[24px] leading-[1.3] tracking-[-0.01em] text-navy-900 mb-2">
          {name}
        </h3>

        {flagship && (
          <div
            className="font-mono text-[12px] text-slate-500 mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Flagship: <span className="text-navy-900 font-medium">{flagship}</span>
          </div>
        )}

        <p className="font-sans text-[15px] leading-[1.6] text-slate-600 mb-8">{description}</p>
      </div>

      <div
        className="flex items-center gap-2 font-sans font-medium text-[14px]"
        style={{
          color: hovered ? accent : '#0F172A',
          transition: 'color 220ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        Visit Subsidiary
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            transform: hovered ? 'translateX(3px)' : 'none',
            transition: 'transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-slate-50 py-[128px]" aria-labelledby="portfolio-heading">
      <Container>
        <div className="flex items-end justify-between mb-14 gap-8 flex-wrap">
          <div>
            <Eyebrow className="mb-4">Portfolio</Eyebrow>
            <h2
              id="portfolio-heading"
              className="font-sans font-bold text-navy-900"
              style={{ fontSize: 48, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Our Global Brands
            </h2>
          </div>
          <p className="font-sans text-base leading-relaxed text-slate-600 max-w-[360px]">
            Three operating companies across logistics, health, and lifestyle — each led
            independently, each built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((b) => (
            <BrandCard key={b.name} {...b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
