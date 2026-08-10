import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

const hostGrotesk = Host_Grotesk({
  variable: '--font-grotesk',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jakub Cieślik',
  description: 'Full-stack developer',
};

export function generateStaticParams() {
  return routing.locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) notFound();

  return (
    <html lang={lang} className={`${hostGrotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
