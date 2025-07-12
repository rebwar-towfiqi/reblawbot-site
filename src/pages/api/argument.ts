// src/pages/api/argument.ts
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

// اتصال به پایگاه داده
async function openDb() {
  return open({
    filename: path.join(process.cwd(), 'src', 'data', 'game_cases.db'),
    driver: sqlite3.Database,
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const db = await openDb()

    const { case_id, vote, argument } = req.body

    if (!case_id || !vote || !argument) {
      return res.status(400).json({ error: 'مقادیر ناقص هستند.' })
    }

    await db.run(
      'INSERT INTO arguments (case_id, vote, argument, created_at) VALUES (?, ?, ?, datetime("now"))',
      [case_id, vote, argument]
    )

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('❌ خطا در ثبت رأی:', err)
    return res.status(500).json({ error: 'Database error' })
  }
}

