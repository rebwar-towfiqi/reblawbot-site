// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextIntlClientProvider } from 'next-intl';

export default function App({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();

  return (
    <NextIntlClientProvider
      //  locale را از آدرس URL می‌خوانیم
      locale={locale ?? defaultLocale ?? 'fa'}
      // برای جلوگیری از ENVIRONMENT_FALLBACK حتماً یک timeZone مشخص کنید
      timeZone="Asia/Tehran"
      // messages باید از getStaticProps یا getServerSideProps بیاید
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}


