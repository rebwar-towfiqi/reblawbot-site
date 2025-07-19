// 📄 File: src/pages/game/hearing-room.tsx

'use client';

import axios from 'axios';
// 👇 Register chart types manually
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  PieController,
  Tooltip,
} from 'chart.js';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
  Tooltip,
  Legend
);

export default function HearingRoom() {
  const router = useRouter();
  const { case: caseId } = router.query;

  const [stats, setStats] = useState<{ innocent: number; guilty: number; abstain: number } | null>(null);

  const pieChartRef = useRef<HTMLCanvasElement | null>(null);
  const pieChartInstanceRef = useRef<Chart | null>(null);

  const barChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!caseId) return;

    const fetchStats = async () => {
      try {
        const res = await axios.get(`/api/verdict/stats/${caseId}`);
        setStats(res.data);
      } catch (error) {
        console.error('❌ Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, [caseId]);

  useEffect(() => {
    if (!stats) return;

    const pieCtx = pieChartRef.current?.getContext('2d');
    if (pieCtx) {
      pieChartInstanceRef.current?.destroy();
      pieChartInstanceRef.current = new Chart(pieCtx, {
        type: 'pie',
        data: {
          labels: ['Innocent', 'Guilty', 'Abstain'],
          datasets: [
            {
              data: [stats.innocent, stats.guilty, stats.abstain],
              backgroundColor: ['#22c55e', '#ef4444', '#eab308'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' },
          },
        },
      });
    }

    const barCtx = barChartRef.current?.getContext('2d');
    if (barCtx) {
      barChartInstanceRef.current?.destroy();
      barChartInstanceRef.current = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Innocent', 'Guilty', 'Abstain'],
          datasets: [
            {
              label: 'Votes',
              data: [stats.innocent, stats.guilty, stats.abstain],
              backgroundColor: ['#22c55e', '#ef4444', '#eab308'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    return () => {
      pieChartInstanceRef.current?.destroy();
      barChartInstanceRef.current?.destroy();
    };
  }, [stats]);

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-2xl font-bold text-center text-gray-800">📊 Verdict Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-72">
          <canvas ref={pieChartRef} />
        </div>
        <div className="w-full h-72">
          <canvas ref={barChartRef} />
        </div>
      </div>
    </div>
  );
}
