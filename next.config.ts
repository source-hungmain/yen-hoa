import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/trang-chu',
      },
    ]
  },
};

export default nextConfig;
