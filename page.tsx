// app/ask/page.tsx
'use client';

import { useState } from "react";

export default function AskPage() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

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
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">فرم پرسش حقوقی</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="نام شما (اختیاری)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="سؤال خود را بنویسید..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded min-h-[120px]"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'در حال ارسال...' : 'ارسال پرسش'}
        </button>

        {status === 'sent' && <p className="text-green-600 text-sm">✅ پرسش شما با موفقیت ارسال شد.</p>}
        {status === 'error' && <p className="text-red-600 text-sm">❌ خطا در ارسال پیام. دوباره تلاش کنید.</p>}
      </form>
    </div>
  );
}
