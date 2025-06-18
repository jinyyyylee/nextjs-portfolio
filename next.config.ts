import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // 2025.05.26 [mhlim]: 외부 이미지 최적화 설정
  images: {
    remotePatterns: [],
  },
  // 2025.05.26 [mhlim]: svgr 기본 svg 처리 rule 제거 / svgr 설정 추가
  webpack(config: Configuration) {
    // svg 처리 rule 제거
    const fileLoaderRule = config.module?.rules?.find(
      (rule: any) =>
        rule.test && rule.test instanceof RegExp && rule.test.test(".svg")
    ) as RuleSetRule | undefined;
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // svgr 추가
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: {
            // icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
