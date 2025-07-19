/* eslint-disable @typescript-eslint/no-explicit-any */
// 📄 File: src/pages/game/hearing-room.tsx

'use client';

import axios from 'axios';
import { ArcElement, BarController, BarElement, CategoryScale, Chart, Legend,PieController, Tooltip } from 'chart.js';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

Chart.register(BarController, PieController, ArcElement, BarElement, CategoryScale, Tooltip, Legend);

export default function HearingRoom() {
  const router = useRouter();
  const { case: caseId, role, telegram_id, name } = router.query;

  const [caseData, setCaseData] = useState<any>(null);
  const [vote, setVote] = useState('');
  const [argument, setArgument] = useState('');
  const [verdict, setVerdict] = useState('');
  const [voteStats, setVoteStats] = useState<any>(null);

  const pieRef = useRef<HTMLCanvasElement | null>(null);
  const barRef = useRef<HTMLCanvasElement | null>(null);
  const pieChartRef = useRef<Chart | null>(null);
  const barChartRef = useRef<Chart | null>(null);

  // 📥 دریافت اطلاعات پرونده
  useEffect(() => {
    if (!caseId) return;
    axios.get(`/api/case/${caseId}`).then(res => setCaseData(res.data));
  }, [caseId]);

  // 📊 دریافت آمار رأی‌ها
  useEffect(() => {
    if (!caseId) return;
    axios.get(`/api/verdict/stats/${caseId}`).then(res => setVoteStats(res.data));
  }, [caseId]);

  // 📈 رسم چارت‌ها
  useEffect(() => {
    if (!voteStats) return;

    const pieCtx = pieRef.current?.getContext('2d');
    const barCtx = barRef.current?.getContext('2d');

    if (pieChartRef.current) pieChartRef.current.destroy();
    if (barChartRef.current) barChartRef.current.destroy();

    const labels = ['Innocent', 'Guilty', 'Abstain'];
    const data = [voteStats.innocent, voteStats.guilty, voteStats.abstain];

    if (pieCtx) {
      pieChartRef.current = new Chart(pieCtx, {
        type: 'pie',
        data: {
          labels,
          datasets: [{
            label: 'Votes',
            data,
            backgroundColor: ['#38bdf8', '#f87171', '#a3a3a3'],
          }],
        },
      });
    }

    if (barCtx) {
      barChartRef.current = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Votes',
            data,
            backgroundColor: ['#38bdf8', '#f87171', '#a3a3a3'],
          }],
        },
      });
    }
  }, [voteStats]);

  const submitVote = async () => {
    if (!caseId || !vote) return;
    await axios.post('/api/verdict/submit', {
      caseId,
      telegram_id,
      name,
      vote,
      argument,
    });
    alert('✅ Your vote has been submitted.');
  };

  const requestAIJudge = async () => {
    if (!caseId) return;
    const res = await axios.get(`/api/verdict/ai/${caseId}`);
    setVerdict(res.data.verdict || 'No verdict returned.');
  };

  if (!caseData) return <p className="text-center mt-10 text-gray-500">Loading case...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{caseData.title}</h1>
      <p className="mb-6 whitespace-pre-line bg-white p-4 rounded shadow">{caseData.summary}</p>

      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="vote">Your Vote:</label>
        <select
          id="vote"
          className="border rounded px-3 py-2 w-full"
          value={vote}
          onChange={(e) => setVote(e.target.value)}
          title="Select your vote"
        >
          <option value="">-- Select --</option>
          <option value="innocent">Innocent</option>
          <option value="guilty">Guilty</option>
          <option value="abstain">Abstain</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="argument">Your Argument:</label>
        <textarea
          id="argument"
          className="border rounded px-3 py-2 w-full"
          rows={4}
          value={argument}
          onChange={(e) => setArgument(e.target.value)}
          placeholder="Explain your reasoning here"
        />
      </div>

      <div className="flex gap-4 mb-6">
        <button onClick={submitVote} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">
          Submit Vote
        </button>
        <button onClick={requestAIJudge} className="bg-gray-700 hover:bg-black text-white px-5 py-2 rounded">
          Smart Judge
        </button>
      </div>

      {verdict && (
        <div className="bg-yellow-100 border border-yellow-400 p-4 rounded mb-6">
          <strong>📜 AI Verdict:</strong> {verdict}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <canvas ref={pieRef} id="pieChart" className="max-w-sm" />
        <canvas ref={barRef} id="barChart" className="max-w-sm" />
      </div>
    </div>
  );
}
