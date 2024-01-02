import fetchWeatherData from "./api.js";
import updateUI from "./ui.js";

// html elemanlarını seçme
const selectors = {
  city: document.querySelector(".weather-city"),
  datetime: document.querySelector(".weather-datetime"),
  weatherForecast: document.querySelector(".weather-forecast"),
  weatherTemperature: document.querySelector(".weather-temperature"),
  weatherIcon: document.querySelector(".weather-icon"),
  weatherMinMax: document.querySelector(".weather-minmax"),
  weatherRealfeel: document.querySelector(".weather-realfeel"),
  weatherHumidity: document.querySelector(".weather-humidity"),
  weatherWind: document.querySelector(".weather-wind"),
  weatherPressure: document.querySelector(".weather-pressure"),
  searchForm: document.querySelector(".weather-search"),
  searchInput: document.querySelector(".weather-searchform"),
  unitCelsius: document.querySelector(".weather-units-celsius"),
  unitFahrenheit: document.querySelector(".weather-units-fahrenheit")

};

//varsayılan şehir ve birim değerlerini atadık
 let currCity = "Mersin";
export let units = "metric";
//hava durumu verilerini apiden alma ve UI'yi guncellemek için asenkron fonk.
export default async function getWeather() {
  const data = await fetchWeatherData(currCity, units);
  updateUI(data, selectors);
}
// arama kısmı için olay izleyicisi
selectors.searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  currCity = selectors.searchInput.value;
  await getWeather();
  //!bakılacak
  selectors.searchInput.value = "";
});

selectors.unitCelsius.addEventListener("click", () => {
  if (units !== "metric") {
    units = "metric";
    getWeather();
  }
});

selectors.unitFahrenheit.addEventListener("click", () => {
  if (units !== "imperal") {
    units = "imperial";
    getWeather();
  }
});
