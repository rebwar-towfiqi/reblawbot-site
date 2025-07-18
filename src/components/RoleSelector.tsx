'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

const roles = [
  { id: 'plaintiff', label: '🧑‍💼 وکیل شاکی', color: 'from-red-500 to-red-700' },
  { id: 'defender', label: '👨‍⚖️ وکیل متهم', color: 'from-green-500 to-green-700' },
  { id: 'judge', label: '⚖️ قاضی دادگاه', color: 'from-yellow-500 to-yellow-700' },
];

export default function RoleSelector() {
  const router = useRouter();

  const handleSelect = (roleId: string) => {
    router.push(`/game/case-selection?role=${roleId}`);
  };

  return (
    <div className="flex flex-col items-center gap-10 mt-12">
      <motion.h2
        className="text-3xl font-extrabold text-blue-600 drop-shadow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        نقش خود را در دادگاه انتخاب کنید
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <motion.button
            key={role.id}
            onClick={() => handleSelect(role.id)}
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-gradient-to-br ${role.color} px-8 py-6 rounded-2xl text-white font-bold text-xl shadow-xl hover:shadow-2xl hover:brightness-110 transform transition-transform duration-300`}
          >
            {role.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
