import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        basePath: "/Les-Aventures-Spirituelles-de-Souhayl",
      }
    : {}),
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    'https://preview-chat-e21f7c8d-6986-48be-a30d-d98d742d87b7.space.z.ai',
  ],
};

export default nextConfig;
