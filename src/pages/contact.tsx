import Head from 'next/head';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <>
      <Head>
        <title>{t('title')} | RebLawBot</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-center bg-gray-50'>
        <div className='mt-20 max-w-lg rounded-2xl bg-white p-8 text-center shadow'>
          <h1 className='mb-4 text-2xl font-bold text-blue-700'>{t('heading')}</h1>
          <p className='mb-6 text-gray-700'>
            {t('description')}
          </p>
          <a
            href='https://t.me/RebLCBot'
            className='inline-block rounded bg-blue-600 px-6 py-2 text-lg font-semibold text-white shadow transition hover:bg-blue-700'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('telegram')}
          </a>
          <p className='mt-6 text-sm text-gray-500'>
            {t('orEmail')} <span className='select-all'>reblawbot@proton.me</span>
          </p>
        </div>
      </main>
    </>
  );
}
