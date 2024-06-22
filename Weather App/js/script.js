const input_box = document.querySelector(".input-box")
const searchBtn = document.querySelector("#searchBtn")
const weather_body = document.querySelector(".weather-body")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const humidity = document.querySelector("#humidity")
const wind_speed = document.querySelector("#wind-speed")
const weather_img = document.querySelector(".weather-img")
const location_not_found = document.querySelector(".location-not-found")




function checkWeather(city) {
    const api_key = "398876a95d2fe8d2dd1ec495f6ca0ea2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    fetch(`${url}`)
        .then(y => y.json())
        .then(y => {

            if(y.cod === `404`){
                location_not_found.style.display = "flex";
                weather_body.style.display = "none";
                console.log("error");
                return;
            }
            console.log(y.weather[0].main)
            weather_body.style.display = "flex"
            location_not_found.style.display = "none";
            temperature.innerHTML = `${Math.round(y.main.temp - 273.15)}°C`
            description.innerHTML = `${y.weather[0].description}`
            humidity.innerHTML = `${y.main.humidity}`
            wind_speed.innerHTML = `${y.wind.speed}`
            console.log(y.cod)


           

            switch (y.weather[0].main) {
                case 'Smoke':
                    weather_img.src = "/img/mist.png"
                    break;
                case 'Clear':
                    weather_img.src = "/img/clear.png"
                    break;
                case 'Smoke':
                    weather_img.src = "/img/mist.png"
                    break;
                case 'Snow':
                    weather_img.src = "/img/snow.png"
                    break;
                case 'rain':
                    weather_img.src = "/img/rain.png"
                    break;
                case 'clouds':
                    weather_img.src = "/img/cloud.png"
                    break;

            }
           
        })
}
searchBtn.addEventListener('click', () => {
    checkWeather(input_box.value)

})