// pages/about.tsx

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('common');

  return (
    <>
      <Head>
        <title>{t('about')}</title>
      </Head>

      <main className='p-10 max-w-3xl mx-auto text-center'>
        <h1 className='text-3xl font-bold mb-4'>{t('about')}</h1>
        <p className='text-gray-600'>{t('about_description')}</p>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../public/locales/${locale}/common.json`)).default,
      locale,
    },
  };
}
