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
              src="/balcon.webp"
              alt="Металопластиковий балкон"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
         <div className="w-full md:w-1/2">
  <p className="text-lg text-gray-700 mb-6">
    <strong>Металопластикові балконні системи</strong> — це сучасне, надійне та естетичне рішення для <strong>скління балконів і лоджій</strong>. Вони поєднують <strong>енергоефективність, шумоізоляцію та довговічність</strong>, що робить їх ідеальними для утеплення балконного простору в квартирах і приватних будинках.
  </p>
</div>
</div>

<h3 className="text-2xl font-semibold text-blue-700 mb-2">Що входить до складу металопластикової балконної системи?</h3>
<ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
  <li><strong>Віконні блоки з ПВХ профілю</strong> — з армуванням для міцності та стабільності</li>
  <li><strong>Розсувні або орні стулки</strong> — залежно від конструкції балкона</li>
  <li><strong>Склопакети</strong> — одно-, дво- або трикамерні, з енергозберігаючим покриттям</li>
  <li><strong>Якісна фурнітура та ущільнювачі</strong> — гарантія герметичності та комфорту</li>
  <li><strong>Герметичний монтаж із теплоізоляцією</strong> — запобігає утворенню конденсату та втратам тепла</li>
</ul>

<h3 className="text-2xl font-semibold text-blue-700 mb-2">Переваги скління балкона металопластиком</h3>
<ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
  <li><strong>Ефективне утеплення</strong> — зниження тепловтрат до 60%</li>
  <li><strong>Шумоізоляція</strong> — зменшення рівня шуму до 40 дБ</li>
  <li><strong>Тривалий термін експлуатації</strong> — понад 20 років без потреби у ремонті</li>
  <li><strong>Повна герметичність</strong> — захист від протягів, пилу та вологи</li>
  <li><strong>Безпечність</strong> — можливість встановлення протизламної фурнітури</li>
  <li><strong>Індивідуальний дизайн</strong> — вибір кольору профілю, ламінування, декоративне скління</li>
</ul>

<p className="text-lg text-gray-800 font-medium mb-6">
  Хочете <strong>засклити балкон металопластиковими вікнами</strong>? Залиште заявку — наш спеціаліст безкоштовно проконсультує вас, допоможе з вибором профілю, зробить точний замір і підготує детальний <strong>розрахунок вартості скління балкона</strong> під ключ.
</p>

        <div className="text-center">
          <Button />
        </div>
      </div>
    </section>
  )
}

