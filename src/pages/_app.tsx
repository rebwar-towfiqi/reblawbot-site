// pages/_app.tsx
import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl'; // ✅ اصلاح این خط

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      timeZone="Asia/Tehran"
      locale={pageProps.locale}
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
