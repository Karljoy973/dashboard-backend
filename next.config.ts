import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DATABASE_URL:
      "postgresql://neondb_owner:npg_K3eRgSPicI5O@ep-nameless-term-aby969cd-pooler.eu-west-2.aws.neon.tech/dashboard-db?sslmode=require",
  },
};

export default nextConfig;
