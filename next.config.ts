import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/for-referrers",
        permanent: true,
      },
      {
        source: "/thanks",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
