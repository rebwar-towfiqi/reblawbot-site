// scripts/initVotesTable.ts

import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

// 📍 مسیر دقیق فایل دیتابیس
const dbPath = path.resolve(__dirname, '../src/data/game_cases.db');

// بررسی وجود فایل دیتابیس
if (!fs.existsSync(dbPath)) {
  console.error('❌ فایل پایگاه داده یافت نشد:', dbPath);
  process.exit(1);
}

const db = new Database(dbPath);

try {
  db.exec(`
    CREATE TABLE IF NOT EXISTS votes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      case_id INTEGER NOT NULL,
      user_id TEXT NOT NULL,
      vote TEXT CHECK (vote IN ('innocent', 'guilty', 'abstain')) NOT NULL,
      argument TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('✅ جدول votes با موفقیت ایجاد یا تأیید شد.');
} catch (error) {
  console.error('❌ خطا در ایجاد جدول votes:', error);
  process.exit(1);
} finally {
  db.close();
}
