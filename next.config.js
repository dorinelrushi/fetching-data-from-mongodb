/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  image: {
    domains: ["http://localhost:3000/products"],
  },
};

module.exports = nextConfig;
