import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';
import { useEffect } from 'react';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to bottom, #f0f4f8, #ffffff)';
  }, []);

  return (
    <IntlProvider
      locale={pageProps.locale || 'fa'}
      messages={pageProps.messages || {}}
      timeZone="Asia/Tehran"
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
