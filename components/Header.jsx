import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow py-4 px-6 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-32">
          <Link href="/" scroll={true}>
  <img src="/logo.jpg" alt="ViknoCity" className="w-full h-auto cursor-pointer" />
</Link>
</div>
        
        {/* Кнопка для мобільного меню */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Меню для desktop */}
        <ul className="hidden md:flex space-x-6 text-lg text-blue-900 font-medium">
          <li><a href="#windows" className="hover:text-blue-600">Вікна</a></li>
          <li><a href="#doors" className="hover:text-blue-600">Двері</a></li>
          <li><a href="#balconies" className="hover:text-blue-600">Балкони</a></li>
          <li><a href="#sliding-systems" className="hover:text-blue-600">Розсувні системи</a></li>
          <li><a href="#alumin" className="hover:text-blue-600">Алюмінієві конструкції</a></li>
          <li><a href="#contacts" className="hover:text-blue-600">Контакти</a></li>
          <li><div className="hidden md:block text-blue-900 font-semibold">
  <a href="tel:+380970000000" className="hover:underline">
    +38 (097) 000 00 00
  </a>
</div></li>
        </ul>
      </nav>

      {/* Мобільне меню */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4">
          <ul className="flex flex-col space-y-2 text-gray-800 font-medium">
            <li><a href="#windows" onClick={() => setIsOpen(false)}>Вікна</a></li>
            <li><a href="#doors" onClick={() => setIsOpen(false)}>Двері</a></li>
            <li><a href="#balconies" onClick={() => setIsOpen(false)}>Балкони</a></li>
            <li><a href="#sliding-systems" onClick={() => setIsOpen(false)}>Розсувні системи</a></li>
            <li><a href="#alumin" onClick={() => setIsOpen(false)}>Алюмінієві конструкції</a></li>
                      <li><a href="#contacts" className="hover:text-blue-600">Контакти</a></li>
          <li><div className="hidden md:block text-blue-900 font-semibold">
  <a href="tel:+380970000000" className="hover:underline">
    +38 (097) 000 00 00
  </a>
</div></li>
          </ul>
        </div>
      )}
    </header>
  )
}
