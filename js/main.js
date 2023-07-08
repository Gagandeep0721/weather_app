const API_KEY = `5212d8f7f9afcb9a2e08f5b6c2901081`;
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// GET WEATHER FROM API

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading..</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

// SHOW WEATHER IN APP

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2>City Not Found</h2>`;
        return;  
    
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} °C</h2>
            <h4>${data.weather[0].main}</h4>.
        </div>`
    
}    
       
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)