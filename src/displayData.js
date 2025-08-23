import getData from "./weatherData.js";

async function weatherDatas(location) {
  const fetchedData = await getData(location);

  const currentTemp = fetchedData.currentConditions.temp;
  console.log(currentTemp);
  




  const curretnPrecipitation = fetchedData.days[0].precip;
  console.log(curretnPrecipitation);

  const currentWind = fetchedData.currentConditions.windspeed;
  console.log(currentWind);

  const currentHumidity = fetchedData.currentConditions.humidity;
  console.log(currentHumidity);
}

weatherDatas("manila");