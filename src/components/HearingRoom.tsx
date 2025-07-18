/* eslint-disable no-console */
'use client';

import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function HearingRoom() {
  const router = useRouter();
  const { case: caseId, role, telegram_id, name } = router.query;

  const [argument, setArgument] = useState('');
  const [vote, setVote] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [caseData, setCaseData] = useState<any>(null);
  const [aiVerdict, setAiVerdict] = useState<{ verdict: string; reason: string } | null>(null);
  const [judging, setJudging] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
    } catch (error) {
      console.error('❌ خطا در ارسال رأی:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!caseData) return <div className="p-6 text-center">در حال بارگذاری پرونده...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex flex-col items-center px-4">
      <motion.div
        className="bg-white p-6 rounded-xl w-full max-w-3xl shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700">{caseData.title}</h2>
        <p className="text-md text-gray-700 leading-loose whitespace-pre-wrap">
          {expanded ? caseData.summary : `${caseData.summary?.slice(0, 300)}...`}
        </p>
        {caseData.summary.length > 300 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-blue-600 hover:underline text-sm"
          >
            {expanded ? '⬆️ بستن متن کامل' : '📄 نمایش بیشتر'}
          </button>
        )}
      </motion.div>

      {!submitted ? (
        <div className="mt-8 w-full max-w-2xl">
          <label className="block mb-2 font-semibold">🎯 نقش شما: {role === 'plaintiff' ? 'شاکی' : 'متهم'}</label>
          <textarea
            rows={5}
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
            placeholder="استدلال خود را وارد کنید..."
            className="w-full border rounded-lg p-3 mb-4"
          />
          <div className="mb-4">
            <label htmlFor="voteSelect" className="font-semibold block mb-2">🗳️ رأی شما:</label>
            <select
              id="voteSelect"
              value={vote}
              onChange={(e) => setVote(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="">انتخاب کنید</option>
              <option value="plaintiff">🔴 شاکی</option>
              <option value="defender">🟢 متهم</option>
              <option value="neutral">⚪ ممتنع</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition-all"
          >
            {loading ? '⏳ در حال ارسال...' : 'ارسال رأی'}
          </button>
        </div>
      ) : (
        <div className="mt-6 text-green-600 font-semibold">✅ رأی شما ثبت شد.</div>
      )}

      {submitted && !aiVerdict && (
        <motion.div className="mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button
            onClick={async () => {
              setJudging(true);
              try {
                const res = await axios.post('/api/ai-judge', { case_id: caseId });
                setAiVerdict(res.data);
              } catch (err) {
                alert('❌ خطا در دریافت رأی قاضی');
              } finally {
                setJudging(false);
              }
            }}
            className="bg-purple-600 text-white px-6 py-3 rounded shadow hover:bg-purple-700 transition-all"
          >
            ⚖️ مشاهده رأی قاضی هوشمند
          </button>
          {judging && <div className="text-sm text-gray-500 mt-2 animate-pulse">⏳ در حال بررسی استدلال‌ها...</div>}
        </motion.div>
      )}

      {aiVerdict && (
        <motion.div
          className="bg-white p-6 rounded-xl w-full max-w-2xl shadow mt-6 border-2 border-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold text-purple-700 mb-2">⚖️ رأی نهایی قاضی هوش مصنوعی</h3>
          <p className="mb-1">
            <strong>نتیجه:</strong>{' '}
            {aiVerdict.verdict === 'plaintiff' ? '🔴 شاکی پیروز است' : '🟢 متهم بی‌گناه است'}
          </p>
          <p className="text-gray-700">
            <strong>توجیه:</strong> {aiVerdict.reason}
          </p>
        </motion.div>
      )}
    </div>
  );
}
