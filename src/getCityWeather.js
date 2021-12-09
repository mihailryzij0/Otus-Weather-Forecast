
export async function getCityWeather(lat, lon){
          let url;
          const key = '1a5c5680e133ff4f8f7361b3bff271a3'
          if(typeof lat === "number"){
               url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&appid=${key}`;
          }else{
               url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${lat}&lang=ru&appid=${key}`;
          }
          try {
               const weather = await fetch(url);
               if(weather.ok){
                    const cityWeather = await weather.json();
                    return  cityWeather 
               }
              throw new Error('Вы ввели некорректное имя города')
          } catch (e){
               return alert (e)
          }
     
 
}
