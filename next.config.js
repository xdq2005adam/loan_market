/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['placehold.co', 'ui-avatars.com'],
  },
}

module.exports = nextConfig 