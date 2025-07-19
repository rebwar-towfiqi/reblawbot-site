// 📄 File: src/lib/db.ts

import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'src/data/game_cases.db');

export const db = new Database(dbPath);

export default db;
