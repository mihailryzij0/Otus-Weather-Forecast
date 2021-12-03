import{showWeather} from "./showWeather";

describe("showWeather",() =>{
    let el;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    showWeather(el);
  });
//   afterEach(() => {
//     document.querySelector("select").innerHTML = null;
//   });

  it('', ()=>{
    const input = el.querySelector("input");
    const button = el.querySelector("button");
    input.value = "Kirov";
    button.click();
    console.log(el.querySelector("select"))
    // expect(el.querySelector("option").textContent).toBe('Kirov');
  })
})