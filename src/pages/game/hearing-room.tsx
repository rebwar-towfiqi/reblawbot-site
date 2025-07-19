/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import axios from 'axios';
import Chart from 'chart.js/auto';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef,useState } from 'react';

export default function HearingRoom() {
  const router = useRouter();
  const { case: caseId, role, name, telegram_id } = router.query;

  const [caseData, setCaseData] = useState<any>(null);
  const [argument, setArgument] = useState('');
  const [vote, setVote] = useState('');
  const [stats, setStats] = useState([0, 0, 0]);
  const chartRef = useRef<Chart | null>(null);

  const fetchCase = async () => {
    try {
      const res = await axios.get(`/api/case/${caseId}`);
      setCaseData(res.data);
    } catch (err) {
      console.error('❌ خطا در دریافت پرونده:', err);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await axios.get(`/api/verdict/stats/${caseId}`);
      setStats(res.data || [0, 0, 0]);
    } catch (err) {
      console.error('❌ خطا در دریافت آمار رأی:', err);
    }
  };

  const handleSubmit = async () => {
    if (!vote || !argument) return alert('لطفاً رأی و استدلال را وارد کنید.');

    try {
      await axios.post('/api/argument', {
        case_id: caseId,
        telegram_id,
        name,
        role,
        vote,
        argument,
      });
      alert('✅ استدلال شما با موفقیت ثبت شد');
      setArgument('');
      fetchStats();
    } catch (err) {
      console.error('❌ ارسال استدلال شکست خورد:', err);
    }
  };

  const requestAIJudge = async () => {
    try {
      const res = await axios.get(`/api/verdict/ai/${caseId}`);
      alert(`🤖 نظر قاضی هوشمند: ${res.data?.verdict || 'نامشخص'}`);
    } catch (err) {
      console.error('❌ خطا در دریافت رأی هوشمند:', err);
    }
  };

  useEffect(() => {
    if (!caseId) return;
    fetchCase();
    fetchStats();
  }, [caseId]);

  useEffect(() => {
    if (!document) return;
    const canvas = document.getElementById('barChart') as HTMLCanvasElement | null;
    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Innocent', 'Guilty', 'Abstain'],
        datasets: [
          {
            label: 'Votes',
            data: stats,
            backgroundColor: 'green',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: Math.max(...stats, 1),
          },
        },
      },
    });
  }, [stats]);

  return (
    <>
      <Head>
        <title>Hearing Room</title>
      </Head>

      <div className="max-w-4xl mx-auto p-6">
        {caseData && (
          <>
            <h1 className="text-2xl font-bold mb-4">{caseData.title}</h1>
            <p className="mb-4 text-gray-700 whitespace-pre-wrap">{caseData.summary}</p>
          </>
        )}

        <div className="mb-6">
          <label className="block mb-2 font-medium">Your Vote:</label>
          <select
  className="border rounded px-3 py-2 w-full"
  value={vote}
  onChange={(e) => setVote(e.target.value)}
  aria-label="Your vote" // ✅ نام قابل دسترسی برای صفحه‌خوان‌ها
          >
            <option value="">-- Select --</option>
            <option value="innocent">Innocent</option>
            <option value="guilty">Guilty</option>
            <option value="abstain">Abstain</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Enter your argument:</label>
          <textarea
  value={argument}
  onChange={(e) => setArgument(e.target.value)}
  className="border rounded w-full px-3 py-2 mt-2"
  rows={5}
  placeholder="Enter your argument here..." // ✅ افزودن placeholder برای خوانایی و دسترسی
/>

        </div>

        <div className="flex gap-4 mb-10">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Argument
          </button>

          <button
            onClick={requestAIJudge}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            🤖 Smart Judge
          </button>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">📊 Verdict Statistics</h2>
          <canvas id="barChart" width="400" height="200"></canvas>
        </div>
      </div>
    </>
  );
}
