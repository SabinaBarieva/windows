import Head from 'next/head'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
import Banner from '../components/Banner'
import BalconySection from '../components/Balcon'
import Doors from '../components/Doors'
import SlidingSystemsSection from '../components/Sliding'
import WindowsSection from '../components/windows'
import AluminProf from '../components/aluminprof'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
    <Head>
        <title>Металопластикові вікна, двері, балкони | [Назва компанії]</title>
        <meta
          name="description"
          content="Купуйте вікна, двері, балкони з установкою. Швидкий монтаж. Гарантія. Безкоштовна консультація."
        />
        <meta
          name="keywords"
          content="вікна, металопластикові вікна, двері, балкони, розсувні системи, вікна Дніпро, вікна з установкою, замовити вікна"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Металопластикові вікна, двері, балкони | [Назва компанії]" />
        <meta property="og:description" content="Якісні вікна та двері з монтажем під ключ. Працюємо по Дніпру та області. Гарантія. Знижки на балкони та розсувні системи." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://твої-сайт.ua" />
        <meta property="og:image" content="https://твої-сайт.ua/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Вікна під ключ" />
      </Head>
      <Head>
        <title>Продаж вікон, дверей, балконів</title>
        <meta name="description" content="Замовляйте металопластикові вікна, двері, балконні системи та розсувні конструкції з установкою під ключ." />
      </Head>
      <Header />
      <Banner />
      <main className="bg-gray-100">
      <WindowsSection id="windows" />
      <Doors id ="doors"/> 
      <BalconySection id="#balconies" />
      <SlidingSystemsSection id="#sliding-systems"/>
      <AluminProf id="alumin" />
</main>
<div className="fixed bottom-4 left-4 z-50 md:hidden">
  <a
    href="tel:+380970000000"
    className="bg-blue-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center"
    aria-label="Подзвонити"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 010 1.414L8.414 9.586a1 1 0 000 1.414l4.586 4.586a1 1 0 001.414 0l2.293-2.293a1 1 0 011.414 0l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C6.477 21 3 17.523 3 13V5z"
      />
    </svg>
  </a>
</div>

<Footer />
    </>
  )
}