/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_API: process.env.APP_API,
    MAILERSEND_TOKEN: process.env.MAILERSEND_TOKEN,
    APP_DOMAIN: process.env.APP_DOMAIN,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },
}

module.exports = nextTranslate(nextConfig)
