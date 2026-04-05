import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/unchained-landing-page' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
