/* eslint-disable no-console */
// 📄 File: src/pages/api/verdict/stats/[id].ts

import Database from 'better-sqlite3';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// مسیر پایگاه داده (فرض بر این است که فایل در مسیر src/data/game_cases.db قرار دارد)
const dbPath = path.resolve(process.cwd(), 'src/data/game_cases.db');
const db = new Database(dbPath);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: 'Invalid case ID' });
  }

  try {
    const stmt = db.prepare(
      'SELECT vote, COUNT(*) as count FROM votes WHERE case_id = ? GROUP BY vote'
    );
    const rows = stmt.all(id);

    // نتیجه را به فرمت قابل مصرف تبدیل می‌کنیم
    const result: Record<string, number> = {
      Innocent: 0,
      Guilty: 0,
      Abstain: 0,
    };

    for (const row of rows as { vote: string; count: number }[]) {
      const vote = row.vote as 'Innocent' | 'Guilty' | 'Abstain';
      const count = row.count as number;
      if (vote in result) {
        result[vote] = count;
      }
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('❌ Error fetching vote stats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
