// next.config.js
import path from 'path';
import { fileURLToPath } from 'url';

/** Support for __dirname in ES modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['fa', 'en', 'ku'],
    defaultLocale: 'fa',
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
