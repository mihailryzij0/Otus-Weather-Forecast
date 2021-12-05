import {processingInput} from './processingInput'

describe("we get the value by clicking on the button", ()=>{
 let fn;
 let el;
    beforeEach(()=>{
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

    })

    it("we get the value by clicking on the button",()=>{    
        const input = el.querySelector('input');
        const button = el.querySelector('button');    
        processingInput(fn, input, button);
        input.value = "Moskow";
        button.click();
        expect(fn).toHaveBeenCalledWith("Moskow");
    })
    it("we get the value by clicking on the button",()=>{    
        const input = el.querySelector('input');
        const button = el.querySelector('button');    
        processingInput(fn, input, button);
        input.value = "";
        button.click();
        expect(input.style.border).toBe("2px solid red");
    })
})