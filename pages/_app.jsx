import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RTX72HPYM6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RTX72HPYM6');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
