import showErrorPage from "./errorAction.js";
import getData from "./weatherData.js";

const tempSection = document.getElementById("weather-temp");
const precipitationVal = document.querySelector("#percipitation-sect h3");
const windSpeedVal = document.querySelector("#wind-sect h3");
const humidityVal = document.querySelector("#humidity-sect h3");

export default async function weatherDatas(location) {
  try {
    const fetchedData = await getData(location);
    const currentTemp = fetchedData.currentConditions.temp;
    const precipitation = fetchedData.days[0].precip;
    const windSpeed = fetchedData.currentConditions.windspeed;
    const humidity = fetchedData.currentConditions.humidity;

    tempSection.innerHTML = "";
    const tempToday = document.createElement("h1");
    tempToday.innerHTML = `${currentTemp} °C`;
    tempSection.append(tempToday);

    const sections = document.querySelectorAll(".precipitation h3");
    sections.forEach((section) => {
      section.innerHTML = "";
    });

    precipitationVal.textContent = `${precipitation} %`;
    windSpeedVal.textContent = `${windSpeed} km/h`;
    humidityVal.textContent = `${humidity} %`;
  } catch (err) {
    showErrorPage();
  }
}
