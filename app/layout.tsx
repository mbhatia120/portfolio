import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Footer } from '@/components/Footer';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Mohit Bhatia',
  description: 'Personal website of Mohit Bhatia',
  icons: {
    icon: '/image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohit Bhatia",
    "url": "https://mohitbhatia.com",
    "sameAs": [
      "https://www.linkedin.com/in/mbhatia120"
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Goldman Sachs"
    }
  };
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        <title>Mohit Bhatia | Software Engineer</title>
        <meta name="description" content="I'm Mohit, a Software Engineer exploring tech, investing, and writing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image.png" />
      </Head>
      <body className={inter.className}>{children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}