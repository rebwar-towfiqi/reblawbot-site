// eslint-disable-next-line @typescript-eslint/no-var-requires
import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { open } from 'sqlite';
import { Database } from 'sqlite3';

const dbPath = join(__dirname, '../src/data/game_cases.db');

async function initAllTables() {
  const db = await open({
    filename: dbPath,
    driver: Database
  });

  // votes table
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
  console.log('✅ votes table created');

  // verdicts table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS verdicts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      case_id TEXT NOT NULL,
      ai_verdict TEXT NOT NULL,
      reasoning TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('✅ verdicts table created');

  // game_sessions table
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
  console.log('✅ game_sessions table created');

  await db.close();
  console.log('🎉 All tables created successfully');
}

initAllTables().catch(err => {
  console.error('❌ Error creating tables:', err);
});
