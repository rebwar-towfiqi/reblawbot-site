import type { AppProps } from 'next/app';
import { IntlProvider } from 'next-intl';

import '@/styles/globals.css';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale={pageProps.locale} messages={pageProps.messages}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </IntlProvider>
  );
}

export default MyApp;

// بارگذاری پیام‌های ترجمه
export async function getStaticProps({ locale }: { locale: string }) {
  const messages = (await import(`../locales/${locale}/common.json`)).default;
  return {
    props: {
      messages,
      locale,
    },
  };
}

