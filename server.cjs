require('dotenv').config();
const express = require('express');

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// میانی‌افزار برای دریافت JSON
app.use(bodyParser.json());

// ارائه‌ی فایل‌های ساخته‌شده React
app.use(express.static(path.join(__dirname, 'build')));

// API: دریافت لیست پرونده‌ها
app.get('/api/cases', (req, res) => {
  const db = new sqlite3.Database('./game_cases.db');
  db.all('SELECT id, title, summary FROM game_cases', (err, rows) => {
    if (err) {
      console.error('❌ خطا در دریافت پرونده‌ها:', err.message);
      return res.status(500).json({ message: 'خطا در دریافت پرونده‌ها' });
    }
    res.json(rows);
    db.close();
  });
});

// API: دریافت جزئیات یک پرونده با ID
app.get('/api/cases/:id', (req, res) => {
  const caseId = req.params.id;
  const db = new sqlite3.Database('./game_cases.db');
  db.get('SELECT * FROM game_cases WHERE id = ?', [caseId], (err, row) => {
    if (err) {
      console.error('❌ خطا در دریافت جزئیات پرونده:', err.message);
      return res.status(500).json({ message: 'خطا در دریافت اطلاعات' });
    }
    if (!row) return res.status(404).json({ message: 'پرونده یافت نشد' });
    res.json(row);
    db.close();
  });
});

app.get('/api/case/:id', (req, res) => {
  const db = new sqlite3.Database('./game_cases.db');
  const { id } = req.params;

  db.get('SELECT * FROM game_cases WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error('❌ خطا در دریافت جزئیات پرونده:', err.message);
      return res.status(500).json({ message: 'خطا در دریافت جزئیات پرونده' });
    }
    if (!row) {
      return res.status(404).json({ message: 'پرونده یافت نشد' });
    }
    res.json(row);
    db.close();
  });
});

// API: ثبت رأی
app.post('/api/vote', (req, res) => {
  const { caseId, role, vote } = req.body;

  if (!caseId || !role || !vote) {
    return res.status(400).json({ message: 'اطلاعات ناقص است.' });
  }

  const db = new sqlite3.Database('./game_cases.db');

  const query = `
    INSERT INTO votes (case_id, role, vote, created_at)
    VALUES (?, ?, ?, datetime('now'))
  `;

  db.run(query, [caseId, role, vote], function (err) {
    if (err) {
      console.error('❌ خطا در ذخیره رأی:', err.message);
      return res.status(500).json({ message: 'خطا در ذخیره رأی.' });
    }

    console.log('✅ رأی ذخیره شد:', { caseId, role, vote });
    res.status(200).json({ message: 'رأی شما با موفقیت ثبت شد.' });
  });

  db.close();
});

// نمایش صفحات React در همه مسیرها
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// شروع سرور
app.listen(PORT, () => {
  console.log(`🚀 سرور در حال اجرا روی http://localhost:${PORT}`);
});
