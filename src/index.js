import weatherDatas from "./displayData.js";
import "./styles.css";
//  Key: UHW5LXTHFPBQ3AJ5QPDV56PLF

const locationInput = document.getElementById('location');
const heroPage = document.getElementById('hero-page');
const searchBtn = document.getElementById('search-location');
const form = document.getElementById('locationForm');
const weatherDisplay = document.getElementById('weather-content');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();

    if (location) {
        weatherDisplay.innerHTML = "";
        heroPage.style.display = 'none';
        weatherDatas(location);
    }
    
});


