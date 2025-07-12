// ✅ /src/pages/api/argument.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { caseId, role, argument } = req.body;
    console.log('📝 Argument submitted:', { caseId, role, argument });
    res.status(200).json({ success: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
