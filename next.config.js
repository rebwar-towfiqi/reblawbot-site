/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['fa', 'en', 'ku'],
    defaultLocale: 'fa'
    // اگر می‌خواهید localeDetection غیرفعال باشد بنویسید: localeDetection: false
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
