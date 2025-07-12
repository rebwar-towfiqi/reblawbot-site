import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBalanceScale } from 'react-icons/fa';

type Case = {
  id: number;
  title: string;
  summary: string;
};

export default function CaseSelection() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await fetch('/api/case');
        const data = await res.json();
        setCases(data);
      } catch (err) {
        console.error('❌ خطا در دریافت لیست پرونده‌ها:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-8'>
          🎯 انتخاب یک پرونده برای ورود به جلسه مناظره
        </h1>

        {loading ? (
          <p className='text-center'>⏳ در حال بارگذاری پرونده‌ها...</p>
        ) : (
          <div className='grid gap-6'>
            {cases.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className='bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all'
                onClick={() => navigate(`/hearing-room?caseId=${item.id}`)}
              >
                <div className='flex items-center gap-3 mb-4'>
                  {/* @ts-ignore */}
                  <FaBalanceScale className='text-blue-600 text-xl' />
                  <h2 className='text-lg font-semibold text-gray-800 truncate'>
                    {item.title}
                  </h2>
                </div>
                <p className='text-gray-700 text-sm'>{item.summary}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
