import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // The firm moved from criminal defense to personal injury. These keep any old
  // link or stale search result from landing on a 404.
  async redirects() {
    return [
      { source: "/practice-areas/dwi", destination: "/practice-areas/car-accidents", permanent: true },
      { source: "/practice-areas/drug-charges", destination: "/practice-areas", permanent: true },
      { source: "/practice-areas/assault-family-violence", destination: "/practice-areas", permanent: true },
      { source: "/what-to-do-after-an-arrest", destination: "/what-to-do-after-a-car-accident", permanent: true },
    ];
  },
};

export default nextConfig;
