import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Home() {
  const t = useTranslations('common');

  useEffect(() => {
    document.body.style.background = 'linear-gradient(to bottom, #f8fafc, #ffffff)';
  }, []);

  return (
    <>
      <Head>
        <title>{t('intro_title')}</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
        <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-lg mb-4">
          ⚖️ {t('intro_title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">{t('intro_desc')}</p>
        <Link href="/game/case-selection" passHref>
          <span className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-6 py-3 rounded-xl shadow cursor-pointer">
            🎮 {t('go_to_bot')}
          </span>
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locales/${locale}/common.json`)).default,
    },
  };
}

