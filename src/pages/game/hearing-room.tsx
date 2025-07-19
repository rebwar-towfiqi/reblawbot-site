/* eslint-disable no-console */
'use client';

import axios from 'axios';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Bar,Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// تعریف تایپ پرونده برای جلوگیری از خطای TypeScript
interface CaseData {
  id: number;
  title: string;
  summary: string;
}

export default function HearingRoom() {
  const router = useRouter();
  const { case: caseId, role, telegram_id, name } = router.query;

  const [argument, setArgument] = useState('');
  const [vote, setVote] = useState('');
  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [verdictStats, setVerdictStats] = useState<{ innocent: number; guilty: number; abstain: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiVerdict, setAiVerdict] = useState<string | null>(null);

  useEffect(() => {
    if (!caseId) return;
    const fetchCase = async () => {
      try {
        const res = await axios.get(`/api/case/${caseId}`);
        setCaseData(res.data);
      } catch (error) {
        console.error('❌ خطا در دریافت پرونده:', error);
      }
    };
    fetchCase();
  }, [caseId]);

  const handleVote = async () => {
    if (!vote || !telegram_id || !name) return alert('رأی و اطلاعات کاربری لازم است');
    try {
      await axios.post('/api/submit', {
        caseId,
        telegram_id,
        name,
        vote,
        argument,
      });
      alert('✅ رأی شما ثبت شد!');
    } catch (err) {
      console.error('❌ خطا در ثبت رأی:', err);
      alert('خطا در ثبت رأی');
    }
  };

  const fetchStats = async () => {
    try {
      const res = await axios.get(`/api/verdict/stats/${caseId}`);
      setVerdictStats(res.data);
    } catch (err) {
      console.error('❌ Error fetching verdict stats:', err);
    }
  };

  const handleAIJudge = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/verdict/ai/${caseId}`);
      setAiVerdict(res.data.verdict);
    } catch (err) {
      console.error('❌ Error getting AI verdict:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center text-blue-600">دادگاه - مرحله دفاع</h1>

      {caseData && (
        <div className="bg-white p-4 rounded shadow my-4">
          <h2 className="text-lg font-bold mb-2">پرونده: {caseData.title}</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{caseData.summary}</p>
        </div>
      )}

      <div className="my-6">
        <label className="block mb-2 font-bold">رأی شما:</label>
        <select
          value={vote}
          onChange={(e) => setVote(e.target.value)}
          className="border rounded w-full p-2"
        >
          <option value="">انتخاب کنید</option>
          <option value="innocent">برائت</option>
          <option value="guilty">مجرم</option>
          <option value="abstain">ممتنع</option>
        </select>
      </div>

      <div className="my-6">
        <label className="block mb-2 font-bold">استدلال شما:</label>
        <textarea
          value={argument}
          onChange={(e) => setArgument(e.target.value)}
          className="border rounded w-full p-2"
          rows={4}
        />
      </div>

      <div className="flex gap-4 my-4">
        <button onClick={handleVote} className="bg-blue-600 text-white px-6 py-2 rounded shadow">
          ثبت رأی
        </button>
        <button onClick={fetchStats} className="bg-gray-500 text-white px-6 py-2 rounded shadow">
          مشاهده آمار
        </button>
        <button onClick={handleAIJudge} disabled={loading} className="bg-purple-600 text-white px-6 py-2 rounded shadow">
          {loading ? 'در حال پردازش...' : 'رأی قاضی هوش مصنوعی'}
        </button>
      </div>

      {verdictStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="font-bold mb-2">آمار رأی‌گیری (نمودار دایره‌ای):</h3>
            <Pie
              data={{
                labels: ['برائت', 'مجرم', 'ممتنع'],
                datasets: [
                  {
                    data: [verdictStats.innocent, verdictStats.guilty, verdictStats.abstain],
                    backgroundColor: ['#22c55e', '#ef4444', '#eab308'],
                  },
                ],
              }}
            />
          </div>
          <div>
            <h3 className="font-bold mb-2">آمار رأی‌گیری (نمودار میله‌ای):</h3>
            <Bar
              data={{
                labels: ['برائت', 'مجرم', 'ممتنع'],
                datasets: [
                  {
                    label: 'تعداد آرا',
                    data: [verdictStats.innocent, verdictStats.guilty, verdictStats.abstain],
                    backgroundColor: ['#22c55e', '#ef4444', '#eab308'],
                  },
                ],
              }}
            />
          </div>
        </div>
      )}

      {aiVerdict && (
        <div className="bg-purple-100 p-4 rounded shadow mt-6">
          <h3 className="font-bold text-purple-700">رأی نهایی قاضی هوش مصنوعی:</h3>
          <p className="text-purple-800 mt-2">{aiVerdict}</p>
        </div>
      )}
    </div>
  );
}
