import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
