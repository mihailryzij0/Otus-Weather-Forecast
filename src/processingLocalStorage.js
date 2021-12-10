
export   function findListCities(){
    const  arrStorage = JSON.parse(localStorage.getItem("array") || '[]');
     return arrStorage;
}
export  function makeListCities(arrSitys, cityData) {
  arrSitys.unshift(cityData);
    const uniqueObj = new Set(arrSitys);
    const uniqueArr = [...uniqueObj]
    if(uniqueArr.length >= 10){
      uniqueArr.splice(10, 1);
    };
    localStorage.setItem('array' ,JSON.stringify(uniqueArr));
    return uniqueArr
}