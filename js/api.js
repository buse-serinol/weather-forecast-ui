const API_KEY = "50bce54250a01bebb26f5d1a8d08ebf2";
//fonk. şehir ve birim bilgilerini parametre olarak alır. 
async function fetchWeatherData(city, units) {
    try{
const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
        );
        // console.log(response.json())
        // eğer istek başarılı değilse hata fırlat
        if(!response.ok){
            throw new Error("İstek başarılı değil") 
        }
        //API'den gelen yanıtı json formatına dönüştür ve geri döndür
        return response.json();
    }catch(error){
        console.log(error)
    }
}

export default fetchWeatherData;