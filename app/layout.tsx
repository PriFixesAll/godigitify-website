import type { Metadata } from 'next';
import { Poppins, Plus_Jakarta_Sans, Playfair_Display, Caveat } from 'next/font/google';
import { siteConfig } from '@/config/site';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const ceraSans = Plus_Jakarta_Sans({
  variable: '--font-cera',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
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
      className={`${poppins.variable} ${ceraSans.variable} ${playfair.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/cera-pro" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F6F2] text-[#1A1A1A] font-sans selection:bg-purple-500/20" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
