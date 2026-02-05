/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/en-US',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;