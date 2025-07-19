/* eslint-disable @typescript-eslint/no-explicit-any */
// 📄 File: src/pages/game/case-selection.tsx

import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CaseSelection() {
  const router = useRouter();
  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/cases')
      .then(res => setCases(res.data))
      // eslint-disable-next-line no-console
      .catch(err => console.error('Failed to load cases:', err));
  }, []);

  const handleSelect = (caseId: number) => {
    router.push(`/game/role-selector?case=${caseId}`);
  };



  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Select a Legal Case</h1>
      {cases.map((item) => (
        <div key={item.id} className="border rounded p-4 shadow hover:bg-gray-50">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-600 mb-2 line-clamp-3">{item.description}</p>
          <button
            onClick={() => handleSelect(item.id)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Choose Case
          </button>
        </div>
      ))}
    </div>
  );
}
