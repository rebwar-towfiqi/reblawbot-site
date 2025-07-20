'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function RoleSelector() {
  const router = useRouter()
  const { case: caseId } = router.query
  const [name, setName] = useState('')
  const [telegramId, setTelegramId] = useState('')

  const handleSelect = (role: string) => {
    if (!name.trim() || !telegramId.trim()) {
      alert('لطفاً نام و آیدی تلگرام را وارد کنید.')
      return
    }

    router.push(
      `/game/hearing-room?case=${caseId}&role=${role}&name=${name}&telegram_id=${telegramId}`
    )
  }

  return (
    <motion.div
      className="max-w-xl mx-auto p-6 mt-10 space-y-6 bg-white shadow-xl rounded-2xl border border-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-center text-gray-800">
        🎭 انتخاب نقش حقوقی
      </h1>

      <input
        type="text"
        placeholder="نام شما"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded-xl text-lg focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="آیدی تلگرام (مثلاً: 123456789)"
        value={telegramId}
        onChange={(e) => setTelegramId(e.target.value)}
        className="w-full border p-3 rounded-xl text-lg focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-around mt-4">
        <button
          onClick={() => handleSelect('plaintiff')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
        >
          🔴 شاکی
        </button>
        <button
          onClick={() => handleSelect('defendant')}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
        >
          🟢 متهم
        </button>
      </div>
    </motion.div>
  )
}
