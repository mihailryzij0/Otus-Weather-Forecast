import {creatingListHistory} from "./creatingListHistory";

describe('creatingOptionsSelect', ()=> {
  let el;
  beforeEach(() => {
    el = document.createElement("ul");
    document.body.append(el);
  });
  afterEach(() => {
    document.querySelector("ul").innerHTML = null;
  });
  it('ddsfgds', ()=>{
      const cityList = ['Moskow', 'Kirov'];
      creatingListHistory(cityList);

      expect(document.querySelectorAll("li")[0].textContent).toBe('Moskow');
      expect(document.querySelectorAll("li")[1].textContent).toBe('Kirov')
  })
})