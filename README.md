# FAAIF Group — Monorepo

Production-grade landing page for FAAIF Group, a diversified holding company. Built with Next.js 14 (frontend), Express + Prisma (backend), in a pnpm monorepo.

## Structure

```
faaif-group/
├── apps/
│   ├── web/          # Next.js 14 frontend (port 3000)
│   └── api/          # Express backend (port 4000)
├── packages/
│   └── design-system/  # Shared tokens, schemas, assets
├── pnpm-workspace.yaml
└── docker-compose.yml
```

## Prerequisites

- Node.js 18+
- pnpm 9+
- Docker (for local Postgres)

## Local Development

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start Postgres

```bash
docker compose up -d
```

### 3. Set up API environment

```bash
cp apps/api/.env.example apps/api/.env
# Edit apps/api/.env with your SMTP credentials
```

### 4. Run database migrations

```bash
cd apps/api
pnpm db:migrate
```

### 5. Start dev servers

From the root:

```bash
pnpm dev
```

- Frontend: http://localhost:3000
- API: http://localhost:4000
- Health check: http://localhost:4000/api/health

## Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `pnpm dev`       | Start web + api concurrently |
| `pnpm build`     | Build all packages           |
| `pnpm lint`      | Lint all packages            |
| `pnpm typecheck` | Type-check all packages      |
| `pnpm test`      | Run all tests                |
| `pnpm format`    | Format with Prettier         |

## Testing

```bash
# Unit tests (Vitest)
pnpm test

# API integration tests
cd apps/api && pnpm test

# E2E tests (Playwright) — requires running dev server
cd apps/web && pnpm exec playwright test
```

## Deployment

### Frontend — Vercel

1. Connect the repo to Vercel
2. Set **Root Directory** to `apps/web`
3. Add env var: `NEXT_PUBLIC_API_URL=https://your-api.railway.app`
4. Deploy

### Backend — Railway

1. Create a new Railway project
2. Add a PostgreSQL plugin
3. Deploy from `apps/api/` with these env vars:
   - `DATABASE_URL` (from Railway Postgres plugin)
   - `CORS_ORIGIN=https://your-vercel-domain.vercel.app`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - `EMAIL_FROM`, `EMAIL_IR`
4. Run migrations: `pnpm db:migrate --accept-data-loss` (Railway deploy command)

### Database — Neon

1. Create a Neon project
2. Copy the connection string to `DATABASE_URL`
3. Run `pnpm db:migrate` from `apps/api/`

## Environment Variables

See [apps/api/.env.example](apps/api/.env.example) for all required API variables.

Frontend only requires `NEXT_PUBLIC_API_URL`.

## Tech Stack

| Layer    | Technology                                                    |
| -------- | ------------------------------------------------------------- |
| Frontend | Next.js 14, TypeScript, Tailwind CSS, React Hook Form, Sonner |
| Backend  | Express, TypeScript, Prisma ORM, Zod                          |
| Database | PostgreSQL (Neon/Supabase for production)                     |
| Email    | Nodemailer                                                    |
| Testing  | Vitest, Supertest, Playwright                                 |
| Tooling  | pnpm, ESLint, Prettier, Husky                                 |

"# faaifgroup"
"# faaifgroup"
