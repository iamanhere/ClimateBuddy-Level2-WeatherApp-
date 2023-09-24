const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "df9b5646850f9481a17cd830cb6e41d1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhg274WYHgnSu3PsYLzdhVMwjWRgKSDt2io9g6IrEFJZ45w1l9jv5Ii_ogoS3BS5P-nEmwzP9j2BTd4rIaA41QgPPiQdJBtHU8wuGvolFrcYLWtYKcc6AOAUkM8gitiHnos_939VfaPSe9RJMecm-jt9RjZk53rzXRlslTRTtMOfOrl3a1KvyghZsR0ujk/s16000/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYeQzOheP3IaNNNJgROAn5-vb687ze-KCrrpcBPPqh1c_uAdQAAPugtfOy9bs5YraSBv66mzvV8RrWBqA65dwu0w4waIXXRdJoht6LBkiq04ISLGnMXuic0AT4OYoM-B6A0iRtwy-bqci3womVxIvb_bnvvTrSHZgGhCedbMQ5OGWDFGmIGIL0yuuazXs/s16000/clear.png";
            break;
        case 'Rain':
            weather_img.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7N5xr5syZT6sk5ryKtTsEech53wsin_j6K1PZnEPTh_K20lHnvfjVr4q4SViQbE9qzZmHm60oDJMAooQXUqKaULGp17H9b7B2D8l52D0qOXxk1tjtQadQV6mHRROd-4_9y2oEGE7x8BWhLjfTeSSKUbq_-Pnz9S7G7JnYOUEeBe-UmPKQhsDXWTBZ2RI/s16000/rain.png";
            break;
        case 'Mist':
            weather_img.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkVpOHdQYsdZfbbVagEUMxvu8KwEAkeW3HZs87YM-qweOcKzO3tZu_HtMwjavJbONrdvqtaW7WKtH3lucgOC3gIGZpabhWXp7dWW2Xhczsx6bZilnYI6fwJSuqCzE_jxBMHxbGwaZ8kpZkNKXbGjpwKtt0tQUylZDEoeYSL5my-oUpT7wRhD5u3lyFiVk/s16000/mist.png";
            break;
        case 'Snow':
            weather_img.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCiR4u4iBO5oTHPSKeU-0m-BtP-WoEe_Drmr72FvVwSs9pZKD3fHhEtidEE6KgYDoyzOBjv5U_iL0iW522Zd4hNEqFDryE6j7zIxRvULXm6Z2DWBCrY0nN7q0ktF5kI8-u91bcNks8COgswhuuBKRFmnvMObYKZ6wIOEI1R-GR4Vre8uRrkr1xYtkpdOk/s16000/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
