import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Unchained Business — Client Acquisition Systems for Personal Brands',
  description:
    'We build done-for-you client acquisition systems that turn your personal brand into a predictable revenue engine. Stop chasing clients — let them come to you.',
  keywords: [
    'client acquisition',
    'personal brand',
    'lead generation',
    'business growth',
  ],
  openGraph: {
    title: 'Unchained Business',
    description: 'Client Acquisition Systems for Personal Brands',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
