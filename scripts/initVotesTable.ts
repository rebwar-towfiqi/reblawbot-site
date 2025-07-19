// scripts/initVotesTable.ts

import Database from 'better-sqlite3';
import path from 'path';

// مسیر فایل پایگاه داده
const dbPath = path.resolve(__dirname, '../src/data/game_cases.db');

// اتصال به دیتابیس
const db = new Database(dbPath);

// ایجاد جدول votes در صورت نبود
db.exec(`
  CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    case_id INTEGER NOT NULL,
    telegram_id TEXT NOT NULL,
    name TEXT,
    vote TEXT CHECK(vote IN ('innocent', 'guilty', 'abstain')) NOT NULL,
    argument TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('✅ جدول votes با موفقیت ایجاد شد یا قبلاً وجود داشته است.');
