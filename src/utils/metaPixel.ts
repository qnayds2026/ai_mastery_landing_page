// Meta Pixel (Facebook Pixel) Utility for Qnayds AI Academy

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

// Get Meta Pixel ID from environment variable or window config
export const getMetaPixelId = (): string => {
  return import.meta.env.VITE_META_PIXEL_ID || '';
};

/**
 * Initialize Meta Pixel script dynamically if not already present
 */
export const initMetaPixel = (pixelId?: string) => {
  const id = pixelId || getMetaPixelId();
  if (!id || typeof window === 'undefined') return;

  if (window.fbq) {
    window.fbq('init', id);
    window.fbq('track', 'PageView');
    return;
  }

  /* eslint-disable */
  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  if (window.fbq) {
    window.fbq('init', id);
    window.fbq('track', 'PageView');
  }
};

/**
 * Track standard custom Meta Pixel events
 */
export const trackMetaEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      if (data) {
        window.fbq('track', eventName, data);
      } else {
        window.fbq('track', eventName);
      }
      console.log(`[Meta Pixel] Tracked event: ${eventName}`, data || '');
    } catch (err) {
      console.warn('[Meta Pixel] Error tracking event:', err);
    }
  }
};

/**
 * Convenience helper for InitiateCheckout
 */
export const trackInitiateCheckout = (value: number, planName: string) => {
  trackMetaEvent('InitiateCheckout', {
    value,
    currency: 'INR',
    content_name: planName,
    content_category: 'Course Subscription'
  });
};

/**
 * Convenience helper for Purchase
 */
export const trackPurchase = (transactionId: string, value: number, planName: string) => {
  trackMetaEvent('Purchase', {
    value,
    currency: 'INR',
    content_name: planName,
    transaction_id: transactionId,
    content_type: 'product'
  });
};
