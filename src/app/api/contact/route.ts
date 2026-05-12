import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, message } = await request.json();

    if (!email || !message) {
      return Response.json(
        { error: "すべての項目を入力してください。" },
        { status: 400 }
      );
    }

    const { data, error: sendError } = await resend.emails.send({
      from: "DotMind お問い合わせ <noreply@send.dot-mind.com>",
      to: "support@dot-mind.com",
      replyTo: email,
      subject: `【お問い合わせ】${email} より`,
      text: [
        `メールアドレス: ${email}`,
        "",
        "お問い合わせ内容:",
        message,
      ].join("\n"),
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return Response.json(
        { error: "送信に失敗しました。時間をおいて再度お試しください。" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("メール送信エラー:", errMsg);
    return Response.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
