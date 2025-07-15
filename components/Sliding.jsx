import Image from 'next/image'
import Button from './Button'

export default function SlidingSystemsSection() {
  return (
    <section id="sliding-systems" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Розсувні системи — максимум світла і простору
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/slider.webp"
              alt="Розсувна система"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
          <div className="w-full md:w-1/2">
  <p className="text-lg text-gray-700 mb-6">
    <strong>Розсувні металопластикові системи</strong> — це сучасне рішення для <strong>балконів, терас, лоджій та кімнат</strong>, де важливо зекономити простір та забезпечити <strong>панорамний огляд і природне освітлення</strong>. Завдяки спеціальній конструкції <strong>розсувні двері</strong> не відкриваються всередину, а плавно ковзають уздовж стіни, що робить їх ідеальними для обмеженого простору.
  </p>
</div>
</div>

<h3 className="text-2xl font-semibold text-blue-700 mb-2">Переваги розсувних металопластикових систем</h3>
<ul className="list-disc text-lg pl-5 text-gray-700 mb-6 space-y-1">
  <li><strong>Економія простору</strong> — ідеальне рішення для невеликих приміщень та балконів</li>
  <li><strong>Максимальне проникнення денного світла</strong> — великі склопакети для панорамного вигляду</li>
  <li><strong>Сучасний дизайн</strong> — підходить до будь-якого інтер’єру або фасаду</li>
  <li><strong>Зручність у користуванні</strong> — плавне та легке ковзання стулок</li>
  <li><strong>Стійкість до впливу вологи, шуму та вітру</strong></li>
</ul>

<h3 className="text-2xl font-semibold text-blue-700 mb-2">Типи розсувних систем, які ми пропонуємо</h3>
<ul className="list-disc text-lg  pl-5 text-gray-700 mb-6 space-y-1">
  <li><strong>Розсувні двері для балконів і лоджій</strong> — функціональність і комфорт</li>
  <li><strong>Паралельно-зсувні системи (PSK)</strong> — економія простору та герметичність</li>
  <li><strong>Підйомно-розсувні системи (HST)</strong> — преміум-рішення з високим рівнем комфорту</li>
  <li><strong>Інтер’єрні розсувні перегородки</strong> — стильне зонування приміщень</li>
</ul>

<p className="text-lg text-gray-800 font-medium mb-6">
  Ми надаємо повний спектр послуг із <strong>встановлення розсувних металопластикових систем “під ключ”</strong> — від безкоштовного заміру до професійного монтажу з гарантією. Залиште заявку та отримайте <strong>розрахунок вартості розсувної системи</strong> саме під ваш проєкт.
</p>


        <div className="text-center">
          <Button />
        </div>
      </div>
    </section>
  )
}
