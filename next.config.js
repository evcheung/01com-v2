/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  // https://nextjs.org/docs/messages/export-image-api
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true
}

module.exports = nextConfig
