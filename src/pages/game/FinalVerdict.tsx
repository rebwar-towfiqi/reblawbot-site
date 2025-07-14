'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function FinalVerdict() {
  const router = useRouter();
  const params = useSearchParams();

  const vote = params?.get('vote');
  const argument = params?.get('argument');
  const reward = params?.get('reward') || '5';

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white text-gray-800 px-4'>
      <div className='bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl'>
        <h1 className='text-3xl font-bold text-center text-green-600 mb-4'>
          رأی نهایی شما ثبت شد 🎉
        </h1>

        <div className='mt-6 space-y-4 text-right'>
          <div>
            <span className='font-semibold'>رأی شما:</span>{' '}
            <span className='text-lg text-purple-700'>
              {vote === 'guilty'
                ? 'گناهکار'
                : vote === 'innocent'
                  ? 'بی‌گناه'
                  : 'ممتنع'}
            </span>
          </div>

          <div>
            <span className='font-semibold'>استدلال شما:</span>
            <p className='mt-2 bg-gray-100 p-3 rounded-md border'>
              {argument || 'بدون استدلال'}
            </p>
          </div>

          <div className='text-center text-lg mt-4 text-amber-600 font-bold'>
            🎁 شما {reward} RLC دریافت کردید
          </div>
        </div>

        <div className='mt-8 flex justify-center'>
          <button
            onClick={() => router.push('/')}
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition'
          >
            بازگشت به خانه
          </button>
        </div>
      </div>
    </div>
  );
}
