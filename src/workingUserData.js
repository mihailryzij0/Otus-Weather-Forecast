import { getCityWeather } from "./getCityWeather";
import { findListCities, makeListCities } from "./processingLocalStorage";
import { creatWeatherBox } from "./creatWeatherBox";
import { creatingSelectOptions } from "./creatingSelectOptions";

export async function workingUserData(...coordinatesCity) {
  const weatherData = await getCityWeather(
    coordinatesCity[0],
    coordinatesCity[1]
  );
  const listCityName = findListCities();
  const newListCityName = makeListCities(listCityName, weatherData.name);
  creatingSelectOptions(newListCityName);
  console.log(weatherData);
  creatWeatherBox(weatherData);
}
