'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// بارگذاری تنبل کامپوننت نقش‌ها
const RoleSelector = dynamic(() => import('../../components/RoleSelector'), {
  ssr: false,
});

export default function RolePage() {
  return (
    <main className='min-h-screen bg-gray-900 text-white p-4'>
      <RoleSelector />
    </main>
  );
}
