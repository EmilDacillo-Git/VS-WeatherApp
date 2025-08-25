import showErrorPage from "./errorAction.js";
import "./styles.css";

const locationInput = document.getElementById("location");
const heroPage = document.getElementById("hero-page");
const loadingPage = document.getElementById("loading-page");

const form = document.getElementById("locationForm");
const tempSect = document.getElementById("weather-temp");
const weatherContaienr = document.getElementById("weather-content");
const exitBtn = document.getElementById('ext-btn');

function clearField() {
  tempSect.innerHTML = "";
}

async function loadWeatherData(location) {
  const WeatherDataModule = await import("./displayData.js");
  return WeatherDataModule.default(location);
}

async function loadLocation(location) {
  const locationModule = await import("./location.js");
  return locationModule.default(location);
}

heroPage.style.display = "flex";

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const location = locationInput.value.trim();

    if (location) {
      clearField();

      heroPage.style.display = "none";
      weatherContaienr.style.display = "none";
      loadingPage.style.display = "flex";

      await loadWeatherData(location);
      await loadLocation(location);
      loadingPage.style.display = "none";
      weatherContaienr.style.display = "block";
    }
  } catch (err) {
    showErrorPage();
  }
});

exitBtn.addEventListener('click', () => {
    location.reload();
});
