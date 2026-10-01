import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Изображения лежат в /public, оптимизацией занимается next/image
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
