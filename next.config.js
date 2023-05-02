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
    unoptimized: true,
  }
}

module.exports = nextConfig
