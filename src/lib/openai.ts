// 📄 File: src/lib/openai.ts

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '', // مطمئن شو که این کلید در .env هست
});

export default openai;
