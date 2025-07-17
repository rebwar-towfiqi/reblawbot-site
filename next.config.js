// next.config.js
import { resolve } from 'path';

/** @type {import('next').NextConfig} */
export const reactStrictMode = true;
export const i18n = {
    locales: ['fa', 'en', 'ku'],
    defaultLocale: 'fa'
};
export function webpack(config) {
    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@': resolve(__dirname, 'src'),
        '@locales': resolve(__dirname, 'src', 'locales'),
        '~': resolve(__dirname, 'public')
    };
    return config;
}
