import Head from "next/head";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>پلن‌های اشتراک | RebLawBot</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-lg bg-white rounded-2xl shadow p-8 mt-20 text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-700">پلن‌های اشتراک</h1>
          <ul className="text-gray-700 mb-6 space-y-4 text-right">
            <li>
              <strong>یک ماهه:</strong>  
              <span className="text-gray-600">۳۰۰,۰۰۰ تومان یا ۰.۵ TON یا معادل RLC</span>
            </li>
            <li>
              <strong>مزایا:</strong>  
              <span className="text-gray-600">پاسخ نامحدود به سوالات حقوقی، جستجوی کامل، دسترسی به قوانین و پرونده‌های مهم</span>
            </li>
            <li>
              <strong>نحوه خرید:</strong>  
              <span className="text-gray-600">پرداخت بانکی یا رمزارز (TON، RLC)</span>
            </li>
          </ul>
          <a
            href="https://t.me/RebLCBot"
            className="inline-block bg-blue-600 text-white rounded px-6 py-2 text-lg font-semibold shadow hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            خرید اشتراک
          </a>
        </div>
      </main>
    </>
  );
}
