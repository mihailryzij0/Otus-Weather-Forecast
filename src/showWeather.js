import { creatWeatherBox } from "./creatWeatherBox";
import { getCityWeather } from "./getCityWeather";
import {getCityName} from "./getCityName";
import {findListCities, makeListCities} from './processingLocalStorage'
import {creatingOptionsSelect} from './creatingOptionsSelect'

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
           placeholder="Введите название город" type="text">
          <button class="weather-button">узнать погоду</button>
        </form>
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
  
  async function workingUserData(...theArgs){
    const weatherData = await getCityWeather(theArgs[0], theArgs[1]);
    const listCityName =   findListCities();
    const newListCityName  = makeListCities(listCityName,weatherData.name);
    creatingOptionsSelect(newListCityName)
    creatWeatherBox(weatherData, mapBox, infoBox );
  }


  setTimeout(async () => {
    const coren = await getCityName();
    workingUserData(coren.latitude,coren.longitude );
  });



 function processingInput(){
    button.addEventListener('click', async (e) =>{
      e.preventDefault();
      if(input.value === ''){
      input.style.cssText = `border: 2px solid red;`
      }else{
        input.style.cssText = `border: none;`
        workingUserData(input.value);
        input.value = '';
      }
    })
    }

    processingInput();

  function processingSelect(){
    select.addEventListener('change', async () =>{
        const vol = select.options.selectedIndex;
        const weatherData = await getCityWeather(select.options[vol].text);
        creatWeatherBox(weatherData, mapBox, infoBox );
    })
  }
  processingSelect();
  

}
