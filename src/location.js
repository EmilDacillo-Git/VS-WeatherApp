import showErrorPage from "./errorAction.js";

const apiKey = "fb7b72ff590b4b05ad66e3738e630101";

const locationEl = document.querySelector("#weather-loc p");

export default async function getLocation(city) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${apiKey}`;

  try {
    const res = await fetch(url); 
    const data = await res.json();

    if (data.results.length > 0) {
      const components = data.results[0].components;
      const cityName =
        components.city ||
        components.town ||
        components.village ||
        components._normalized_city;
      const countryName = components.country;

      locationEl.textContent = `${cityName}, ${countryName}`;
    }
  } catch (err) {
   showErrorPage();
  }
}