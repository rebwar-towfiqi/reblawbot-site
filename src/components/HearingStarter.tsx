// src/components/HearingStarter.tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Dashboard from './Dashboard';

interface GameHistoryEntry {
  date: string;
  points: number;
}

export default function HearingStarter() {
  const router = useRouter();
  const [userPoints, setUserPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [history, setHistory] = useState<GameHistoryEntry[]>([]);

  useEffect(() => {
    setUserPoints(15); // شبیه‌سازی دریافت امتیاز کاربر
    setTotalPoints(125); // شبیه‌سازی امتیاز کل
    setHistory([
      { date: '2025-06-25', points: 5 },
      { date: '2025-06-27', points: 10 },
    ]);
  }, []);

  const startHearing = () => {
    router.push('/game/hearing-room?caseId=1');
  };

  return (
    <div className='p-4 flex flex-col items-center gap-6'>
      <Dashboard
        totalPoints={totalPoints}
        userPoints={userPoints}
        history={history}
      />

      <h1 className='text-2xl font-bold'>🎯 شروع جلسه رسیدگی</h1>
      <p className='text-center text-sm text-gray-600 max-w-md'>
        برای شروع رسیدگی به پرونده، روی دکمه زیر کلیک کنید. در طول جلسه
        می‌توانید به استدلال بپردازید و رأی هیئت منصفه را دریافت کنید.
      </p>

      <button
        onClick={startHearing}
        className='bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition'
      >
        🚀 ورود به جلسه رسیدگی
      </button>
    </div>
  );
}
