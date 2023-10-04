/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['sitearquivos.s3-us-west-2.amazonaws.com'],
  },
}

module.exports = nextConfig
