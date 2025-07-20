// 📄 File: src/pages/game/index.tsx

'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function GameHome() {
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to bottom, #f0f4ff, #ffffff)';
  }, []);

  return (
    <>
      <Head>
        <title>RebLawBot Game - Courtroom Mode</title>
      </Head>

      <div className='flex flex-col items-center justify-center min-h-screen text-center p-8'>
        <h1 className='text-4xl font-extrabold text-indigo-800 drop-shadow mb-4'>
          ⚔️ Legal Debate Arena
        </h1>
        <p className='text-lg text-gray-600 max-w-xl mb-6'>
          Step into the courtroom, pick your role, and argue your case in front
          of a global audience and our AI judge.
        </p>
        <Link href='/game/case-selection' passHref legacyBehavior>
          <a className='bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-xl shadow-lg cursor-pointer'>
            🎮 Choose a Legal Case
          </a>
        </Link>
      </div>
    </>
  );
}
