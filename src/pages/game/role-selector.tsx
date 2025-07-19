// 📄 File: src/pages/game/role-selector.tsx

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function RoleSelector() {
  const router = useRouter();
  const { case: caseId } = router.query;
  const [name, setName] = useState('');
  const [telegramId, setTelegramId] = useState('');

  const handleSelect = (role: string) => {
    if (!name || !telegramId) return alert('Please enter your name and Telegram ID.');
    router.push(`/game/hearing-room?case=${caseId}&role=${role}&name=${name}&telegram_id=${telegramId}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold">Choose Your Role</h1>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Telegram ID (e.g. 12345678)"
        value={telegramId}
        onChange={(e) => setTelegramId(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <div className="flex justify-around mt-4">
        <button
          onClick={() => handleSelect('plaintiff')}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Plaintiff
        </button>
        <button
          onClick={() => handleSelect('defendant')}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Defendant
        </button>
      </div>
    </div>
  );
}
