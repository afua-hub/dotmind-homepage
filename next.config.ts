import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 日経トレンディ掲載QRコード用の短縮URL
      {
        source: "/nikkei",
        destination:
          "/?utm_source=nikkei_trendy&utm_medium=magazine&utm_campaign=nikkei_trendy_qr",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
