// 📄 File: src/pages/api/verdict/stats/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const db = await open({
      filename: 'src/data/game_cases.db',
      driver: sqlite3.Database,
    });

    const result = await db.all(
      `SELECT vote, COUNT(*) as count FROM verdicts
       WHERE case_id = ?
       GROUP BY vote`,
      [id]
    );

    const stats = {
      innocent: 0,
      guilty: 0,
      abstain: 0,
    };

    result.forEach((row) => {
      if (row.vote === 'innocent') stats.innocent = row.count;
      else if (row.vote === 'guilty') stats.guilty = row.count;
      else if (row.vote === 'abstain') stats.abstain = row.count;
    });

    res.status(200).json(stats);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Error fetching verdict stats:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
