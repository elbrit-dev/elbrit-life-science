import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The home directory contains other lockfiles; pin this folder as the workspace
  // root. Use __dirname so it resolves correctly on any machine (local Windows,
  // Netlify's Linux builders) instead of a hardcoded absolute path.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
