import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'متد مجاز نیست' });
  }

  const { case_id, telegram_id, name } = req.body;

  if (!case_id || !telegram_id || !name) {
    return res.status(400).json({ error: 'اطلاعات ناقص است' });
  }

  const db = await open({
    filename: path.join(process.cwd(), 'src/data/game_cases.db'),
    driver: sqlite3.Database,
  });

  try {
    // آیا جلسه‌ای با این کاربر قبلاً وجود دارد؟
    const existing = await db.get(
      `SELECT * FROM game_sessions WHERE case_id = ? AND telegram_id = ?`,
      case_id,
      telegram_id,
    );

    if (existing) {
      return res.status(200).json({
        message: 'شما قبلاً وارد این پرونده شده‌اید',
        session: existing,
      });
    }

    // به صورت تصادفی نقش را انتخاب کن
    const role = Math.random() > 0.5 ? 'plaintiff' : 'defendant';

    const result = await db.run(
      `INSERT INTO game_sessions (case_id, telegram_id, name, role, started_at)
       VALUES (?, ?, ?, ?, datetime('now'))`,
      case_id,
      telegram_id,
      name,
      role,
    );

    return res.status(201).json({
      message: 'جلسه جدید آغاز شد',
      session: {
        id: result.lastID,
        case_id,
        telegram_id,
        name,
        role,
      },
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('❌ خطا در ایجاد جلسه:', e);
    return res.status(500).json({ error: 'خطای داخلی سرور' });
  }
}
