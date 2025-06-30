import '../styles/globals.css'
// pages/_app.jsx
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Подключаем скрипт GA */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RTX72HPYM6"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RTX72HPYM6');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
