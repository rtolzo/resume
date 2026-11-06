/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
    // fonts.ts가 런타임에 path.join으로 폰트를 읽어서 빌드 트레이싱에 안 잡힘 → 서버리스 번들에 강제 포함
    outputFileTracingIncludes: {
      '/api/pdf': ['./node_modules/pretendard/dist/public/static/*.otf'],
    },
  },
};

export default withVanillaExtract(nextConfig);
