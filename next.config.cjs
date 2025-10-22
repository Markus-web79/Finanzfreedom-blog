/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // aktiviert statischen Export statt "next export"
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;
