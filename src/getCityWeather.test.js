import {getCityWeather} from './getCityWeather';

describe("getCityWeather", () => {
   const originalFetch = global.fetch
   const city = "Moscow"; const temp = 4.11; const img = "13n";
   const weatherObj = { name: city, main: { temp, img } };
   const apKey = '1a5c5680e133ff4f8f7361b3bff271a3';
    beforeAll(() => {
        global.fetch = jest.fn(() =>
        Promise.resolve({ 
          ok: true,
          json: () => Promise.resolve(weatherObj) }));
      });
     afterAll(()=>{
       global.fetch = originalFetch
     })

    it("getCityWeather should return an object with weather values for the type number argument", async () => {
        const  lon = 35.2413;
               const lat = 35.2413;
         const urlLatAndLon = 
         `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&appid=${apKey}`;
  
      const resultLocation = await getCityWeather(lat, lon);
      expect(global.fetch).toHaveBeenCalledWith(urlLatAndLon);
      expect(resultLocation).toStrictEqual(weatherObj);
    });
    it("getCityWeather should return an object with weather values for the type string argument", async () => {
        const lat = 'Moskow';
        const urlCityName = 
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${lat}&lang=ru&appid=${apKey}`;
 
     const resultCityName = await getCityWeather(lat);
     expect(global.fetch).toHaveBeenCalledWith(urlCityName);
     expect(resultCityName).toStrictEqual(weatherObj);
   });

   it("getCityWeather should return an alert with the values error for an invalid argument", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ 
      ok: false,
      json: () => Promise.resolve(weatherObj) }));
    const alertSpy= jest.spyOn(window, "alert");
    await getCityWeather();
     expect(alertSpy).toHaveBeenCalledWith(new Error('Вы ввели некорректное имя города'));
  });
  });