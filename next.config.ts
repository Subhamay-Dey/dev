import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.pinimg.com', 'in.pinterest.com', 'www.google.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: "i.pinimg.com"
    //   }
    // ]
  }
};

export default nextConfig;
