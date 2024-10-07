function getWeather(cityName) {
  const apiKey = "5c1109abb18db33f9cd49688aa50a0b4"; // Your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(weatherData => {
      const description = weatherData.weather[0].description;
      let temperature = weatherData.main.temp;
      const humidity = weatherData.main.humidity;

      temperature = (temperature - 273.15).toFixed(2);

      const weatherInfo = document.getElementById("weather-info");
      const cityWeatherInfo = document.createElement("div");


      weatherInfo.innerHTML += `
        <h2>Weather forecast for ${cityName}:</h2>
        <p>Description: ${description}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>

      `;

    })
    .catch(error => {
      console.log(`Error occurred: ${error}`);
    });
}



