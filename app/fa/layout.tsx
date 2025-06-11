import messages from '@locales/ku/common.json';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

import '../../src/styles/globals.css';

export const metadata: Metadata = {
  title: 'RebLawBot',
  description: 'یارمەتیدەری دەروونی یاسایی',
};

export function generateStaticParams() {
  return [{ locale: 'ku' }];
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (locale !== 'ku') notFound();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
