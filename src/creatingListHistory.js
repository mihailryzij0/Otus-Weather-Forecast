
export async function creatingListHistory(listHistory){
    const boxListHistory = document.querySelector('ul');
    boxListHistory.innerHTML = `${listHistory
          .map((el) => `<li class="list-item">${el}</li>`).join('')}
          `
}
