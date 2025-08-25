import showErrorPage from "./errorAction.js";

const API_KEY = "UHW5LXTHFPBQ3AJ5QPDV56PLF";
const unitGroup = "metric";
const include = "current";

export default async function getData(location) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      location
    )}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=json&include=${include}`;
    const response = await fetch(url);
    const fetchedData = await response.json();

    return fetchedData;
  } catch (err) {
    showErrorPage();
  }
}
