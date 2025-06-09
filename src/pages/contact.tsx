import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>تماس با ما | RebLawBot</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-lg bg-white rounded-2xl shadow p-8 mt-20 text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-700">تماس با ما</h1>
          <p className="text-gray-700 mb-6">
            برای ارتباط مستقیم با تیم پشتیبانی RebLawBot، سوالات و پیشنهادات خود را از طریق آدرس تلگرام زیر ارسال کنید:
          </p>
          <a
            href="https://t.me/RebLCBot"
            className="inline-block bg-blue-600 text-white rounded px-6 py-2 text-lg font-semibold shadow hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            ارتباط در تلگرام
          </a>
          <p className="text-gray-500 mt-6 text-sm">
            یا ایمیل: <span className="select-all">reblawbot@proton.me</span>
          </p>
        </div>
      </main>
    </>
  );
}
