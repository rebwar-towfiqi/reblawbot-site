// ✅ /src/pages/api/submit-score.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { caseId, userId, score } = req.body;
    console.log('📊 Score submitted:', { caseId, userId, score });
    res.status(200).json({ success: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
