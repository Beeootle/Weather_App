

export const getWeatherData = (search_name, api_key) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_name}&appid=${api_key}`)
       .then(res => res.json())
       .then(data => displayWeatherData(data));
}

export const displayWeatherData = (data) => {
    console.log(data);
    const weather_icon = document.getElementById('weather-icon');
    const weather_description = document.getElementById('weather-description');
    const weather_temperature = document.getElementById('weather-temperature');
    const weather_humidity = document.getElementById('weather-humidity');
    const weather_wind_speed = document.getElementById('weather-wind-speed');

    weather_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weather_description.textContent = data.weather[0].description;
    weather_temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    weather_humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

export const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                console.log(`Latitude: ${lat}, Longitude: ${lon}`);
            },
            (error) => {
                console.error('Error getting location: ', error);
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.log("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.log("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.log("The request to get user location timed out.");
                        break;
                    default:
                        console.log("An unknown error occurred.");
                        break;
                }
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
};



 
 



