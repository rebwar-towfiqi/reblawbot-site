export const locales = ['en', 'fa', 'ku'] as const;

export const defaultLocale = 'en';

export type Locale = typeof locales[number];