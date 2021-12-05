
export async function creatingListHistory(arr){
    const x = document.querySelector('ul');
    x.innerHTML = `${arr
          .map((el, i) => `<li class="list-item" value= '${i}'>${el}</li>`).join('')}
          `
}
