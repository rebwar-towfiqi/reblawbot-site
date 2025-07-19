// 📄 File: src/pages/_app.tsx

import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider
      messages={pageProps.messages}
      locale={pageProps.locale ?? 'en'} // جلوگیری از undefined
      timeZone="Asia/Tehran"
    >
      <Component {...pageProps} />
    
    </IntlProvider>
  );
}



