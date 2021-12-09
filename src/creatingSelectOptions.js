
export async function creatingSelectOptions(listHistory){
    const select = document.querySelector('.weather-select');
    select.innerHTML = `${listHistory
          .map((el) => `<option class="list-item">${el}</option>`).join('')}
          `
}
