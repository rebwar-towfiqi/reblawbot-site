// next.config.js
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // فعال‌سازی React Strict Mode
  reactStrictMode: true,

  // پیکربندی بین‌المللی‌سازی
  i18n: {
    locales: ['fa', 'en', 'ku'],
    defaultLocale: 'fa'
  },

  // تعریف alias برای وارد کردن ماژول‌ها
  webpack(config) {
    // تعریف __filename و __dirname در مد ESM
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // مسیر ریشه‌ی سورس
      '@': join(__dirname, 'src'),
      // مسیر فایل‌های ترجمه
      '@locales': join(__dirname, 'src', 'locales'),
      // مسیر public
      '~': join(__dirname, 'public')
    };

    return config;
  }
};

export default nextConfig;
