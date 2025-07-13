import { useState, useCallback } from 'react'
import Modal from './Modal'

export default function Button() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSent(true)
  }

  // Новый обработчик клика: сначала отправляет событие, потом открывает модал
  const handleButtonClick = useCallback(() => {
    // Проверяем, что gtag подключён
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'quote_order_click', {
        event_category: 'engagement',
        event_label: 'Замовити прорахунок',
      })
    }
    setOpen(true)
  }, [])

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
      >
        Замовити прорахунок
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        {/* ...ваша форма внутри модала */}
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ім'я"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Телефон"
          />
          <button type="submit">Відправити</button>
        </form>
      </Modal>
    </>
  )
}
