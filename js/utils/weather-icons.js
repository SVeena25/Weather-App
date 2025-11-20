import { getWeatherIcon } from './icons.js';

// Expose as a global for non-module code that may expect it
if (typeof window !== 'undefined') {
  window.getWeatherIcon = getWeatherIcon;
}

// Also provide a named export so other ES modules can import it
export { getWeatherIcon };
