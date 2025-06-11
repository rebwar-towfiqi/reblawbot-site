import messages from '@locales/en/common.json';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

import '../../src/styles/globals.css';

export const metadata: Metadata = {
  title: 'RebLawBot',
  description: 'Legal AI Assistant',
};

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (locale !== 'en') notFound();

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
