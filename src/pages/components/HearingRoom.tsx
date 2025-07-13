'use client'

import axios from 'axios'
import { ArcElement, BarElement,CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

export default function HearingRoom() {
  const router = useRouter()
  const { case: caseId, role } = router.query

  const [caseData, setCaseData] = useState<any>({})
  const [message, setMessage] = useState('')
  const [argument, setArgument] = useState('')
  const [votes, setVotes] = useState({ plaintiff: 0, defendant: 0, abstain: 0 })

  useEffect(() => {
    if (caseId) {
      axios
        .get(`/api/case/${caseId}`)
        .then((res) => setCaseData(res.data))
        .catch(() => setMessage('❌ خطا در بارگذاری پرونده.'))
    }
  }, [caseId])

  const handleVote = (side: 'plaintiff' | 'defendant' | 'abstain') => {
    setVotes((prev) => ({
      ...prev,
      [side]: prev[side] + 1,
    }))
  }

  const handleSubmitArgument = () => {
    if (!argument.trim()) return
    // در نسخه واقعی می‌توان ارسال به API اضافه کرد
    alert(`✅ استدلال شما ثبت شد:\n\n${argument}`)
    setArgument('')
  }

  const chartData = {
    labels: ['شاکی', 'مدافع', 'ممتنع'],
    datasets: [
      {
        data: [votes.plaintiff, votes.defendant, votes.abstain],
        backgroundColor: ['#f87171', '#60a5fa', '#d1d5db'],
      },
    ],
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🧾 پرونده انتخابی</h2>
      {message && <p className="text-red-500">{message}</p>}

      {!message && caseData && (
        <>
          <h3 className="text-xl font-semibold mb-2">{caseData.title}</h3>
          <p className="mb-2">{caseData.summary?.slice(0, 300)}...</p>
          <a href={`https://t.me/RebLCBot?start=${caseId}`} className="text-blue-600 underline">
            👁 مشاهدهٔ کامل در ربات رسمی
          </a>

          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-bold">✊ رأی شما چیست؟</h4>
            <div className="flex gap-2">
              <Button onClick={() => handleVote('plaintiff')}>🏛 شاکی</Button>
              <Button onClick={() => handleVote('defendant')}>🛡 مدافع</Button>
              <Button onClick={() => handleVote('abstain')}>⚖ ممتنع</Button>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold mb-2">📊 نمودار آرا</h4>
            <div className="w-48 h-48 mx-auto">
              <Pie data={chartData} />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold mb-2">📝 استدلال شما:</h4>
            <Textarea
              placeholder="استدلال خود را وارد کنید..."
              value={argument}
              onChange={(e) => setArgument(e.target.value)}
              className="min-h-[100px]"
            />
            <Button onClick={handleSubmitArgument} className="mt-2">
              📤 ارسال استدلال
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
