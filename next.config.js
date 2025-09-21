/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Finanzfreedom-blog',
  assetPrefix: '/Finanzfreedom-blog/',
  trailingSlash: true,               // << wichtig für GitHub Pages
  env: {
    NEXT_PUBLIC_BASEPATH: '/Finanzfreedom-blog',
  },
};

module.exports = nextConfig;
