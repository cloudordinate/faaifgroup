export interface Venture {
  slug: string;
  name: string;
  tagline: string;
  sector: string;
  region: string;
  site: string;
  oneLiner: string;
  summary: string;
  focus: string[];
  metrics: Array<{ label: string; value: string }>;
}

export const ventures: Venture[] = [
  {
    slug: 'cloud-ordinate',
    name: 'Cloud Ordinate',
    tagline: 'Container intelligence for depots, yards, and intermodal terminals.',
    sector: 'Logistics & Technology',
    region: 'Asia-Pacific / Europe',
    site: 'cloudordinate.example.com',
    oneLiner: 'Container management SaaS trusted by operators across 12 countries.',
    summary:
      'Cloud Ordinate builds the operating system for modern yard and depot teams. FAAIF supports product, finance, and enterprise expansion while the company maintains independent execution.',
    focus: ['DepotOS orchestration', 'Carrier integrations', 'Predictive turnaround analytics'],
    metrics: [
      { label: 'Deploys / week', value: '142' },
      { label: 'Countries', value: '12' },
      { label: 'Enterprise depots', value: '63' },
    ],
  },
  {
    slug: 'skyfitstrength',
    name: 'SkyFitStrength',
    tagline: 'Performance systems for athletes and high-output operators.',
    sector: 'Health & Fitness',
    region: 'Global digital + flagship hubs',
    site: 'skyfitstrength.example.com',
    oneLiner: 'Strength-focused coaching and digital programming platform.',
    summary:
      'SkyFitStrength provides outcome-driven training programs and a full coaching stack. FAAIF contributes governance and growth infrastructure while keeping coaching craft independent.',
    focus: ['Hybrid coaching products', 'Athlete progress telemetry', 'Coach education programs'],
    metrics: [
      { label: 'Active members', value: '18.4k' },
      { label: 'Retention', value: '91%' },
      { label: 'Countries', value: '22' },
    ],
  },
  {
    slug: 'getmoodzy',
    name: 'GetMoodzy',
    tagline: 'Mood-first commerce for the modern lifestyle customer.',
    sector: 'Lifestyle / Retail',
    region: 'Singapore-first',
    site: 'getmoodzy.example.com',
    oneLiner: 'Emotion-led products designed for everyday rituals and gifting.',
    summary:
      'GetMoodzy turns ordinary categories into culture-led products with strong repeat behavior. FAAIF supplies capital discipline and systems while the brand keeps creative control.',
    focus: ['Category incubation', 'Creator-led launches', 'Lifecycle merchandising'],
    metrics: [
      { label: 'Repeat customers', value: '64%' },
      { label: 'SKUs launched', value: '280+' },
      { label: 'Gross margin', value: '58%' },
    ],
  },
  {
    slug: 'tradeasia-elite-express',
    name: 'Tradeasia / Elite Express',
    tagline: 'Cross-border freight and integrated export operations.',
    sector: 'Shipping / Freight',
    region: 'Southeast Asia',
    site: 'tradeasia-express.example.com',
    oneLiner: 'Cargo-first transport operator with integrated route operations.',
    summary:
      'Tradeasia and Elite Express run specialized logistics lanes for time-sensitive shipping. FAAIF supports systems modernization and treasury while management leads field operations.',
    focus: [
      'Route network optimization',
      'Fleet reliability systems',
      'Export compliance workflows',
    ],
    metrics: [
      { label: 'Routes served', value: '39' },
      { label: 'On-time rate', value: '94%' },
      { label: 'Regional offices', value: '3' },
    ],
  },
];

export function findVentureBySlug(slug: string): Venture | undefined {
  return ventures.find((venture) => venture.slug === slug);
}
