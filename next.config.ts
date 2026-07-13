import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The home directory contains other lockfiles; pin this folder as the workspace root.
  turbopack: {
    root: "C:\\Users\\bbhar\\elbrit-life-sciences",
  },
};

export default nextConfig;
