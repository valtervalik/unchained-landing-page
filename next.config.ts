import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/unchained-landing-page',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
