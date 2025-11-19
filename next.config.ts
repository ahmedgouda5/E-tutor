import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    unoptimized: false,  // خلّيه false عشان optimization يشتغل
    // domains: []  // مش محتاج لو كل الصور local
  },
};

export default nextConfig;
