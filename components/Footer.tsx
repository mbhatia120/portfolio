// Footer.tsx
'use client'; // Only if you're using Next.js App Router

import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t py-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
        <p>© {year ?? ''} Mohit Bhatia. All rights reserved.</p>
      </div>
    </footer>
  );
}
