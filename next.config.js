// next.config.js

import { resolve } from 'path';

import i18nConfig from './next-intl.config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: i18nConfig, // ✅ از تنظیمات next-intl استفاده می‌کنیم

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, 'src'),
      '@locales': resolve(__dirname, 'src/locales'),
      '~': resolve(__dirname, 'public'),
    };
    return config;
  },
};

export default nextConfig;

