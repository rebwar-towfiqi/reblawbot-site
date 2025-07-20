import { useTranslations } from 'next-intl';
import Header from '../components/Header';

export default function Home() {
  const t = useTranslations('common');

  return (
    <>
      <Header />
      <main className='container mx-auto px-6 py-12'>
        <h1 className='text-5xl font-extrabold mb-6 text-gray-900 dark:text-white'>
          {t('homeTitle')}
        </h1>
        <p className='text-lg mb-8 text-gray-700 dark:text-gray-300'>
          {t('homeDescription')}
        </p>
        <div className='flex justify-center gap-6'>
          <a
            href='https://t.me/RebLawBot'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition'
          >
            {t('startBot')}
          </a>
          <a
            href='https://t.me/blum/app?startapp=memepadjetton_RLC_JpMH5-ref_1wgcKkl94N'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition'
          >
            {t('getToken')}
          </a>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      messages: (await import(`../public/locales/${locale}/common.json`))
        .default,
    },
  };
}
