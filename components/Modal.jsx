import { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'

export default function Modal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => (document.body.style.overflow = 'auto')
  }, [isOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')

    if (!name.trim() || digits.length !== 12 || !digits.startsWith('380')) {
      setError('Введіть коректні дані')
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
        setName('')
        setPhone('')
      } else {
        setError('Помилка надсилання. Спробуйте ще раз.')
      }
    } catch {
      setError('Сервер не відповідає.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

{!success && (
  <h2 className="text-xl font-bold text-center mb-4">Залишити заявку</h2>
)}

{success ? (
  <p className="text-green-600 text-center font-medium">
    ✅ Заявку надіслано! Найближчим часом ми з Вами звʼяжемось.
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
                  placeholder="Телефон"
                  required
                />
              )}
            </InputMask>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Надіслати
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
