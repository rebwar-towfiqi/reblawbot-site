import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>ربات حقوقی RebLawBot</title>
        <meta name="description" content="ربات هوشمند مشاوره حقوقی مبتنی بر هوش مصنوعی و بلاکچین" />
      </Head>
      <main className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">RebLawBot</h1>
          <p className="mb-6 text-lg">{t("intro_title")}</p>
          <span className="text-gray-500 text-sm">{t("intro_desc")}</span>
          <a
            href="https://t.me/RebLCBot"
            className="inline-block bg-blue-600 text-white rounded px-8 py-3 mt-6 text-lg font-semibold shadow hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("go_to_bot")}
          </a>
        </div>
        <footer className="mt-16 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} RebLawBot. توسعه توسط ریبوار توفیقی.
        </footer>
      </main>
    </>
  );
}

// تابع بارگذاری ترجمه‌ها (همین انتهای فایل!)
export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale } = context;
  return {
    props: {
      messages: (await import(`../../locales/${locale}/common.json`)).default
    }
  };
}


