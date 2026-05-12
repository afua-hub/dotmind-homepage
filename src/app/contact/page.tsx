"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました。");
      }

      setStatus("sent");
      setForm({ email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "送信に失敗しました。時間をおいて再度お試しください。"
      );
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
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
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
            お問い合わせ
          </h1>
          <p className="text-muted mb-10">
            ご質問やご要望がございましたら、下記フォームよりお気軽にお問い合わせください。
          </p>

          {status === "sent" ? (
            <div className="bg-surface rounded-2xl border border-border p-8 text-center">
              <div className="text-primary text-4xl mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                送信完了
              </h2>
              <p className="text-muted text-sm">
                お問い合わせありがとうございます。内容を確認の上、ご連絡いたします。
              </p>
              <a
                href="/"
                className="inline-block mt-6 text-sm text-primary hover:underline"
              >
                トップページに戻る
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  メールアドレス
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {status === "error" && (
                <p className="text-error text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-white py-3.5 rounded-2xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          )}
        </div>
      </main>

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
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              プライバシーポリシー
            </a>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              利用規約
            </a>
          </div>
          <p className="text-xs text-muted">&copy; 2025 afua LLC</p>
        </div>
      </footer>
    </>
  );
}
