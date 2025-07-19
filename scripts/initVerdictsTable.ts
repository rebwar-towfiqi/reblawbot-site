/* eslint-disable no-console */
// scripts/initVerdictsTable.ts

import path from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';

// ✅ راه‌حل جایگزین برای __dirname در ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔵 مسیر پایگاه‌داده
const dbPath = path.resolve(__dirname, '../src/data/game_cases.db');

async function init() {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS verdicts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      case_id INTEGER,
      telegram_id TEXT,
      name TEXT,
      vote TEXT,
      argument TEXT,
      ai_verdict TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log('✅ Table "verdicts" created (or already exists).');
}

init().catch((err) => {
  console.error('❌ Failed to initialize verdicts table:', err);
});
