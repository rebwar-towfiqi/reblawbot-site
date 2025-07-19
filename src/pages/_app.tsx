'use client';

import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';

import '@/styles/globals.css';

import { CharacterProvider } from '@/context/CharacterContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider messages={pageProps.messages || {}}>
      <CharacterProvider>
        <Component {...pageProps} />
      </CharacterProvider>
    </NextIntlClientProvider>
  );
}

