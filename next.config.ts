import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "demo.hyperce.io",
      },
      {
        hostname: "admin.hyperce.io",
      },
    ],
  },
};

export default nextConfig;
