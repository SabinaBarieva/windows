export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone } = req.body
    const message = `Нова заявка:\nІм’я: ${name}\nТелефон: ${phone}`

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    const url = `https://api.telegram.org/bot${token}/sendMessage`

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      })
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(500).json({ success: false, error: 'Помилка надсилання' })
    }
  } else {
    res.status(405).end()
  }
}