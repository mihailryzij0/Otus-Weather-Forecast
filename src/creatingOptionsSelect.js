
export async function creatingOptionsSelect(arr){
    let x = document.querySelector('select');
    x.innerHTML = `${arr
          .map((el, i) => `<option value= '${i}'>${el}</option>`).join('')}
          `
}
