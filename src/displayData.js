import getData from "./weatherData.js";
import sunIcon from "./assets/sun.png";

const weatherPage = document.getElementById("weather-content");

export default async function weatherDatas(location) {
  const fetchedData = await getData(location);
  const currentTemp = fetchedData.currentConditions.temp;

  const tempToday = document.createElement("h1");
  const tempIcon = document.createElement('img');
  tempIcon.src = sunIcon; 
  tempIcon.alt = "Weather Icon";
  tempIcon.classList.add('temp-icon')
  
  tempToday.classList.add("temp-today");
  tempToday.append(currentTemp);
  weatherPage.append(tempIcon,tempToday);

  // console.log(currentTemp);

  // const curretnPrecipitation = fetchedData.days[0].precip;
  // console.log(curretnPrecipitation);

  // const currentWind = fetchedData.currentConditions.windspeed;
  // console.log(currentWind);

  // const currentHumidity = fetchedData.currentConditions.humidity;
  // console.log(currentHumidity);
}
