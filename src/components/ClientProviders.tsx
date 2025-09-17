'use client';

import { ThemeProvider } from '@/lib/theme-context';
import Header from './Header';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
    </ThemeProvider>
  );
}



