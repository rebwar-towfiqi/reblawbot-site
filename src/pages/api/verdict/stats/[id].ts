import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { id } = req.query;

  // Mock vote stats
  res.status(200).json({
    votes: {
      guilty: 7,
      innocent: 5,
      abstained: 2
    }
  });
}
