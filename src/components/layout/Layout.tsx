// app/[locale]/layout.tsx
'use client'

import { useEffect, useState } from 'react'

type Props = {
  locale: string // ✅ هر مقدار رشته‌ای
}

export default function MyComponent({ locale }: Props) {
  const [messages, setMessages] = useState(null)

  useEffect(() => {
    async function loadMessages() {
      const response = await fetch(`/locales/${locale}.json`)
      const data = await response.json()
      setMessages(data)
    }

    loadMessages()
  }, [locale])

  if (!messages) return <div>Loading...</div>

  return (
    <div>
      <p>{messages.welcome}</p>
    </div>
  )
}