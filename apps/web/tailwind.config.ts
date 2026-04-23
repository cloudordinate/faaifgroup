import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020617',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        slate: {
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        amber: {
          600: '#D97706',
          500: '#F59E0B',
          400: '#FBBF24',
        },
        brand: {
          cloudordinate: '#38BDF8',
          skyfitstrength: '#F59E0B',
          getmoodzy: '#F43F5E',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'SF Mono', 'Menlo', 'monospace'],
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
        9: '96px',
        10: '128px',
        11: '160px',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        pill: '9999px',
      },
      boxShadow: {
        1: '0 1px 2px rgba(15,23,42,0.04), 0 1px 1px rgba(15,23,42,0.02)',
        2: '0 4px 12px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.03)',
        3: '0 16px 40px rgba(15,23,42,0.08), 0 4px 8px rgba(15,23,42,0.04)',
        nav: '0 1px 0 rgba(15,23,42,0.06)',
        focus: '0 0 0 2px #fff, 0 0 0 4px #F59E0B',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        'brand-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        micro: '160ms',
        short: '220ms',
        medium: '400ms',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
