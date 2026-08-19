// Google Analytics (GA4) Utility for Qnayds AI Academy

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    VITE_GA_MEASUREMENT_ID?: string;
  }
}

/**
 * Get Google Analytics Measurement ID from environment variable or window context
 */
export const getGaMeasurementId = (): string => {
  return import.meta.env.VITE_GA_MEASUREMENT_ID || window.VITE_GA_MEASUREMENT_ID || 'G-S2S6JHJ1RC';
};

/**
 * Initialize Google Analytics (gtag.js) dynamically
 */
export const initGoogleAnalytics = (measurementId?: string) => {
  const id = measurementId || getGaMeasurementId();
  if (!id || id === 'G-XXXXXXXXXX' || typeof window === 'undefined') return;

  // Check if tag is already injected
  const existingScript = document.getElementById('ga-gtag-script');
  if (existingScript) {
    if (window.gtag) {
      window.gtag('config', id, { page_path: window.location.pathname });
    }
    return;
  }

  // Create gtag script tag dynamically
  const script = document.createElement('script');
  script.id = 'ga-gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/googletag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer?.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', id, { page_path: window.location.pathname });
  console.log(`[Google Analytics] Initialized with Measurement ID: ${id}`);
};

/**
 * Track custom Google Analytics events
 */
export const trackGaEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', eventName, eventParams);
      console.log(`[Google Analytics] Event tracked: ${eventName}`, eventParams || '');
    } catch (err) {
      console.warn('[Google Analytics] Error tracking event:', err);
    }
  }
};

