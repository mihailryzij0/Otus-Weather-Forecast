
export  async function processingSelect(fn){
    const listHistory = document.querySelector('select');
    listHistory.addEventListener('change', async () =>{
    const v = listHistory.options.selectedIndex;
    const txt = listHistory.options[v].text
    fn(txt);
    })
  }