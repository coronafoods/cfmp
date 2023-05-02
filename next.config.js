// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/cfmp',
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
