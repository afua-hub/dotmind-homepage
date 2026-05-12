import type { Metadata } from "next";
import { Noto_Sans_JP, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "DotMind — dot journal meets AI assistant",
  description:
    "バレット（記号）で思考を整理するドットジャーナルとAIアシスタントが融合。タスク管理、ジャーナリング、振り返りをひとつのアプリで。",
  openGraph: {
    title: "DotMind — dot journal meets AI assistant",
    description:
      "バレット（記号）で思考を整理するドットジャーナルとAIアシスタントが融合。タスク管理、ジャーナリング、振り返りをひとつのアプリで。",
    url: "https://dot-mind.com",
    siteName: "DotMind",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DotMind — dot journal meets AI assistant",
    description:
      "バレット（記号）で思考を整理するドットジャーナルとAIアシスタントが融合。",
  },
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
