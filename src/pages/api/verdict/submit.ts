// 📄 File: src/pages/api/verdict/submit.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { caseId, telegram_id, vote, argument, role } = req.body;

  if (!caseId || !telegram_id || !vote) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const db = await open({
      filename: 'src/data/game_cases.db',
      driver: sqlite3.Database,
    });

    await db.run(
      `INSERT INTO verdicts (case_id, telegram_id, vote, argument, role)
       VALUES (?, ?, ?, ?, ?)`,
      [caseId, telegram_id, vote, argument || '', role || 'observer']
    );

    res.status(200).json({ message: 'Verdict submitted successfully' });
  } catch (error) {
    console.error('❌ Error submitting verdict:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
