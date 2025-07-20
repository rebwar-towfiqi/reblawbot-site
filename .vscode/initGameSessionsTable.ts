import path from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function initGameSessionsTable() {
  const dbPath = path.join(__dirname, '../data/game_cases.db');

  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS game_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      case_id INTEGER NOT NULL,
      plaintiff_id TEXT NOT NULL,
      defendant_id TEXT NOT NULL,
      judge_ai INTEGER DEFAULT 1,
      winner TEXT,
      started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      ended_at DATETIME
    );
  `);

  // eslint-disable-next-line no-console
  console.log("✅ Table 'game_sessions' created successfully.");
  await db.close();
}

initGameSessionsTable().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('❌ Failed to create game_sessions table:', error);
});
