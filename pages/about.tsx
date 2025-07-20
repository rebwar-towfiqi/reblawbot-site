import { useTranslations } from 'next-intl';
import Header from '../components/Header';

export default function About() {
  const t = useTranslations('common');

  return (
    <>
      <Header />
      <main className='container mx-auto px-6 py-12'>
        <h1 className='text-4xl font-bold mb-6'>{t('navAbout')}</h1>
        <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto'>
          {t('aboutDescription')}
        </p>
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
