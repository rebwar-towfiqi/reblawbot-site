import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { id } = req.query;

  // Mock AI verdict
  res.status(200).json({ verdict: 'guilty', confidence: 0.83 });
}
