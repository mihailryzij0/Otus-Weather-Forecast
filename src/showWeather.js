import { creatWeatherBox } from "./creatWeatherBox";
import { getCityWeather } from "./getCityWeather";
import {getCityName} from "./getCityName";
import {setDataLocalStorage, getDataLocalStorage} from './processingLocalStorage'
export function showWeather(el){
    el.innerHTML = `  
  <section class="section-weather">
    <h1 class="weather-title">Приложение прогноз погоды</h1>
    <div class="weather">
      <div class="weather-map">
      </div>
      <div class="weather-info">
        <div class="weather-info__item">
          <input class="weather-input" placeholder="Введите название город" type="text">
          <button class="weather-button">узнать погоду</button>
        </div>
        <div class="weather-info__item">
          <select class="weather-select" name="select"></select>
          <label for="weather-select">История поиска</label>
        </div>
        <div class="weather-info__item" id="info">
        </div>
      </div>
    </div>
  </section>
  `;
  const mapBox = document.querySelector(".weather-map");
  const input = document.querySelector(".weather-input");
  const button = document.querySelector(".weather-button");
  const select = document.querySelector('.weather-select');
  const infoBox  = document.querySelector('#info');
  
  setTimeout(async () => {
    const coren = await getCityName();
    const weatherData = await getCityWeather(coren.latitude, coren.longitude);
    let dataLocalStorage =   getDataLocalStorage();
    setDataLocalStorage(dataLocalStorage,weatherData.name);
    creatWeatherBox(weatherData, mapBox, infoBox );
  });

  function processingInput(){
    button.addEventListener('click', async (e) =>{
      if(input.value == ''){
      input.style.cssText = `border: 2px solid red;`
      }else{
        const weatherData = await getCityWeather(input.value)
        creatWeatherBox(weatherData, mapBox, infoBox );
        let dataLocalStorage = getDataLocalStorage();
        setDataLocalStorage(dataLocalStorage,weatherData.name);
        input.value = '';
        input.style.cssText = `border: none;`
      }
    })
  }
  processingInput();

  function processingSelect(){
    select.addEventListener('change', async () =>{
      let vol = select.options.selectedIndex;
      const weatherData = await getCityWeather(select.options[vol].text);
      creatWeatherBox(weatherData, mapBox, infoBox );
    })
  }
  processingSelect()
}