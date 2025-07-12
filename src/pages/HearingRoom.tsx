// src/pages/game/hearing-room.tsx
'use client'

import axios from 'axios'
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

type Stats = {
  plaintiff: number
  defendant: number
  neutral: number
}

type CaseData = {
  title: string
  summary: string
}

export default function HearingRoom() {
  const router = useRouter()
  const { caseId } = router.query
  const [caseData, setCaseData] = useState<CaseData | null>(null)
  const [vote, setVote] = useState('')
  const [argument, setArgument] = useState('')
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    if (caseId) {
      axios.get(`/api/case/${caseId}`).then(res => setCaseData(res.data))
      axios.get(`/api/argument/stats/${caseId}`).then(res => setStats(res.data))
    }
  }, [caseId])

  const handleSubmit = async () => {
    if (!vote || !argument) return alert('هم رأی و هم استدلال را وارد کنید.')

    await axios.post('/api/argument', {
      case_id: caseId,
      vote,
      argument,
    })

    alert('✅ رأی شما با موفقیت ثبت شد!')
    setVote('')
    setArgument('')
    const res = await axios.get(`/api/argument/stats/${caseId}`)
    setStats(res.data)
  }

  const pieData = stats && {
    labels: ['شاکی', 'متهم', 'ممتنع'],
    datasets: [
      {
        data: [stats.plaintiff, stats.defendant, stats.neutral],
        backgroundColor: ['#f87171', '#60a5fa', '#a3a3a3'],
      },
    ],
  }

  const barData = stats && {
    labels: ['شاکی', 'متهم', 'ممتنع'],
    datasets: [
      {
        label: 'تعداد آرا',
        data: [stats.plaintiff, stats.defendant, stats.neutral],
        backgroundColor: ['#f87171', '#60a5fa', '#a3a3a3'],
      },
    ],
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {caseData ? (
        <>
          <h1 className="text-xl font-bold mb-4">{caseData.title}</h1>
          <p className="mb-6 whitespace-pre-line text-justify">{caseData.summary}</p>

          <div className="mb-4">
            <label htmlFor="voteSelect" className="block mb-1 font-semibold">رأی شما:</label>
            <select
              id="voteSelect"
              className="w-full border p-2 rounded"
              value={vote}
              onChange={e => setVote(e.target.value)}
            >
              <option value="">انتخاب کنید</option>
              <option value="plaintiff">به نفع شاکی</option>
              <option value="defendant">به نفع متهم</option>
              <option value="neutral">رأی ممتنع</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="argumentBox" className="block mb-1 font-semibold">استدلال شما:</label>
            <textarea
              id="argumentBox"
              className="w-full border p-2 rounded"
              rows={4}
              title="استدلال خود را وارد کنید"
              placeholder="برای مثال: طبق ماده ۱۰ قانون مدنی ..."
              value={argument}
              onChange={e => setArgument(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            ثبت رأی
          </button>

          {stats && (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="font-semibold text-center mb-2">نمودار دایره‌ای</h2>
                <Pie data={pieData} />
              </div>
              <div>
                <h2 className="font-semibold text-center mb-2">نمودار میله‌ای</h2>
                <Bar data={barData} />
              </div>
            </div>
          )}
        </>
      ) : (
        <p>در حال بارگذاری پرونده...</p>
      )}
    </div>
  )
}
