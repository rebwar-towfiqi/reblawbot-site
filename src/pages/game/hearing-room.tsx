'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const HearingRoomPage = () => {
  const router = useRouter()
  const [caseText, setCaseText] = useState('')
  const [loading, setLoading] = useState(true)
  const [selectedVote, setSelectedVote] = useState('')
  const [message, setMessage] = useState('')

  const userRole =
    typeof window !== 'undefined' ? localStorage.getItem('userRole') : null
  const caseId =
    typeof window !== 'undefined' ? localStorage.getItem('selectedCaseId') : null

  useEffect(() => {
    if (!userRole || !caseId) {
      router.push('/') // اگر اطلاعات ناقص بود، بازگشت به خانه
      return
    }

    const fetchCaseText = async () => {
      try {
        const res = await fetch(`/api/case/${caseId}`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setCaseText(data.full_text || 'متن پرونده یافت نشد.')
      } catch (err) {
        setCaseText('❌ خطا در بارگذاری پرونده.')
      } finally {
        setLoading(false)
      }
    }

    fetchCaseText()
  }, [userRole, caseId, router])

  const handleVote = async () => {
    if (!selectedVote || !caseId) return

    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          case_id: caseId,
          vote: selectedVote,
          role: userRole,
        }),
      })

      if (res.ok) {
        setMessage('✅ رأی شما با موفقیت ثبت شد.')
      } else {
        setMessage('❌ خطا در ثبت رأی.')
      }
    } catch (err) {
      setMessage('❌ خطا در ارتباط با سرور.')
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🧾 جلسه رسیدگی</h1>

      {!caseId && !loading ? (
        <p>لطفاً ابتدا یک پرونده انتخاب کنید.</p>
      ) : loading ? (
        <p>در حال بارگذاری پرونده...</p>
      ) : (
        <>
          <p className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-justify mb-4">
            {caseText}
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium">✋ انتخاب رأی:</label>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => setSelectedVote('guilty')}
                  className={`px-4 py-2 rounded ${
                    selectedVote === 'guilty'
                      ? 'bg-red-600 text-white'
                      : 'bg-white border border-gray-400'
                  }`}
                >
                  مجرم است
                </button>
                <button
                  onClick={() => setSelectedVote('innocent')}
                  className={`px-4 py-2 rounded ${
                    selectedVote === 'innocent'
                      ? 'bg-green-600 text-white'
                      : 'bg-white border border-gray-400'
                  }`}
                >
                  بی‌گناه است
                </button>
              </div>
            </div>

            <button
              onClick={handleVote}
              disabled={!selectedVote}
              className="px-6 py-2 bg-blue-700 text-white rounded disabled:opacity-50"
            >
              ثبت رأی
            </button>

            {message && (
              <div className="mt-3 text-sm text-gray-700">{message}</div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default HearingRoomPage
