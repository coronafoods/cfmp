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
}

module.exports = nextConfig
