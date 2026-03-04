import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  // async rewrites() {
  //   // 关键修改：优先读取运行时环境变量，如果没有则回退
  //   const apiUrl = process.env.API_URL || "http://localhost:5000";

  //   console.log("---------------------------------------------------");
  //   console.log("   Next.js Rewrite Destination:", apiUrl);
  //   console.log("---------------------------------------------------");

  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${apiUrl}/:path*`,
  //     },
  //   ];
  // },
}

export default nextConfig
