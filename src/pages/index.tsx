/* eslint-disable no-console */
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
        <title>{t('intro_title')}</title>
        <meta name='description' content={t('intro_desc')} />
      </Head>

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8'
      >
        <h1 className='text-4xl font-bold text-center mb-6'>{t('intro_title')}</h1>
        <p className='text-lg text-center text-gray-600 mb-4'>{t('intro_desc')}</p>
        <Link
          href='/game/role-selector'
          className='mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow'
        >
          {t('choose_case')}
        </Link>
      </motion.main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  try {
    const messages = await getMessages({ locale });
    console.log(`✅ Loaded messages for locale: ${locale}`);
    return {
      props: {
        messages,
        locale
      }
    };
  } catch (error) {
    console.error(`❌ Failed to load messages for locale ${locale}:`, error);
    return {
      notFound: true
    };
  }
}
