'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

const roles = [
  { id: 'plaintiff', label: '🧑‍💼 وکیل شاکی' },
  { id: 'defender', label: '👨‍⚖️ وکیل متهم' },
  { id: 'judge', label: '⚖️ قاضی دادگاه' },
];

export default function RoleSelector() {
  const router = useRouter();

  const handleSelect = (roleId: string) => {
    router.push(`/game/case-selection?role=${roleId}`);
  };

  return (
    <div className='flex flex-col items-center gap-6 mt-10'>
      <h2 className='text-xl font-bold text-blue-300'>
        نقش خود را انتخاب کنید
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {roles.map((role) => (
          <motion.button
            key={role.id}
            onClick={() => handleSelect(role.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gray-800 px-6 py-4 rounded-lg text-white font-semibold shadow-md hover:bg-gray-700'
          >
            {role.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
