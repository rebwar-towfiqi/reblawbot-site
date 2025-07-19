'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
 
  return (
    <>
      <Head>
        <title>بازی حقوقی - شروع</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-100 to-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow mb-6 text-center"
        >
          به بازی دادگاه هوشمند خوش آمدید
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 text-center max-w-xl px-6"
        >
          در این بازی، شما نقش یک وکیل حرفه‌ای را بازی می‌کنید، باید معماهای حقوقی را حل کرده و رأی قاضی هوش مصنوعی را جلب کنید.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12"
        >
          <Link href="/game/character-select">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300">
              🎮 شروع بازی
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}





