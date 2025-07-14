// pages/api/argument.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

// POST /api/argument
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { case_id, vote, argument } = req.body;

  if (!case_id || !vote || !argument) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const db = await open({
      filename: './src/data/game_cases.db',
      driver: sqlite3.Database,
    });

    await db.run(
      'INSERT INTO arguments (case_id, vote, argument, created_at) VALUES (?, ?, ?, datetime("now"))',
      [case_id, vote, argument],
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Error inserting argument:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
