import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT', 'WONK'],
  variable: '--fraunces',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://faaif.group'),
  title: 'FAAIF Group — Empowering Diverse Industries Through Innovation',
  description:
    'FAAIF Group is a diversified holding company overseeing Cloud Ordinate, SkyFitStrength, and GetMoodzy. Patient capital, engineered execution.',
  keywords: [
    'FAAIF Group',
    'holding company',
    'Cloud Ordinate',
    'SkyFitStrength',
    'GetMoodzy',
    'logistics',
    'fitness',
    'lifestyle',
  ],
  authors: [{ name: 'FAAIF Group' }],
  creator: 'FAAIF Group',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faaif.group',
    siteName: 'FAAIF Group',
    title: 'FAAIF Group — Empowering Diverse Industries Through Innovation',
    description:
      'The parent organization behind Cloud Ordinate, SkyFitStrength, and GetMoodzy — three operating companies united by a single thesis: patient capital, engineered execution.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'FAAIF Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAAIF Group — Empowering Diverse Industries Through Innovation',
    description: 'The parent organization behind Cloud Ordinate, SkyFitStrength, and GetMoodzy.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'FAAIF Group',
              url: 'https://faaif.group',
              description: 'A diversified holding company. Patient capital, engineered execution.',
              foundingDate: '2019',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'One Financial Center',
                addressLocality: 'Boston',
                addressRegion: 'MA',
                addressCountry: 'US',
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  email: 'hello@faaif.group',
                  contactType: 'customer service',
                },
                {
                  '@type': 'ContactPoint',
                  email: 'ir@faaif.group',
                  contactType: 'investor relations',
                },
              ],
              subOrganization: [
                {
                  '@type': 'Organization',
                  name: 'Cloud Ordinate',
                  description:
                    'Container management SaaS for depots, yards, and intermodal terminals.',
                  url: '#',
                },
                {
                  '@type': 'Organization',
                  name: 'SkyFitStrength',
                  description: 'A strength and performance platform for athletes and operators.',
                  url: '#',
                },
                {
                  '@type': 'Organization',
                  name: 'GetMoodzy',
                  description:
                    'Emotion-driven consumer products for the generation that shops with feelings.',
                  url: '#',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-navy-900 antialiased">{children}</body>
    </html>
  );
}
