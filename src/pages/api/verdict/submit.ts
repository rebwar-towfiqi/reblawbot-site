import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { case_id, telegram_id, name, role, vote, argument } = req.body;

  if (!case_id || !telegram_id || !name || !role || !vote || !argument) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const db = await open({
      filename: './src/data/game_cases.db',
      driver: sqlite3.Database,
    });

    await db.run(
      `INSERT INTO verdicts (case_id, telegram_id, name, role, vote, argument)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [case_id, telegram_id, name, role, vote, argument],
    );

    return res.status(200).json({ message: 'Submission saved successfully' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Error inserting verdict:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
