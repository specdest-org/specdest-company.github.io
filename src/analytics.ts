const measurementId = 'G-CH9NXJH2NW';

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function enabled() {
  return Boolean(measurementId && /^G-[A-Z0-9]+$/i.test(measurementId));
}

function ensureGtag() {
  if (!enabled() || typeof window === 'undefined') return false;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? function gtag() {
    window.dataLayer?.push(arguments);
  };
  return true;
}
export function initializeAnalytics() {
  if (!ensureGtag() || !measurementId) return;

  window.gtag?.('js', new Date());
  window.gtag?.('config', measurementId, { send_page_view: false });

  const loadScript = () => {
    if (document.querySelector(`script[data-ga-id="${measurementId}"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.dataset.gaId = measurementId;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  };

  if ('requestIdleCallback' in window && window.requestIdleCallback) {
    window.requestIdleCallback(loadScript, { timeout: 3000 });
  } else {
    window.setTimeout(loadScript, 1500);
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (!ensureGtag()) return;
  window.gtag?.('event', name, params);
}
export function trackPageView(path: string, title: string) {
  trackEvent('page_view', {
    page_location: `${window.location.origin}${path}`,
    page_path: path,
    page_title: title,
  });

  if (path === '/contact') trackEvent('contact_view');
  if (path.startsWith('/cases/')) trackEvent('case_view', { case_path: path });
  if (path.startsWith('/insights/')) trackEvent('insight_view', { insight_path: path });
}

export function enableLinkTracking() {
  if (!enabled() || typeof document === 'undefined') return;
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('a') : null;
    if (!target) return;
    const href = target.getAttribute('href') ?? '';
    if (href.startsWith('mailto:')) trackEvent('email_click');
    else if (href.startsWith('tel:')) trackEvent('phone_click');
    else if (href === '/contact') trackEvent('cta_click', { destination: '/contact' });
  }, { passive: true });
}
