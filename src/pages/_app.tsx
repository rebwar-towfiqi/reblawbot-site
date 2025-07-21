// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider
      locale={pageProps.locale}
      messages={pageProps.messages}
      timeZone="Asia/Tehran"
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
