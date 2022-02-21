import { WeatherForecast } from "./weatherForecast";

describe("showWeather", () => {
  let el: HTMLElement;
  const originalFetch = global.fetch;
  const apKey = "880b285e49a17222d0198c80d0f24fe6";
  const lon = 30.2618;
  const lat = 59.8983;
  const cityData = { latitude: lat, longitude: lon };
  const weatherObj = {
    name: "Moskow",
    main: {
      temp: 20,
    },
    weather: [{ icon: "23d" }],
  };

  function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  beforeAll(() => {
    global.fetch = jest.fn();
    el = document.createElement("div");
    document.body.append(el);
  });
  beforeEach(() => {
    global.fetch
      //@ts-ignore
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(cityData),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(weatherObj),
      });
  });

  afterAll(() => {
    const div = document.querySelector("div");
    if (div) {
      div.remove();
    }
    global.fetch = originalFetch;
  });
  it("checking the markup", async () => {
    new WeatherForecast(el);
    await sleep(500);
    const weather = el.querySelector(".weather-map");
    expect(weather).toBeTruthy();
  });
  it("checking requests during loading", async () => {
    new WeatherForecast(el);
    await sleep(500);
    expect(global.fetch).toHaveBeenNthCalledWith(
      1,
      "https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc"
    );
    expect(global.fetch).toHaveBeenNthCalledWith(
      2,
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&appid=${apKey}`
    );
    const weather = el.querySelector(".weather-map");
    expect(weather).toBeTruthy();
  });
  it("sending data to localStorage", async () => {
    const result = localStorage.getItem("array") as string;
    const storageArr = JSON.parse(result);
    expect(storageArr).toStrictEqual(["Moskow"]);
  });
  it("we get the value by clicking on the button", async () => {
    new WeatherForecast(el);
    await sleep(500);
    const input = el.querySelector("input") as HTMLInputElement;
    const button = el.querySelector("button") as HTMLButtonElement;
    input.value = "Киров";
    button.dispatchEvent(new Event("click"));
    expect(global.fetch).toHaveBeenNthCalledWith(
      3,
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Киров&lang=ru&appid=${apKey}`
    );
  });
  it("checking create options", async () => {
    new WeatherForecast(el);
    const select = el.querySelector("select") as HTMLSelectElement;
    expect(select.options[0].textContent).toBe("Киров");
    expect(select.options[1].textContent).toBe("Moskow");
  });
  it("we color the border input in red with the value ='' ", () => {
    new WeatherForecast(el);
    const input = el.querySelector("input") as HTMLInputElement;
    const button = el.querySelector("button") as HTMLButtonElement;
    input.value = "";
    button.dispatchEvent(new Event("click"));
    expect(input.style.border).toBe("2px solid red");
  });
});
