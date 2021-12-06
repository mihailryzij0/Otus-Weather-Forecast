
export   function findListCities(){
    const  arrStorage = JSON.parse(localStorage.getItem("array") || '[]');
     return arrStorage;
}
export  function makeListCities(items, cityData) {
  if(cityData != null && cityData !=undefined){
    items.push(cityData);
  }
    const uniqueObj = new Set(items);
    const uniqueArr = [...uniqueObj]
    if(uniqueArr.length >= 10){
      uniqueArr.splice(10, 1);
    };
    localStorage.setItem('array' ,JSON.stringify(uniqueArr));
    return uniqueArr
}