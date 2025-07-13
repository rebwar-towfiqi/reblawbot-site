'use client';

import axios from 'axios';
import { ArcElement, Chart as ChartJS, Legend,Tooltip } from 'chart.js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

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
  const caseId = router.query.case || router.query.caseId;
  const role = router.query.role as string;

  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [message, setMessage] = useState('');
  const [argument, setArgument] = useState('');
  const [stats, setStats] = useState<Stats>({ plaintiff: 0, defendant: 0, neutral: 0 });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (caseId) {
      axios
        .get(`/api/case/${caseId}`)
        .then((res) => setCaseData(res.data))
        .catch(() => setMessage('❌ خطا در بارگذاری پرونده.'));
    }
  }, [caseId]);

  useEffect(() => {
    if (caseId) {
      axios
        .get(`/api/argument/stats?case=${caseId}`)
        .then((res) => setStats(res.data))
        .catch(() => console.warn('خطا در دریافت آمار'));
    }
  }, [submitted]);

  const handleSubmit = () => {
    if (!argument.trim()) {
      setMessage('⚠ لطفاً استدلال خود را بنویسید.');
      return;
    }

    axios
      .post('/api/argument', { caseId, role, text: argument })
      .then(() => {
        setSubmitted(true);
        setMessage('✅ استدلال شما ثبت شد.');
      })
      .catch(() => {
        setMessage('❌ خطا در ثبت استدلال.');
      });
  };

  if (!caseId) return <p className="text-yellow-400 p-4">❗شناسه پرونده نامعتبر است.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-center">🧑‍⚖️ جلسه رسیدگی</h1>
      {message && <p className="text-sm text-red-400 mb-2">{message}</p>}

      {caseData && (
        <>
          <h2 className="text-xl font-semibold mb-1">{caseData.title}</h2>
          <p className="text-md leading-relaxed mb-4">
            {caseData.summary?.slice(0, 300)}...
          </p>
          <a
            href={`https://t.me/RebLCBot?start=${caseData.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 underline mb-6 inline-block"
          >
            👁 مشاهدهٔ کامل پرونده در ربات رسمی
          </a>
        </>
      )}

      {!submitted && (
        <>
          <label htmlFor="argument" className="text-sm text-gray-300 mb-1 block">
            ✍️ استدلال شما:
          </label>
          <Textarea
            id="argument"
            placeholder="نظرتان را درباره پرونده بنویسید..."
            rows={5}
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleSubmit}>📨 ثبت رأی و استدلال</Button>
        </>
      )}

      {submitted && (
        <>
          <p className="mt-4 mb-2 text-green-400">🎉 از مشارکت شما سپاسگزاریم!</p>
          <div className="w-full max-w-[220px] mx-auto">
            <Pie
              data={{
                labels: ['شاکی', 'خوانده', 'ممتنع'],
                datasets: [
                  {
                    data: [stats.plaintiff, stats.defendant, stats.neutral],
                    backgroundColor: ['#f87171', '#60a5fa', '#d1d5db'],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
