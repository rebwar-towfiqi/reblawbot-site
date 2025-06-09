import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>درباره ما | RebLawBot</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-lg bg-white rounded-2xl shadow p-8 mt-20 text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-700">درباره RebLawBot</h1>
          <p className="text-gray-700 mb-2">
            RebLawBot یک پروژه حقوقی مبتنی بر هوش مصنوعی و بلاکچین است که با هدف دسترسی آسان و عادلانه به دانش حقوقی برای همه راه‌اندازی شده است.
          </p>
          <p className="text-gray-500 text-sm">
            توسعه و پشتیبانی توسط ریبوار توفیقی – وکیل دادگستری
          </p>
        </div>
      </main>
    </>
  );
}
