export interface Venture {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  detail: string;
  website: string;
  metrics: Array<{ label: string; value: string }>;
}

export const ventures: Venture[] = [
  {
    slug: 'cloud-ordinate',
    name: 'Cloud Ordinate',
    category: 'Cloud Infrastructure',
    year: '2024',
    summary:
      'Cloud Ordinate is the flagship venture of FAAIF Group and the foundation upon which the entire organization was built. Specializing in high-performance cloud infrastructure and enterprise software solutions, Cloud Ordinate serves businesses that demand reliability, security, and scale.',
    detail:
      'From cloud architecture and deployment to custom enterprise application development, Cloud Ordinate delivers end-to-end solutions that help organizations modernize their operations and accelerate their growth in an increasingly digital world.',
    website: 'cloudordinate.com',
    metrics: [
      { label: 'Focus', value: 'Enterprise Cloud' },
      { label: 'Core strength', value: 'Scalability' },
      { label: 'Delivery model', value: 'End-to-end' },
    ],
  },
  {
    slug: 'getmoodzy',
    name: 'GetMoodzy',
    category: 'Lifestyle Technology',
    year: '2024',
    summary:
      "GetMoodzy is FAAIF Group's consumer lifestyle and technology venture, designed to enrich the daily experiences of its users through intelligent, mood-driven features and personalized content.",
    detail:
      "Built on the belief that technology should adapt to people, GetMoodzy leverages data and intuitive design to create a product that feels uniquely personal. It represents the group's investment in the fast-growing consumer tech and lifestyle application market.",
    website: 'getmoodzy.co',
    metrics: [
      { label: 'Focus', value: 'Consumer Experience' },
      { label: 'Approach', value: 'Personalization' },
      { label: 'Category', value: 'Lifestyle Apps' },
    ],
  },
  {
    slug: 'skyfitstrength',
    name: 'SkyFitStrength',
    category: 'Health & Fitness Technology',
    year: '2024',
    summary:
      "SkyFitStrength is FAAIF Group's health and fitness technology platform, revolutionizing the way individuals approach physical wellness through data-driven lifestyle management.",
    detail:
      'The platform combines smart training programs, performance tracking, and personalized coaching to deliver a comprehensive fitness experience that goes beyond a standard app. SkyFitStrength is built for a global audience that demands more from their health technology.',
    website: 'skyfitstrength.com',
    metrics: [
      { label: 'Focus', value: 'Data-driven Wellness' },
      { label: 'Experience', value: 'Smart Coaching' },
      { label: 'Audience', value: 'Global' },
    ],
  },
  {
    slug: 'eliteshipping',
    name: 'Eliteshipping',
    category: 'Shipping & Logistics',
    year: '2024',
    summary:
      "Eliteshipping is FAAIF Group's strategic entry into the shipping, logistics, and global trade sector. By applying the group's deep expertise in technology and AI/ML, Eliteshipping is transforming traditional logistics operations into intelligent, efficient, and transparent digital workflows.",
    detail:
      "This venture directly aligns with the group's long-term vision of becoming a leading global conglomerate known for disrupting traditional industries through technology-first thinking.",
    website: 'eliteshipping.com',
    metrics: [
      { label: 'Focus', value: 'Global Trade' },
      { label: 'Edge', value: 'AI-enabled Ops' },
      { label: 'Model', value: 'Digital Logistics' },
    ],
  },
  {
    slug: 'rosca-app',
    name: 'Rosca App',
    category: 'Fintech',
    year: '2024',
    summary:
      "The Rosca App is FAAIF Group's fintech-inspired social savings platform, reimagining the traditional rotating savings model through a seamless, secure, and transparent digital experience.",
    detail:
      'By bringing trust, accountability, and ease of use to a financial practice rooted in community, the Rosca App opens up a powerful new dimension for FAAIF Group in the rapidly growing fintech space.',
    website: 'roscaapp.com',
    metrics: [
      { label: 'Focus', value: 'Community Savings' },
      { label: 'Promise', value: 'Trust and Transparency' },
      { label: 'Category', value: 'Fintech Platform' },
    ],
  },
];

export const timeline = [
  {
    year: '2019',
    title: 'FAAIF Group founded',
    note: 'Sydney HQ established. Cloud Ordinate begins operating system rollout for logistics campuses.',
  },
  {
    year: '2021',
    title: 'SkyFitStrength acquired',
    note: 'Performance coaching platform joins the group and expands into premium subscriptions.',
  },
  {
    year: '2022',
    title: 'GetMoodzy launched',
    note: 'Lifestyle retail vertical enters market with an experiment-led product cadence.',
  },
  {
    year: '2024',
    title: 'Tradeasia integrated',
    note: 'Cross-border freight operator integrated to complete the logistics-to-lifestyle portfolio arc.',
  },
];

export const commitments = [
  {
    title: 'Build for decades',
    body: 'We optimize for compounding, not quarters. Every decision is tested against a 10-year horizon.',
  },
  {
    title: 'Operator-first',
    body: 'Subsidiaries run their companies. Our job is to remove friction and raise governance standards.',
  },
  {
    title: 'Engineering rigor',
    body: 'Shared platform infrastructure via FAAIF Labs keeps data, cadence, and control systems honest.',
  },
  {
    title: 'Honest numbers',
    body: 'Conservative accounting, auditable metrics, and no hidden adjustments passed off as growth.',
  },
  {
    title: 'Quiet excellence',
    body: 'We are not a consumer brand. The work compounds through products that solve real constraints.',
  },
  {
    title: 'Patient capital',
    body: 'We do not chase adjacent noise or own balance-sheet risk. We time the market through discipline.',
  },
];

export const groupLeaders = [
  {
    initials: 'AF',
    name: 'Ali Faaif',
    role: 'Founder & Chairman',
    summary:
      'Led the thesis: patient capital, engineered execution. Oversees capital allocation and platform architecture.',
  },
  {
    initials: 'PV',
    name: 'Dr. Priya Venkat',
    role: 'Group COO',
    summary: 'Previously COO at Tier-1 supply systems operator. Leads the operating cadence.',
  },
  {
    initials: 'JL',
    name: 'Joran Lindqvist',
    role: 'Chief Strategy Officer',
    summary: 'Platform integration across all subsidiaries. Former private-equity operator.',
  },
  {
    initials: 'MC',
    name: 'Mei Chen',
    role: 'Chief Financial Officer',
    summary: 'Capital markets, internal audit, and unit-level economics across each company.',
  },
];

export const operatingMds = [
  {
    initials: 'TO',
    name: 'Tom Oduya',
    role: 'Managing Director, Cloud Ordinate',
    summary: 'Built dispatch tools that scaled from 2 to 19 country deployments.',
  },
  {
    initials: 'SR',
    name: 'Sara Rahman',
    role: 'Managing Director, SkyFitStrength',
    summary: 'Founder-operator with premium coaching social-product scale.',
  },
  {
    initials: 'LM',
    name: 'Luca Moretti',
    role: 'Managing Director, GetMoodzy',
    summary: 'DTC retail operator with category wins in youth-lifestyle funnels.',
  },
  {
    initials: 'HA',
    name: 'Hasan Ali',
    role: 'Managing Director, Tradeasia | Elite Express',
    summary: 'Launched customs ladder in 7 years in cross-border freight.',
  },
];

export const offices = [
  {
    city: 'Sydney',
    address: 'Level 18, 99 Margaret St, Sydney NSW 2000',
    note: 'Group HQ',
  },
  {
    city: 'Melbourne',
    address: '2 King St, Melbourne VIC 3000',
    note: 'SkyFitStrength',
  },
  {
    city: 'Singapore',
    address: '16 Marina Blvd #42-01, Singapore 018981',
    note: 'Tradeasia | Ventures',
  },
  {
    city: 'Karachi',
    address: 'Clifton Block 8, Karachi 75600',
    note: 'Regional Ops',
  },
];

export const channels = [
  { label: 'Investor Relations', value: 'ir@faaif.group' },
  { label: 'Press & Media', value: 'press@faaif.group' },
  { label: 'Careers', value: 'careers@faaif.group' },
  { label: 'Office (Sydney)', value: '+61 2 8888 1836' },
];

export const labsStack = [
  {
    name: 'Engineering',
    icon: 'E',
    text: 'Our engineers operate across frontend development with React.js and Next.js, backend systems with Node.js and Express.js, database design with MySQL and PostgreSQL, and API engineering for seamless integrations.',
    tags: ['react.js', 'next.js'],
  },
  {
    name: 'Security',
    icon: 'S',
    text: 'The security division ensures secure API design, encrypted data storage, vulnerability assessments, and compliance-focused delivery across every platform and infrastructure component.',
    tags: ['api security', 'compliance'],
  },
  {
    name: 'AI/ML',
    icon: 'A',
    text: 'Led by Mahnoor Umar, the AI/ML division builds predictive models, intelligent automation frameworks, and data science pipelines to power applied intelligence across ventures.',
    tags: ['machine learning', 'automation'],
  },
];

export const innovationProjects = [
  {
    title: 'Enterprise-Grade Data Protection',
    status: 'Security',
    body: 'Data protection and system integrity are built into every product through encryption-first practices and secure architecture decisions.',
  },
  {
    title: 'Intelligent Automation Frameworks',
    status: 'AI/ML',
    body: 'Automation frameworks are designed for practical operational gains across logistics, consumer products, and platform services.',
  },
  {
    title: 'Predictive Modeling Pipelines',
    status: 'Data Science',
    body: 'Predictive models and pipelines support route optimization, personalization engines, and recommendation systems across ventures.',
  },
  {
    title: 'Scalable Full-Stack Delivery',
    status: 'Engineering',
    body: 'Every product is engineered for performance, scalability, and long-term maintainability through full-stack ownership and disciplined architecture.',
  },
];
