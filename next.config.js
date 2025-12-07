/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Wichtig für statischen Export (SSG)
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

module.exports = nextConfig;
