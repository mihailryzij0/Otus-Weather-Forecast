import { creatWeatherBox } from "./creatWeatherBox";
import { getCityWeather } from "./getCityWeather";
import {getCityName} from "./getCityName";
import {findListCities, makeListCities} from './processingLocalStorage'
import {creatingListHistory} from './creatingListHistory'
import {processingInput} from './processingInput'
import {processingListHistory} from './processingListHistory'

export function showWeather(el){
    el.innerHTML = `  
  <section class="section-weather">
    <h1 class="weather-title">Приложение прогноз погоды</h1>
    <div class="weather">
      <div class="weather-map">
      </div>
      <div class="weather-info">
        <div class="weather-info__item">
        <form>
          <input class="weather-input" 
          placeholder="Введите название города" type="text">
          <button class="weather-button">узнать погоду</button>
        </form>
        </div>
        <div class="weather-info__item" id="info">
        </div>
        <div class="weather-info__item">
        <p class="weather-info__title">История поиска</p>
          <ul class="weather-list" name="select"></ul>
        </div>
      </div>
    </div>
  </section>
  `;
  const mapBox = document.querySelector(".weather-map");
  const input = document.querySelector(".weather-input");
  const button = document.querySelector(".weather-button");
  const infoBox  = document.querySelector('#info');
  
  async function workingUserData(...theArgs){
    const weatherData = await getCityWeather(theArgs[0], theArgs[1]);
    const listCityName =   findListCities();
    const newListCityName  = makeListCities(listCityName,weatherData.name);
    creatingListHistory(newListCityName)
    creatWeatherBox(weatherData, mapBox, infoBox );
  }

  
  setTimeout(async () => {
    const coren = await getCityName();
    workingUserData(coren.latitude,coren.longitude );
  });

    processingInput(workingUserData, input, button );
    processingListHistory(workingUserData);
  

}
