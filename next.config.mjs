// 📄 File: next.config.mjs
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['en', 'fa', 'ku'],
    defaultLocale: 'en',
    localeDetection: false, // 🔧 مقدار صحیح
  },

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@locales': path.resolve(__dirname, 'src/locales'),
      '~': path.resolve(__dirname, 'public'),
    };
    return config;
  },
};

export default nextConfig;
