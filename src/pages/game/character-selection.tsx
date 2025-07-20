'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useCharacter } from '@/context/CharacterContext';

const characters = [
  { id: 'lawyer1', name: 'وکیل دانا', image: '/images/lawyer1.png' },
  { id: 'lawyer2', name: 'وکیل شجاع', image: '/images/lawyer2.png' },
  { id: 'lawyer3', name: 'وکیل باهوش', image: '/images/lawyer3.png' },
];

export default function CharacterSelect() {
  const router = useRouter();
  const { selectedCharacter, selectCharacter } = useCharacter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    selectCharacter(id);
    router.push('/game/role-selector');
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-white p-6'>
      <motion.h2
        className='text-3xl font-extrabold text-blue-600 mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        👨‍⚖️ شخصیت وکیل خود را انتخاب کنید
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {characters.map((char, index) => (
          <motion.div
            key={char.id}
            onClick={() => handleSelect(char.id)}
            onMouseEnter={() => setHoveredId(char.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`cursor-pointer bg-white border-2 rounded-xl shadow-md hover:shadow-xl p-4 text-center transition-transform duration-300 ${
              selectedCharacter === char.id
                ? 'border-blue-600'
                : 'border-transparent'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className='relative w-40 h-40 mx-auto mb-4'>
              <Image
                src={char.image}
                alt={char.name}
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-contain rounded-md'
                priority={index === 0}
              />
            </div>
            <p className='text-lg font-bold'>{char.name}</p>

            {hoveredId === char.id && (
              <motion.p
                className='text-sm text-gray-500 mt-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                برای ورود کلیک کنید
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
