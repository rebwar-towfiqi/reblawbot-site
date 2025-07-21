/* eslint-disable no-console */
// /pages/api/ai-judge.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { case_id } = req.body;
  if (!case_id) {
    return res.status(400).json({ message: 'Missing case_id' });
  }

  try {
    const db = await open({
      filename: './src/data/game_cases.db',
      driver: sqlite3.Database,
    });

    const argumentsData = await db.all(
      'SELECT vote, argument FROM arguments WHERE case_id = ?',
      [case_id],
    );

    const plaintiffArguments = argumentsData
      .filter((a) => a.vote === 'plaintiff')
      .map((a, i) => `Plaintiff #${i + 1}: ${a.argument}`)
      .join('\n');

    const defenderArguments = argumentsData
      .filter((a) => a.vote === 'defender')
      .map((a, i) => `Defender #${i + 1}: ${a.argument}`)
      .join('\n');

    const prompt = `
You are an impartial AI judge in a courtroom. 
Analyze both sides' arguments and determine which side presented a stronger legal argument.

Arguments from Plaintiff:
${plaintiffArguments || 'None provided.'}

Arguments from Defender:
${defenderArguments || 'None provided.'}

Please respond with:
1. Your verdict: either "plaintiff" or "defender"
2. A brief reason why you chose that side.
Return your answer in this JSON format:
{"verdict": "...", "reason": "..."}
`;

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    const json = chatResponse.choices[0]?.message?.content?.trim();
    if (!json) {
      return res.status(500).json({ message: 'No response from AI' });
    }

    const verdictData = JSON.parse(json);
    res.status(200).json(verdictData);
  } catch (error) {
    console.error('❌ AI Judge Error:', error);
    res.status(500).json({ message: 'Internal error' });
  }
}
