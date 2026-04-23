# FAAIF Group — Build Instructions for Claude Code

Build a production-grade parent-company landing page for **FAAIF Group**, a diversified holding company overseeing three operating subsidiaries: Cloud Ordinate (logistics SaaS), SkyFitStrength (fitness), and GetMoodzy (lifestyle retail). The design system is already defined — your job is to implement it cleanly in Next.js (frontend) + Node.js (backend).

## Tech stack — non-negotiable

- **Frontend**: Next.js 14+ (App Router, TypeScript, Tailwind CSS, Server Components by default)
- **Backend**: Express + TypeScript + Prisma ORM + PostgreSQL + Zod validation + Nodemailer
- **Deployment targets**: Vercel (frontend), Railway or Fly.io (backend), Neon or Supabase (Postgres)
- **Package manager**: pnpm

## Monorepo layout

Create this exact structure:

```
faaif-group/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Express backend
├── packages/
│   └── design-system/  # Shared tokens, assets, tailwind preset
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

## Design system — "The Modern Monolith"

### Colors (add to tailwind.config.ts)

```ts
colors: {
  navy:  { 950: '#020617', 900: '#0F172A', 800: '#1E293B', 700: '#334155' },
  slate: { 600: '#475569', 500: '#64748B', 400: '#94A3B8', 300: '#CBD5E1', 200: '#E2E8F0', 100: '#F1F5F9', 50: '#F8FAFC' },
  amber: { 600: '#D97706', 500: '#F59E0B', 400: '#FBBF24' },
  brand: {
    cloudordinate:   '#38BDF8',
    skyfitstrength:  '#F59E0B',
    getmoodzy:       '#F43F5E',
  },
},
```

### Typography

- **Inter** (body/UI) — weights 400, 500, 600, 700
- **Fraunces** (editorial accent — pull quotes, big figures, italic) — weights 400, 500, optical size 144
- **JetBrains Mono** (numerical data, metadata, eyebrows) — weights 400, 500

Load via `next/font/google` in `app/layout.tsx`, expose via CSS variables `--font-sans`, `--font-display`, `--font-mono`, wire into `tailwind.config.ts` `fontFamily`.

### Spacing / radii / shadows

- Spacing scale: 4/8/12/16/24/32/48/64/96/128px (4px base)
- Radii: 4, 8, 12, 16, 9999 (pill — only for the nav)
- Shadows — three levels only:
  - `shadow-1`: `0 1px 2px rgba(15,23,42,0.04), 0 1px 1px rgba(15,23,42,0.02)` — resting cards
  - `shadow-2`: `0 4px 12px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.03)` — hover/elevated
  - `shadow-3`: `0 16px 40px rgba(15,23,42,0.08), 0 4px 8px rgba(15,23,42,0.04)` — sticky nav when scrolled

### Motion

- Ease: `cubic-bezier(0.2, 0.8, 0.2, 1)` for most transitions
- Durations: 160ms micro, 220ms short, 400ms medium
- **No bounce, no spring, no parallax.** The brand is still.

### Voice & tone

- Third-person institutional ("FAAIF Group invests in…")
- Title Case for nav/buttons/section titles
- Sentence case for long-form headlines
- **Zero emoji** in parent brand
- Em dash for asides, not hyphen

## Pages to build

### `/` — Landing page (seven sections in this exact order)

1. **Navigation** — fixed glassmorphism pill, 16px from top, `backdrop-blur-xl bg-white/72`. Brand lockup: "FAAIF Group" with a 2px amber vertical accent bar. Links: Portfolio · Labs · Mission · Contact. Right-side button "Investor Relations" in dark navy. Nav shadow deepens on scroll (`window.scrollY > 20`).

2. **Hero** — 200px top padding. Eyebrow tag "A Diversified Holding Company · Est. 2019" in amber caps. Headline: _"Empowering Diverse Industries Through Innovation."_ where "Innovation." renders in Fraunces italic. Subtext: _"The parent organization behind Cloud Ordinate, SkyFitStrength, and GetMoodzy — three operating companies united by a single thesis: patient capital, engineered execution."_ CTAs: primary amber "Our Portfolio →" and ghost "Mission & Values". Below, a 4-column investor stat strip (3 / $240M / 180+ / 12) with Fraunces numerals at 40px.

3. **Portfolio Grid** — background `slate-50`. Section header "Our Global Brands" with eyebrow "Portfolio". Three-column grid of `<BrandCard>` components. Each card: subsidiary wordmark SVG (monochrome at rest, saturates to brand color on hover), sector eyebrow, brand name (24px semibold), flagship line in mono font ("Flagship: DepotOS"), 2-sentence description, "Visit Subsidiary →" link. **On hover, the card border adopts the subsidiary's specific brand accent color** (`brand.cloudordinate`, `brand.skyfitstrength`, `brand.getmoodzy`), lifts 2px, shadow deepens to a tinted shadow-2. Arrow translates 3px right on hover.

4. **FAAIF Labs** — full-bleed `navy-900` background. Thin amber gradient hairline at top border. 2-column layout: left is title "Engineered for Excellence." (Excellence in Fraunces italic), right is descriptive paragraph. Below: a **bento grid** — 4 cols × 2 rows. One feature card spans 2 rows × 2 cols showing "One stack. Three products." with a live deploy indicator (amber dot + "v3.2.0 · 142 deploys this week" in mono). Three stacked cards on the right for Next.js, Node.js, Prisma — each with logo, name, role, one-line description. Card bg `navy-800`, border `white/6`.

5. **Mission & Values** — back to white. Giant Fraunces italic pull-quote (48–52px): _"We back operators who measure success in decades, not quarters — and give them the infrastructure to prove it."_ Attribution "FAAIF Group · Founding Letter, 2019" with an amber dash. Below, a 4-column values grid (01–04): Patient Capital, Operator-Led, Engineering Rigor, Durable Brands. Numbers in amber JetBrains Mono.

6. **Contact Hub** — `slate-50` background. 2-column layout. Left: section header, intro copy, three contact blocks (Headquarters, General, Investor Relations). Right: form card (white, shadow-1, 40px padding). Fields: Full Name, Email, Company (optional), **Reason for Inquiry dropdown with exactly these options: Software / Fitness / Retail / Partnerships**, Message (textarea). Submit is amber primary. Success state swaps the form for a checkmark + "Received, thank you." Focus ring: `ring-2 ring-amber-500/15` with `border-navy-900`.

7. **Footer** — `navy-900`. Wide left column with wordmark + tagline. Four link columns: Portfolio / Company / Investors / Legal. Bottom hairline with copyright + city list "Boston · London · Singapore" in mono.

## Backend — `apps/api/`

### Prisma schema

```prisma
model Inquiry {
  id         String   @id @default(cuid())
  name       String
  email      String
  company    String?
  reason     Reason
  message    String
  createdAt  DateTime @default(now())
}
enum Reason { SOFTWARE FITNESS RETAIL PARTNERSHIPS }
```

### Endpoints

- `POST /api/inquiries` — Zod-validate body, persist via Prisma, fire a Nodemailer email to `ir@faaif.group` AND a confirmation email to the submitter. Return `{ id, createdAt }`.
- `GET /api/health` — returns `{ ok: true, version }`.

### Validation rules

- Email: valid RFC 5322
- Name: 2–120 chars
- Company: optional, ≤120 chars
- Reason: must match enum
- Message: 10–4000 chars
- Rate limit: 5 submissions per IP per hour (use `express-rate-limit`)

### Security

- CORS allowlist for the production frontend domain only (env var `CORS_ORIGIN`)
- Helmet middleware
- Request body size cap 16kb
- All env via `dotenv` — provide `.env.example`

## Frontend integration

- Contact form posts to `process.env.NEXT_PUBLIC_API_URL + '/api/inquiries'`
- Client-side validation with `react-hook-form` + `zod` (shared schema in `packages/design-system/schemas.ts` — import from both apps)
- Loading state on submit button (spinner, disabled)
- Error toast on failure (use `sonner`)

## Accessibility — must-haves

- All interactive elements keyboard-reachable, visible focus rings (2px amber offset 2px)
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Form labels properly associated (`htmlFor` + `id`)
- `prefers-reduced-motion` disables all transitions
- Images have descriptive `alt` or `alt=""` if decorative
- Color contrast: all text ≥ WCAG AA

## Performance budget

- Lighthouse: Performance ≥ 95, Accessibility ≥ 100, Best Practices ≥ 95, SEO ≥ 100
- LCP < 1.8s, CLS < 0.05
- All fonts via `next/font` with `display: swap`
- Images via `next/image`
- No client JS for static sections (use Server Components)
- Client components only where interactivity demands (nav scroll, contact form)

## SEO

- Per-page `<Metadata>` exports
- OpenGraph + Twitter cards with a generated OG image (`app/opengraph-image.tsx`)
- `robots.txt` and `sitemap.xml` (via `app/sitemap.ts`)
- Structured data: `Organization` JSON-LD in root layout with the three subsidiaries as `subOrganization`

## Testing

- Vitest for utility/schema tests
- Playwright for one E2E flow: load home → fill contact form → submit → assert success state
- API: supertest for the inquiries endpoint (happy path + each validation failure)

## Developer experience

- ESLint + Prettier with shared config
- Husky + lint-staged pre-commit hook
- TypeScript strict mode everywhere
- `pnpm dev` runs web + api concurrently (use `concurrently` or Turborepo)
- `pnpm build` builds both
- Docker Compose file for local Postgres

## Execution order

1. Init pnpm monorepo + workspace config
2. Scaffold `apps/web` (Next.js) and `apps/api` (Express) and `packages/design-system`
3. Set up Tailwind with the full token map + font loading
4. Build shared components first: `Button`, `Card`, `Eyebrow`, `Container`, `SectionHeader`
5. Build landing-page sections in order (Nav → Hero → Portfolio → Labs → Mission → Contact → Footer)
6. Wire backend: Prisma schema → migrations → routes → validation → email
7. Connect frontend form to backend endpoint
8. Add tests
9. Write `README.md` with local-dev + deploy instructions
10. Verify: `pnpm lint && pnpm typecheck && pnpm test && pnpm build`

## Reference files to expect

Drop these into `packages/design-system/` before running:

- `colors_and_type.css` — reference CSS tokens
- `assets/logos/` — FAAIF wordmark + subsidiary + Next.js/Node.js/Prisma SVGs
- `ui_kits/faaif-group/*.jsx` — reference React components (match the visual output; don't copy inline styles — use Tailwind)

## Deliverables

When finished, all of the following must be true:

- `pnpm dev` starts the app at `localhost:3000` with the API on `localhost:4000`
- The landing page renders pixel-identical to the reference JSX components
- Submitting the contact form persists to Postgres and sends two emails
- All tests pass
- Lighthouse scores meet the budget above
- README has clear instructions for deploying to Vercel + Railway + Neon

## Ground rules

- Do not invent new sections or copy. If something is ambiguous, ask.
- Do not add illustrations, emoji, or decorative SVG beyond what's specified.
- Do not introduce additional color accents beyond the three subsidiary brand colors.
- Do not use any UI library (no shadcn, no Radix, no Chakra). Tailwind + Headless UI only, and only for combobox/dialog primitives if truly needed.
- Commit in logical chunks with clear Conventional Commits messages.

Start now. Ask clarifying questions only if something would block you; otherwise proceed.

---

# REFERENCE FILES — EMBEDDED

All the reference source files are included below. When executing, extract each fenced block into the path noted in its header. The paths are relative to `packages/design-system/` unless noted.

## `packages/design-system/colors_and_type.css`

```css
/* =============================================================
   FAAIF Group Design System — Tokens
   "The Modern Monolith"
   ============================================================= */

/* Fonts ---------------------------------------------------- */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  /* -----------------------------------------------------------
     COLOR TOKENS
     ----------------------------------------------------------- */

  /* Base palette — "The Modern Monolith" */
  --navy-950: #020617;
  --navy-900: #0f172a; /* Primary. Deep Midnight Navy */
  --navy-800: #1e293b; /* Elevated dark surface */
  --navy-700: #334155;
  --slate-600: #475569;
  --slate-500: #64748b; /* Secondary. Slate */
  --slate-400: #94a3b8;
  --slate-300: #cbd5e1;
  --slate-200: #e2e8f0;
  --slate-100: #f1f5f9;
  --slate-50: #f8fafc; /* Alt background */
  --white: #ffffff;

  /* Accent — used scarcely */
  --amber-600: #d97706; /* Hover for amber CTA */
  --amber-500: #f59e0b; /* Primary accent (Gold) */
  --amber-400: #fbbf24;
  --sky-500: #38bdf8; /* Secondary accent option */

  /* Subsidiary brand accents — only used on hover of their card */
  --brand-cloudordinate: #38bdf8; /* Sky — logistics / tech */
  --brand-skyfitstrength: #f59e0b; /* Amber — fitness */
  --brand-getmoodzy: #f43f5e; /* Rose — lifestyle */

  /* Semantic — foreground */
  --fg-1: var(--navy-900); /* Primary text */
  --fg-2: var(--slate-600); /* Secondary text */
  --fg-3: var(--slate-500); /* Tertiary / muted */
  --fg-4: var(--slate-400); /* Placeholders */
  --fg-inverse: var(--white);
  --fg-inverse-2: rgba(255, 255, 255, 0.72);
  --fg-inverse-3: rgba(255, 255, 255, 0.48);
  --fg-accent: var(--amber-500);

  /* Semantic — background */
  --bg-1: var(--white);
  --bg-2: var(--slate-50);
  --bg-3: var(--slate-100);
  --bg-dark: var(--navy-900);
  --bg-dark-elevated: var(--navy-800);
  --bg-nav-glass: rgba(255, 255, 255, 0.72);

  /* Semantic — borders */
  --border-1: var(--slate-200);
  --border-2: var(--slate-300);
  --border-dark: rgba(255, 255, 255, 0.08);
  --border-focus: var(--amber-500);

  /* -----------------------------------------------------------
     TYPOGRAPHY TOKENS
     ----------------------------------------------------------- */

  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Fraunces', Georgia, serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Menlo, monospace;

  /* Type scale — modular, matches 1.25 ratio loosely tuned */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-md: 18px;
  --text-lg: 20px;
  --text-xl: 24px;
  --text-2xl: 32px;
  --text-3xl: 40px;
  --text-4xl: 56px;
  --text-5xl: 72px;
  --text-6xl: 88px;

  --lh-tight: 1.1;
  --lh-display: 1.15;
  --lh-heading: 1.3;
  --lh-body: 1.6;
  --lh-loose: 1.75;

  --tracking-display: -0.02em;
  --tracking-heading: -0.01em;
  --tracking-body: 0;
  --tracking-label: 0.04em;
  --tracking-caps: 0.08em;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* -----------------------------------------------------------
     SPACING — 4px base
     ----------------------------------------------------------- */

  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
  --space-11: 160px;

  /* -----------------------------------------------------------
     RADII
     ----------------------------------------------------------- */

  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-pill: 9999px;

  /* -----------------------------------------------------------
     ELEVATION
     ----------------------------------------------------------- */

  --shadow-1: 0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 1px rgba(15, 23, 42, 0.02);
  --shadow-2: 0 4px 12px rgba(15, 23, 42, 0.06), 0 2px 4px rgba(15, 23, 42, 0.03);
  --shadow-3: 0 16px 40px rgba(15, 23, 42, 0.08), 0 4px 8px rgba(15, 23, 42, 0.04);
  --shadow-nav: 0 1px 0 rgba(15, 23, 42, 0.06);
  --shadow-focus: 0 0 0 2px var(--white), 0 0 0 4px var(--amber-500);

  /* -----------------------------------------------------------
     MOTION
     ----------------------------------------------------------- */

  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-micro: 160ms;
  --dur-short: 220ms;
  --dur-medium: 400ms;
  --dur-long: 600ms;

  /* -----------------------------------------------------------
     LAYOUT
     ----------------------------------------------------------- */

  --container-max: 1200px;
  --gutter-desktop: 48px;
  --gutter-mobile: 24px;
  --nav-height: 72px;

  /* Glass */
  --blur-nav: blur(16px) saturate(140%);
}

/* =============================================================
   SEMANTIC TYPOGRAPHY — use these as classes or element-level
   ============================================================= */

.display-1,
.h-display {
  font-family: var(--font-sans);
  font-weight: var(--weight-bold);
  font-size: clamp(48px, 7vw, var(--text-6xl));
  line-height: var(--lh-display);
  letter-spacing: var(--tracking-display);
  color: var(--fg-1);
}

.h1 {
  font-family: var(--font-sans);
  font-weight: var(--weight-bold);
  font-size: clamp(36px, 5vw, var(--text-4xl));
  line-height: var(--lh-display);
  letter-spacing: var(--tracking-display);
  color: var(--fg-1);
}

.h2 {
  font-family: var(--font-sans);
  font-weight: var(--weight-semibold);
  font-size: var(--text-3xl);
  line-height: var(--lh-heading);
  letter-spacing: var(--tracking-heading);
  color: var(--fg-1);
}

.h3 {
  font-family: var(--font-sans);
  font-weight: var(--weight-semibold);
  font-size: var(--text-2xl);
  line-height: var(--lh-heading);
  letter-spacing: var(--tracking-heading);
  color: var(--fg-1);
}

.h4 {
  font-family: var(--font-sans);
  font-weight: var(--weight-semibold);
  font-size: var(--text-xl);
  line-height: var(--lh-heading);
  color: var(--fg-1);
}

.editorial {
  font-family: var(--font-display);
  font-weight: var(--weight-regular);
  font-size: var(--text-3xl);
  line-height: var(--lh-heading);
  letter-spacing: var(--tracking-heading);
  color: var(--fg-1);
  font-style: italic;
  font-variation-settings: 'opsz' 144;
}

.lede {
  font-family: var(--font-sans);
  font-weight: var(--weight-regular);
  font-size: var(--text-lg);
  line-height: var(--lh-body);
  color: var(--fg-2);
}

.body,
p {
  font-family: var(--font-sans);
  font-weight: var(--weight-regular);
  font-size: var(--text-base);
  line-height: var(--lh-body);
  color: var(--fg-2);
}

.caption {
  font-family: var(--font-sans);
  font-weight: var(--weight-medium);
  font-size: var(--text-sm);
  line-height: var(--lh-heading);
  color: var(--fg-3);
}

.eyebrow {
  font-family: var(--font-sans);
  font-weight: var(--weight-semibold);
  font-size: var(--text-xs);
  line-height: 1;
  letter-spacing: var(--tracking-caps);
  text-transform: uppercase;
  color: var(--fg-accent);
}

.mono {
  font-family: var(--font-mono);
  font-weight: var(--weight-regular);
  font-size: var(--text-sm);
  color: var(--fg-2);
}

/* Base ---------------------------------------------------- */
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: var(--lh-body);
  color: var(--fg-1);
  background: var(--bg-1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
p {
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
```

## `packages/design-system/ui_kits/faaif-group/Navigation.jsx`

```jsx
function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkStyle = {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--fg-2)',
    cursor: 'pointer',
    padding: '6px 0',
    position: 'relative',
    transition: 'color 220ms var(--ease-out)',
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: 1200,
        zIndex: 50,
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(16px) saturate(140%)',
        WebkitBackdropFilter: 'blur(16px) saturate(140%)',
        border: '1px solid rgba(15,23,42,0.06)',
        borderRadius: 16,
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: scrolled
          ? '0 16px 40px rgba(15,23,42,0.08), 0 4px 8px rgba(15,23,42,0.04)'
          : '0 1px 0 rgba(15,23,42,0.04)',
        transition: 'box-shadow 300ms var(--ease-out)',
      }}
    >
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: 17,
            letterSpacing: '-0.02em',
            color: 'var(--navy-900)',
          }}
        >
          FAAIF <span style={{ fontWeight: 400, color: 'var(--slate-500)' }}>Group</span>
        </span>
        <span
          style={{ width: 2, height: 14, background: 'var(--amber-500)', display: 'inline-block' }}
        />
      </a>

      <div style={{ display: 'flex', gap: 32 }}>
        {['Portfolio', 'Labs', 'Mission', 'Contact'].map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              ...linkStyle,
              color: i === 0 ? 'var(--navy-900)' : 'var(--fg-2)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--navy-900)')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = i === 0 ? 'var(--navy-900)' : 'var(--fg-2)')
            }
          >
            {l}
          </a>
        ))}
      </div>

      <button
        style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: 13,
          background: 'var(--navy-900)',
          color: '#fff',
          border: 'none',
          padding: '10px 16px',
          borderRadius: 8,
          cursor: 'pointer',
          transition: 'background 160ms var(--ease-out)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--navy-800)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--navy-900)')}
      >
        Investor Relations
      </button>
    </nav>
  );
}

Object.assign(window, { Navigation });
```

## `packages/design-system/ui_kits/faaif-group/Hero.jsx`

```jsx
function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 200,
        paddingBottom: 160,
        overflow: 'hidden',
      }}
    >
      {/* whisper gold glow */}
      <div
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08), transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(20px)',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', position: 'relative' }}>
        <div style={{ maxWidth: 860 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            A Diversified Holding Company · Est. 2019
          </div>

          <h1
            style={{
              fontFamily: 'Inter',
              fontSize: 'clamp(48px, 7vw, 84px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--navy-900)',
              marginBottom: 28,
            }}
          >
            Empowering Diverse
            <br />
            Industries Through
            <br />
            <span
              style={{
                fontFamily: 'Fraunces',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'var(--navy-900)',
              }}
            >
              Innovation.
            </span>
          </h1>

          <p
            style={{
              fontFamily: 'Inter',
              fontSize: 20,
              lineHeight: 1.55,
              color: 'var(--fg-2)',
              maxWidth: 640,
              marginBottom: 44,
            }}
          >
            The parent organization behind Cloud Ordinate, SkyFitStrength, and GetMoodzy — three
            operating companies united by a single thesis: patient capital, engineered execution.
          </p>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 15,
                background: 'var(--amber-500)',
                color: 'var(--navy-900)',
                border: 'none',
                padding: '14px 22px',
                borderRadius: 8,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                transition: 'all 160ms var(--ease-out)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--amber-600)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--amber-500)')}
            >
              Our Portfolio
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>

            <button
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 15,
                background: 'transparent',
                color: 'var(--navy-900)',
                border: '1px solid var(--border-1)',
                padding: '14px 22px',
                borderRadius: 8,
                cursor: 'pointer',
                transition: 'border-color 220ms var(--ease-out)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--navy-900)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-1)')}
            >
              Mission & Values
            </button>
          </div>

          {/* Investor-facing stat strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 48,
              marginTop: 96,
              paddingTop: 32,
              borderTop: '1px solid var(--border-1)',
            }}
          >
            {[
              { n: '3', l: 'Operating Companies' },
              { n: '$240M', l: 'Assets Under Management' },
              { n: '180+', l: 'Team Members' },
              { n: '12', l: 'Countries Served' },
            ].map((s) => (
              <div key={s.l}>
                <div
                  style={{
                    fontFamily: 'Fraunces',
                    fontSize: 40,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: 'var(--navy-900)',
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{ fontFamily: 'Inter', fontSize: 13, color: 'var(--fg-3)', marginTop: 8 }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
```

## `packages/design-system/ui_kits/faaif-group/PortfolioGrid.jsx`

```jsx
function BrandCard({ name, sector, flagship, description, accent, logoSvg, href }) {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'block',
        background: '#fff',
        border: `1px solid ${hover ? accent : 'var(--border-1)'}`,
        borderRadius: 12,
        padding: 32,
        transition: 'all 400ms var(--ease-out)',
        transform: hover ? 'translateY(-2px)' : 'none',
        boxShadow: hover
          ? `0 16px 40px ${accent}1f, 0 4px 12px rgba(15,23,42,0.05)`
          : '0 1px 2px rgba(15,23,42,0.04)',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 32,
        }}
      >
        <div
          style={{
            color: hover ? accent : 'var(--slate-400)',
            transition: 'color 400ms var(--ease-out)',
            height: 28,
            display: 'flex',
            alignItems: 'center',
          }}
          dangerouslySetInnerHTML={{ __html: logoSvg }}
        />
        <span className="eyebrow" style={{ color: 'var(--fg-3)', fontSize: 11 }}>
          {sector}
        </span>
      </div>

      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: '-0.01em',
            color: 'var(--navy-900)',
            marginBottom: 8,
          }}
        >
          {name}
        </h3>

        {flagship && (
          <div
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 12,
              color: 'var(--fg-3)',
              marginBottom: 16,
            }}
          >
            Flagship: <span style={{ color: 'var(--navy-900)', fontWeight: 500 }}>{flagship}</span>
          </div>
        )}

        <p
          style={{
            fontFamily: 'Inter',
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--fg-2)',
            marginBottom: 32,
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: 14,
          color: hover ? accent : 'var(--navy-900)',
          transition: 'color 220ms var(--ease-out)',
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
          style={{
            transform: hover ? 'translateX(3px)' : 'none',
            transition: 'transform 220ms var(--ease-out)',
          }}
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}

function PortfolioGrid() {
  const brands = [
    {
      name: 'Cloud Ordinate',
      sector: 'Logistics & Tech',
      flagship: 'DepotOS',
      description:
        'Container management SaaS for depots, yards, and intermodal terminals. DepotOS is the flagship operating system trusted by logistics operators across 12 countries.',
      accent: '#38BDF8',
      href: '#',
      logoSvg: `<svg width="120" height="24" viewBox="0 0 120 24" fill="none">
        <path d="M4 14c0-3 2-5 5-5 2 0 3 1 3 1s1-2 4-2 5 2 5 5-2 4-5 4H9c-2 0-5-1-5-3z" stroke="currentColor" stroke-width="1.5" fill="none"/>
        <text x="30" y="17" font-family="Inter" font-weight="600" font-size="14" fill="currentColor" letter-spacing="-0.01em">Cloud Ordinate</text>
      </svg>`,
    },
    {
      name: 'SkyFitStrength',
      sector: 'Health & Fitness',
      flagship: 'Performance Platform',
      description:
        'A strength and performance platform for athletes and operators who measure progress in kilos, not vibes. Built by coaches, used by champions.',
      accent: '#F59E0B',
      href: '#',
      logoSvg: `<svg width="140" height="24" viewBox="0 0 140 24" fill="none">
        <path d="M4 8 L4 18 M4 13 L10 13 M10 6 L10 20 M16 6 L16 20 M22 8 L22 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        <text x="32" y="17" font-family="Inter" font-weight="600" font-size="14" fill="currentColor" letter-spacing="-0.01em">SkyFitStrength</text>
      </svg>`,
    },
    {
      name: 'GetMoodzy',
      sector: 'Lifestyle · Retail',
      flagship: 'Direct-to-Consumer',
      description:
        'Emotion-driven consumer products that turn everyday objects into small celebrations. Mood-first design for the generation that shops with feelings.',
      accent: '#F43F5E',
      href: '#',
      logoSvg: `<svg width="130" height="24" viewBox="0 0 130 24" fill="none">
        <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.5"/>
        <path d="M9 13c0.8 1.2 2 2 3 2s2.2-0.8 3-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        <circle cx="10" cy="11" r="0.7" fill="currentColor"/>
        <circle cx="14" cy="11" r="0.7" fill="currentColor"/>
        <text x="26" y="17" font-family="Inter" font-weight="600" font-size="14" fill="currentColor" letter-spacing="-0.01em">GetMoodzy</text>
      </svg>`,
    },
  ];

  return (
    <section
      id="portfolio"
      style={{
        background: 'var(--bg-2)',
        padding: '128px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 56,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Portfolio
            </div>
            <h2
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 48,
                letterSpacing: '-0.025em',
                color: 'var(--navy-900)',
                lineHeight: 1.1,
              }}
            >
              Our Global Brands
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: 16,
              lineHeight: 1.6,
              color: 'var(--fg-2)',
              maxWidth: 360,
            }}
          >
            Three operating companies across logistics, health, and lifestyle — each led
            independently, each built to last.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {brands.map((b) => (
            <BrandCard key={b.name} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BrandCard, PortfolioGrid });
```

## `packages/design-system/ui_kits/faaif-group/LabsSection.jsx`

```jsx
function LabsSection() {
  const stack = [
    {
      name: 'Next.js',
      role: 'Application framework',
      note: 'Edge-rendered, hybrid static, end-to-end TypeScript.',
      src: '../../assets/logos/nextjs.svg',
      invert: true,
    },
    {
      name: 'Node.js',
      role: 'Runtime',
      note: 'Shared services layer across all operating companies.',
      src: '../../assets/logos/nodejs.svg',
    },
    {
      name: 'Prisma',
      role: 'Data layer',
      note: 'Typed ORM and migrations. A single source of schema truth.',
      src: '../../assets/logos/prisma.svg',
    },
  ];

  return (
    <section
      id="labs"
      style={{
        background: 'var(--navy-900)',
        color: '#fff',
        padding: '128px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle amber hairline at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'end',
            marginBottom: 64,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              FAAIF Labs
            </div>
            <h2
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 48,
                letterSpacing: '-0.025em',
                color: '#fff',
                lineHeight: 1.1,
              }}
            >
              Engineered for
              <br />
              <span style={{ fontFamily: 'Fraunces', fontStyle: 'italic', fontWeight: 400 }}>
                Excellence.
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            A shared engineering practice powers every product across the group. One platform team,
            one stack, one standard of quality — so each subsidiary ships faster than it could
            alone.
          </p>
        </div>

        {/* Bento */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 200px)',
            gap: 16,
          }}
        >
          {/* Tall feature card */}
          <div
            style={{
              gridColumn: '1 / 3',
              gridRow: '1 / 3',
              background: 'var(--navy-800)',
              borderRadius: 16,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div>
              <div className="eyebrow" style={{ color: 'var(--amber-500)', marginBottom: 16 }}>
                Platform
              </div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 28,
                  letterSpacing: '-0.01em',
                  color: '#fff',
                  marginBottom: 12,
                }}
              >
                One stack. Three products.
              </h3>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.72)',
                }}
              >
                A single codebase serves logistics software, fitness platforms, and consumer retail
                — with shared auth, billing, analytics, and deployment pipelines maintained by Labs.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontFamily: 'JetBrains Mono',
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <span
                style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--amber-500)' }}
              />
              v3.2.0 · 142 deploys this week
            </div>
          </div>

          {stack.map((s) => (
            <div
              key={s.name}
              style={{
                background: 'var(--navy-800)',
                borderRadius: 16,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <img
                src={s.src}
                alt={s.name}
                style={{
                  width: 40,
                  height: 40,
                  filter: s.invert ? 'invert(1)' : 'none',
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 18,
                    color: '#fff',
                    marginBottom: 4,
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 10,
                  }}
                >
                  {s.role}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: 'rgba(255,255,255,0.72)',
                  }}
                >
                  {s.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { LabsSection });
```

## `packages/design-system/ui_kits/faaif-group/MissionSection.jsx`

```jsx
function MissionSection() {
  const values = [
    {
      n: '01',
      t: 'Patient Capital',
      d: 'We invest on a decade horizon. Compounding only works when you let it.',
    },
    {
      n: '02',
      t: 'Operator-Led',
      d: 'Every subsidiary is run by a founder who owns the outcome — not a professional manager.',
    },
    {
      n: '03',
      t: 'Engineering Rigor',
      d: 'Shared infrastructure. Shared standards. Independent execution.',
    },
    {
      n: '04',
      t: 'Durable Brands',
      d: 'We build companies that our grandchildren would still recognize.',
    },
  ];

  return (
    <section id="mission" style={{ background: '#fff', padding: '128px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ maxWidth: 860, marginBottom: 96 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Mission & Values
          </div>

          <div
            style={{
              fontFamily: 'Fraunces',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
              color: 'var(--navy-900)',
              marginBottom: 40,
              fontVariationSettings: '"opsz" 144',
            }}
          >
            "We back operators who measure success in decades, not quarters — and give them the
            infrastructure to prove it."
          </div>

          <div
            style={{
              fontFamily: 'Inter',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--fg-3)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span style={{ width: 24, height: 1, background: 'var(--amber-500)' }} />
            FAAIF Group · Founding Letter, 2019
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            paddingTop: 48,
            borderTop: '1px solid var(--border-1)',
          }}
        >
          {values.map((v) => (
            <div key={v.n}>
              <div
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--amber-500)',
                  marginBottom: 20,
                }}
              >
                {v.n}
              </div>
              <h4
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 18,
                  letterSpacing: '-0.01em',
                  color: 'var(--navy-900)',
                  marginBottom: 12,
                }}
              >
                {v.t}
              </h4>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'var(--fg-2)',
                }}
              >
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MissionSection });
```

## `packages/design-system/ui_kits/faaif-group/ContactForm.jsx`

```jsx
function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    reason: 'Software',
    message: '',
  });

  const fieldStyle = {
    fontFamily: 'Inter',
    fontSize: 14,
    padding: '12px 14px',
    border: '1px solid var(--border-1)',
    borderRadius: 8,
    background: '#fff',
    width: '100%',
    color: 'var(--navy-900)',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 220ms var(--ease-out), box-shadow 220ms var(--ease-out)',
  };

  const labelStyle = {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--fg-2)',
    letterSpacing: '0.02em',
    marginBottom: 8,
    display: 'block',
  };

  const focus = (e) => {
    e.target.style.borderColor = 'var(--navy-900)';
    e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.15)';
  };
  const blur = (e) => {
    e.target.style.borderColor = 'var(--border-1)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-2)', padding: '128px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 96,
            alignItems: 'start',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              Contact Hub
            </div>
            <h2
              style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: 48,
                letterSpacing: '-0.025em',
                color: 'var(--navy-900)',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Let's build
              <br />
              something lasting.
            </h2>
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: 16,
                lineHeight: 1.6,
                color: 'var(--fg-2)',
                marginBottom: 40,
              }}
            >
              Partnership inquiries, press, investor relations, and general correspondence — we read
              every message within two business days.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { l: 'Headquarters', v: 'One Financial Center · Boston, MA' },
                { l: 'General', v: 'hello@faaif.group' },
                { l: 'Investor Relations', v: 'ir@faaif.group' },
              ].map((item) => (
                <div
                  key={item.l}
                  style={{ paddingBottom: 20, borderBottom: '1px solid var(--border-1)' }}
                >
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono',
                      fontSize: 11,
                      color: 'var(--fg-3)',
                      marginBottom: 4,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.l}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 15,
                      color: 'var(--navy-900)',
                      fontWeight: 500,
                    }}
                  >
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--border-1)',
              borderRadius: 16,
              padding: 40,
              boxShadow: '0 4px 12px rgba(15,23,42,0.04)',
            }}
          >
            {submitted ? (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    background: 'var(--amber-500)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 22,
                    fontWeight: 600,
                    color: 'var(--navy-900)',
                    marginBottom: 8,
                  }}
                >
                  Received, thank you.
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'var(--fg-2)' }}>
                  A team member will be in touch within two business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', company: '', reason: 'Software', message: '' });
                  }}
                  style={{
                    marginTop: 24,
                    background: 'transparent',
                    color: 'var(--navy-900)',
                    border: '1px solid var(--border-1)',
                    padding: '10px 18px',
                    borderRadius: 8,
                    fontFamily: 'Inter',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{ display: 'grid', gap: 20 }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      style={fieldStyle}
                      onFocus={focus}
                      onBlur={blur}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alexandra Chen"
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      style={fieldStyle}
                      onFocus={focus}
                      onBlur={blur}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    style={fieldStyle}
                    onFocus={focus}
                    onBlur={blur}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Organization name"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Reason for Inquiry</label>
                  <select
                    style={{
                      ...fieldStyle,
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      paddingRight: 36,
                    }}
                    onFocus={focus}
                    onBlur={blur}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  >
                    <option>Software</option>
                    <option>Fitness</option>
                    <option>Retail</option>
                    <option>Partnerships</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    style={{
                      ...fieldStyle,
                      resize: 'vertical',
                      minHeight: 120,
                      fontFamily: 'Inter',
                    }}
                    onFocus={focus}
                    onBlur={blur}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help…"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: 15,
                    background: 'var(--amber-500)',
                    color: 'var(--navy-900)',
                    border: 'none',
                    padding: '14px 22px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    justifySelf: 'start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    transition: 'background 160ms var(--ease-out)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--amber-600)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--amber-500)')}
                >
                  Submit Inquiry
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContactForm });
```

## `packages/design-system/ui_kits/faaif-group/Footer.jsx`

```jsx
function Footer() {
  const cols = [
    { title: 'Portfolio', links: ['Cloud Ordinate', 'SkyFitStrength', 'GetMoodzy'] },
    { title: 'Company', links: ['Mission', 'Labs', 'Careers', 'Press'] },
    { title: 'Investors', links: ['Quarterly Letters', 'Annual Report', 'IR Contact'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Disclosures'] },
  ];

  return (
    <footer
      style={{
        background: 'var(--navy-900)',
        color: 'rgba(255,255,255,0.72)',
        padding: '80px 0 40px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr repeat(4, 1fr)',
            gap: 48,
            marginBottom: 64,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}
              >
                FAAIF <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>Group</span>
              </span>
              <span style={{ width: 2, height: 16, background: 'var(--amber-500)' }} />
            </div>
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: 13,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.48)',
                maxWidth: 280,
              }}
            >
              A diversified holding company. Patient capital, engineered execution.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div
                className="eyebrow"
                style={{ color: 'rgba(255,255,255,0.48)', marginBottom: 20 }}
              >
                {col.title}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.72)',
                        transition: 'color 160ms',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'JetBrains Mono',
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          <span>© 2026 FAAIF Group. All rights reserved.</span>
          <span>Boston · London · Singapore</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
```

## `packages/design-system/assets/logos/faaif-group.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 40" fill="none">
  <g font-family="Inter, sans-serif" font-weight="700" letter-spacing="-0.02em">
    <text x="0" y="28" font-size="24" fill="#0F172A">FAAIF</text>
    <text x="78" y="28" font-size="24" fill="#64748B" font-weight="400">Group</text>
  </g>
  <rect x="148" y="10" width="2" height="20" fill="#F59E0B"></rect>
</svg>
```

## `packages/design-system/assets/logos/cloud-ordinate.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  <g stroke="currentColor" stroke-width="1.75" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 24c0-4 3-7 7-7 3 0 5 2 5 2s2-4 7-4 8 3 8 7-3 7-7 7H13c-4 0-7-2-7-5z"></path>
  </g>
  <g font-family="Inter, sans-serif" font-weight="600" letter-spacing="-0.015em">
    <text x="44" y="26" font-size="18" fill="currentColor">Cloud Ordinate</text>
  </g>
</svg>
```

## `packages/design-system/assets/logos/skyfitstrength.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  <g stroke="currentColor" stroke-width="1.75" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 20 L14 20 M16 12 L16 28 M22 12 L22 28 M16 20 L22 20 M28 12 L28 28 M32 12 L32 28"></path>
  </g>
  <g font-family="Inter, sans-serif" font-weight="600" letter-spacing="-0.015em">
    <text x="44" y="26" font-size="18" fill="currentColor">SkyFitStrength</text>
  </g>
</svg>
```

## `packages/design-system/assets/logos/getmoodzy.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  <g stroke="currentColor" stroke-width="1.75" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="20" r="8"></circle>
    <path d="M14 22c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5"></path>
    <circle cx="15.5" cy="18" r="0.6" fill="currentColor"></circle>
    <circle cx="20.5" cy="18" r="0.6" fill="currentColor"></circle>
  </g>
  <g font-family="Inter, sans-serif" font-weight="600" letter-spacing="-0.015em">
    <text x="36" y="26" font-size="18" fill="currentColor">GetMoodzy</text>
  </g>
</svg>
```

## `packages/design-system/assets/logos/nextjs.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <circle cx="64" cy="64" r="64" fill="#000"></circle>
  <path d="M49 34h8v52l40-52h8L67 82l38 48h-10L57 88v42h-8z" fill="#fff"></path>
  <rect x="81" y="34" width="6" height="52" fill="#fff"></rect>
</svg>
```

## `packages/design-system/assets/logos/nodejs.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <path d="M64 6L14 34v60l50 28 50-28V34L64 6z" fill="#539E43"></path>
  <path d="M64 14L22 38v52l42 24 42-24V38L64 14z" fill="#333"></path>
  <path d="M64 22L30 42v44l34 20 34-20V42L64 22z" fill="#539E43" opacity=".85"></path>
  <g font-family="Inter, sans-serif" font-weight="700" fill="#fff" text-anchor="middle">
    <text x="64" y="72" font-size="18">node</text>
    <text x="64" y="88" font-size="10" opacity=".8">JS</text>
  </g>
</svg>
```

## `packages/design-system/assets/logos/prisma.svg`

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <path d="M46 8c2-3 7-3 9 0l52 92c2 3 0 8-4 8H24c-4 0-7-4-5-8L46 8z" fill="#2D3748"></path>
  <path d="M56 30l-22 62h48l6-16-32-46z" fill="#fff" opacity=".95"></path>
  <path d="M68 54l18 38H58l10-38z" fill="#2D3748" opacity=".15"></path>
</svg>
```

---

## Extraction instructions for Claude Code

After reading this document:

1. Create `packages/design-system/` in the monorepo
2. For each fenced block above with a path header, write the content to that path (creating subdirectories as needed)
3. Proceed with the build instructions at the top of this document
4. The JSX components use inline styles referencing CSS variables — when converting to Tailwind, preserve exact visual output; do not alter colors, spacing, typography, or layout
