/** @type {import('next').NextConfig} */

module.exports = {
nextConfig: {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['onestaforms.com.pl'],
  },
},
webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}