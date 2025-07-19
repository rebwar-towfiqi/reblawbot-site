
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 📄 File: src/pages/game/hearing-room.tsx

import axios from 'axios';
import Chart from 'chart.js/auto';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function HearingRoom() {
  const router = useRouter();
  const { case: caseId, role, telegram_id, name } = router.query;
  const [caseData, setCaseData] = useState<any>(null);
  const [argument, setArgument] = useState('');
  const [vote, setVote] = useState('');
  const [aiVerdict, setAiVerdict] = useState('');
  const [verdictStats, setVerdictStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!caseId) return;
    axios.get(`/api/case/${caseId}`).then(res => setCaseData(res.data)).catch(console.error);
    axios.get(`/api/verdict/stats/${caseId}`).then(res => setVerdictStats(res.data)).catch(() => {});
    axios.get(`/api/verdict/ai/${caseId}`).then(res => setAiVerdict(res.data?.verdict || '')).catch(() => {});
  }, [caseId]);

  useEffect(() => {
    if (!verdictStats) return;
    const ctxPie = document.getElementById('verdictPie') as HTMLCanvasElement;
    const ctxBar = document.getElementById('verdictBar') as HTMLCanvasElement;
    new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: ['Innocent', 'Guilty', 'Abstain'],
        datasets: [{
          label: 'Votes',
          data: [verdictStats.innocent, verdictStats.guilty, verdictStats.abstain],
        }]
      },
    });
    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['Innocent', 'Guilty', 'Abstain'],
        datasets: [{
          label: 'Votes',
          data: [verdictStats.innocent, verdictStats.guilty, verdictStats.abstain],
        }]
      },
    });
  }, [verdictStats]);

  const submitArgument = async () => {
    if (!argument || !vote) return;
    setLoading(true);
    try {
      await axios.post('/api/argument', {
        telegram_id,
        name,
        case_id: caseId,
        role,
        vote,
        argument,
      });
      alert('✅ Argument submitted!');
    } catch (e) {
      alert('❌ Submission failed.');
    } finally {
      setLoading(false);
    }
  };

  if (!caseData) return <p>Loading case data...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">{caseData.title}</h1>
      <p className="text-gray-600">{caseData.description}</p>
      <a href={caseData.link} target="_blank" className="text-blue-600 underline">Read full case</a>

      <div className="mt-6">
        <label htmlFor="vote">Your Vote:</label>
        <select
          id="vote"
          value={vote}
          onChange={e => setVote(e.target.value)}
          className="border rounded p-2 ml-2"
        >
          <option value="">--Select--</option>
          <option value="innocent">Innocent</option>
          <option value="guilty">Guilty</option>
          <option value="abstain">Abstain</option>
        </select>
      </div>

      <textarea
        placeholder="Enter your argument here..."
        value={argument}
        onChange={e => setArgument(e.target.value)}
        className="w-full border p-3 rounded mt-4"
        rows={4}
      />

      <button
        onClick={submitArgument}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        Submit Argument
      </button>

      {aiVerdict && (
        <div className="bg-green-100 border border-green-300 p-4 rounded mt-6">
          <h2 className="font-semibold">🧠 AI Judge Verdict:</h2>
          <p>{aiVerdict}</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="font-bold mb-2">Community Votes</h3>
        <canvas id="verdictPie" className="mb-4" height="200"></canvas>
        <canvas id="verdictBar" height="200"></canvas>
      </div>
    </div>
  );
}
