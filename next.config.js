/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Finanzfreedom-blog',
  assetPrefix: '/Finanzfreedom-blog/',
  env: {
    NEXT_PUBLIC_BASEPATH: '/Finanzfreedom-blog',
  },
};

module.exports = nextConfig;
