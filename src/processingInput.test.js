import {processingInput} from './processingInput'

describe("we get the value by clicking on the button", ()=>{
 let fn; let el; let input; let button;
    beforeAll(()=>{
          fn = jest.fn((a)=>a)
          el = document.createElement("div");
          document.body.append(el);
          el.innerHTML = ` <div class="weather-info__item">
         <form>
           <input class="weather-input"
            placeholder="Введите название город" type="text">
           <button class="weather-button">узнать погоду</button>
         </form>
         </div>`
          input = el.querySelector('input');
          button = el.querySelector('button'); 
    })
    it("we get the value by clicking on the button",()=>{    
        processingInput(fn);
        input.value = "Moskow";
        button.click();
        expect(fn).toHaveBeenCalledWith("Moskow");
    })
    it("we get the value by clicking on the button",()=>{     
        processingInput(fn);
        input.value = "";
        button.click();
        expect(input.style.border).toBe("2px solid red");
    })

})