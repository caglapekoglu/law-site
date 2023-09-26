/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
  },nextConfig
}
