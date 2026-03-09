import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — pre-renders all static pages at build time
  // Uncomment for full static export (disables /api routes):
  // output: "export",

  // Image optimisation (Vercel built-in)
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Strict mode for better React error detection
  reactStrictMode: true,
};

export default nextConfig;
