import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー — DotMind",
  description: "DotMind アプリケーションにおける個人情報の取り扱いについて",
};

export default function PrivacyPolicy() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-6">
            プライバシーポリシー
          </h1>
          <p className="text-muted leading-relaxed mb-10">
            アフア合同会社（以下「当社」といいます）は、DotMind
            アプリケーション（以下「本アプリ」といいます）における個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第1条（収集する情報）
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              当社は、本アプリの提供にあたり、以下の情報を収集することがあります。
            </p>

            <h3 className="font-semibold mt-6 mb-2">1. アカウント情報</h3>
            <p className="text-muted leading-relaxed">
              Google アカウントまたは Apple ID
              を利用したサインイン時に、メールアドレス、表示名、プロフィール画像
              URL 等の認証情報を取得します。
            </p>

            <h3 className="font-semibold mt-6 mb-2">
              2. ユーザーが入力したコンテンツ
            </h3>
            <p className="text-muted leading-relaxed">
              デイリーログ、マンスリーログ、フューチャーログ、Dream Log
              等にユーザーが記録したテキスト、タスク、メモ等のコンテンツデータ。
            </p>

            <h3 className="font-semibold mt-6 mb-2">3. 利用状況データ</h3>
            <p className="text-muted leading-relaxed">
              Firebase Analytics
              を通じて、画面遷移、機能利用状況、アプリのパフォーマンスに関する匿名化されたデータを収集します。
            </p>

            <h3 className="font-semibold mt-6 mb-2">
              4. クラッシュ・エラー情報
            </h3>
            <p className="text-muted leading-relaxed">
              Firebase Crashlytics
              を通じて、アプリのクラッシュログやエラー情報を収集し、品質改善に利用します。
            </p>

            <h3 className="font-semibold mt-6 mb-2">5. 音声データ</h3>
            <p className="text-muted leading-relaxed">
              音声入力機能をご利用の場合、音声データは Deepgram
              社の音声認識サービスに送信され、テキストに変換されます。音声データは変換処理後に破棄され、当社のサーバーには保存されません。
            </p>

            <h3 className="font-semibold mt-6 mb-2">
              6. Google カレンダーの予定
            </h3>
            <p className="text-muted leading-relaxed">
              Google
              カレンダーと連携した場合に限り、設定で選んだカレンダーの予定のタイトルと日時を
              Google
              から読み取ります（読み取り専用で、予定の作成・変更・削除は行いません）。読み取った予定は本アプリの画面に表示するためだけに使い、アプリの起動中に端末のメモリへ一時的に置くのみで、端末への保存、当社のサーバーへの送信・保存は行わず、データを保持しません。広告への利用、第三者への提供も行いません。Google
              Workspace API（Google Calendar API
              を含みます）を介して取得したユーザーデータを、一般的（汎用的）な
              AI / ML（人工知能・機械学習）モデルの開発、改善、またはトレーニングの目的で保持または使用することは一切ありません。本アプリの
              AI
              アシスタント機能（テキスト分析、自動分類、レポート生成等）にカレンダーから読み取った情報を送信・入力することもありません。連携は設定画面からいつでも解除できます。解除またはログアウトの際には
              Google
              側の許可の取り消しも行います（通信できない場合などで取り消せなかったときは、Google
              アカウントの設定からも取り消せます）。本アプリが Google API
              から受け取った情報の使用は、限定的使用（Limited
              Use）の要件を含む Google API
              サービスのユーザーデータに関するポリシーに従います。
            </p>
            <p className="text-muted leading-relaxed mt-3">
              DotMind&apos;s use of information received from Google APIs
              adheres to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements. DotMind does not
              retain user data obtained through Google Workspace APIs
              (including the Google Calendar API), and does not use any data
              obtained through Google Workspace APIs to develop, improve, or
              train generalized (non-personalized) AI and/or ML models.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">第2条（利用目的）</h2>
            <p className="text-muted leading-relaxed mb-3">
              当社は、収集した情報を以下の目的で利用します。
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1">
              <li>本アプリの機能提供、維持、改善</li>
              <li>
                AI
                アシスタント機能の提供（テキスト分析、自動分類、レポート生成等）
              </li>
              <li>ユーザー認証およびアカウント管理</li>
              <li>アプリのパフォーマンス分析および品質改善</li>
              <li>ユーザーサポートへの対応</li>
              <li>利用規約違反への対応</li>
              <li>Google カレンダーの予定のアプリ内表示（連携した場合のみ）</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">第3条（第三者提供）</h2>
            <p className="text-muted leading-relaxed mb-3">
              当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>
                本アプリの機能提供に必要な範囲で業務委託先に提供する場合（Firebase、Deepgram、AI
                サービス提供元等）
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第4条（外部サービスの利用）
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              本アプリでは、以下の外部サービスを利用しています。各サービスのプライバシーポリシーについては、各社のウェブサイトをご確認ください。
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1">
              <li>
                Firebase（Google LLC）— 認証、アナリティクス、クラッシュレポート
              </li>
              <li>Deepgram, Inc. — 音声認識</li>
              <li>Anthropic, PBC — AI テキスト分析</li>
              <li>
                Google Calendar API（Google LLC）—
                予定の読み取り（連携した場合のみ）
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第5条（データの保管とセキュリティ）
            </h2>
            <p className="text-muted leading-relaxed">
              ユーザーのコンテンツデータは、端末内のローカルデータベースおよび当社のクラウドサーバーに暗号化して保管されます。当社は、個人情報の漏洩、滅失またはき損を防止するため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第6条（データの削除）
            </h2>
            <p className="text-muted leading-relaxed">
              ユーザーは、本アプリの設定画面からいつでもデータの削除を行うことができます。アカウントを削除した場合、当社が保持するユーザーの個人情報およびコンテンツデータは合理的な期間内にすべて削除されます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第7条（お子様のプライバシー）
            </h2>
            <p className="text-muted leading-relaxed">
              本アプリは、13歳未満のお子様を対象としておりません。13歳未満のお子様から意図的に個人情報を収集することはありません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第8条（プライバシーポリシーの変更）
            </h2>
            <p className="text-muted leading-relaxed">
              当社は、必要に応じて本ポリシーを変更することがあります。重要な変更を行う場合は、本アプリ内での通知またはその他の適切な方法によりユーザーに通知します。変更後のポリシーは、本アプリ内に掲載した時点で効力を生じます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              第9条（お問い合わせ）
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              本ポリシーに関するお問い合わせは、以下までご連絡ください。
            </p>
            <div className="bg-surface rounded-2xl border border-border p-6">
              <p className="font-semibold mb-1">アフア合同会社</p>
              <p className="text-muted text-sm">メール: support@dot-mind.com</p>
              <p className="text-muted text-sm">
                ウェブサイト: https://www.afua.co.jp
              </p>
            </div>
          </section>

          <div className="text-sm text-muted border-t border-border pt-6">
            <p>制定日: 2025年1月1日</p>
            <p>最終更新日: 2026年10月26日</p>
          </div>
        </article>
      </main>
    </>
  );
}
