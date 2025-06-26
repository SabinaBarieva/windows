import Button from "./Button"
import { useState, useEffect } from 'react'

const slides = [
  {
    image: '/banner1.jpg',
    title: 'Сучасні металопластикові вікна',
    subtitle: 'Енергоефективність та шумоізоляція для вашого дому',
  },
  {
    image: '/banner2.jpg',
    title: 'Якісні двері для будь-якого інтер’єру',
    subtitle: 'Надійність, стиль і комфорт',
  },
  {
    image: '/banner3.jpg',
    title: 'Балконні та розсувні системи',
    subtitle: 'Максимум простору і світла',
  },
]

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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="h-full w-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
            <p className="text-white text-lg md:text-xl mb-6">{slide.subtitle}</p>
            <Button />
          </div>
        </div>
      ))}
    </section>
  )
}
