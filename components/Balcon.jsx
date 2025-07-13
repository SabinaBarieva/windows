import Image from 'next/image'
import Button from './Button'

export default function BalconySection() {
  return (
    <section id="balconies" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Металопластикові балконні системи — тепло, тиша, комфорт
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/balcon.webr"
              alt="Металопластиковий балкон"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Металопластикові балконні системи — це надійне рішення для скління балконів і лоджій. Вони поєднують у собі естетичний вигляд, високу енергоефективність і довговічність.
            </p>

          </div>
        </div>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Що включають металопластикові системи?</h3>
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>Віконні конструкції з ПВХ профілю</li>
          <li>Розсувні або орні стулки</li>
          <li>Склопакети (одно-, дво-, трикамерні)</li>
          <li>Ущільнювачі та якісна фурнітура</li>
          <li>Герметичний монтаж з утепленням</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Переваги металопластикових балконів</h3>
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>Тепло — зменшення тепловтрат до 60%</li>
          <li>Тиша — шумоізоляція до 40 дБ</li>
          <li>Надійність — термін служби понад 20 років</li>
          <li>Герметичність — повний захист від вологи та протягів</li>
          <li>Безпека — протизламна фурнітура (опція)</li>
          <li>Естетика — вибір кольору та ламінування</li>
        </ul>

        <p className="text-lg text-gray-800 font-medium mb-6">
          Залиште заявку — наш спеціаліст безкоштовно проконсультує вас, допоможе з вибором профілю, зробить заміри та прорахунок вартості.
        </p>

        <div className="text-center">
          <Button />
        </div>
      </div>
    </section>
  )
}

