// next.config.js

import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['en', 'fa', 'ku'],
    defaultLocale: 'en',
    localeDetection: true,
  },

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
