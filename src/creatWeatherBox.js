export function creatWeatherBox(cityData) {
  const mapBlock = document.querySelector(".weather-map");
  const weatherBlock = document.querySelector(".info");
  mapBlock.innerHTML = `
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=${cityData.name}
    &zoom=9&size=300x300&&markers=size:mid%7Ccolor:0xFFFF00%7C${cityData.name}
    &key=AIzaSyC1MvMZAHW6121-ZR8zgEX3_kZPwxY8zME">

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
