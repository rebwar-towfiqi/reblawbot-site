/* eslint-disable no-console */
// src/components/HearingRoom.tsx
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
  id: number;
  title: string;
  summary: string;
};

type VoteStats = {
  guilty: number;
  innocent: number;
  abstain: number;
};

export default function HearingRoom() {
  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [stats, setStats] = useState<VoteStats>({
    guilty: 0,
    innocent: 0,
    abstain: 0,
  });
  const [vote, setVote] = useState<'guilty' | 'innocent' | 'abstain' | ''>('');
  const [argument, setArgument] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const caseId = new URLSearchParams(window.location.search).get('caseId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [caseRes, statRes] = await Promise.all([
          axios.get(`/api/case/${caseId}`),
          axios.get(`/api/argument/stats/${caseId}`),
        ]);
        setCaseData(caseRes.data);
        setStats(statRes.data);
      } catch (error) {
        console.error('❌ خطا در دریافت اطلاعات:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [caseId]);

  const handleSubmit = async () => {
    if (!vote || !argument.trim()) {
      alert('لطفاً رأی و استدلال خود را وارد کنید.');
      return;
    }
    try {
      await axios.post('/api/argument', {
        case_id: caseId,
        vote,
        argument,
      });
      setSubmitted(true);
      const res = await axios.get(`/api/argument/stats/${caseId}`);
      setStats(res.data);
    } catch (err) {
      console.error('❌ خطا در ارسال استدلال:', err);
      alert('⚠️ خطا در ارسال استدلال. دوباره تلاش کنید.');
    }
  };

  if (loading)
    return <div className='p-6 text-center'>⏳ در حال بارگذاری...</div>;
  if (!caseData)
    return <div className='p-6 text-center'>❌ پرونده‌ای یافت نشد.</div>;

  const pieData = {
    labels: ['مجرم', 'برائت', 'ممتنع'],
    datasets: [
      {
        data: [stats.guilty, stats.innocent, stats.abstain],
        backgroundColor: ['#dc2626', '#16a34a', '#eab308'],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['مجرم', 'برائت', 'ممتنع'],
    datasets: [
      {
        label: 'تعداد آرا',
        data: [stats.guilty, stats.innocent, stats.abstain],
        backgroundColor: ['#f87171', '#4ade80', '#fde047'],
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className='min-h-screen bg-[#1a1a1a] text-white p-6 flex flex-col items-center gap-6'>
      <div className='bg-black/70 p-6 rounded-lg w-full max-w-3xl'>
        <h2 className='text-2xl font-bold text-blue-200 mb-2'>
          {caseData.title}
        </h2>
        <p className='text-md leading-relaxed mb-4'>
          {caseData.summary.slice(0, 300)}...
        </p>
        <a
          href={`https://t.me/RebLCBot?start=${caseId}`}
          className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-full text-white font-semibold shadow-lg'
          target='_blank'
          rel='noopener noreferrer'
        >
          🤖 مشاهده در ربات رسمی
        </a>
      </div>

      <div className='bg-white text-black p-4 rounded-md w-full max-w-2xl'>
        <h3 className='text-center text-lg font-semibold mb-2'>
          📊 نمودار دایره‌ای
        </h3>
        <Pie data={pieData} />
      </div>

      <div className='bg-white text-black p-4 rounded-md w-full max-w-2xl'>
        <h3 className='text-center text-lg font-semibold mb-2'>
          📈 نمودار میله‌ای
        </h3>
        <Bar data={barData} options={barOptions} />
      </div>

      {!submitted && (
        <div className='bg-black/60 p-6 rounded-lg w-full max-w-3xl'>
          <h3 className='text-pink-300 text-lg mb-4 font-bold'>
            🧠 رأی شما و استدلال
          </h3>
          <div className='flex gap-4 mb-4'>
            <button
              className={`px-4 py-2 rounded ${vote === 'guilty' ? 'bg-red-700' : 'bg-gray-700'}`}
              onClick={() => setVote('guilty')}
            >
              مجرم
            </button>
            <button
              className={`px-4 py-2 rounded ${vote === 'innocent' ? 'bg-green-700' : 'bg-gray-700'}`}
              onClick={() => setVote('innocent')}
            >
              برائت
            </button>
            <button
              className={`px-4 py-2 rounded ${vote === 'abstain' ? 'bg-yellow-600' : 'bg-gray-700'}`}
              onClick={() => setVote('abstain')}
            >
              ممتنع
            </button>
          </div>
          <textarea
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
            placeholder='📝 استدلال خود را بنویسید...'
            className='w-full h-32 p-3 rounded bg-white text-black'
          />
          <button
            onClick={handleSubmit}
            className='mt-4 bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded'
          >
            📬 ارسال
          </button>
        </div>
      )}

      {submitted && (
        <div className='text-green-400 font-bold text-lg mt-4'>
          ✅ رأی شما ثبت شد
        </div>
      )}
    </div>
  );
}
