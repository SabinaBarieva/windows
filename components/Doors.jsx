import Image from 'next/image'
import Button from './Button'

export default function Doors() {
  return (
    <section id="doors" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Металопластикові вхідні двері — сучасний захист та теплоізоляція
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/doors.jpg"
              alt="Металопластикові вхідні двері"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Металопластикові двері — це ідеальне рішення для приватних будинків, офісів, магазинів та житлових приміщень. Вони поєднують в собі надійність, естетику та високу енергоефективність.
            </p>

          </div>
        </div>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Конструкція дверей</h3>
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>ПВХ-профіль з армуванням</li>
          <li>Склопакет або сендвіч-панель</li>
          <li>Міцні петлі та замки</li>
          <li>Гумові ущільнювачі</li>
          <li>Нестандартні розміри</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Переваги</h3>
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>Теплоізоляція</li>
          <li>Шумоізоляція</li>
          <li>Стійкість до вологи та температур</li>
          <li>Довговічність</li>
          <li>Вибір дизайну, скління, фурнітури</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Додаткові опції</h3>
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>Доводчик</li>
          <li>Протизламна фурнітура</li>
          <li>Віконце або декоративна вставка</li>
          <li>Поріг з нержавійки</li>
          <li>Скління з візерунком</li>
        </ul>

        <p className="text-lg text-gray-800 font-medium mb-6">
          Залиште заявку — ми допоможемо підібрати двері під ваші потреби та забезпечимо якісний монтаж.
        </p>

        <div className="text-center">
          <Button />
        </div>
      </div>
    </section>
  )
}
