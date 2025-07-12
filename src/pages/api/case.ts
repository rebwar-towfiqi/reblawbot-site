import type { NextApiRequest, NextApiResponse } from "next";

interface Case {
  id: number;
  title: string;
  summary: string;
}

const cases: Case[] = [
  {
    id: 1,
    title: "پرونده سرقت مسلحانه",
    summary: "در این پرونده، متهم به سرقت از یک فروشگاه بزرگ با سلاح گرم متهم است...",
  },
  {
    id: 2,
    title: "پرونده اختلاف ملکی",
    summary: "این پرونده شامل دعوای حقوقی میان دو طرف در مورد مالکیت یک زمین کشاورزی است...",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Case[]>) {
  res.status(200).json(cases);
}
