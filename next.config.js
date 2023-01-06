/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["storage.googleapis.com", "e-cdns-images.dzcdn.net"]
  }
}

module.exports = nextConfig
