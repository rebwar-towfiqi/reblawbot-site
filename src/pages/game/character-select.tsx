'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const characters = [
  {
    id: 'amina',
    name: 'امینا دادخواه',
    image: '/images/characters/amina.png',
    description: 'وکیل جوان با تمرکز بر عدالت اجتماعی',
  },
  {
    id: 'kamran',
    name: 'کامران مدافع',
    image: '/images/characters/kamran.png',
    description: 'وکیل باتجربه در دفاع از حقوق متهمان',
  },
  {
    id: 'rojin',
    name: 'روژین عدالت‌طلب',
    image: '/images/characters/rojin.png',
    description: 'تحلیل‌گر دقیق و متخصص در حقوق بشر',
  },
];

export default function CharacterSelect() {
  const router = useRouter();

  const handleSelect = (characterId: string) => {
    router.push(`/game/case-selection?character=${characterId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800 drop-shadow"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        وکیل خود را انتخاب کنید
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {characters.map((char, index) => (
          <motion.div
            key={char.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Image
              src={char.image}
              alt={char.name}
              width={160}
              height={160}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{char.name}</h2>
            <p className="text-gray-600 text-center mb-4">{char.description}</p>
            <button
              onClick={() => handleSelect(char.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              انتخاب
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
