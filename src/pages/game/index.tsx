// 📄 File: src/pages/index.tsx

'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Home() {

  const t = useTranslations('common');

  useEffect(() => {
    document.body.style.background = 'linear-gradient(to bottom, #f8fafc, #ffffff)';
  }, []);

  return (
    <>
      <Head>
        <title>RebLawBot - AI Courtroom Game</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
        <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-lg mb-4">
          ⚖️ Welcome to the RebLaw Courtroom
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Experience justice through AI-powered legal debates. Choose a case, take a side, and let the community—and the AI judge—decide.
        </p>
        <Link href="/game/case-selection" passHref>
          <span className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-6 py-3 rounded-xl shadow inline-block cursor-pointer">
            🎮 Start Legal Game
          </span>
        </Link>
      </div>
    </>
  );
}
