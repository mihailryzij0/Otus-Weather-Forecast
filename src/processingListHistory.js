
export  async function processingListHistory(fn){
    const listHistory = document.querySelector('ul');
    listHistory.addEventListener('click', async (e) =>{
    fn(e.target.textContent);
    })
  }