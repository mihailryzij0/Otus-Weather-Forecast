import {creatingSelectOptions} from "./creatingSelectOptions";

describe('creatingOptionsSelect', ()=> {
  let el; let select;
  beforeEach(() => {
    el = document.createElement("select");
    document.body.append(el);
    select = document.querySelector("select");
    select.classList.add("weather-select");
  });
  afterEach(() => {
    document.querySelector("select").innerHTML = null;
  });
  it('option list is created in the select block based on an array', ()=>{
      const cityList = ['Moskow', 'Kirov'];
      creatingSelectOptions(cityList);
      expect(select.options[0].textContent).toBe('Moskow');
      expect(select.options[1].textContent).toBe('Kirov')
  })
})