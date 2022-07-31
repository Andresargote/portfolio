/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'media-exp1.licdn.com',
      'i.pinimg.com',
      'assets.turbologo.com',
    ],
  },
};

module.exports = nextConfig;
