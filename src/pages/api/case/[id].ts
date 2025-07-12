// فایل: src/pages/api/case/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import sqlite3 from 'sqlite3';

const dbPath = path.resolve(process.cwd(), 'src/data/game_cases.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const caseId = req.query.id;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error("❌ خطا در اتصال به دیتابیس:", err.message);
      return res.status(500).json({ error: "Database connection failed" });
    }
  });

  db.get(
    "SELECT title, summary FROM famous_cases WHERE id = ?",
    [caseId],
    (err, row) => {
      if (err) {
        console.error("❌ خطا در دریافت اطلاعات:", err.message);
        return res.status(500).json({ error: "Query failed" });
      }
      res.status(200).json(
        row || {
          title: "یافت نشد",
          summary: "❌ پرونده‌ای با این شناسه وجود ندارد.",
        }
      );
    }
  );

  db.close();
}
