import Button from "./Button"
import { useState, useEffect } from 'react'

const slides = [
  {
    image: '/banner1.webr',
    title: 'Металопластикові вікна — тепло, тиша та економія для вашого дому',
    subtitle: 'Встановлення енергоефективних ПВХ-вікон з багатокамерним профілем і сучасними склопакетами. Покращена шумоізоляція, зниження витрат на опалення та стильний зовнішній вигляд для будь-якого типу приміщення.',
  },
  {
    image: '/banner2.webr',
    title: 'Надійні металопластикові двері — комфорт і безпека кожного дня',
    subtitle: 'Вхідні та міжкімнатні двері з армованим ПВХ-профілем, протизламною фурнітурою та якісною герметизацією. Великий вибір дизайну, скління та кольору. Ідеальне рішення для дому, офісу чи магазину.',
  },
  {
    image: '/banner3.webr',
    title: 'Балконні і розсувні системи — більше світла та простору',
    subtitle: 'Розсувні ПВХ-системи, скління балконів і лоджій з максимальним панорамним оглядом. Простота у використанні, економія простору, естетичність та теплоізоляція. Монтаж під ключ з гарантією.',
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[500px] md:h-[650px] w-full overflow-hidden">

      {/* Слайди */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Напівпрозорий фон + тексти */}
<div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 py-8">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
    {slides[current].title}
  </h2>
  <p className="text-sm sm:text-base md:text-lg text-white mb-6 max-w-2xl">
    {slides[current].subtitle}
  </p>

  <Button />
</div>


    </section>
  )
}
