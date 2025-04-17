import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohit Bhatia - Backend Engineer',
  description: 'Personal website of Mohit Bhatia, Backend Engineer at Questt AI',
  icons: {
    icon: '/image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}