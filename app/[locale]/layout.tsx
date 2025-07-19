'use client'

import { useEffect, useState } from 'react'

export default function MyComponent({ locale }) {
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