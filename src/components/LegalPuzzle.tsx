'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const puzzles = [
  {
    id: 1,
    question: 'در یک قرارداد بیع، اگر مورد معامله مجهول باشد، حکم معامله چیست؟',
    options: ['صحیح است', 'باطل است', 'قابل فسخ است', 'منوط به تراضی است'],
    answer: 'باطل است',
    hint: 'به ماده 216 قانون مدنی توجه کن.',
  },
  {
    id: 2,
    question: 'اگر وکیل از حدود وکالت تجاوز کند، عمل او چه حکمی دارد؟',
    options: [
      'باطل است',
      'غیر نافذ است',
      'صحیح است',
      'موقوف به اجازه موکل است',
    ],
    answer: 'موقوف به اجازه موکل است',
    hint: 'ماده 667 قانون مدنی راهنمای خوبی‌ست.',
  },
];

export default function LegalPuzzle() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [solved, setSolved] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const puzzle = puzzles[current];

  const handleSubmit = () => {
    if (selected === puzzle.answer) {
      setSolved(true);
    } else {
      alert('❌ پاسخ نادرست است. دوباره تلاش کن یا راهنما را ببین.');
    }
  };

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
    setSelected('');
    setSolved(false);
    setShowHint(false);
  };

  if (current >= puzzles.length) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center p-8 text-center'>
        <h2 className='text-2xl font-bold text-green-600 mb-4'>
          🎉 همه معماها حل شد!
        </h2>
        <p className='mb-4'>اکنون می‌توانی به مرحله بعدی پرونده بروی.</p>
        <link href='/game/hearing-room' className='text-blue-600 underline'>
          🔁 بازگشت به دادگاه
        </link>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-6'>
      <motion.div
        className='bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full border-2 border-yellow-400'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-xl font-semibold text-yellow-800 mb-4'>
          🧠 معمای حقوقی {current + 1} از {puzzles.length}
        </h2>

        <p className='text-lg mb-4'>{puzzle.question}</p>

        <div className='grid gap-2'>
          {puzzle.options.map((opt) => (
            <label
              key={opt}
              className={`p-2 border rounded cursor-pointer ${
                selected === opt
                  ? 'bg-yellow-200 border-yellow-600'
                  : 'bg-gray-100'
              }`}
            >
              <input
                type='radio'
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
                className='mr-2'
              />
              {opt}
            </label>
          ))}
        </div>

        <div className='mt-4 flex flex-col sm:flex-row gap-3'>
          {!solved ? (
            <>
              <button
                onClick={handleSubmit}
                className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600'
              >
                بررسی پاسخ
              </button>
              <button
                onClick={() => setShowHint(true)}
                className='text-sm text-blue-600 hover:underline'
              >
                🔍 راهنمایی
              </button>
            </>
          ) : (
            <button
              onClick={handleNext}
              className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
            >
              ✅ ادامه
            </button>
          )}
        </div>

        {showHint && (
          <div className='mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded'>
            💡 راهنما: {puzzle.hint}
          </div>
        )}
      </motion.div>
    </div>
  );
}
