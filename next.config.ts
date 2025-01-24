import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000', // localhost
        'promo.kivismart.com', // Codespaces
        'promo.kivismart.com:443', // Codespaces
      ],
    },
  },
};

export default nextConfig;
