import axios from 'axios';
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value;
    fetchWeather(city);
    // Call a function to fetch weather data
    
  });

const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e70331c0d69379507d425c4f7953dc70`);
      const data = response.data;
      // Display the weather data
      weatherInfo.innerHTML = `<p>Longitude: ${data.coord.lon}</p><p>Lattitude: ${data.coord.lat}</p><p>Temperature: ${data.main.temp} Celsius</p><p>Humidity: ${data.main.humidity}%
      <p>Minimum Temperature: ${data.main.temp_min}</p><p>Maximum temperature: ${data.main.temp_max} Celsius</p>
      <p>Visibility: ${data.visibility} m<p>`;
    } catch (error) {
      console.error(error);
    }
  };