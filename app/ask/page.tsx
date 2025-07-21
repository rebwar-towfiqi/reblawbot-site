// app/ask/page.tsx
'use client';

import { useState } from 'react';

export default function AskPage() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, question }),
    });

    if (res.ok) {
      setStatus('sent');
      setName('');
      setQuestion('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className='mx-auto max-w-xl p-6'>
      <h1 className='mb-4 text-center text-2xl font-bold'>فرم پرسش حقوقی</h1>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='text'
          placeholder='نام شما (اختیاری)'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full rounded border p-2'
        />

        <textarea
          placeholder='سؤال خود را بنویسید...'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className='min-h-[120px] w-full rounded border p-2'
          required
        />

        <button
          type='submit'
          className='rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'در حال ارسال...' : 'ارسال پرسش'}
        </button>

        {status === 'sent' && (
          <p className='text-sm text-green-600'>
            ✅ پرسش شما با موفقیت ارسال شد.
          </p>
        )}
        {status === 'error' && (
          <p className='text-sm text-red-600'>
            ❌ خطا در ارسال پیام. دوباره تلاش کنید.
          </p>
        )}
      </form>
    </div>
  );
}
