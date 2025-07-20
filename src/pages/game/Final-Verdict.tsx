'use client'

import axios from 'axios'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function FinalVerdict() {
  const params = useSearchParams()
  const caseId = params?.get('caseId')
  const [verdict, setVerdict] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!caseId) return

    const fetchVerdict = async () => {
      try {
        const res = await axios.get(`/api/verdict/ai/${caseId}`)
        setVerdict(res.data?.verdict || '')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('❌ خطا در دریافت رأی:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchVerdict()
  }, [caseId])

  const getVerdictText = (verdict: string) => {
    switch (verdict) {
      case 'plaintiff':
        return '🔴 شاکی پیروز است'
      case 'defendant':
        return '🟢 متهم بی‌گناه است'
      default:
        return `📜 رأی: ${verdict}`
    }
  }

  if (loading) {
    return (
      <div className="text-center p-6 text-blue-600 animate-pulse">
        ⏳ در حال دریافت رأی نهایی قاضی هوش مصنوعی...
      </div>
    )
  }

  if (!verdict) {
    return (
      <div className="text-center p-6 text-red-500">
        ❌ رأی نهایی برای این پرونده در دسترس نیست.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex flex-col items-center justify-center p-8">
      <motion.div
        className="bg-white border-purple-600 border-2 rounded-2xl p-8 max-w-xl w-full shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
          ⚖️ رأی نهایی قاضی هوش مصنوعی
        </h1>
        <p className="text-xl font-bold text-center text-gray-800">
          {getVerdictText(verdict)}
        </p>
      </motion.div>
    </div>
  )
}
