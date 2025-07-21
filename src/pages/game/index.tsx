// 📄 File: src/pages/game/index.tsx

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function GameHome() {
  const t = useTranslations('common');

  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to bottom, #f0f4ff, #ffffff)';
  }, []);

  return (
    <>
      <Head>
        <title>{t('game_home_title')}</title>
      </Head>

      <div className='flex flex-col items-center justify-center min-h-screen text-center p-8'>
        <h1 className='text-4xl font-extrabold text-indigo-800 drop-shadow mb-4'>
          ⚔️ {t('game_home_title')}
        </h1>
        <p className='text-lg text-gray-600 max-w-xl mb-6'>
          {t('game_home_subtitle')}
        </p>
        <Link href='/game/case-selection'>
          <a className='bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-xl shadow-lg cursor-pointer'>
            🎮 {t('choose_case')}
          </a>
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../public/locales/${locale}/common.json`))
        .default,
      locale,
    },
  };
}
