'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

export default function AluminProf() {
  const [selectedSeries, setSelectedSeries] = useState(null);

  const aluminumProfiles = [
    {
      brand: 'KMD',
      country: 'Україна',
      description: 'KMD — український бренд алюмінієвих профілів, відомий простотою монтажу та міцністю. Часто використовується у торгових центрах, офісах та промислових обʼєктах.',
      series: [
        {
          name: 'KMD 45',
          specs: {
            depth: 45,
            glazing: 'до 24 мм',
            soundInsulation: '★★★☆☆',
            thermalInsulation: '★★☆☆☆',
            lamination: false
          },
          description: 'KMD 45 — холодна алюмінієва система для внутрішніх конструкцій, перегородок, вітрин у торгових залах.'
        }
      ]
    },
    {
      brand: 'Aluprof',
      country: 'Польща',
      description: 'Aluprof — один з провідних європейських виробників алюмінієвих систем. Пропонує широкий спектр рішень для житлового та комерційного будівництва.',
      series: [
        {
          name: 'Aluprof MB-70',
          specs: {
            depth: 70,
            glazing: 'до 50 мм',
            soundInsulation: '★★★★☆',
            thermalInsulation: '★★★★☆',
            lamination: false
          },
          description: 'MB-70 — тепла алюмінієва система з термовставками. Підходить для дверей, вікон і вітражів із теплоізоляцією.'
        }
      ]
    },
    {
      brand: "Reiner's",
      country: 'Німеччина',
      description: "Reiner's — німецький бренд преміум-рівня з акцентом на дизайн і теплоізоляцію. Ідеальний вибір для сучасних скляних фасадів і панорамних вікон.",
      series: [
        {
          name: "Reiner's 86",
          specs: {
            depth: 86,
            glazing: 'до 60 мм',
            soundInsulation: '★★★★★',
            thermalInsulation: '★★★★★',
            lamination: false
          },
          description: 'Reiner’s 86 — сучасна енергоефективна система преміум-класу для великих панорамних склінь, терас та фасадів.'
        }
      ]
    }
  ];

  return (
    <section id="alumin" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Алюмінієві конструкції — міцність та сучасний дизайн
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/alumin.webp"
              alt="Алюмінієві конструкції"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
<div className="w-full md:w-1/2">
  <p className="text-lg text-gray-700 mb-6">
    <strong>Алюмінієві конструкції</strong> — це сучасне та ефективне архітектурне рішення для <strong>офісів, приватних будинків, комерційних приміщень і фасадів</strong>. Вони ідеально підходять для створення <strong>скляних фасадів, вітражних систем, вхідних груп, перегородок, зимових садів та терас</strong>. Завдяки своїм властивостям, <strong>алюмінієві системи</strong> забезпечують <strong>високу міцність, легкість монтажу, стійкість до корозії</strong> та широкий вибір дизайнерських рішень.
  </p>
</div>

        </div>

        {aluminumProfiles.map((profile) => (
          <div key={profile.brand} className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {profile.brand} ({profile.country})
            </h3>
            <p className="text-gray-700 text-lg  mb-4 leading-relaxed">
              {profile.description}
            </p>

            {profile.series.map((series) => (
              <div key={series.name} className="w-full mb-4">
                <button
                  onClick={() =>
                    setSelectedSeries(
                      selectedSeries?.name === series.name &&
                      selectedSeries?.brand === profile.brand
                        ? null
                        : { ...series, brand: profile.brand }
                    )
                  }
                  className={`text-sm mb-1 text-blue-700  hover:text-blue-900 cursor-pointer ${
                    selectedSeries?.name === series.name && selectedSeries?.brand === profile.brand
                          ? 'font-semibold'
    : ''
                  }`}
                >
                  {series.name}
                </button>

                <AnimatePresence mode="wait">
                  {selectedSeries?.name === series.name &&
                    selectedSeries?.brand === profile.brand && (
                     <motion.div
  key={series.name}

initial={{ opacity: 0, x: -100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 100 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="bg-blue-50 p-4 mt-2 rounded shadow text-sm"
                      >
                        <h4 className="text-base font-semibold mb-2">
                          {series.name}
                        </h4>
                        <p className="mb-2">{series.description}</p>
                        <table className="w-full text-sm text-left">
                          <tbody>
                            <tr><td className="py-1 font-medium">Монтажна глибина</td><td>{series.specs.depth} мм</td></tr>
                            <tr><td className="py-1 font-medium">Склопакет</td><td>{series.specs.glazing}</td></tr>
                            <tr><td className="py-1 font-medium">Шумоізоляція</td><td>{series.specs.soundInsulation}</td></tr>
                            <tr><td className="py-1 font-medium">Теплоізоляція</td><td>{series.specs.thermalInsulation}</td></tr>
                            <tr><td className="py-1 font-medium">Ламінування</td><td>{series.specs.lamination ? 'Так' : 'Ні'}</td></tr>
                          </tbody>
                        </table>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ))}

        <p class="text-lg text-gray-800 font-medium mb-6">
  <strong>Залиште заявку на безкоштовну консультацію</strong> — ми допоможемо підібрати <strong>алюмінієві конструкції</strong> під ваші потреби: <strong>фасади, перегородки, вітражі, тераси</strong>, і забезпечимо <strong>професійний монтаж з гарантією якості</strong>.
</p>


        <div className="text-center">
          <Button />
        </div>
      </div>
    </section>
  );
}
