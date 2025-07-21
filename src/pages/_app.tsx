
 import type { AppProps } from 'next/app';
 import { useRouter } from 'next/router';
 import { NextIntlClientProvider } from 'next-intl';
 import { useEffect } from 'react';

 export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

   useEffect(() => {
     document.body.style.background =
       'linear-gradient(to bottom, #f0f4f8, #ffffff)';
   }, []);
return (
   <NextIntlClientProvider
      // صفحه‌ای که locale را از getStaticProps می‌گیرد
      locale={pageProps.locale || router.locale || 'fa'}
      messages={pageProps.messages || {}}
      timeZone='Asia/Tehran'   >
      <Component {...pageProps} />
    </NextIntlClientProvider>
 );
 }