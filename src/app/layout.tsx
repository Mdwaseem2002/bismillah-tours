import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { CustomCursor } from '@/components/CustomCursor';
import { PageLoader } from '@/components/PageLoader';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Bismillah Tours & Travels | Hajj & Umrah Specialists – Bengaluru',
  description: 'Premium Hajj & Umrah packages from Bengaluru. Executive and VIP Umrah, Hajj 2025 registrations open. Govt. licensed, 5000+ pilgrims, 15 years of sacred service.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-body bg-[var(--color-cream)] text-[var(--color-charcoal)]">
        <Providers>
          <CustomCursor />
          <PageLoader />
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
