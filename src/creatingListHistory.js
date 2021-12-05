
export async function creatingListHistory(arr){
    const x = document.querySelector('ul');
    x.innerHTML = `${arr
          .map((el, i) => `<li value= '${i}'>${el}</li>`).join('')}
          `
}
