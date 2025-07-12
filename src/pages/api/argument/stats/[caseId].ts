import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { caseId } = req.query;

  // به‌صورت موقتی آمار تصادفی برمی‌گردانیم
  res.status(200).json({
    plaintiff: Math.floor(Math.random() * 10),
    defender: Math.floor(Math.random() * 10),
  });
}
