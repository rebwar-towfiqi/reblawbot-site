// next.config.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const i18nConfig = require('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: i18nConfig,

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
