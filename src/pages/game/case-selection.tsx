/* eslint-disable no-console */
'use client';

import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useCharacter } from '@/context/CharacterContext';

interface CaseItem {
  id: number;
  title: string;
  summary: string;
}

export default function CaseSelection() {
  const [cases, setCases] = useState<CaseItem[]>([]);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { selectedCharacter } = useCharacter();
  const router = useRouter();
  const { role } = router.query;

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get('/api/cases');
        setCases(res.data);
      } catch (err) {
        console.error('❌ خطا در دریافت پرونده‌ها:', err);
      }
    };

    fetchCases();
  }, []);

  const handleCaseSelect = (caseId: number) => {
    router.push({
      pathname: '/game/hearing-room',
      query: {
        case: caseId,
        role: role || '',
        telegram_id: router.query.telegram_id || '',
        name: router.query.name || '',
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-8">
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-12 drop-shadow"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        یک پرونده را برای دفاع انتخاب کنید
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl border border-gray-200 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
            <button
              onClick={() => handleCaseSelect(item.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow font-medium"
            >
              ورود به جلسه رسیدگی
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
