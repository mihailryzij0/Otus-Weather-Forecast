import {creatingOptionsSelect} from './creatingOptionsSelect'
export   function getDataLocalStorage(){
    let  arrStorage = JSON.parse(localStorage.getItem("array") || '[]');
     return arrStorage;
}
export  function setDataLocalStorage(items, cityData) {
    items.push(cityData);
    // const uniqueSet = new Set(items);
    const uniqueArrStorage = [...new Set(items)]
    if(uniqueArrStorage.length >= 10){
      uniqueArrStorage.splice(0, 1);
    };
    creatingOptionsSelect(uniqueArrStorage)
    localStorage.setItem('array' ,JSON.stringify(uniqueArrStorage));
}