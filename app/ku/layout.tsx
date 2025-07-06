// app/ku/layout.tsx
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

import "@/styles/globals.css";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir="rtl">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
