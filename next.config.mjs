// 📄 File: next.config.mjs
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,

  i18n: {
    locales: ['en', 'fa', 'ku'],
    defaultLocale: 'en',
    localeDetection: false,
  },

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@locales': path.resolve(__dirname, 'public/locales'),
      '@sounds': path.resolve(__dirname, 'public/sounds'),
      '@images': path.resolve(__dirname, 'public/images'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '~': path.resolve(__dirname, 'public'),
    };
    return config;
  },

  // ✅ Optional: تنظیمات هدر امنیتی
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
