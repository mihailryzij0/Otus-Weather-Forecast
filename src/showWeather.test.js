import { showWeather } from "./showWeather";

describe("showWeather", () => {
  let el;
  const originalFetch = global.fetch;
  const apKey = "1a5c5680e133ff4f8f7361b3bff271a3";
  const lon = 30.2618;
  const lat = 59.8983;
  const cityData = { latitude: lat, longitude: lon };
  const weatherObj = {
    name: "Moscow",
    coord: { lon: 49.6601, lat: 58.5966 },
    main: {
      temp: 20,
    },
    weather: [{ icon: "23d" }],
  };

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  let storage;
  const storageSetItem = global.Storage.prototype.setItem;
  const storageGetItem = global.Storage.prototype.getItem;

  beforeAll(() => {
    global.fetch = jest.fn();
    el = document.createElement("div");
    document.body.append(el);
  });
  beforeEach(() => {
    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(cityData),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(weatherObj),
      });
    storage = {};
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      storage[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn((key) => storage[key] ?? "[]");
  });

  afterAll(() => {
    document.querySelector("html").innerHTML = null;
    global.fetch = originalFetch;
    global.Storage.prototype.setItem = storageSetItem;
    global.Storage.prototype.getItem = storageGetItem;
  });
  it("checking requests during loading", async () => {
    showWeather(el);
    await sleep(500);
    expect(global.fetch).toHaveBeenNthCalledWith(
      1,
      "https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc"
    );
    console.log(cityData);
    expect(global.fetch).toHaveBeenNthCalledWith(
      2,
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&appid=${apKey}`
    );
    const weather = el.querySelector(".weather-map");
    expect(weather).toBeTruthy();
  });
  it("checking requests during loading", async () => {
    showWeather(el);
    await sleep(500);
    const weather = el.querySelector(".weather-map");
    const infoBoxCity = el.querySelector(".weather-bottom-info__city");
    const infoBoxTemp = el.querySelector(".weather-bottom-info__informer");
    const infoBoxIcon = el.querySelector(".weather-bottom-info__image");
    expect(weather).toBeTruthy();
    expect(infoBoxCity).toBeTruthy();
    expect(infoBoxTemp).toBeTruthy();
    expect(infoBoxIcon).toBeTruthy();
  });
  it("checking requests during loading", async () => {
    showWeather(el);
    await sleep(500);
    expect(global.Storage.prototype.getItem).toHaveBeenCalledWith("array");
    expect(global.Storage.prototype.setItem).toHaveBeenCalledWith(
      "array",
      '["Moscow"]'
    );
  });

  it("checking requests during loading", async () => {
    showWeather(el);
    await sleep(500);
    const select = el.querySelector("select");
    expect(select.options[0].textContent).toBe("Moscow");
  });
});
