import { getLocation } from './modules/utils.js'

let search_icon;
let search_input;
let search_results;
let search_name = 'Mombasa'
const api_key = '26657e3a70496e37ce919fe5e0067706'
let lat;
let lon;

// search_icon = document.getElementById('search-icon');
search_icon = document.querySelector('#search-icon');
search_input = document.getElementById('search-input');
search_name = document.querySelector('#search-name').value;
search_results = document.getElementById('search-results');


search_icon.addEventListener('click', () => {
    document.querySelector('#search-name').style.setProperty('display', 'none', 'important');
    search_input.style.setProperty('display', 'inline', 'important');
    document.querySelector('#close-icon').style.setProperty('display', 'inline', 'important');
    search_icon.style.setProperty('display', 'none', 'important');
})

document.querySelector('#close-icon').addEventListener('click', () => {
    document.querySelector('#search-name').style.setProperty('display', 'inline', 'important');
    search_input.style.setProperty('display', 'none', 'important');
    document.querySelector('#close-icon').style.setProperty('display', 'none', 'important');
    search_icon.style.setProperty('display', 'inline', 'important');
})


search_input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        search_name = event.target.value;
     getWeatherData(search_name, api_key);  
    }
})


document.addEventListener('DOMContentLoaded', () => {
    getWeatherData(search_name, api_key);
    setInterval(() => displayDate(), 1000)
});


function displayDate() {
    const date = new Date;
    const year = date.getFullYear();
    const month = date.getMonth()
    const day = date.getDate({ year: year, month: month });
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
   
    document.getElementById('date').textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    // console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`)
}


const getWeatherData = (search_name = 'Mombasa', api_key) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_name}&appid=${api_key}&units=metric`)
        .then(res => res.json())
        .then(data => displayWeatherData(data));
}

const displayWeatherData = (data) => {
    console.log(data);
    document.getElementById('description').textContent = data.weather[0].description
    document.getElementById('wind').textContent = `Wind: ${data.wind.speed}m/h`
    document.getElementById('temp').textContent = data.main.temp
    document.getElementById('country').textContent = data.name
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`
    document.getElementById('description').textContent = data.weather[0].description
    document.getElementById('description1').textContent = data.weather[0].description
    let weather_icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

