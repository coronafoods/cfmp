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
    loader: 'imgix',
    path: '/',
  }
}

module.exports = nextConfig
