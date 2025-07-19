
/* eslint-disable no-console */
// src/pages/game/hearing-room.tsx
import { Chart } from 'chart.js';
import { useEffect, useState } from 'react';


export default function HearingRoom() {
  const [votes, setVotes] = useState({ innocent: 0, guilty: 0, abstain: 0 });

  useEffect(() => {
    // شبیه‌سازی دریافت رأی‌ها از سرور
    setVotes({ innocent: 3, guilty: 5, abstain: 2 });
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement | null;
    if (!canvas) {
      console.warn('Canvas not found!');
      return;
    }

    const ctxBar = canvas.getContext('2d');
    if (!ctxBar) {
      console.warn('Bar chart context is null');
      return;
    }

    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: ['Innocent', 'Guilty', 'Abstain'],
        datasets: [{
          label: 'Votes',
          data: [votes.innocent, votes.guilty, votes.abstain],
          backgroundColor: ['#4ade80', '#f87171', '#facc15'],
        }],
      },
    });
  }, [votes]);

  return (
    <div className="p-4">
      <canvas id="barChart" width="400" height="200"></canvas>
    </div>
  );
}
