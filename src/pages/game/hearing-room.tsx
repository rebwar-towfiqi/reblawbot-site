'use client';

import axios from 'axios';
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip} from 'chart.js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type CaseData = {
  id: number;
  title: string;
  summary: string;
};

type Stats = {
  plaintiff: number;
  defendant: number;
  neutral: number;
};

export default function HearingRoom() {
  const router = useRouter();
  const { caseId, role } = router.query;

  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [vote, setVote] = useState<string>('');
  const [argument, setArgument] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [stats, setStats] = useState<Stats>({
    plaintiff: 0,
    defendant: 0,
    neutral: 0
  });

  // Fetch case data
  useEffect(() => {
    if (caseId) {
      axios
        .get(`/api/case/${caseId}`)
        .then((res) => setCaseData(res.data))
        .catch(() => setMessage('❌ خطا در بارگذاری پرونده.'));
    }
  }, [caseId]);

  // Fetch vote stats
  useEffect(() => {
    if (caseId) {
      axios
        .get(`/api/argument?caseId=${caseId}`)
        .then((res) => setStats(res.data))
        .catch(() => setMessage('❌ خطا در دریافت آمار.'));
    }
  }, [caseId]);

  // Submit vote and argument
  const handleSubmit = async () => {
    if (!vote || !argument.trim()) {
      setMessage('لطفاً رأی و استدلال خود را وارد کنید.');
      return;
    }

    try {
      const res = await axios.post('/api/argument', {
        caseId,
        role,
        vote,
        argument
      });
      setMessage('✅ رأی و استدلال شما ثبت شد!');
    } catch (err) {
      setMessage('❌ خطا در ارسال رأی.');
    }
  };

  const chartData = {
    labels: ['گناهکار', 'بی‌گناه', 'ممتنع'],
    datasets: [
      {
        data: [stats.plaintiff, stats.defendant, stats.neutral],
        backgroundColor: ['#DC2626', '#16A34A', '#EAB308']
      }
    ]
  };

  return (
    <div className='p-4 text-white'>
      {caseData ? (
        <>
          <h2 className='text-2xl font-bold mb-2'>{caseData.title}</h2>
          <p className='text-md leading-relaxed mb-4'>
            {caseData.summary.slice(0, 300)}...
          </p>

          <a
            href={`https://t.me/RebLCBot?start=${caseId}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-blue-400 underline mb-6 inline-block'
          >
            👁 مشاهدهٔ کامل در ربات رسمی
          </a>

          <h3 className='text-lg font-semibold mb-2'>🎯 رأی شما چیست؟</h3>
          <div className='flex gap-3 mb-4'>
            <button
              onClick={() => setVote('plaintiff')}
              className={`px-4 py-2 rounded ${
                vote === 'plaintiff' ? 'bg-red-600' : 'bg-gray-700'
              }`}
            >
              گناهکار
            </button>
            <button
              onClick={() => setVote('defendant')}
              className={`px-4 py-2 rounded ${
                vote === 'defendant' ? 'bg-green-600' : 'bg-gray-700'
              }`}
            >
              بی‌گناه
            </button>
            <button
              onClick={() => setVote('neutral')}
              className={`px-4 py-2 rounded ${
                vote === 'neutral' ? 'bg-yellow-600' : 'bg-gray-700'
              }`}
            >
              ممتنع
            </button>
          </div>

          <textarea
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
            placeholder='📝 استدلال خود را وارد کنید...'
            title='استدلال'
            className='w-full p-3 rounded text-black mb-4'
            rows={4}
          ></textarea>

          <button
            onClick={handleSubmit}
            className='bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition'
          >
            ثبت رأی
          </button>

          {message && <p className='mt-4 text-yellow-300'>{message}</p>}

          <div className='bg-white text-black p-4 rounded-md w-full max-w-2xl mt-8'>
            <h3 className='text-center text-lg font-semibold mb-2'>
              📊 نتایج رأی کاربران
            </h3>
            <div className='w-64 h-64 mx-auto'>
              <Pie data={chartData} />
            </div>
          </div>
        </>
      ) : (
        <p className='text-yellow-300'>⏳ در حال بارگذاری اطلاعات پرونده...</p>
      )}
    </div>
  );
}
