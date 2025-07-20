/* eslint-disable no-console */
import path from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

// مسیر پایگاه داده
const dbPath = path.join(__dirname, '../src/data/game_cases.db');

async function initAllTables() {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  // ایجاد جدول رأی‌ها
  await db.exec(`
    CREATE TABLE IF NOT EXISTS votes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      case_id TEXT NOT NULL,
      telegram_id TEXT NOT NULL,
      vote TEXT CHECK( vote IN ('innocent', 'guilty', 'abstain') ) NOT NULL,
      argument TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('✅ جدول votes ساخته شد.');

  // ایجاد جدول آراء هوش مصنوعی
  await db.exec(`
    CREATE TABLE IF NOT EXISTS verdicts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      case_id TEXT NOT NULL,
      ai_verdict TEXT NOT NULL,
      reasoning TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('✅ جدول verdicts ساخته شد.');

  // ایجاد جدول سشن‌ها (دادگاه مجازی)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS game_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      case_id TEXT NOT NULL,
      plaintiff_id TEXT NOT NULL,
      defendant_id TEXT NOT NULL,
      status TEXT CHECK(status IN ('waiting', 'active', 'finished')) DEFAULT 'waiting',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('✅ جدول game_sessions ساخته شد.');

  await db.close();
  console.log('🎉 همه جداول با موفقیت ایجاد شدند.');
}

initAllTables().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('❌ خطا در ساخت جداول:', err);
});
