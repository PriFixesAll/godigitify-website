import type { Metadata } from 'next';
import { Geist, Geist_Mono, Caveat } from 'next/font/google';
import { siteConfig } from '@/config/site';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    'AI Software Engineering',
    'Digital Transformation',
    'Technology Consulting',
    'Automation Solutions',
    'Enterprise Software',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#F8F6F2] text-[#1A1A1A] selection:bg-purple-500/20" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
