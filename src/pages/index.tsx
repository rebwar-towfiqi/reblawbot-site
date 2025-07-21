// 📄 src/pages/index.tsx
import { motion } from 'framer-motion';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default function HomePage() {
  const t = useTranslations('common');

  return (
    <>
      <Head>
        <title>{t('home_title')}</title>
        <meta name='description' content={t('home_description')} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8'
      >
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800'>
          ⚖️ {t('home_title')}
        </h1>

        <p className='mt-2 text-gray-600 max-w-xl text-center'>
          {t('home_subtitle')}
        </p>

        <Link
          href='/game/role-selector'
          className='mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl shadow'
        >
          {t('start_game')}
        </Link>
      </motion.main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await getMessages({ locale });

  return {
    props: {
      messages,
      locale
    }
  };
}
