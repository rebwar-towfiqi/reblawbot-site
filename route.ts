// app/api/ask/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, question } = body;

  if (!question || question.trim().length === 0) {
    return NextResponse.json({ error: "سؤال نمی‌تواند خالی باشد." }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const adminChatId = process.env.ADMIN_CHAT_ID;

  if (!botToken || !adminChatId) {
    return NextResponse.json({ error: "تنظیمات محیطی یافت نشد." }, { status: 500 });
  }

  const text = `📨 پرسش جدید از فرم سایت:\n\n👤 نام: ${name || "ناشناس"}\n\n❓ پرسش:\n${question}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: adminChatId, text }),
  });

  const data = await res.json();

  if (!data.ok) {
    return NextResponse.json({ error: "خطا در ارسال پیام به تلگرام." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
