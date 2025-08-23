const API_KEY = "UHW5LXTHFPBQ3AJ5QPDV56PLF";
const unitGroup = "metric";
const include = "current";

export default async function getData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    location
  )}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=json&include=${include}`;
  const response = await fetch(url);
  const fetchedData = await response.json();

  return fetchedData;
}

async function getTemp(location) {
  const weatherData = await getData(location);
  console.log(weatherData.currentConditions.temp);
}

async function getPrecipitation(location) {
  const weatherData = await getData(location);
  console.log(weatherData.days[0].precip);
}

async function getWind(location) {
  const weatherData = await getData(location);
  console.log(weatherData.currentConditions.windspeed);
}

async function getHumidity(location) {
  const weatherData = await getData(location);
  console.log(weatherData.currentConditions.humidity);
}





