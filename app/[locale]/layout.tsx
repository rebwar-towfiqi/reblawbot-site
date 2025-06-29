// app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

import '@/styles/globals.css';

export async function generateStaticParams() {
  return ['en', 'fa', 'ku'].map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };

}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  const supportedLocales = ['en', 'fa', 'ku'];
  if (!supportedLocales.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === 'fa' || locale === 'ku' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
