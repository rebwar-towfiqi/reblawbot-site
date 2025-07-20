// components/layout/Layout.tsx
import { ReactNode } from 'react';

type Props = {
  locale: string;
  children: ReactNode;
};

export default function Layout({ locale, children }: Props) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
