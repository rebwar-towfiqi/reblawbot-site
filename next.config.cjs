// next.config.cjs
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  // فعال‌سازی React Strict Mode
  reactStrictMode: true,

  // پیکربندی i18n برای Pages Router
  i18n: {
    locales: ['fa', 'en', 'ku'],
    defaultLocale: 'fa'
  },

  // تعریف alias برای مسیرهای مرجع
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
      '@locales': path.resolve(__dirname, 'src', 'locales'),
      '~': path.resolve(__dirname, 'public')
    };
    return config;
  }
};

