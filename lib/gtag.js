// lib/gtag.js

// ID Google Analytics и Google Ads
export const GA_MEASUREMENT_ID = 'G-RTX72HPYM6';
export const GOOGLE_ADS_ID = 'AW-17306131771';

// Отправка общего события (для GA, Google Ads)
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

// Пример: отправка события конверсии Google Ads
export const conversion = (sendTo) => {
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('[GTAG] Sending conversion to:', sendTo);
    window.gtag('event', 'conversion', {
      send_to: sendTo, // пример: 'AW-17306131771/AbCDeFgHiJkLmNoP'
    });
  }
};
