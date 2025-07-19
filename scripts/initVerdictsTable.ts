// scripts/initVerdictsTable.ts
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(__dirname, '../src/data/game_cases.db');
const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS verdicts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    case_id INTEGER NOT NULL,
    result TEXT NOT NULL,
    judge_comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`).run();

console.log('✅ Table "verdicts" created (or already exists).');
