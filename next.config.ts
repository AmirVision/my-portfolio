import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    images: {
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        optimizePackageImports: ['@react-three/drei', '@react-three/fiber', 'three'],
    },
};

export default nextConfig;
