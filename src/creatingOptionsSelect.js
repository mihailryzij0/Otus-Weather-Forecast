
export async function creatingOptionsSelect(arr){
    const x = document.querySelector('select');
    x.innerHTML = `${arr
          .map((el, i) => `<option value= '${i}'>${el}</option>`).join('')}
          `
}
