import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Footer } from '@/components/Footer';
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}