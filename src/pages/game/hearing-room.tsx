'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function HearingRoom() {
  const router = useRouter();
  const { case: caseId, role, telegram_id, name } = router.query;

  const [argument, setArgument] = useState('');
  const [vote, setVote] = useState('');
  const [loading, setLoading] = useState(false);
  const [caseData, setCaseData] = useState(null);
  const [verdictStats, setVerdictStats] = useState({ guilty: 0, innocent: 0, abstain: 0 });
  const [aiVerdict, setAiVerdict] = useState('');

  useEffect(() => {
    const fetchCase = async () => {
      if (!caseId) return;
      try {
        const res = await axios.get(`/api/case/${caseId}`);
        setCaseData(res.data);
      } catch (error) {
        console.error('❌ خطا در دریافت پرونده:', error);
      }
    };

    const fetchStats = async () => {
      try {
        const res = await axios.get(`/api/verdict/stats/${caseId}`);
        setVerdictStats(res.data);
      } catch (error) {
        console.error('❌ خطا در دریافت آمار رأی‌ها:', error);
      }
    };

    fetchCase();
    fetchStats();
  }, [caseId]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post('/api/verdict/submit', {
        case_id: caseId,
        user_id: telegram_id,
        username: name,
        role,
        argument,
        vote,
      });
      setArgument('');
      setVote('');
      alert('✅ رأی و استدلال شما ثبت شد.');
    } catch (error) {
      console.error('❌ خطا در ارسال:', error);
      alert('❌ ارسال ناموفق بود.');
    } finally {
      setLoading(false);
    }
  };

  const handleAiJudge = async () => {
    try {
      const res = await axios.get(`/api/verdict/ai/${caseId}`);
      setAiVerdict(res.data.verdict);
    } catch (error) {
      console.error('❌ خطا در رأی هوش مصنوعی:', error);
    }
  };

  const chartData = {
    labels: ['مجرم', 'بی‌گناه', 'ممتنع'],
    datasets: [
      {
        label: 'آمار رأی کاربران',
        data: [verdictStats.guilty, verdictStats.innocent, verdictStats.abstain],
        backgroundColor: ['#dc2626', '#16a34a', '#facc15'],
      },
    ],
  };

  if (!caseData) return <p>⏳ در حال بارگذاری پرونده...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-blue-600">دادگاه - مرحله دفاع</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">پرونده: {caseData.title}</h2>
        <p className="text-gray-700 whitespace-pre-wrap">{caseData.summary}</p>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <textarea
          className="w-full h-24 border border-gray-300 p-2 rounded"
          placeholder="استدلال حقوقی خود را وارد کنید..."
          value={argument}
          onChange={(e) => setArgument(e.target.value)}
        />
        <select
          className="w-full border border-gray-300 p-2 rounded"
          value={vote}
          onChange={(e) => setVote(e.target.value)}
        >
          <option value="">انتخاب رأی...</option>
          <option value="guilty">مجرم</option>
          <option value="innocent">بی‌گناه</option>
          <option value="abstain">ممتنع</option>
        </select>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? '⏳ در حال ارسال...' : 'ثبت رأی و استدلال'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded shadow">
        <div>
          <h3 className="font-bold mb-2 text-center">نمودار دایره‌ای</h3>
          <Pie data={chartData} />
        </div>
        <div>
          <h3 className="font-bold mb-2 text-center">نمودار میله‌ای</h3>
          <Bar data={chartData} />
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleAiJudge}
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded"
        >
          دریافت رأی قاضی هوش مصنوعی
        </button>
        {aiVerdict && (
          <p className="mt-4 text-lg font-semibold text-green-600">🧠 رأی هوش مصنوعی: {aiVerdict}</p>
        )}
      </div>
    </div>
  );
}