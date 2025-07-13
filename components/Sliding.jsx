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
              src="/slider.webr"
              alt="Розсувна система"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Розсувні системи — це сучасне рішення для балконів, терас, лоджій та приміщень, де важливо зекономити простір і забезпечити панорамний огляд. Завдяки спеціальній конструкції двері не відкриваються всередину, а плавно ковзають вздовж стіни.
            </p>

          </div>
        </div>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Переваги розсувних систем</h3>
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>Економія простору — ідеально для невеликих приміщень</li>
          <li>Максимальне природне освітлення</li>
          <li>Сучасний зовнішній вигляд</li>
          <li>Зручність у користуванні</li>
          <li>Стійкість до вологи, вітру, шуму</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Типи систем</h3>
        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>Розсувні двері для балконів і лоджій</li>
          <li>Паралельно-зсувні системи (PSK)</li>
          <li>Підйомно-розсувні (HST) системи</li>
          <li>Інтер'єрні перегородки</li>
        </ul>

        <p className="text-lg text-gray-800 font-medium mb-6">
          Ми пропонуємо встановлення розсувних систем "під ключ" — від вимірювання до монтажу з гарантією.
        </p>

        <div className="text-center">
          <Button />
        </div>
      </div>
    </section>
  )
}
