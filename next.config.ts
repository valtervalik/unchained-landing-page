import type { NextConfig } from 'next';

const basePath =
  process.env.NODE_ENV === 'production' ? '/unchained-landing-page' : '';

const nextConfig: NextConfig = {
  basePath,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
