// next.config.js

const path = require('path');

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

module.exports = nextConfig;