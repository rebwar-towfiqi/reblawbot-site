/* eslint-disable no-console */
'use client'

import axios from 'axios'
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip} from 'chart.js'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Bar,Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

interface CaseData {
  id: number
  title: string
  summary: string
}

export default function HearingRoom() {
  const router = useRouter()
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { case: caseIdParam, role, telegram_id, name } = router.query

  const caseId = Array.isArray(caseIdParam) ? caseIdParam[0] : caseIdParam

  const [argument, setArgument] = useState('')
  const [vote, setVote] = useState('')
  const [caseData, setCaseData] = useState<CaseData | null>(null)
  const [verdictStats, setVerdictStats] = useState<{
    innocent: number
    guilty: number
    abstain: number
  } | null>(null)
  const [loading, setLoading] = useState(false)
  const [aiVerdict, setAiVerdict] = useState<string | null>(null)

  useEffect(() => {
    if (!caseId) return
    const fetchCase = async () => {
      try {
        const res = await axios.get(`/api/case/${caseId}`)
        setCaseData(res.data)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('❌ خطا در دریافت پرونده:', error)
      }
    }
    fetchCase()
  }, [caseId])

  const handleVote = async () => {
    if (!vote || !telegram_id || !name) {
      alert('لطفاً اطلاعات رأی‌دهنده و رأی را وارد کنید.')
      return
    }

    try {
      await axios.post('/api/submit', {
        caseId,
        telegram_id,
        name,
        vote,
        argument,
      })
      alert('✅ رأی شما با موفقیت ثبت شد!')
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('❌ خطا در ثبت رأی:', err)
      alert('خطا در ثبت رأی')
    }
  }

  const fetchStats = async () => {
    try {
      const res = await axios.get(`/api/verdict/stats/${caseId}`)
      setVerdictStats(res.data)
    } catch (err) {
      console.error('❌ خطا در دریافت آمار:', err)
    }
  }

  const handleAIJudge = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`/api/ai/${caseId}`)
      setAiVerdict(res.data.verdict)
    } catch (err) {
      console.error('❌ خطا در رأی هوش مصنوعی:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">🧑‍⚖️ اتاق رسیدگی به پرونده</h1>

      {caseData && (
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📁 عنوان پرونده: {caseData.title}</h2>
          <p className="text-gray-700 whitespace-pre-line">{caseData.summary}</p>
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-2 font-bold">🔹 رأی شما:</label>
        <select
          value={vote}
          onChange={(e) => setVote(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-xl"
        >
          <option value="">-- انتخاب کنید --</option>
          <option value="innocent">برائت</option>
          <option value="guilty">مجرم</option>
          <option value="abstain">ممتنع</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-bold">🧾 استدلال شما:</label>
        <textarea
          value={argument}
          onChange={(e) => setArgument(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-xl"
          rows={4}
        />
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={handleVote}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
        >
          📤 ثبت رأی
        </button>
        <button
          onClick={fetchStats}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-xl"
        >
          📊 نمایش آمار رأی‌گیری
        </button>
        <button
          onClick={handleAIJudge}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl"
        >
          🤖 {loading ? 'در حال تحلیل...' : 'درخواست رأی هوش مصنوعی'}
        </button>
      </div>

      {verdictStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">📈 نمودار دایره‌ای:</h3>
            <Pie
              data={{
                labels: ['برائت', 'مجرم', 'ممتنع'],
                datasets: [
                  {
                    data: [
                      verdictStats.innocent,
                      verdictStats.guilty,
                      verdictStats.abstain,
                    ],
                    backgroundColor: ['#22c55e', '#ef4444', '#eab308'],
                  },
                ],
              }}
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">📊 نمودار میله‌ای:</h3>
            <Bar
              data={{
                labels: ['برائت', 'مجرم', 'ممتنع'],
                datasets: [
                  {
                    label: 'تعداد آرا',
                    data: [
                      verdictStats.innocent,
                      verdictStats.guilty,
                      verdictStats.abstain,
                    ],
                    backgroundColor: ['#22c55e', '#ef4444', '#eab308'],
                  },
                ],
              }}
            />
          </div>
        </div>
      )}

      {aiVerdict && (
        <div className="bg-purple-100 border border-purple-300 p-4 rounded-xl mt-6 shadow">
          <h3 className="font-bold text-purple-800">📬 رأی نهایی قاضی هوش مصنوعی:</h3>
          <p className="mt-2 text-purple-700">{aiVerdict}</p>
        </div>
      )}
    </div>
  )
}
