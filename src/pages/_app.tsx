// pages/_app.tsx
import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider
      locale={pageProps.locale}
      messages={pageProps.messages}
      timeZone="Asia/Tehran"
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
