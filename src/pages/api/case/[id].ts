import { NextApiRequest, NextApiResponse } from 'next';

const cases = [
  {
    id: 1,
    title: 'پرونده نمونه - سرقت از بانک',
    summary: 'در این پرونده، یک متهم به سرقت بانک در سال 1402 وجود دارد.',
    full_text:
      'متن کامل این پرونده بسیار پیچیده و شامل اعترافات شاهدین و متهم است...',
  },
  // سایر پرونده‌ها...
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const caseId = parseInt(id as string);
  const legalCase = cases.find((c) => c.id === caseId);

  if (!legalCase) {
    res.status(404).json({ error: 'Case not found' });
    return;
  }

  res.status(200).json(legalCase);
}
