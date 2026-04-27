/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.hashnode.com" },
    ],
  },
};

module.exports = nextConfig;
