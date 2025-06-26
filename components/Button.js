import { useState } from 'react'
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

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
      >
        Замовити прорахунок
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Залишити заявку</h2>
        {sent ? (
          <p className="text-green-600">Дякуємо! Ми зв’яжемося з вами найближчим часом.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Ваше ім’я"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Телефон"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Надіслати
            </button>
          </form>
        )}
      </Modal>
    </>
  )
}
