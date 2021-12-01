
import {creatingOptionsSelect} from './creatingOptionsSelect'
export  async function processingLocalStorage(cityData){
    let  arrStorage = JSON.parse(localStorage.getItem("array") || '[]');
    arrStorage.push(cityData);
    const uniqueSet = new Set(arrStorage);
    const uniqueArrStorage = [...uniqueSet]
    if(uniqueArrStorage.length >= 10){
      uniqueArrStorage.splice(0, 1);
    };
    creatingOptionsSelect(uniqueArrStorage);
    localStorage.setItem('array' ,JSON.stringify(uniqueArrStorage));
}