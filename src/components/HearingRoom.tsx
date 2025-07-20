'use client';

import axios from 'axios';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

type CaseData = {
  title: string;
  summary: string;
};

type StatsData = {
  plaintiff: number;
  defender: number;
};

export default function HearingRoomPage() {
  const params = useSearchParams();
  const caseId = params?.get('case');
  const role = params?.get('role');
  const telegram_id = params?.get('telegram_id');
  const name = params?.get('name');
  const character_id = params?.get('character_id');

  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [stats, setStats] = useState<StatsData>({ plaintiff: 0, defender: 0 });
  const [vote, setVote] = useState('');
  const [argument, setArgument] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!caseId) return;

    const fetchData = async () => {
      try {
        const [caseRes, statRes] = await Promise.all([
          axios.get(`/api/case/${caseId}`),
          axios.get(`/api/argument/stats/${caseId}`),
        ]);
        setCaseData(caseRes.data as CaseData);
        setStats(statRes.data as StatsData);
      } catch {
        // Silent fail
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [caseId]);

  const handleSubmit = async () => {
    if (!vote || !argument) {
      alert('لطفاً رأی و استدلال خود را وارد کنید.');
      return;
    }

    try {
      await axios.post('/api/argument', {
        case_id: caseId,
        vote,
        argument,
        role,
        telegram_id,
        name,
        character_id,
      });

      setSubmitted(true);

      const res = await axios.get(`/api/argument/stats/${caseId}`);
      setStats(res.data as StatsData);
    } catch {
      alert('❌ خطا در ارسال اطلاعات.');
    }
  };

  if (loading)
    return (
      <div className='p-6 text-center text-blue-600 animate-pulse'>
        ⏳ در حال بارگذاری پرونده...
      </div>
    );

  if (!caseData)
    return (
      <div className='p-6 text-center text-red-500'>❌ پرونده‌ای یافت نشد.</div>
    );

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 p-6 flex flex-col items-center gap-6'>
      {/* اطلاعات پرونده */}
      <motion.div
        className='bg-white p-6 rounded-xl w-full max-w-3xl shadow-md'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className='text-2xl font-bold mb-2 text-blue-700'>
          {caseData.title}
        </h2>
        <p className='text-md text-gray-600 leading-relaxed mb-4'>
          {caseData.summary?.slice(0, 300)}...
        </p>
        <a
          href={`https://t.me/RebLCBot?start=${caseId}`}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-2 text-blue-600 hover:underline'
        >
          🤖 مشاهده پرونده در بات تلگرام
        </a>
      </motion.div>

      {/* نمودار دایره‌ای */}
      <motion.div
        className='bg-white p-4 rounded-xl w-full max-w-2xl shadow'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className='text-center font-bold mb-2 text-gray-700'>
          📊 نمودار دایره‌ای رأی کاربران
        </h3>
        <Pie
          data={{
            labels: ['گناهکار', 'بی‌گناه'],
            datasets: [
              {
                data: [stats.plaintiff, stats.defender],
                backgroundColor: ['#ef4444', '#10b981'],
              },
            ],
          }}
        />
      </motion.div>

      {/* نمودار ستونی */}
      <motion.div
        className='bg-white p-4 rounded-xl w-full max-w-2xl shadow'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className='text-center font-bold mb-2 text-gray-700'>
          📈 نمودار ستونی آرا
        </h3>
        <Bar
          data={{
            labels: ['شاکی', 'متهم'],
            datasets: [
              {
                label: 'تعداد رأی',
                data: [stats.plaintiff, stats.defender],
                backgroundColor: ['#f87171', '#4ade80'],
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
            },
          }}
        />
      </motion.div>

      {/* فرم ثبت رأی و استدلال */}
      {!submitted && (
        <motion.div
          className='bg-white p-6 rounded-xl w-full max-w-3xl shadow space-y-4'
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className='text-xl font-bold text-gray-800'>
            🧠 ثبت رأی و استدلال
          </h3>

          <div className='flex gap-4'>
            <button
              onClick={() => setVote('plaintiff')}
              className={`px-4 py-2 rounded font-semibold transition-all duration-200 ${
                vote === 'plaintiff'
                  ? 'bg-red-600 text-white scale-105'
                  : 'bg-gray-200'
              }`}
            >
              گناهکار
            </button>
            <button
              onClick={() => setVote('defender')}
              className={`px-4 py-2 rounded font-semibold transition-all duration-200 ${
                vote === 'defender'
                  ? 'bg-green-600 text-white scale-105'
                  : 'bg-gray-200'
              }`}
            >
              بی‌گناه
            </button>
          </div>

          <textarea
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
            placeholder='📝 لطفاً استدلال خود را بنویسید...'
            className='w-full h-28 p-3 border rounded'
          />

          <motion.button
            onClick={handleSubmit}
            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 shadow hover:scale-105 transition-all duration-200'
            whileTap={{ scale: 0.95 }}
          >
            📬 ارسال
          </motion.button>
        </motion.div>
      )}

      {submitted && (
        <motion.div
          className='text-green-600 font-bold text-lg mt-4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          ✅ رأی شما ثبت شد. با تشکر از مشارکت شما!
        </motion.div>
      )}
    </div>
  );
}
