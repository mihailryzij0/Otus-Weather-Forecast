
import {getCityName} from "./getCityName";
import {processingInput} from './processingInput'
import {processingSelect} from './processingSelect'
import { workingUserData } from "./workingUserData";

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
        <div class="weather-info__item info" >
        </div>
        <div class="weather-info__item">
        <p class="weather-info__title">История поиска</p>
          <select class="weather-select"></select>
        </div>
      </div>
    </div>
  </section>
  `;

  setTimeout(async()=>{
    const coren = await getCityName();
    await workingUserData(coren.latitude,coren.longitude );
  }) 
 
  
     

    processingInput(workingUserData);
    processingSelect(workingUserData);
  

}
