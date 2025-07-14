// src/components/FinalVerdict.tsx
import { useRouter } from 'next/router';

export default function FinalVerdict() {
  const router = useRouter();

  return (
    <div className='p-6 text-center'>
      <h1 className='text-2xl font-bold mb-4'>نتیجه نهایی 🏁</h1>
      <p className='text-lg mb-6'>
        پرونده بررسی شد. از شرکت شما در این جلسه قدردانی می‌کنیم.
      </p>
      <button
        onClick={() => router.push('/game')}
        className='px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition'
      >
        بازگشت به لیست پرونده‌ها
      </button>
    </div>
  );
}
