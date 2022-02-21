import "./style/style.css";
import { WeatherForecast } from "./weatherForecast";

let el = document.querySelector("body") as HTMLElement;
new WeatherForecast(el);
