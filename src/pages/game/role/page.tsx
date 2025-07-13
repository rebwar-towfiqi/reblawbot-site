'use client'

import { useRouter } from 'next/navigation'

export default function RoleSelection() {
  const router = useRouter()

  const handleSelect = (role: string) => {
    router.push(`/game/case-selection?role=${role}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <h1 className="text-2xl font-bold mb-6">نقش خود را انتخاب کنید</h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => handleSelect('defendant')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md"
        >
          👨‍⚖ وکیل متهم
        </button>

        <button
          onClick={() => handleSelect('plaintiff')}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-md"
        >
          👩‍💼 وکیل شاکی
        </button>

        <button
          onClick={() => handleSelect('judge')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md"
        >
          ⚖ قاضی دادگاه
        </button>
      </div>
    </div>
  )
}
