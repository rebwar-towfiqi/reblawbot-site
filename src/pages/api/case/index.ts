import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import sqlite3 from "sqlite3";

// مسیر دیتابیس
const dbPath = path.join(process.cwd(), "src", "data", "game_cases.db");

// نوع ردیف‌های جدول
type CaseRow = {
  id: number;
  title: string;
  summary?: string;
};

// هندلر اصلی
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error("❌ خطا در باز کردن دیتابیس:", err.message);
      return res.status(500).json({ error: "Database connection failed" });
    }
  });

  db.all("SELECT id, title, summary FROM famous_cases", [], (err, rows: CaseRow[]) => {
    if (err) {
      console.error("❌ خطا در دریافت اطلاعات:", err.message);
      return res.status(500).json({ error: "Query failed" });
    }

    const simplified = rows.map((r) => ({
      id: r.id,
      title: r.title,
      description: r.summary || "شرحی ثبت نشده",
    }));

    res.status(200).json(simplified);
    db.close();
  });
}
