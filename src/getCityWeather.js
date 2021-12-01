
export async function getCityWeather(lat, lon){
    let url;
    const key = '1a5c5680e133ff4f8f7361b3bff271a3'
    if(typeof lat == "number"){
         url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&appid=${key}`;
    }else{
         url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${lat}&lang=ru&appid=${key}`;
    }
    const weather = await fetch(url)
    .then((resp)=> resp.json());
    return  weather 
}
