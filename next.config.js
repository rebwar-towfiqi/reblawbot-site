// next.config.js
import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ۱. فعال‌سازی React Strict Mode
  reactStrictMode: true,

  // ۲. پیکربندی بین‌المللی‌سازی (i18n)
  i18n: {
    locales: ['fa', 'en', 'ku'],
    defaultLocale: 'fa'
  },

  // ۳. تعریف alias برای مسیرهای مرجع
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // مسیر ریشه‌ی سورس
      '@': resolve(__dirname, 'src'),
      // مسیر فایل‌های ترجمه
      '@locales': resolve(__dirname, 'src', 'locales')
    };
    return config;
  }
};

export default nextConfig;
