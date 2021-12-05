import {processingListHistory} from "./processingListHistory"

describe('', ()=>{
    let fn;
    let el;
    beforeEach(()=>{
          fn = jest.fn((a)=>a)
          el = document.createElement("div");
          document.body.append(el);
          el.innerHTML = ` <div class="weather-info__item">
          <ul class="weather-select" name="ul">
          <li>Moskow</li>
          <li>Kirov</li>
          <li>Sovetsk</li>
          </ul>
          <label for="weather-select">История поиска</label>
        </div>`
       
    })

    it("", async ()=>{
        processingListHistory(fn)
        const itemListHistory = el.querySelectorAll('li');
        itemListHistory[1].click();
        expect(fn).toHaveBeenCalledWith("Kirov");
    })



})