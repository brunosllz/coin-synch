/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.coincap.io', 'www.github.com'],
  },
  async redirects() {
    return [
      {
        source: '/sign-in',
        has: [
          {
            type: 'cookie',
            key: 'next-auth.session-token',
          },
        ],
        destination: '/sign-up',
        permanent: false,
      },
      {
        source: '/sign-in',
        has: [
          {
            type: 'cookie',
            key: 'next-auth.session-token',
          },
        ],
        destination: '/dashboard',
        permanent: false,
      },
      {
        source: '/',
        has: [
          {
            type: 'cookie',
            key: 'next-auth.session-token',
          },
        ],
        destination: '/dashboard',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
