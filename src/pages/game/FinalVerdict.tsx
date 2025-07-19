/* eslint-disable no-console */
// 📄 File: src/pages/game/final-verdict.tsx

'use client';

import axios from 'axios';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';



export default function FinalVerdict() {
  const params = useSearchParams();
  const caseId = params?.get('caseId');
  const [verdict, setVerdict] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!caseId) return;

    const fetchVerdict = async () => {
      try {
        const res = await axios.get(`/api/verdict/ai/${caseId}`);
        setVerdict(res.data?.verdict || '');
      } catch (e) {
        console.error('Error loading AI verdict:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchVerdict();
  }, [caseId]);

  if (loading) {
    return (
      <div className='text-center p-6 animate-pulse text-blue-600'>
        ⏳ در حال دریافت رأی نهایی قاضی...
      </div>
    );
  }

  if (!verdict) {
    return (
      <div className='text-center p-6 text-red-500'>
        ❌ رأی نهایی برای این پرونده در دسترس نیست.
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-100 to-white flex flex-col items-center justify-center p-8'>
      <motion.div
        className='bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-600 max-w-xl w-full'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-2xl font-extrabold text-purple-700 mb-4 text-center'>
          ⚖️ رأی نهایی قاضی هوش مصنوعی
        </h2>
        <p className='text-lg font-semibold text-center mb-2'>
          نتیجه:{' '}
          {verdict === 'plaintiff'
            ? '🔴 شاکی پیروز است'
            : verdict === 'defendant'
            ? '🟢 متهم بی‌گناه است'
            : verdict}
        </p>
      </motion.div>
    </div>
  );
}
