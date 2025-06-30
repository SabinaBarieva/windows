import Head from 'next/head'
import Header from '../components/Header'
import Button from '../components/Button'
import Banner from '../components/Banner'
import BalconySection from '../components/Balcon'
import Doors from '../components/Doors'
import SlidingSystemsSection from '../components/Sliding'
import WindowsSection from '../components/windows'
import AluminProf from '../components/aluminprof'
import Footer from '../components/footer'
import GoogleMap from '../components/GoogleMap'
import Contacts from '../components/Contacts'
import CookieBanner from '../components/Cookiibanner'

export default function Home() {
  return (
    <>
    <CookieBanner/>
<Head>
      <title>Металопластикові вікна, двері, балкони | ViknoCity</title>
      <link rel="icon" href="/favicon.png" />
      <meta
        name="description"
        content="Металопластикові вікна, двері, балкони з установкою. Працюємо у Києві, Дніпрі, Кривому Розі, Миколаєві, Одесі, Запоріжжі, Черкасах та Харкові. Швидкий монтаж, гарантія, безкоштовна консультація."
      />
      <meta
        name="keywords"
        content="вікна Київ, вікна Дніпро, вікна Кривий Ріг, вікна Миколаїв, вікна Одеса, вікна Запоріжжя, вікна Черкаси, вікна Харків, металопластикові двері, скління балконів, металопластикові вікна, заміна вікон, розсувні системи, установка вікон"
      />
      <meta name="robots" content="index, follow"></meta>

      {/* Open Graph */}
      <meta property="og:title" content="ViknoCity — металопластикові вікна та двері в Україні" />
      <meta
        property="og:description"
        content="Компанія ViknoCity встановлює якісні металопластикові вікна, двері та балкони з гарантією у 8 містах України. Безкоштовна консультація та знижки на розсувні системи."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://viknocity.com.ua" />
      <meta property="og:image" content="https://viknocity.com.ua/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Вікна, двері, балкони від ViknoCity в Україні" />

      <meta httpEquiv="Content-Language" content="uk" />
    </Head>

      <Header />
      <Banner />
      <main className="bg-gray-100">
      <WindowsSection id="windows" />
      <Doors id ="doors"/> 
      <BalconySection id="#balconies" />
      <SlidingSystemsSection id="#sliding-systems"/>
      <AluminProf id="alumin" />
      <Contacts id="contacts"/>
</main>
<div className="fixed bottom-7 right-7 z-50 block md:hidden">
  <a
    href="tel:+380970000000"
    className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-colors duration-200"
    aria-label="Подзвонити"
  >
 <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
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