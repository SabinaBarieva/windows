import { useState } from 'react'

export default function ContactForm() {
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
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Зв'язатися з нами</h2>
        {sent ? (
          <p className="text-green-600 text-center">Дякуємо! Ми скоро з вами зв'яжемося.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" type="text" placeholder="Ваше ім’я" value={form.name} onChange={handleChange} required className="w-full border p-2 rounded" />
            <input name="phone" type="tel" placeholder="Телефон" value={form.phone} onChange={handleChange} required className="w-full border p-2 rounded" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Надіслати</button>
          </form>
        )}
      </div>
    </section>
  )
}