'use client'

import { FaTelegramPlane } from 'react-icons/fa'
import GoogleMap from './GoogleMap'

export default function Contacts() {
  return (
    <section id="contacts" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
      
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Контакти</h2>
<div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
  {/* Ліва частина */}
  <div className="md:w-1/2 space-y-4">
    <div className="flex items-center gap-2 text-lg text-gray-700">
      <FaTelegramPlane className="text-blue-500" size={20} />
      <a href="https://t.me/ViknoCity" target="_blank" rel="noopener noreferrer">
        @ViknoCity
      </a>
    </div>

    <div className="text-lg text-gray-700">
      📞 <a href="tel:+380970123486">+380970123486</a>
    </div>

    <div className="text-lg text-gray-700">
      ✉️ <a href="mailto:viknocity@gmail.com">viknocity@gmail.com</a>
    </div>
  </div>

  {/* Права частина — карта */}

  <div className="w-full md:w-1/2 h-[300px] rounded-xl overflow-hidden ml-auto">
    <GoogleMap />
  </div>
</div>

      </div>

    </section>
  )
}
