'use client';

import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface PuzzleData {
  id: number;
  case_id: number;
  question: string;
  answer: string;
}

export default function LegalPuzzlePage() {
  const router = useRouter();
  const { case: caseId } = router.query;

  const [puzzle, setPuzzle] = useState<PuzzleData | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (!caseId) return;

    const fetchPuzzle = async () => {
      try {
        const res = await axios.get(`/api/puzzle/${caseId}`);
        setPuzzle(res.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('❌ خطا در دریافت معما:', err);
      }
    };

    fetchPuzzle();
  }, [caseId]);

  const handleSubmit = () => {
    if (!puzzle) return;
    if (
      userAnswer.trim().toLowerCase() === puzzle.answer.trim().toLowerCase()
    ) {
      setFeedback('✅ پاسخ صحیح بود! می‌توانید به مرحله بعد بروید.');
      setSolved(true);
    } else {
      setFeedback('❌ پاسخ نادرست است. لطفاً دوباره تلاش کنید.');
    }
  };

  const goToNextStep = () => {
    router.push({
      pathname: '/game/final-verdict',
      query: { caseId: caseId },
    });
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-yellow-50 to-white flex items-center justify-center px-4 py-12'>
      <motion.div
        className='bg-white p-6 rounded-2xl shadow-xl max-w-2xl w-full border border-yellow-300'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='text-2xl font-bold text-yellow-700 mb-4 text-center'>
          🧩 معمای حقوقی
        </h1>

        {puzzle ? (
          <>
            <p className='text-gray-700 mb-6 text-lg'>{puzzle.question}</p>

            <input
              type='text'
              className='w-full border border-gray-300 rounded-md px-4 py-2 mb-4'
              placeholder='پاسخ شما...'
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />

            <button
              className='w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-md mb-3'
              onClick={handleSubmit}
            >
              بررسی پاسخ
            </button>

            {feedback && (
              <p className='text-center text-sm text-gray-800'>{feedback}</p>
            )}

            {solved && (
              <button
                onClick={goToNextStep}
                className='w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md'
              >
                مرحله بعدی: مشاهده رأی نهایی
              </button>
            )}
          </>
        ) : (
          <p className='text-center text-gray-500'>در حال بارگذاری معما...</p>
        )}
      </motion.div>
    </div>
  );
}
