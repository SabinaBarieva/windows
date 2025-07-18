import { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import { event, conversion } from '../lib/gtag'

export default function PromoModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => (document.body.style.overflow = 'auto')
  }, [isOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')

    if (digits.length !== 12 || !digits.startsWith('380')) {
      setError('Введіть коректний номер телефону')
      return
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      })

      if (res.ok) {
        setSuccess(true)
        setError('')
        setPhone('')

        // GA событие
        event({
          action: 'form_submit',
          category: 'Lead',
          label: 'Promo Modal',
        })

        // Google Ads конверсия
        conversion('AW-17306131771/-UkkCKHw3-kaELu6mrxA')
      } else {
        setError('Помилка надсилання. Спробуйте ще раз.')
      }
    } catch {
      setError('Сервер не відповідає.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black pt-20  bg-opacity-40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-4 relative animate-fade-in-scale">


        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        {!success && (
          <h2 className="text-xl font-bold text-center mb-4">🎁 Отримай знижку 20%</h2>
        )}
{!success && (
         <>
        <div className="text-center mb-4">
          <img
            src="/sale.webp"
            alt="Вікно"
            className="w-full max-w-[180px] sm:max-w-[220px] mx-auto rounded shadow-md"
          />
          <p className="text-base sm:text-lg font-semibold mt-2 text-gray-800">
            Металопластикове вікно<br />
            від <span className="text-blue-700 font-bold">2200₴</span>
          </p>
        </div>
        </>
)}
        {success ? (
          <p className="text-green-600 text-center font-medium">
            ✅ Дякуємо! Ми скоро з вами зв’яжемось.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
             <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше ім’я"
              className="w-full p-2 border rounded"
              required
            />
            <InputMask
              mask="+380 (99) 999 99 99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maskChar="_"
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="tel"
                  className="w-full p-2 border rounded"
                  placeholder="Ваш телефон"
                  required
                />
              )}
            </InputMask>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Отримати знижку
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
