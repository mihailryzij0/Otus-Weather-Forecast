import {creatingOptionsSelect} from "./creatingOptionsSelect";

describe('creatingOptionsSelect', ()=> {
  let el;
  beforeEach(() => {
    el = document.createElement("select");
    document.body.append(el);
  });
  afterEach(() => {
    document.querySelector("select").innerHTML = null;
  });
  it('ddsfgds', ()=>{
      const cityList = ['Moskow', 'Kirov'];
      creatingOptionsSelect(cityList);
      expect(document.querySelector("select").options[0].text).toBe('Moskow');
      expect(document.querySelector("select").options[1].text).toBe('Kirov')
  })
})