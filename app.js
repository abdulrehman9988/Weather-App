const apikey="c4f123004428cd950c11f290187a28e5"
const URL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
let searchInput=document.querySelector("#searchInput");
let searchBtn=document.querySelector("#searchBtn")

async function checkWeather(city){
    const response=await fetch(URL + city + `&appid=${apikey}`)
    let data=await response.json()

    console.log(data);

    document.querySelector(".city").innerHTML=`${data.name}`
    document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp)}°c`
    document.querySelector(".humidity").innerHTML=`${data.main.humidity}%`
    document.querySelector(".wind").innerHTML=`${data.wind.speed} km/h`
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value)
})