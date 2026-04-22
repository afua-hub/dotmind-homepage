import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 — DotMind",
  description: "DotMind アプリケーションの利用条件について",
};

export default function TermsOfUse() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="DotMind"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span className="text-lg font-semibold text-foreground tracking-tight">
              DotMind
            </span>
          </a>
        </div>
      </header>

      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-6">
            利用規約（エンドユーザーライセンス契約）
          </h1>
          <p className="text-muted leading-relaxed mb-10">
            この利用規約（以下「本規約」といいます）は、アフア合同会社（以下「当社」といいます）が提供するモバイルアプリケーション「DotMind」（以下「本アプリ」といいます）の利用条件を定めるものです。ユーザーの皆さま（以下「ユーザー」といいます）には、本規約に同意いただいた上で、本アプリをご利用いただきます。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">第1条（適用）</h2>
            <p className="text-muted leading-relaxed">
              本規約は、ユーザーと当社との間の本アプリの利用に関する一切の関係に適用されます。当社が本アプリ内で掲載する個別の規定やガイドラインは、本規約の一部を構成します。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">第2条（利用登録）</h2>
            <p className="text-muted leading-relaxed mb-3">
              本アプリの利用にあたり、Google アカウントまたは Apple ID
              による認証が必要です。ユーザーは、正確かつ最新の情報を提供するものとします。当社は、以下の場合に利用登録を拒否することがあります。
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1">
              <li>虚偽の事項を届け出た場合</li>
              <li>本規約に違反したことがある者からの申請である場合</li>
              <li>その他、当社が利用登録を相当でないと判断した場合</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第3条（アカウント管理）
            </h2>
            <p className="text-muted leading-relaxed">
              ユーザーは、自己の責任において、本アプリのアカウントを適切に管理するものとします。アカウントの不正利用により当社または第三者に損害が生じた場合、当社は一切の責任を負いません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">第4条（禁止事項）</h2>
            <p className="text-muted leading-relaxed mb-3">
              ユーザーは、本アプリの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>
                当社、他のユーザー、またはその他の第三者の知的財産権、プライバシー、名誉その他の権利または利益を侵害する行為
              </li>
              <li>
                本アプリのサーバーまたはネットワークに過度の負荷をかける行為
              </li>
              <li>本アプリの運営を妨害するおそれのある行為</li>
              <li>不正アクセスまたはこれを試みる行為</li>
              <li>他のユーザーに関する個人情報を収集または蓄積する行為</li>
              <li>
                反社会的勢力に対して直接または間接に利益を供与する行為
              </li>
              <li>
                AI 機能を利用して違法、有害、差別的なコンテンツを生成する行為
              </li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第5条（本アプリの提供の停止等）
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本アプリの全部または一部の提供を停止または中断することができるものとします。
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1">
              <li>
                本アプリにかかるシステムの保守点検または更新を行う場合
              </li>
              <li>
                地震、落雷、火災、停電その他の不可抗力により本アプリの提供が困難となった場合
              </li>
              <li>
                その他、当社が本アプリの提供が困難と判断した場合
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第6条（知的財産権）
            </h2>
            <p className="text-muted leading-relaxed">
              本アプリおよび本アプリに関連する一切の知的財産権は当社または当社にライセンスを許諾している者に帰属します。本規約に基づく本アプリの利用許諾は、本アプリに関する当社またはライセンスを許諾している者の知的財産権の譲渡を意味するものではありません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第7条（ユーザーのコンテンツ）
            </h2>
            <p className="text-muted leading-relaxed">
              ユーザーが本アプリに入力したコンテンツ（テキスト、タスク、メモ等）の著作権はユーザーに帰属します。当社は、本アプリの機能提供（AI
              分析、データ同期等）に必要な範囲でのみ、ユーザーのコンテンツを利用します。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第8条（AI 機能の利用）
            </h2>
            <p className="text-muted leading-relaxed">
              AI
              機能により生成される分析結果、提案、レポート等は、参考情報として提供するものであり、その正確性、完全性、有用性を保証するものではありません。AI
              機能の利用にあたっては、ユーザー自身の判断と責任において情報を活用してください。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第9条（有料サービス）
            </h2>
            <p className="text-muted leading-relaxed">
              本アプリの一部機能は、有料サブスクリプション（DotMind
              Pro）として提供されます。課金および解約は、Apple App Store または
              Google Play Store
              のサブスクリプション管理を通じて行われます。各ストアの利用規約および返金ポリシーが適用されます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">第10条（免責事項）</h2>
            <p className="text-muted leading-relaxed mb-3">
              当社は、本アプリに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。
            </p>
            <p className="text-muted leading-relaxed">
              当社は、本アプリに起因してユーザーに生じたあらゆる損害について、当社の故意または重大な過失による場合を除き、一切の責任を負いません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第11条（サービス内容の変更等）
            </h2>
            <p className="text-muted leading-relaxed">
              当社は、ユーザーへの事前通知なく、本アプリの内容を変更し、または本アプリの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第12条（利用規約の変更）
            </h2>
            <p className="text-muted leading-relaxed">
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、本アプリ内に掲載した時点で効力を生じます。変更後に本アプリの利用を継続した場合、ユーザーは変更後の規約に同意したものとみなされます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第13条（個人情報の取り扱い）
            </h2>
            <p className="text-muted leading-relaxed">
              当社は、本アプリの利用によって取得する個人情報については、当社「
              <a
                href="/privacy"
                className="text-primary underline hover:opacity-80"
              >
                プライバシーポリシー
              </a>
              」に従い適切に取り扱うものとします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第14条（準拠法・裁判管轄）
            </h2>
            <p className="text-muted leading-relaxed">
              本規約の解釈にあたっては、日本法を準拠法とします。本アプリに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄とします。
            </p>
          </section>

          <div className="text-sm text-muted border-t border-border pt-6">
            <p>制定日: 2025年1月1日</p>
            <p>最終更新日: 2026年4月17日</p>
          </div>
        </article>
      </main>
    </>
  );
}
