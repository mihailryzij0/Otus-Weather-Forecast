import { Component } from "./component";
import { template } from "./template";
interface State {
  city: string;
  longitude: string;
  latitude: string;
  icon: string;
  temp: number;
  historySity: string[];
}
export class WeatherForecast extends Component<State> {
  events = {
    "click@weather-button": this.processingInput,
    "change@weather-select": this.processingSelect,
  };

  subscribeEvents() {
    for (const [key, value] of Object.entries(this.events)) {
      const [action, elClass] = key.split("@");
      const el = this.el.querySelector(`.${elClass}`);
      if (el !== null) {
        el.addEventListener(action, value.bind(this));
      }
    }
  }

  async onMount() {
    this.findListCities();
    await this.getCityName();
    await this.getCityWeather();
    this.makeListCities();
    this.render();
  }

  processingInput(event: Event) {
    event.preventDefault();
    const input = document.querySelector(".weather-input") as HTMLInputElement;
    if (input.value === "") {
      input.style.cssText = `border: 2px solid red;`;
    } else {
      input.style.cssText = `border: none;`;
      const city = input.value;
      input.value = "";
      this.setState({ city });
      this.getCityWeather();
      this.makeListCities();
      this.render();
    }
  }
  processingSelect() {
    const listHistory = document.querySelector("select") as HTMLSelectElement;
    const indexOption = listHistory.options.selectedIndex;
    const city = listHistory.options[indexOption].text;
    this.setState({ city });
    this.makeListCities();
    this.render();
  }
  async getCityName() {
    const url =
      "https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc";
    const response = await fetch(url);
    const cityName = await response.json();
    const latitude = cityName.latitude;
    const longitude = cityName.longitude;
    this.setState({ longitude, latitude });
  }
  async getCityWeather() {
    let url;
    const key = "880b285e49a17222d0198c80d0f24fe6";
    if (this.state.city) {
      url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.state.city}&lang=ru&appid=${key}`;
    } else {
      url =
        url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${this.state.latitude}&lon=${this.state.longitude}&lang=ru&appid=${key}`;
    }
    try {
      const weather = await fetch(url);
      if (weather.ok) {
        const cityWeather = await weather.json();
        let icon = await cityWeather.weather[0].icon;
        let temp = Math.round(await cityWeather.main.temp);
        let city = await cityWeather.name;
        this.setState({ icon, temp, city });
        return;
      } else throw new Error("Вы ввели некорректное имя города");
    } catch (e) {
      return alert(e);
    }
  }

  async findListCities() {
    const historySity = JSON.parse(localStorage.getItem("array") || "[]");
    this.setState({ historySity });
  }
  async makeListCities() {
    this.state.historySity.unshift(this.state.city);
    const historySity = Array.from(new Set(this.state.historySity));
    if (historySity.length >= 10) historySity.splice(10, 1);
    localStorage.setItem("array", JSON.stringify(historySity));
    this.setState({ historySity });
  }

  render(): void {
    this.el.innerHTML = template(
      `
        <section class="section-weather">
        <h1 class="weather-title">Приложение прогноз погоды</h1>
        <div class="weather">
          <div class="weather-map">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center={{city}}
          &zoom=9&size=300x300&&markers=size:mid%7Ccolor:0xFFFF00%7C{{city}}
          &key=AIzaSyC1MvMZAHW6121-ZR8zgEX3_kZPwxY8zME">
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
            <div class="weather-bottom-info">
            <h3 class="weather-bottom-info__city">{{city}}</h3>
            <p class="weather-bottom-info__informer">
            {{temp}} &degC</p>
            <img class="weather-bottom-info__image" 
            src="https://openweathermap.org/img/wn/{{icon}}.png" alt="weather">
            </div>
            </div>
            <div class="weather-info__item">
            <p class="weather-info__title"></p>
              <select class="weather-select">
               {{for historySity}}<option  class="select-item">{{historySity}}</option>{{endfor}}
              </select>
            </div>
          </div>
        </div>
      </section>
        `,
      this.state
    );
    this.subscribeEvents();
  }
}
