// Helper to force the app to use public, no-key fallbacks.
// Include this script BEFORE `js/app.js` to ensure the app sees the setting.
(function () {
  if (typeof window === 'undefined') return;
  // If a key is set, do not override it. This script is opinionated: it clears any value
  // so the app will use public fallbacks. If you prefer to keep a real key, remove this file.
  try {
    window.OPENWEATHER_API_KEY = '';
    window.FORCE_PUBLIC_API = true;
    console.info('Public API mode enabled: OpenWeatherMap key cleared; using public fallbacks');
  } catch (e) {
    // ignore
  }
})();
