import { creatWeatherBox } from "./creatWeatherBox";

describe("creatWeatherBox", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    el.innerHTML = `  
        <div class="weather">
          <div class="weather-map">
          </div>
            <div class="info" >
            </div>
        </div>
      `;
  });
  afterEach(() => {
    document.querySelector("div").innerHTML = null;
  });
  const cityData = {
    name: "Kirov",
    main: {
      temp: 20,
    },
    coord: { lon: 49.6601, lat: 58.5966 },
    weather: [{ icon: "23d" }],
  };
  it("creating a block with a map and weather", () => {
    creatWeatherBox(cityData);
    expect(document.querySelector(".weather-bottom-info")).toBeTruthy();
    expect(document.querySelector("img")).toBeTruthy();
  });
});
