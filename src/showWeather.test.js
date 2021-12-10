import { showWeather } from "./showWeather";

describe("showWeather",()=>{
  let el; let cityData;
  const originalFetch = global.fetch;
  const apKey = '1a5c5680e133ff4f8f7361b3bff271a3';


  beforeEach(() => {
    global.fetch = jest.fn();
    el = document.createElement("div");
    document.body.append(el);

    global.fetch
      .mockResolvedValueOnce({ json: () => Promise.resolve(cityData) })
      .mockResolvedValueOnce({ json: () => Promise.resolve() });
  });

  afterEach(() => {
    document.querySelector("html").innerHTML = null;
    global.fetch = originalFetch;
  });
    it('checking requests during loading', async ()=>{
        const lon = 30.2618;
        const lat = 59.8983;
        cityData = { latitude: lat, longitude: lon };
        await showWeather(el);
        const listHistory = el.querySelector('select');
         expect(listHistory).toBeTruthy()
    expect(global.fetch).toHaveBeenNthCalledWith(1,
        "https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc"
        );
    expect(global.fetch).toHaveBeenNthCalledWith(2,
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&appid=${apKey}`
        );
    })

})