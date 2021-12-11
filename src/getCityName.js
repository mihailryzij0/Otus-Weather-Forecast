export async function getCityName(){
    const url = 
    'https://api.ipdata.co/?api-key=d54d7b1516f326bdaabe2d09ac66f5ea172d0eff249bc2d634a5bbbc';
        const response = await fetch(url);
        const cityName = await response.json();
        return cityName
}

