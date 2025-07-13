// components/GoogleTag.jsx
import Script from 'next/script';

const GoogleTag = () => (
  <>
    {/* Google Tag base script */}
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=AW-17306131771"
    />
    
    <Script
      id="google-tags"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Google Analytics
          gtag('config', 'G-RTX72HPYM6');

          // Google Ads
          gtag('config', 'AW-17306131771');
        `,
      }}
    />
  </>
);

export default GoogleTag;
