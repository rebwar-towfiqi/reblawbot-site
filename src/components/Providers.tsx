/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

type Props = {
  locale: string
  messages: Record<string, any>
  children: ReactNode
}

export default function Providers({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}