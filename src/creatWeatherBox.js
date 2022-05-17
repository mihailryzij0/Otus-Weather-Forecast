export function creatWeatherBox(cityData) {
  const mapBlock = document.querySelector(".weather-map");
  const weatherBlock = document.querySelector(".info");
  mapBlock.innerHTML = `
    <img src="https://static-maps.yandex.ru/1.x/?ll=${cityData.coord.lon},${cityData.coord.lat}&spn=0.1,0.1&size=270,270&l=map">

 `;

  weatherBlock.innerHTML = `
 <div class="weather-bottom-info">
 <h3 class="weather-bottom-info__city">${cityData.name}</h3>
 <p class="weather-bottom-info__informer">
 ${Math.round(cityData.main.temp)} &degC</p>
 <img class="weather-bottom-info__image" src="https://openweathermap.org/img/wn/${
   cityData.weather[0].icon
 }.png" alt="weather">
 </div>

`;
}
