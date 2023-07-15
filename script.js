// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// getWeatherData Function
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  // using template literals to create the url with the input (city) and the API key
  const BASE_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  // Weather Response Promise
  const weatherPromise = fetch(BASE_URL);
  // Return the weather response promise
  return weatherPromise.then((response) => {
    return response.json();
  })
}

// Search City Function
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  // Asynchronous code - First get the weather datat with "await"
  const data = await getWeatherData(city)
  // Show the weather data
  showWeatherData(data)
}

// Display data in DOM
const showWeatherData = (weatherData) => {
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
}