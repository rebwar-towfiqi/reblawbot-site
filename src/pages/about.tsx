import Head from 'next/head';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <>
      <Head>
        <title>{t('title')} | RebLawBot</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-center bg-gray-50'>
        <div className='mt-20 max-w-lg rounded-2xl bg-white p-8 text-center shadow'>
          <h1 className='mb-4 text-2xl font-bold text-blue-700'>
            {t('heading')}
          </h1>
          <p className='mb-2 text-gray-700'>{t('description')}</p>
          <p className='text-sm text-gray-500'>{t('credits')}</p>
        </div>
      </main>
    </>
  );
}
