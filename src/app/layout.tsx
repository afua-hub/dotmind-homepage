import type { Metadata } from "next";
import { Noto_Sans_JP, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { faqs } from "@/lib/faqs";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dot-mind.com";
const title = "DotMind — ドットジャーナル × AI | dot journal meets AI assistant";
const description =
  "バレット（記号）で思考を整理するドットジャーナルとAIアシスタントが融合したiOS / Androidアプリ。タスク管理・習慣トラッキング・AIふりかえりに加え、10年後のビジョンを言語化するビジョンコーチングまでひとつのアプリで。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "ドットジャーナル アプリ",
    "箇条書き ノート術",
    "AI タスク管理",
    "習慣トラッキング",
    "ジャーナリング アプリ",
    "ふりかえり",
    "ビジョン 目標設定",
    "ikigai",
    "DotMind",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "DotMind",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DotMind — ドットジャーナル × AI アプリ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "ドットジャーナル × AI。タスク管理・習慣化・ふりかえりから10年後のビジョンまで、ひとつのアプリで。",
    images: ["/og.png"],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "DotMind",
  description,
  url: siteUrl,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android",
  inLanguage: "ja",
  image: `${siteUrl}/app-icon.png`,
  screenshot: [
    `${siteUrl}/screenshots/01_daily_log.png`,
    `${siteUrl}/screenshots/02_monthly_log.png`,
    `${siteUrl}/screenshots/03_future_log.png`,
    `${siteUrl}/screenshots/04_dream_log.png`,
    `${siteUrl}/screenshots/05_ikigai_map.png`,
    `${siteUrl}/screenshots/06_personal_manual.png`,
    `${siteUrl}/screenshots/07_dream_compass.png`,
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
    description: "無料ダウンロード（Pro プランのアプリ内課金あり）",
  },
  installUrl: [
    "https://apps.apple.com/jp/app/dotmind/id6760173596",
    "https://play.google.com/store/apps/details?id=com.afua.starling",
  ],
  featureList: [
    "バレット記号によるドットジャーナル（デイリー / マンスリー / フューチャーログ）",
    "AI一括入力（自然文をバレットへ自動分類）",
    "AI日次分析・月末ふりかえりレポート",
    "ビジョンコーチング（ikigaiフレームワークのビジョンマップ・自分説明書）",
    "Dream Compass（ビジョン・チャレンジ達成率・習慣の一望ダッシュボード)",
    "習慣トラッキング（クラウド同期）",
    "繰り返しタスク",
    "朝と夜の儀式リマインダー",
    "日本語音声入力",
    "ホーム画面ウィジェット",
    "9種類のデザインテーマ（季節限定テーマ含む）",
  ],
  author: {
    "@type": "Organization",
    name: "afua LLC",
    url: siteUrl,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
