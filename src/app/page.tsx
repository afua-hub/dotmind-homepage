import Image from "next/image";
import { faqs } from "@/lib/faqs";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/app-icon.png"
            alt="DotMind アプリアイコン"
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
          <a href="#screenshots" className="hover:text-primary transition-colors">
            スクリーンショット
          </a>
          <a href="#themes" className="hover:text-primary transition-colors">
            テーマ
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
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
            alt="DotMind — ドットジャーナル × AI アプリ"
            width={96}
            height={96}
            className="mx-auto rounded-3xl shadow-lg"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
          dot journal
          <br />
          <span className="text-primary">meets AI assistant</span>
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
          バレット（記号）で思考を整理するドットジャーナルとAIアシスタントが融合。
          <br />
          日々のタスクから10年後のビジョンまで、ひとつのアプリで。
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
    <section className="py-16 px-6" aria-label="バレットの種類">
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

function Screenshots() {
  const shots = [
    {
      src: "/screenshots/01_daily_log.png",
      caption: "デイリーログ",
      alt: "DotMind のデイリーログ画面。バレット記号でタスク・イベント・メモを1日単位で記録し、チャット型の入力バーと音声入力に対応",
    },
    {
      src: "/screenshots/02_monthly_log.png",
      caption: "マンスリーログ",
      alt: "DotMind のマンスリーログ画面。カレンダービューで月全体の予定とタスクを俯瞰",
    },
    {
      src: "/screenshots/03_future_log.png",
      caption: "フューチャーログ",
      alt: "DotMind のフューチャーログ画面。数ヶ月先の予定や目標を月別セクションで管理",
    },
    {
      src: "/screenshots/04_dream_log.png",
      caption: "Dream Log",
      alt: "DotMind の Dream Log 画面。AIとの対話で10年後のビジョンを言語化するビジョンコーチング",
    },
    {
      src: "/screenshots/05_ikigai_map.png",
      caption: "ビジョンマップ",
      alt: "DotMind のビジョンマップ画面。ikigai フレームワーク（好き・得意・世界が必要・稼げる）の4円でビジョンを可視化し、長期目標ロードマップを表示",
    },
    {
      src: "/screenshots/06_personal_manual.png",
      caption: "自分説明書",
      alt: "DotMind の自分説明書画面。AIとの対話から強み・価値観・これまでの歩みを整理",
    },
    {
      src: "/screenshots/07_dream_compass.png",
      caption: "Dream Compass",
      alt: "DotMind の Dream Compass 画面。北極星（ビジョン）と進行中のチャレンジの達成率、習慣トラッキングを一望",
    },
  ];

  return (
    <section id="screenshots" className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">
          スクリーンショット
        </h2>
        <p className="text-muted text-center mb-14 max-w-lg mx-auto">
          今日のタスクから10年後のビジョンまで、地続きにつながる
        </p>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {shots.map((s) => (
            <figure key={s.src} className="flex-none w-56 sm:w-64 snap-center">
              <Image
                src={s.src}
                alt={s.alt}
                width={553}
                height={1200}
                className="rounded-2xl border border-border shadow-md w-full h-auto"
              />
              <figcaption className="text-sm text-muted text-center mt-3 font-medium">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "ドットジャーナル",
      description:
        "バレット（記号）を使った直感的な操作でタスク、イベント、メモを管理。未完了タスクは翌日や翌月へワンタップでマイグレーション。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      title: "AIアシスタント",
      description:
        "自然な文章を書くだけでAIがバレットへ自動分類する一括入力。日次分析や月末のふりかえりレポートも自動生成。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
        </svg>
      ),
    },
    {
      title: "ビジョンコーチング",
      description:
        "AIとの対話で10年後のビジョンを言語化。ikigai（生きがい）フレームワークのビジョンマップと自分説明書を自動生成。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" /><circle cx="12" cy="8" r="6" /><circle cx="8" cy="14" r="6" /><circle cx="16" cy="14" r="6" />
        </svg>
      ),
    },
    {
      title: "Dream Compass",
      description:
        "北極星（ビジョン）を頂点に、チャレンジの達成率と今日の習慣をひと目で確認。夢と日々の行動をつなぐダッシュボード。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: "習慣トラッキング",
      description:
        "ビジョンに紐づく毎日の習慣を記録。達成アニメーションとヒートマップで継続が楽しくなる。クラウド同期対応。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M17.5 14v7" /><path d="M14 17.5h7" />
        </svg>
      ),
    },
    {
      title: "繰り返しタスク",
      description:
        "毎日・毎週・毎月のルーティンをルールとして登録すれば、対象日に自動でタスクが現れる。忘れがちな定期作業もぬけもれなし。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      ),
    },
    {
      title: "朝と夜の儀式",
      description:
        "朝はリマインダーで1日の計画を、夜はAIと一緒にふりかえりを。記録が続く生活リズムをアプリがサポート。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
        </svg>
      ),
    },
    {
      title: "音声入力",
      description:
        "マイクボタンから話すだけで記録完了。高精度な日本語音声認識で、忙しい時でもハンズフリーで思考をキャプチャ。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
    },
    {
      title: "ホームウィジェット",
      description:
        "ホーム画面のウィジェットで未完了タスクを確認し、その場で完了操作。アプリを開かなくても今日やることが見える。",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
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
      subtitle: "温かみのあるオフホワイトとテラコッタ",
      bg: "bg-[#F5F2EB]",
      primary: "bg-[#5C6B4A]",
      secondary: "bg-[#C17F5A]",
      accent: "bg-[#7B6FA0]",
      text: "text-[#2D2D2D]",
    },
    {
      name: "夜光虫",
      subtitle: "Dracula パレットのネオンダーク",
      bg: "bg-[#282A36]",
      primary: "bg-[#BD93F9]",
      secondary: "bg-[#FF79C6]",
      accent: "bg-[#50FA7B]",
      text: "text-[#F8F8F2]",
    },
    {
      name: "金平糖",
      subtitle: "ガーリー＆フェミニンなピンク",
      bg: "bg-[#FDF0F5]",
      primary: "bg-[#D1789A]",
      secondary: "bg-[#B5A0C8]",
      accent: "bg-[#8FBDD3]",
      text: "text-[#2D1520]",
    },
    {
      name: "藍染",
      subtitle: "藍と生成りの落ち着いた和ダーク",
      bg: "bg-[#131A24]",
      primary: "bg-[#6E9BC5]",
      secondary: "bg-[#CDBE9B]",
      accent: "bg-[#8FBFA9]",
      text: "text-[#E8EAF0]",
    },
    {
      name: "墨と方眼",
      subtitle: "白い紙と墨、朱をひと差しのモノクローム",
      bg: "bg-[#F7F7F5]",
      primary: "bg-[#2B2B2B]",
      secondary: "bg-[#B5493A]",
      accent: "bg-[#46596B]",
      text: "text-[#1F1F1F]",
    },
    {
      name: "珈琲と古紙",
      subtitle: "クラフト紙とエスプレッソのアナログ文具",
      bg: "bg-[#EFE6D8]",
      primary: "bg-[#5B4132]",
      secondary: "bg-[#4E6B51]",
      accent: "bg-[#B08A3E]",
      text: "text-[#33291F]",
    },
    {
      name: "宵闇ローズ",
      subtitle: "黒に深紅ローズとゴールドの大人フェミニン",
      bg: "bg-[#1A1216]",
      primary: "bg-[#D4899E]",
      secondary: "bg-[#C9A96A]",
      accent: "bg-[#A48BC0]",
      text: "text-[#F2E8EC]",
    },
    {
      name: "ラムネ",
      subtitle: "透きとおる水色とレモンの夏限定テーマ",
      bg: "bg-[#EFF7FB]",
      primary: "bg-[#2F97C1]",
      secondary: "bg-[#E3BF3F]",
      accent: "bg-[#4FC1B0]",
      text: "text-[#1E3742]",
      badge: "夏限定",
    },
    {
      name: "金木犀",
      subtitle: "オレンジと黄昏色の秋限定テーマ",
      bg: "bg-[#FAF3E7]",
      primary: "bg-[#C17A2B]",
      secondary: "bg-[#3E4A66]",
      accent: "bg-[#8C6FA8]",
      text: "text-[#35291C]",
      badge: "秋限定",
    },
  ];

  return (
    <section id="themes" className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">
          テーマ
        </h2>
        <p className="text-muted text-center mb-14 max-w-lg mx-auto">
          季節限定を含む9つのデザインテーマで、あなたらしいジャーナル体験を
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((t) => (
            <div
              key={t.name}
              className={`${t.bg} rounded-2xl p-6 border border-border`}
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className={`font-semibold ${t.text}`}>{t.name}</h3>
                {t.badge && (
                  <span
                    className={`text-[10px] ${t.text} border border-current rounded-full px-2 py-0.5 opacity-70`}
                  >
                    {t.badge}
                  </span>
                )}
              </div>
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

function Faq() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">
          よくある質問
        </h2>
        <p className="text-muted text-center mb-14 max-w-lg mx-auto">
          DotMindについてよくいただく質問
        </p>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="bg-surface rounded-2xl border border-border p-6 group"
            >
              <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-4">
                {f.question}
                <span className="text-muted transition-transform group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="text-sm text-muted leading-relaxed mt-4">
                {f.answer}
              </p>
            </details>
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
            href="https://apps.apple.com/jp/app/dotmind/id6760173596"
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
            href="https://play.google.com/store/apps/details?id=com.afua.starling"
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
            alt="DotMind アプリアイコン"
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
        <p className="text-xs text-muted">&copy; 2025-2026 afua LLC</p>
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
        <Screenshots />
        <Themes />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
