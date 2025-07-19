/* eslint-disable unused-imports/no-unused-vars */

// src/pages/index.tsx
'use client';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

type Props = {
  messages: Record<string, string>;
};

export default function Home() {
  const t = useTranslations('common');
  const router = useRouter();

  useEffect(() => {
    document.body.style.background = 'linear-gradient(to bottom, #f8fafc, #ffffff)';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  return (
    <>
      <Head>
        <title>{t('home_title')}</title>
        <meta name="description" content={t('home_description')} />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-8 drop-shadow">
          ⚖️ {t('welcome')}
        </h1>
        <Link
          href="/game/role-selector"
          className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 text-xl"
        >
          {t('start_game')}
        </Link>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = (await import(`../../public/locales/${locale}/common.json`)).default;
  return {
    props: {
      messages,
    },
  };
}
