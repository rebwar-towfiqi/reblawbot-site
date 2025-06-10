// app/fa/layout.tsx (و مشابه در en و ku و fa)
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

import '../../globals.css'; // یک مرحله بالاتر

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = (await import(`../../locales/${locale}/common.json`))
    .default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
