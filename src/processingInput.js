export function processingInput(fn){
  const input = document.querySelector(".weather-input");
  const button = document.querySelector(".weather-button");
    button.addEventListener('click', async (e) =>{
      e.preventDefault();
      if(input.value === ''){
         input.style.cssText = `border: 2px solid red;`
      }else{
        input.style.cssText = `border: none;`
        fn(input.value);
        input.value = '';
        
      }
    })
    }