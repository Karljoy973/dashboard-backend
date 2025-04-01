import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: "anonymous",
  async headers() {
    return [
      {
        source: "*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", 
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  env: {
    DATABASE_URL:
      "postgresql://neondb_owner:npg_K3eRgSPicI5O@ep-nameless-term-aby969cd-pooler.eu-west-2.aws.neon.tech/dashboard-db?sslmode=require",
  },
};

export default nextConfig;
