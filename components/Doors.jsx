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
              src="/doors.webp"
              alt="Металопластикові вхідні двері"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
          <div className="w-full md:w-1/2">
  <p className="text-lg text-gray-700 mb-6">
    <strong>Металопластикові двері</strong> — це надійне та сучасне рішення для приватних будинків, квартир, офісів, магазинів і будь-яких житлових або комерційних приміщень. Вони поєднують у собі <strong>міцність, естетичний вигляд та високу енергоефективність</strong>. Якщо ви шукаєте, де <strong>купити металопластикові двері з установкою</strong> — звертайтесь до нас.
  </p>
</div>
</div>
<h3 className="text-2xl font-semibold text-blue-700 mb-2">Конструкція металопластикових дверей</h3>
<ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
  <li><strong>ПВХ-профіль з армуванням</strong> — забезпечує міцність і стабільність конструкції</li>
  <li><strong>Склопакет або сендвіч-панель</strong> — залежно від призначення дверей (вхідні, балконні, міжкімнатні)</li>
  <li><strong>Якісні петлі, замки та ручки</strong> — гарантія безпеки та зручності</li>
  <li><strong>Гумові ущільнювачі</strong> — ефективна тепло- та шумоізоляція</li>
  <li><strong>Можливість виготовлення за індивідуальними розмірами</strong></li>
</ul>

<h3 className="text-2xl font-semibold text-blue-700 mb-2">Переваги металопластикових дверей</h3>
<ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
  <li><strong>Відмінна теплоізоляція</strong> — збереження тепла в холодну пору року</li>
  <li><strong>Шумоізоляція</strong> — захист від зовнішніх звуків</li>
  <li><strong>Стійкість до вологи, перепадів температур та ультрафіолету</strong></li>
  <li><strong>Довговічність та простий догляд</strong></li>
  <li><strong>Широкий вибір дизайну, скління та фурнітури</strong> під будь-який інтер’єр</li>
</ul>

<h3 className="text-2xl font-semibold text-blue-700 mb-2">Додаткові функції та опції</h3>
<ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
  <li><strong>Автоматичний доводчик</strong> для плавного закривання</li>
  <li><strong>Протизламна фурнітура</strong> — підвищений рівень безпеки</li>
  <li><strong>Декоративне віконце або вставка</strong> для стильного вигляду</li>
  <li><strong>Поріг із нержавіючої сталі</strong> — зносостійкий та практичний</li>
  <li><strong>Скління з візерунком або тонуванням</strong></li>
</ul>

<p className="text-lg text-gray-800 font-medium mb-6">
  <strong>Замовити металопластикові двері</strong> у нашій компанії — це отримати індивідуальний підхід, безкоштовну консультацію, точний замір та <strong>якісний монтаж дверей</strong> у найкоротші терміни. Залиште заявку — ми допоможемо підібрати найкраще рішення саме для вас!
</p>



        <div className="text-center">
          <Button />
        </div>
      </div>
    </section>
  )
}
