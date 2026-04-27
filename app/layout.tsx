import type { Metadata, Viewport } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';
import SafetyBanner from '@/components/SafetyBanner';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Pregnancy Companion',
  description: 'Your private, evidence-informed guide through third trimester, birth, and postpartum.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#faf9f7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-stone-50 antialiased">
        <Providers>
          <main className="max-w-lg mx-auto px-4 pt-6 page-content">
            {children}
          </main>
          <BottomNav />
          <SafetyBanner />
        </Providers>
      </body>
    </html>
  );
}
