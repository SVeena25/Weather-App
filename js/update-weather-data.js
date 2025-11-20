import { getWeatherIcon } from "./utils/weather-icons.js";

function airQualitySanitiser() {
  return null;
}

export const updateAirQualityName = (aqi) =>
  (document.querySelector("#aqi").innerHTML = airQualitySanitiser(aqi));

export const updateUvIndex = (uvi) =>
  (document.querySelector("#uvi").innerHTML = uvi);

export const updateRainCoverage = (propOfPercipitation) =>
  (document.querySelector(".rain-coverage-value").innerHTML =
    propOfPercipitation * 100);

export function updateWeatherIcon(data) {
  let weatherIcon = getWeatherIcon(data[0].weather[0]);
  const iconElement = document.getElementById("weather-icon-box");
  if (iconElement) {
    iconElement.innerHTML = weatherIcon;
  }
}

// Make these utilities available on `window` for non-module scripts
try {
  if (typeof window !== 'undefined') {
    window.updateAirQualityName = updateAirQualityName;
    window.updateUvIndex = updateUvIndex;
    window.updateRainCoverage = updateRainCoverage;
    window.updateWeatherIcon = updateWeatherIcon;
  }
} catch (e) {
  // ignore in non-browser contexts
}