/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx'],
  experimental: {
    esmExternals: true
  }
};

export default nextConfig;
