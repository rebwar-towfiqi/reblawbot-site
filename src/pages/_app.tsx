'use client';

import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { useEffect } from 'react';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // تنظیم رنگ پس‌زمینه برای کل سایت
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to bottom, #f0f4f8, #ffffff)';
  }, []);

  return (
    <NextIntlClientProvider
      locale={pageProps.locale} // ⬅️ مقدار locale به صورت صریح ارسال می‌شود
      messages={pageProps.messages || {}}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
