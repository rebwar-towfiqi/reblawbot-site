import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { case_id, vote, argument } = req.body;
    console.log('✅ استدلال ثبت شد:', { case_id, vote, argument });

    // اینجا می‌توانید به پایگاه‌داده واقعی وصل شوید
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
