/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
'use client';

import axios from 'axios';
<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8
import { useEffect, useState } from 'react';

<<<<<<< HEAD
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

type CaseData = {
  title: string;
  summary: string;
};

type StatsData = {
  plaintiff: number;
  defender: number;
};

type AIVerdict = {
  verdict: string;
  reason: string;
};

export default function HearingRoomPage() {
  const params = useSearchParams();
  const caseId = params?.get('caseId');
  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [stats, setStats] = useState<StatsData>({ plaintiff: 0, defender: 0 });
  const [vote, setVote] = useState('');
=======
export default function HearingRoom() {
  const router = useRouter();
  const { case: caseId, role, telegram_id, name } = router.query;

>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8
  const [argument, setArgument] = useState('');
  const [vote, setVote] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
<<<<<<< HEAD
  const [aiVerdict, setAiVerdict] = useState<AIVerdict | null>(null);
  const [judging, setJudging] = useState(false);
=======
  const [caseData, setCaseData] = useState<any>(null);
  const [aiVerdict, setAiVerdict] = useState<{
    verdict: string;
    reason: string;
  } | null>(null);
  const [judging, setJudging] = useState(false);
  const [expanded, setExpanded] = useState(false);
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8

  useEffect(() => {
    const fetchCase = async () => {
      if (!caseId) return;
      try {
<<<<<<< HEAD
        const [caseRes, statRes] = await Promise.all([
          axios.get(`/api/case/${caseId}`),
          axios.get(`/api/argument/stats/${caseId}`),
        ]);
        setCaseData(caseRes.data);
        setStats(statRes.data);
      } catch {
        // silent fail
      } finally {
        setLoading(false);
=======
        const res = await axios.get(`/api/case/${caseId}`);
        setCaseData(res.data);
      } catch (error) {
        console.error('❌ خطا در دریافت پرونده:', error);
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8
      }
    };
    fetchCase();
  }, [caseId]);

  const handleSubmit = async () => {
    if (!vote || !argument) return;
    setLoading(true);
    try {
      await axios.post('/api/save-argument', {
        case_id: caseId,
        user_id: telegram_id,
        name,
        vote,
        argument,
      });
      setSubmitted(true);
<<<<<<< HEAD
      const res = await axios.get(`/api/argument/stats/${caseId}`);
      setStats(res.data);
    } catch {
      alert('❌ خطا در ارسال اطلاعات.');
    }
  };

  const handleJudge = async () => {
    setJudging(true);
    try {
      const res = await axios.post('/api/ai-judge', { case_id: caseId });
      setAiVerdict(res.data);
    } catch {
      alert('❌ خطا در دریافت رأی قاضی');
    } finally {
      setJudging(false);
    }
  };

  if (loading)
    return (
      <div className='p-6 text-center text-blue-600 animate-pulse'>⏳ در حال بارگذاری پرونده...</div>
    );

  if (!caseData)
    return <div className='p-6 text-center text-red-500'>❌ پرونده‌ای یافت نشد.</div>;

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 p-6 flex flex-col items-center gap-6'>
=======
    } catch (error) {
      console.error('❌ خطا در ارسال رأی:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!caseData)
    return <div className='p-6 text-center'>در حال بارگذاری پرونده...</div>;

  return (
    <div className='min-h-screen bg-gray-50 py-10 flex flex-col items-center px-4'>
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8
      <motion.div
        className='bg-white p-6 rounded-xl w-full max-w-3xl shadow-md'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
<<<<<<< HEAD
        <h2 className='text-2xl font-bold mb-2 text-blue-700'>{caseData.title}</h2>
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

      <motion.div
        className='bg-white p-4 rounded-xl w-full max-w-2xl shadow'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className='text-center font-bold mb-2 text-gray-700'>📊 نمودار دایره‌ای رأی کاربران</h3>
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

      <motion.div
        className='bg-white p-4 rounded-xl w-full max-w-2xl shadow'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className='text-center font-bold mb-2 text-gray-700'>📈 نمودار ستونی آرا</h3>
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

      {!submitted && (
        <motion.div
          className='bg-white p-6 rounded-xl w-full max-w-3xl shadow space-y-4'
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className='text-xl font-bold text-gray-800'>🧠 ثبت رأی و استدلال</h3>
          <div className='flex gap-4'>
            <button
              onClick={() => setVote('plaintiff')}
              className={`px-4 py-2 rounded font-semibold transition-all duration-200 ${
                vote === 'plaintiff' ? 'bg-red-600 text-white scale-105' : 'bg-gray-200'
              }`}
            >
              گناهکار
            </button>
            <button
              onClick={() => setVote('defender')}
              className={`px-4 py-2 rounded font-semibold transition-all duration-200 ${
                vote === 'defender' ? 'bg-green-600 text-white scale-105' : 'bg-gray-200'
              }`}
            >
              بی‌گناه
            </button>
          </div>
=======
        <h2 className='text-2xl font-bold mb-4 text-blue-700'>
          {caseData.title}
        </h2>
        <p className='text-md text-gray-700 leading-loose whitespace-pre-wrap'>
          {expanded
            ? caseData.summary
            : `${caseData.summary?.slice(0, 300)}...`}
        </p>
        {caseData.summary.length > 300 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className='mt-3 text-blue-600 hover:underline text-sm'
          >
            {expanded ? '⬆️ بستن متن کامل' : '📄 نمایش بیشتر'}
          </button>
        )}
      </motion.div>
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8

      {!submitted ? (
        <div className='mt-8 w-full max-w-2xl'>
          <label className='block mb-2 font-semibold'>
            🎯 نقش شما: {role === 'plaintiff' ? 'شاکی' : 'متهم'}
          </label>
          <textarea
            rows={5}
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
            placeholder='استدلال خود را وارد کنید...'
            className='w-full border rounded-lg p-3 mb-4'
          />
<<<<<<< HEAD

          <motion.button
            onClick={handleSubmit}
            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 shadow hover:scale-105 transition-all duration-200'
            whileTap={{ scale: 0.95 }}
          >
            📬 ارسال
          </motion.button>
        </motion.div>
=======
          <div className='mb-4'>
            <label htmlFor='voteSelect' className='font-semibold block mb-2'>
              🗳️ رأی شما:
            </label>
            <select
              id='voteSelect'
              value={vote}
              onChange={(e) => setVote(e.target.value)}
              className='w-full border rounded-lg p-2'
            >
              <option value=''>انتخاب کنید</option>
              <option value='plaintiff'>🔴 شاکی</option>
              <option value='defender'>🟢 متهم</option>
              <option value='neutral'>⚪ ممتنع</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className='bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition-all'
          >
            {loading ? '⏳ در حال ارسال...' : 'ارسال رأی'}
          </button>
        </div>
      ) : (
        <div className='mt-6 text-green-600 font-semibold'>
          ✅ رأی شما ثبت شد.
        </div>
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8
      )}

      {submitted && !aiVerdict && (
        <motion.div
          className='mt-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
<<<<<<< HEAD
            onClick={handleJudge}
=======
            onClick={async () => {
              setJudging(true);
              try {
                const res = await axios.post('/api/ai-judge', {
                  case_id: caseId,
                });
                setAiVerdict(res.data);
              } catch (err) {
                alert('❌ خطا در دریافت رأی قاضی');
              } finally {
                setJudging(false);
              }
            }}
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8
            className='bg-purple-600 text-white px-6 py-3 rounded shadow hover:bg-purple-700 transition-all'
          >
            ⚖️ مشاهده رأی قاضی هوشمند
          </button>
          {judging && (
<<<<<<< HEAD
            <div className='text-sm text-gray-500 mt-2 animate-pulse'>⏳ در حال بررسی استدلال‌ها...</div>
=======
            <div className='text-sm text-gray-500 mt-2 animate-pulse'>
              ⏳ در حال بررسی استدلال‌ها...
            </div>
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8
          )}
        </motion.div>
      )}

      {aiVerdict && (
        <motion.div
          className='bg-white p-6 rounded-xl w-full max-w-2xl shadow mt-6 border-2 border-purple-400'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
<<<<<<< HEAD
          <h3 className='text-xl font-bold text-purple-700 mb-2'>⚖️ رأی نهایی قاضی هوش مصنوعی</h3>
=======
          <h3 className='text-xl font-bold text-purple-700 mb-2'>
            ⚖️ رأی نهایی قاضی هوش مصنوعی
          </h3>
>>>>>>> 7d8503b6bb9a2b09051cbd5c45b4afe2b32536c8
          <p className='mb-1'>
            <strong>نتیجه:</strong>{' '}
            {aiVerdict.verdict === 'plaintiff'
              ? '🔴 شاکی پیروز است'
              : '🟢 متهم بی‌گناه است'}
          </p>
          <p className='text-gray-700'>
            <strong>توجیه:</strong> {aiVerdict.reason}
          </p>
        </motion.div>
      )}
    </div>
  );
}
