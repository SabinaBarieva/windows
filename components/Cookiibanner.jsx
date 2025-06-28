// components/CookieBanner.jsx
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted')
    if (!accepted) setShow(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white px-6 py-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm">
        Ми використовуємо файли cookies для покращення роботи сайту. Детальніше в нашій{' '}
        <a href="/policy" className="underline text-blue-400" target="_blank">політиці конфіденційності</a>.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700"
      >
        OK
      </button>
    </div>
  )
}
