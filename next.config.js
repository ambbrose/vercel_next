/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'githubusercontent.com',
        port: '',
        pathname: '/ambbrose/nextjs/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig
