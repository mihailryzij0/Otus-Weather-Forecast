import {getCityWeather} from './getCityWeather';

describe("getCityWeather", () => {
    beforeAll(() => {
        global.fetch = jest.fn();
      });
      beforeEach(() => {
        fetch.mockClear();
      });

      const city = "Moscow", temp = 4.11, img = "13n";
      const weatherObj = { name: city, main: { temp, img } };
      const apKey = '1a5c5680e133ff4f8f7361b3bff271a3';
    it("getCityWeather should return an object with weather values for the type number argument", async () => {
        const  lon = 35.2413,
               lat = 35.2413;
         const urlLatAndLon = 
         `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&appid=${apKey}`;
      global.fetch.mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(weatherObj) })
      );
  
      const resultLocation = await getCityWeather(lat, lon);
      expect(global.fetch).toHaveBeenCalledWith(urlLatAndLon);
      expect(resultLocation).toStrictEqual(weatherObj);
    });
    it("getCityWeather should return an object with weather values for the type string argument", async () => {
        const lat = 'Moskow';
        const urlCityName = 
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${lat}&lang=ru&appid=${apKey}`;
     global.fetch.mockImplementation(() =>
       Promise.resolve({ json: () => Promise.resolve(weatherObj) })
     );
 
     const resultCityName = await getCityWeather(lat);
     expect(global.fetch).toHaveBeenCalledWith(urlCityName);
     expect(resultCityName).toStrictEqual(weatherObj);
   });
  });