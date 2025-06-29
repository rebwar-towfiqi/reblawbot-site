// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'RebLawBot – دستیار حقوقی چندزبانه با هوش مصنوعی',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound(); // اگر زبان اشتباه بود، صفحه 404 نشان دهد
  }

  return (
    <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
