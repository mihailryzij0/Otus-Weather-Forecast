import { getCityName } from "./getCityName";

describe("getCityName", () => {
  let cityNameObj;
  const originFetch = global.fetch;
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(cityNameObj),
      })
    );
  });
  afterAll(() => {
    global.fetch = originFetch;
  });

  it("getCityName return the object with the user's location", async () => {
    cityNameObj = {
      city: "Moskow",
      lon: 35.2413,
      lat: 35.2413,
    };

    const url =
      "https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc";

    const result = await getCityName();
    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(result).toStrictEqual(cityNameObj);
  });
});
