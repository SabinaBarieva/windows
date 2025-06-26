'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

export default function WindowsSection() {
  const profiles = [
    {
      brand: 'ВікнаНові',
      country: 'Україна',
      description: 'Вітчизняний виробник із гнучкими рішеннями для різних потреб. Пропонує широкий вибір профілів для будь-якого бюджету. Системи бренду ідеально підходять як для новобудов, так і для реконструкцій старих будинків. ВікнаНові орієнтовані на практичність, функціональність та естетику.',
      series: [
        {
          name: 'ВікнаНові Classic',
          specs: {
            image: '/profiles/wr400.jpg',
            camerasFrame: 4,
            camerasSash: 4,
            depth: 58,
            glazing: '24 / 32',
            heightOuter: 60,
            heightInner: 40,
            soundInsulation: '★★★☆☆',
            thermalInsulation: '★★★★☆',
            lamination: true
          },
          description: 'Classic — базовий варіант з мінімальним рівнем тепло- і шумоізоляції. Ідеально підходить для бюджетних проектів.'
        },
        {
          name: 'ВікнаНові Pro',
          specs: {
            image: '/profiles/wr500.jpg',
            camerasFrame: 6,
            camerasSash: 6,
            depth: 70,
            glazing: 'до 40 мм',
            heightOuter: 64,
            heightInner: 44,
            soundInsulation: '★★★★☆',
            thermalInsulation: '★★★★★',
            lamination: true
          },
          description: 'Pro — збалансоване рішення з добрими показниками енергоефективності. Часто обирають для квартир та приватних будинків.'
        },
      ]
    },
 {
      brand: 'WDS',
      country: 'Україна',
      description: 'WDS — український бренд металопластикових вікон, який поєднує сучасні технології виробництва та доступність. Профілі WDS широко використовуються в житловому та комерційному будівництві.',
      series: [
        {
          name: 'WDS 5S',
          specs: {
            image: '/profiles/wds5s.jpg',
            camerasFrame: 5,
            camerasSash: 5,
            depth: 60,
            glazing: 'до 32 мм',
            heightOuter: 64,
            heightInner: 44,
            soundInsulation: '★★★☆☆',
            thermalInsulation: '★★★☆☆',
            lamination: true
          },
          description: 'WDS 5S — базова профільна система для квартир і офісів. Має хороші тепло- та звукоізоляційні властивості.'
        },
        {
          name: 'WDS 6S',
          
          specs: {
            image: '/profiles/wds6s.jpg',
            camerasFrame: 6,
            camerasSash: 5,
            depth: 70,
            glazing: 'до 40 мм',
            heightOuter: 66,
            heightInner: 46,
            soundInsulation: '★★★★☆',
            thermalInsulation: '★★★★★',
            lamination: true
          },
          description: 'WDS 6S — покращена система з більш глибоким профілем. Підвищена теплоізоляція робить її оптимальною для приватних будинків.'
        },
        {
          name: 'WDS 76 AD',
          specs: {
            image: '/profiles/wds76ad.jpg',
            camerasFrame: 6,
            camerasSash: 5,
            depth: 76,
            glazing: 'до 48 мм',
            heightOuter: 67,
            heightInner: 46,
            soundInsulation: '★★★★☆',
            thermalInsulation: '★★★★★',
            lamination: true
          },
          description: 'WDS 76 AD — сучасна система для енергоефективного будівництва. Має широку камеру для теплого склопакета.'
        },
        {
          name: 'WDS 76 MD',
          specs: {
            image: '/profiles/wds76md.jpg',
            camerasFrame: 6,
            camerasSash: 6,
            depth: 76,
            glazing: 'до 48 мм',
            heightOuter: 68,
            heightInner: 47,
            soundInsulation: '★★★★★',
            thermalInsulation: '★★★★★',
            lamination: true
          },
          description: 'WDS 76 MD — преміальна серія з трьома контурами ущільнення. Максимальна герметичність та захист від шуму.'
        }
      ]
    },
    {
      brand: 'Rehau',
      country: 'Німеччина',
      image: '/images/profiles/rehau.jpg',
      description: 'Rehau — провідний європейський виробник ПВХ-профілів. Його системи славляться високими стандартами якості, довговічністю та інноваційними технологіями.',
      series: [
        {
          name: 'Rehau Euro-Design 70',
          specs: {
            image: '/profiles/rehau70.jpg',
            camerasFrame: 5,
            camerasSash: 5,
            depth: 70,
            glazing: 'до 40 мм',
            heightOuter: 66,
            heightInner: 44,
            soundInsulation: '★★★☆☆',
            thermalInsulation: '★★★☆☆',
            lamination: true
          },
          description: 'Euro-Design 70 — універсальне рішення з класичним дизайном, підходить для житлових приміщень середнього класу.'
        },
        {
          name: 'Rehau Synego',
          specs: {
            image: '/profiles/rehauSynego.jpg',
            camerasFrame: 7,
            camerasSash: 6,
            depth: 80,
            glazing: 'до 51 мм',
            heightOuter: 68,
            heightInner: 46,
            soundInsulation: '★★★★☆',
            thermalInsulation: '★★★★☆',
            lamination: true
          },
          description: 'Synego — енергоефективна система з високим рівнем шумоізоляції. Ідеальна для будинків з високими вимогами до комфорту.'
        }
      ]
    },
    {
  brand: 'Kömmerling',
  country: 'Німеччина',
  image: '/images/profiles/kommerling.jpg',
  description: 'Kömmerling — німецький бренд, відомий екологічними профілями без свинцю та високою якістю виготовлення. Часто використовується у проєктах преміум-класу.',
  series: [
    {
      name: 'Kömmerling 76 AD',
      specs: {
        image: '/profiles/kommerling76ad.jpg',
        camerasFrame: 6,
        camerasSash: 5,
        depth: 76,
        glazing: 'до 48 мм',
        heightOuter: 67,
        heightInner: 46,
        soundInsulation: '★★★★☆',
        thermalInsulation: '★★★★☆',
        lamination: true
      },
      description: '76 AD — сучасна система з акцентом на екологічність і довговічність. Часто використовується у сучасних проектах.'
    },
    {
      name: 'Kömmerling 76 MD',
      specs: {
        image: '/profiles/kommerling76md.jpg',
        camerasFrame: 6,
        camerasSash: 6,
        depth: 76,
        glazing: 'до 48 мм',
        heightOuter: 68,
        heightInner: 47,
        soundInsulation: '★★★★★',
        thermalInsulation: '★★★★★',
        lamination: true
      },
      description: '76 MD — покращена система з трьома контурами ущільнення, забезпечує максимальну герметичність та шумоізоляцію.'
    },
    {
      name: 'Kömmerling 70',
      
      specs: {
        image: '/profiles/kommerling70.jpg',
        camerasFrame: 5,
        camerasSash: 5,
        depth: 70,
        glazing: 'до 42 мм',
        heightOuter: 65,
        heightInner: 44,
        soundInsulation: '★★★☆☆',
        thermalInsulation: '★★★☆☆',
        lamination: true
      },
      description: 'Kömmerling 70 — класичне рішення для житлових обʼєктів, оптимальне співвідношення ціна/якість.'
    },
    {
      name: 'Kömmerling 88 MD',
      specs: {
        image: '/profiles/kommerling88.jpg',
        camerasFrame: 7,
        camerasSash: 6,
        depth: 88,
        glazing: 'до 56 мм',
        heightOuter: 70,
        heightInner: 48,
        soundInsulation: '★★★★★',
        thermalInsulation: '★★★★★',
        lamination: true
      },
      description: '88 MD — флагманська серія з глибокою монтажною базою та найкращими показниками енергоефективності.'
    }
  ]
}

  ];


const [openSeries, setOpenSeries] = useState([]);
return (
    <section id="windows" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
          Металопластикові вікна — тепло та тиша вашого дому
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/window.jpg"
              alt="Металопластикові вікна"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Металопластикові вікна — це сучасне рішення для енергоефективності, шумоізоляції та естетики будинку. Вибір профілю залежить від типу приміщення, бажаної теплоізоляції, дизайну і фурнітури. Якісна фурнітура забезпечує довговічність, легкість відкривання/закривання, а також безпеку. Зверніть увагу на кількість камер, тип склопакета та систему ущільнення при виборі вікна для свого житла чи офісу.
            </p>
          </div>
        </div>

        {profiles.map((profile) => (
          <div key={profile.brand} className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {profile.brand} ({profile.country})
            </h3>
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              {profile.description}
            </p>

            {profile.series.map((series) => {
              const key = `${profile.brand}-${series.name}`;
              return (
                <div key={series.name} className="w-full mb-4">
                  <button
                    onClick={() =>
                      setOpenSeries((prev) =>
                        prev.includes(key)
                          ? prev.filter((k) => k !== key)
                          : [...prev, key]
                      )
                    }
                    className={`text-sm mb-1 text-blue-700 hover:text-blue-900 cursor-pointer ${
                      openSeries.includes(key) ? 'font-semibold' : ''
                    }`}
                  >
                    {series.name}
                  </button>

                  <AnimatePresence mode="wait">
                    {openSeries.includes(key) && (
                      <motion.div
                        key={series.name}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="bg-blue-50 p-4 mt-2 rounded shadow text-sm"
                      >
                        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
                        <Image
                        src={series.specs.image}
                        alt="Металопластикові вікна"
                        width={100}
                        height={100}
                        className="rounded-lg shadow"
                         />
                        <p className="mb-2">{series.description}</p>
                        </div>
                        <table className="w-full text-sm text-left">
                          <tbody>
                            <tr><td className="py-1 font-medium">Кількість камер рами </td><td>{series.specs.camerasFrame}</td></tr>
                            <tr><td className="py-1 font-medium">Кількість камер стулки </td><td>{series.specs.camerasSash}</td></tr>
                            <tr><td className="py-1 font-medium">Монтажна глибина</td><td>{series.specs.depth} мм</td></tr>
                            <tr><td className="py-1 font-medium">Ширина склопакету</td><td>{series.specs.glazing} </td></tr>
                            <tr><td className="py-1 font-medium">Висота рами зовнішна(мм)</td><td>{series.specs.heightOuter} мм</td></tr>
                            <tr><td className="py-1 font-medium">Висота рами внутрішна(мм)</td><td>{series.specs.heightInner}</td></tr>
                            <tr><td className="py-1 font-medium">Шумоізоляція</td><td>{series.specs.soundInsulation}</td></tr>
                            <tr><td className="py-1 font-medium">Теплоізоляція</td><td>{series.specs.thermalInsulation}</td></tr>
                            <tr><td className="py-1 font-medium">Ламінування</td><td>{series.specs.lamination ? 'Так' : 'Ні'}</td></tr>
                          </tbody>
                        </table>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ))}

        <p className="text-lg text-gray-800 font-medium mb-6">
          Залиште заявку — ми допоможемо підібрати ідеальні вікна для вашого дому та забезпечимо якісний монтаж.
        </p>

        <div className="text-center">
          <Button />
        </div>
      </div>
    </section>
  );
}
