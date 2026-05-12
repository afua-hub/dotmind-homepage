import Image from "next/image";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/app-icon.png"
            alt="DotMind"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <span className="text-lg font-semibold text-foreground tracking-tight">
            DotMind
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#features" className="hover:text-primary transition-colors">
            機能
          </a>
          <a href="#themes" className="hover:text-primary transition-colors">
            テーマ
          </a>
          <a href="#download" className="hover:text-primary transition-colors">
            ダウンロード
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/app-icon.png"
            alt="DotMind"
            width={96}
            height={96}
            className="mx-auto rounded-3xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
          dot journal
          <br />
          <span className="text-primary">meets AI assistant</span>
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
          手書きのようなバレットジャーナルとAIアシスタントが融合。
          <br />
          タスク管理、ジャーナリング、振り返りをひとつのアプリで。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-2xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-foreground text-surface px-8 py-3.5 rounded-2xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

function BulletShowcase() {
  const bullets = [
    { symbol: "□", label: "タスク", color: "text-primary" },
    { symbol: "○", label: "イベント", color: "text-secondary" },
    { symbol: "—", label: "メモ", color: "text-muted" },
    { symbol: "✦", label: "重要", color: "text-error" },
    { symbol: "!", label: "アイデア", color: "text-purple" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-surface rounded-3xl border border-border p-8 sm:p-10">
          <p className="text-xs font-medium text-muted uppercase tracking-widest mb-6">
            Bullet Types
          </p>
          <div className="space-y-4">
            {bullets.map((b) => (
              <div key={b.label} className="flex items-center gap-4">
                <span className={`text-2xl font-mono ${b.color} w-8 text-center`}>
                  {b.symbol}
                </span>
                <span className="text-foreground font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "バレットジャーナル",
      description:
        "手書きのような直感的な操作でタスク、イベント、メモを管理。バレットジャーナルの手法をデジタルで再現。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      title: "AIアシスタント",
      description:
        "日々の記録をAIが分析し、タスクの優先度提案やジャーナルの振り返りサマリーを自動生成。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
        </svg>
      ),
    },
    {
      title: "IKIGAI分析",
      description:
        "使命・情熱・天職・職業の4つの観点からあなたの生きがいを可視化。自己理解を深めるツール。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" /><circle cx="12" cy="8" r="6" /><circle cx="8" cy="14" r="6" /><circle cx="16" cy="14" r="6" />
        </svg>
      ),
    },
    {
      title: "3つのデザインテーマ",
      description:
        "和紙×モダンミニマル、Dracula、Pop Dreamの3テーマ。気分やシーンに合わせて切り替え。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="10.5" r="2.5" /><circle cx="8.5" cy="7.5" r="2.5" /><circle cx="6.5" cy="12.5" r="2.5" />
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12a10 10 0 0 0 5.012 8.662" />
        </svg>
      ),
    },
    {
      title: "音声入力",
      description:
        "マイクボタンから音声でジャーナルを記録。忙しい時でもハンズフリーで思考をキャプチャ。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
    },
    {
      title: "マイグレーション",
      description:
        "未完了タスクを次の日や月に簡単に移行。バレットジャーナルの伝統的なワークフローをサポート。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">
          機能
        </h2>
        <p className="text-muted text-center mb-14 max-w-lg mx-auto">
          アナログの良さとデジタルの便利さを両立
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface rounded-2xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{f.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Themes() {
  const themes = [
    {
      name: "和紙 × モダンミニマル",
      subtitle: "Warm off-white and terracotta",
      bg: "bg-[#F5F2EB]",
      primary: "bg-[#5C6B4A]",
      secondary: "bg-[#C17F5A]",
      accent: "bg-[#7B6FA0]",
      text: "text-[#2D2D2D]",
    },
    {
      name: "Dracula",
      subtitle: "Dark blue-black with neon colors",
      bg: "bg-[#282A36]",
      primary: "bg-[#BD93F9]",
      secondary: "bg-[#FF79C6]",
      accent: "bg-[#50FA7B]",
      text: "text-[#F8F8F2]",
    },
    {
      name: "Pop Dream",
      subtitle: "Girly & feminine pink",
      bg: "bg-[#FDF0F5]",
      primary: "bg-[#D1789A]",
      secondary: "bg-[#B5A0C8]",
      accent: "bg-[#8FBDD3]",
      text: "text-[#2D1520]",
    },
  ];

  return (
    <section id="themes" className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">
          テーマ
        </h2>
        <p className="text-muted text-center mb-14 max-w-lg mx-auto">
          3つのデザインテーマで、あなたらしいジャーナル体験を
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {themes.map((t) => (
            <div
              key={t.name}
              className={`${t.bg} rounded-2xl p-6 border border-border`}
            >
              <h3 className={`font-semibold ${t.text} mb-1`}>{t.name}</h3>
              <p className={`text-xs ${t.text} opacity-60 mb-5`}>
                {t.subtitle}
              </p>
              <div className="flex gap-2">
                <div className={`w-8 h-8 rounded-full ${t.primary}`} />
                <div className={`w-8 h-8 rounded-full ${t.secondary}`} />
                <div className={`w-8 h-8 rounded-full ${t.accent}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          今すぐはじめよう
        </h2>
        <p className="text-muted mb-10">
          DotMindで、あなたの思考を整理する新しい習慣を。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://apps.apple.com"
            className="inline-flex items-center gap-3 bg-foreground text-surface px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Download on the</div>
              <div className="text-base">App Store</div>
            </div>
          </a>
          <a
            href="https://play.google.com"
            className="inline-flex items-center gap-3 bg-foreground text-surface px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">GET IT ON</div>
              <div className="text-base">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/app-icon.png"
            alt="DotMind"
            width={24}
            height={24}
            className="rounded-lg"
          />
          <span className="text-sm font-medium text-foreground">DotMind</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted">
          <a href="/privacy" className="hover:text-foreground transition-colors">
            プライバシーポリシー
          </a>
          <a href="/terms" className="hover:text-foreground transition-colors">
            利用規約
          </a>
          <a
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            お問い合わせ
          </a>
        </div>
        <p className="text-xs text-muted">&copy; 2025 afua LLC</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <BulletShowcase />
        <Features />
        <Themes />
        <Download />
      </main>
      <Footer />
    </>
  );
}
