import {getCityName} from "./getCityName"

describe('getCityName', () => {
    beforeAll(() => {
        global.fetch = jest.fn();
      });
      beforeEach(() => {
        fetch.mockClear();
      });
    
  it("getCityName return the object with the user's location", async () => {
    const cityNameObj ={
        city: "Moskow",
        lon : 35.2413,
        lat : 35.2413
    }

    const url = 
    "https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc";
    global.fetch.mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve(cityNameObj) })
  );
   const result = await getCityName();
    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(result).toStrictEqual(cityNameObj);
  });

  })

  
  

  